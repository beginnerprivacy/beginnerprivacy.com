function getEntropy(password) {
  let pool = 0;
  if (/[a-z]/.test(password)) pool += 26;
  if (/[A-Z]/.test(password)) pool += 26;
  if (/\d/.test(password)) pool += 10;
  if (/[^A-Za-z0-9]/.test(password)) pool += 32;

  if (pool === 0) return 0;

  return password.length * Math.log2(pool);
}

function getStrength(entropyBits) {
  if (entropyBits < 28) return { label: window.translations.veryWeak, score: 20 };
  if (entropyBits < 36) return { label: window.translations.weak, score: 40 };
  if (entropyBits < 60) return { label: window.translations.moderate, score: 60 };
  if (entropyBits < 80) return { label: window.translations.strong, score: 80 };
  return { label: window.translations.veryStrong, score: 100 };
}

function formatTime(seconds) {
  if (seconds < 1) return `< 1 ${window.translations.seconds}`;
  if (seconds < 60) return `${Math.round(seconds)} ${window.translations.seconds}`;
  if (seconds < 3600) return `${Math.round(seconds / 60)} ${window.translations.minutes}`;
  if (seconds < 86400) return `${Math.round(seconds / 3600)} ${window.translations.hours}`;
  if (seconds < 31536000) return `${Math.round(seconds / 86400)} ${window.translations.days}`;

  const years = seconds / 31536000;
  if (years < 100) return `${Math.round(years)} ${window.translations.years}`;
  if (years < 1000) return `${Math.round(years / 100)} ${window.translations.centuries}`;

  return window.translations.millennias;
}

function updateUI() {
  const password = document.getElementById("password-input").value;
  const hashRate = Number(document.getElementById("hash-rate").value);

  if (!password) {
    document.getElementById("crack-time").textContent = "-";
    document.getElementById("strength-text").textContent = "-";
    document.getElementById("strength-bar").value = 0;
    return;
  }

  const entropy = getEntropy(password);
  const guesses = Math.pow(2, entropy);
  const seconds = guesses / hashRate;

  const strength = getStrength(entropy);

  document.getElementById("crack-time").textContent = formatTime(seconds);
  document.getElementById("strength-text").textContent = strength.label;
  document.getElementById("strength-bar").value = strength.score;
}

function togglePassword() {
  const input = document.getElementById("password-input");
  const btn = document.getElementById("toggle-btn");

  if (input.type === "password") {
    input.type = "text";
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/></svg>`;
    btn.setAttribute("aria-pressed", "true");
    btn.setAttribute("aria-label", "Hide password");
  } else {
    input.type = "password";
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>`;
    btn.setAttribute("aria-pressed", "false");
    btn.setAttribute("aria-label", "Show password");  
  }

  input.focus();
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("password-input").addEventListener("input", updateUI);
  document.getElementById("hash-rate").addEventListener("change", updateUI);
});