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