// FAQ
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    let answer = button.nextElementSibling;
    let arrow = button.querySelector('.arrow');

    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      arrow.style.transform = 'rotate(0deg)';
    } else {
      document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
      document.querySelectorAll('.faq-question .arrow').forEach(arr => arr.style.transform = 'rotate(0deg)');

      answer.style.display = 'block';
      arrow.style.transform = 'rotate(45deg)';
    }
  });
});

// IP Address Lookup
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.href.includes("/ip-address-lookup")) {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        document.getElementById('city').textContent = data.city;
        document.getElementById('region').textContent = data.city;
        document.getElementById('country').textContent = data.country_name;
        document.getElementById('asn').textContent = data.asn;
        document.getElementById('org').textContent = data.org;

        const lat = data.latitude;
        const lon = data.longitude;

        const map = L.map('map-container').setView([lat, lon], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([lat, lon]).addTo(map)
          .bindPopup(`<b>Your Location</b><br>${data.city}, ${data.country_name}`)
          .openPopup();
      })
      .catch(error => {
        console.error('Error fetching IP data:', error);
        document.getElementById('city').textContent = 'Unknown';
        document.getElementById('region').textContent = 'Unknown';
        document.getElementById('country').textContent = 'Unknown';
        document.getElementById('asn').textContent = 'Unknown';
        document.getElementById('org').textContent = 'Unknown';
      });
    fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => {
        document.getElementById('ipv4-address').textContent = data.ip;
      })
      .catch(error => {
        console.error('Error fetching IPv4 data:', error);
        document.getElementById('ipv4-address').textContent = window.translations.notDetected;
      });
    fetch('https://api6.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => {
        document.getElementById('ipv6-address').textContent = data.ip;
      })
      .catch(error => {
        console.error('Error fetching IPv6 data:', error);
        document.getElementById('ipv6-address').textContent = window.translations.notDetected;
      });
  }
})

// URL Unshortener
const ENDPOINT = "https://bqycdoffljeycomlkgye.supabase.co/functions/v1/url-unshortener";
const AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxeWNkb2ZmbGpleWNvbWxrZ3llIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1NDE5ODgsImV4cCI6MjA4NjExNzk4OH0.tZzc8Cjvl1z5ZvFI0jWzAijtjjgRcOe3jWFZfOA-jHE";

const btn = document.getElementById("unshorten-btn");
const input = document.getElementById("url-input");
const area = document.getElementById("result-area");

function faviconFor(url){
  try {
    const u = new URL(url);
    return `https://icons.duckduckgo.com/ip3/${u.hostname}.ico`;
  } catch {
    return "";
  }
}

function el(tag, cls, html){
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
}

function render(data){
  area.innerHTML = "";

  const finalUrl = data.finalUrl || "";

  const finalBox = el("div", "final-box");
  const fav = el("div", "final-favicon");
  fav.innerHTML = `<img src="${faviconFor(finalUrl)}" alt="">`;

  const info = el("div", "final-info");
  info.innerHTML = `
    <div class="label">Final URL</div>
    <div class="url"><a href="${finalUrl}" target="_blank" rel="noopener noreferrer nofollow">${finalUrl}</a></div>
  `;

  finalBox.appendChild(fav);
  finalBox.appendChild(info);
  area.appendChild(finalBox);

  const chain = Array.isArray(data.chain) ? data.chain : [];
  if (chain.length) {
    const dropdown = el("div", "chain-dropdown");

    const toggle = el("button", "chain-toggle", "Show Redirect Chain");
    const list = el("div", "chain-list");
    list.style.display = "none";

    toggle.onclick = () => {
      const open = list.style.display === "block";
      list.style.display = open ? "none" : "block";
      toggle.textContent = open ? "Show Redirect Chain" : "Hide Redirect Chain";
    };

    chain.forEach(hop => {
      const item = el("div", "chain-item");

      const fav2 = el("div", "chain-favicon");
      const toUrl = hop.to || hop.url || hop.from || "";
      const fromUrl = hop.from || "";
      fav2.innerHTML = `<img src="${faviconFor(toUrl || fromUrl)}" alt="">`;

      const info2 = el("div", "chain-info");

      const statusClass =
        hop.status >= 200 && hop.status < 300 ? "status-ok" :
        hop.status >= 300 && hop.status < 400 ? "status-warn" :
        "status-err";

      const status = el("div", `chain-status ${statusClass}`, hop.status || hop.type);

      const fromto = el("div", "chain-fromto", `
        <div><strong>From:</strong> <a href="${fromUrl}" target="_blank" rel="noopener noreferrer nofollow">${fromUrl}</a></div>
        <div><strong>To:</strong> <a href="${toUrl}" target="_blank" rel="noopener noreferrer nofollow">${toUrl}</a></div>
      `);

      info2.appendChild(fromto);
      info2.appendChild(status);

      item.appendChild(fav2);
      item.appendChild(info2);
      list.appendChild(item);
    });

    dropdown.appendChild(toggle);
    dropdown.appendChild(list);
    area.appendChild(dropdown);
  }
}

if (btn) {
  btn.onclick = async () => {
    const url = input.value.trim();
    if (!url) return;

    btn.disabled = true;
    btn.textContent = window.translations.resolvingBtnText;
    area.innerHTML = "";

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": AUTH
        },
        body: JSON.stringify({ url })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");

      render(data);

    } catch (err) {
      area.innerHTML = `<div class="panel">Error: ${err.message}</div>`;
    }

    btn.disabled = false;
    btn.textContent = window.translations.unshortenBtnText;
  };

  input.addEventListener("keydown", e => {
    if (e.key === "Enter") btn.click();
  });
}