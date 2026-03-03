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