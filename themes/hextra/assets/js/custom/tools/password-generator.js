const wordListPath = "/json/eff_large_wordlist.txt";
let wordList = [];

let currentTab = 0;
let currentPassword = "";
let currentSeparator = "-";

function switchTab(n) {
    currentTab = n;
    document.querySelectorAll('.tab-button').forEach((el, i) => {
        el.classList.toggle('active', i === n);
    });
    document.getElementById('options-0').classList.toggle('hidden', n !== 0);
    document.getElementById('options-1').classList.toggle('hidden', n !== 1);
    document.getElementById('options-2').classList.toggle('hidden', n !== 2);
    generatePassword();
}

function updateSlider(tab) {
    const val = document.getElementById(`length-${tab}`).value;
    document.getElementById(`length-val-${tab}`).textContent = val;
    generatePassword();
}

function updateWords() {
    const val = document.getElementById('length-1').value;
    document.getElementById('words-val').textContent = val;
    generatePassword();
}

function setSep(btn, sep) {
    currentSeparator = sep;
    document.querySelectorAll('.sep-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    generatePassword();
}

function randomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
}

function generateStandard() {
    let len = parseInt(document.getElementById('length-0').value);
    let chars = '';
    if (document.getElementById('lower').checked) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (document.getElementById('upper').checked) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (document.getElementById('numbers').checked) chars += '0123456789';
    if (document.getElementById('symbols').checked) chars += '!@#$%^&*()_+-=[]{}|;:",.<>/?';
    if (!chars) chars = 'abcdefghijklmnopqrstuvwxyz';

    let pwd = '';
    for (let i = 0; i < len; i++) {
        pwd += randomChar(chars);
    }
    return pwd;
}

function generatePassphrase() {
    let count = parseInt(document.getElementById('length-1').value);
    let cap = document.getElementById('cap').checked;
    let addNum = document.getElementById('add-num').checked;

    let words = [];
    for (let i = 0; i < count; i++) {
        let w = wordList[Math.floor(Math.random() * wordList.length)];
        if (cap) w = w.charAt(0).toUpperCase() + w.slice(1);
        words.push(w);
    }

    let phrase = words.join(currentSeparator);

    if (addNum) {
        const randomIndex = Math.floor(Math.random() * words.length);
        const randomNumber = Math.floor(Math.random() * 99);
        words[randomIndex] += randomNumber;
        
        phrase = words.join(currentSeparator);
    }

    return phrase;
}

fetch(wordListPath)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        wordList = data.split('\n');
        generatePassword();
    })
    .catch(error => {
        console.error('Error loading wordlist:', error);
    });

function generateCode() {
    let len = parseInt(document.getElementById('length-2').value);
    let pool = '';

    pool = '0123456789';

    let code = '';
    for (let i = 0; i < len; i++) {
        code += randomChar(pool);
    }
    return code;
}

function entropy(password) {
    if (currentTab === 1) {
        const wordCount = password.split(/[\s_-]/).length;
        return wordCount * Math.log2(7776);
    }

    let pool = 0;
    if (/[a-z]/.test(password)) pool += 26;
    if (/[A-Z]/.test(password)) pool += 26;
    if (/\d/.test(password)) pool += 10;
    if (/[^A-Za-z0-9]/.test(password)) pool += 32;

    if (pool === 0) pool = 62;

    return password.length * Math.log2(pool);
}

function formatCrackTime(entropyBits) {
    const guessesPerSec = 1e12;
    
    let seconds = Math.pow(2, entropyBits) / guessesPerSec;

    if (seconds < 60) return formatTime(seconds, window.translations.seconds);
    if (seconds < 3600) return formatTime(seconds / 60, window.translations.minutes);
    if (seconds < 86400) return formatTime(seconds / 3600, window.translations.hours);
    if (seconds < 31536000) return formatTime(seconds / 86400, window.translations.days);
    
    const years = seconds / 31536000;
    if (years < 100) return Math.round(years) + ` ${window.translations.years}`;
    return window.translations.centuries;
}

function formatTime(value, unit) {
    if (unit === window.translations.seconds && value < 1) {
        return `< 1 ${window.translations.seconds}`;
    }
    if (unit === window.translations.minutes && value < 1) {
        return `< 1 ${window.translations.minutes}`;
    }
    return `${Math.round(value)} ${unit}`;
}

function updateCrackTime(password) {
    const bits = entropy(password);
    const timeStr = formatCrackTime(bits);
    document.getElementById('crack-time').textContent = `${timeStr}`;
}

function generatePassword() {
    let pwd = '';
    if (currentTab === 0) pwd = generateStandard();
    else if (currentTab === 1) pwd = generatePassphrase();
    else pwd = generateCode();

    currentPassword = pwd;
    document.getElementById('password-box').textContent = pwd;
    updateCrackTime(pwd);
}

function copyPassword() {
    if (!currentPassword) return;

    navigator.clipboard.writeText(currentPassword).then(() => {
        const toast = document.getElementById('toast');
        toast.classList.remove('show', 'hidden');
        void toast.offsetWidth;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
            toast.addEventListener('transitionend', function handler(e) {
                if (e.propertyName === 'opacity') {
                    toast.classList.add('hidden');
                    toast.removeEventListener('transitionend', handler);
                }
            }, { once: true });
        }, 2200);
    })
}

function addListeners() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => cb.addEventListener('change', generatePassword));
}

window.onload = function() {
    addListeners();
    switchTab(0);

    document.getElementById('length-0').value = '16';
    document.getElementById('length-1').value = '5';
    document.getElementById('length-2').value = '6';

    generatePassword();
};