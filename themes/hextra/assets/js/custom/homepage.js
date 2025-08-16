const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

const navOverlay = document.createElement('div');
navOverlay.className = 'nav-overlay';
const navContainer = document.querySelector('.nav-container');
navContainer.appendChild(navOverlay);

// Scroll down to common misconceptions section
function scrollMisconceptions() {
  const commonMisconceptionsId = document.getElementById('common-misconceptions');
  if (commonMisconceptionsId) {
    commonMisconceptionsId.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

const roadmapId = document.getElementById('roadmap');
function scrollDown() {
  if (roadmapId) {
    roadmapId.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Spread the word button
function toggleShareDropdown() {
  const dropdown = document.getElementById("shareDropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

document.addEventListener('click', function(e) {
  const dropdown = document.getElementById("shareDropdown");
  const dropdownButton = document.querySelector(".shareDropdownButton");
  if (dropdown) {
    if (dropdown.style.display === "block" && !dropdown.contains(e.target) && !dropdownButton.contains(e.target)) {
      dropdown.style.display = "none";
    }
  }
});