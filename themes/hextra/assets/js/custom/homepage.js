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

// Checklists Carousel
(() => {
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    const track = carousel.querySelector('.carousel-track');
    const items = Array.from(track.children);
    const prevBtn = document.querySelector('.carousel-button.prev');
    const nextBtn = document.querySelector('.carousel-button.next');

    let currentIndex = 0;
    let isDragging = false;
    let dragStartX = 0;
    let dragCurrentX = 0;

    const extraWidth = 185;

    function getItemWidth() {
      const style = getComputedStyle(items[0]);
      const marginRight = Math.round(parseFloat(style.marginRight) || 0);
      const marginLeft = Math.round(parseFloat(style.marginLeft) || 0);
      return Math.round(items[0].offsetWidth + marginLeft + marginRight);
    }

    function visibleCount() {
      return Math.floor(carousel.offsetWidth / getItemWidth());
    }

    function totalItemsWidth() {
      return items.reduce((acc, item) => {
        const style = getComputedStyle(item);
        const marginRight = parseFloat(style.marginRight) || 0;
        const marginLeft = parseFloat(style.marginLeft) || 0;
        return acc + item.offsetWidth + marginLeft + marginRight;
      }, 0);
    }

    function updateTrackWidth() {
      const width = totalItemsWidth() + extraWidth;
      track.style.width = `${width}px`;
    }

    function maxTranslateX() {
      const trackWidth = parseFloat(track.style.width) || totalItemsWidth();
      const containerWidth = carousel.offsetWidth;
      const maxTx = trackWidth - containerWidth;
      return maxTx > 0 ? maxTx : 0;
    }

    function updateCarousel() {
      const itemWidth = getItemWidth();
      const maxIndex = Math.max(items.length - visibleCount(), 0);

      if (currentIndex < 0) currentIndex = 0;
      if (currentIndex > maxIndex) currentIndex = maxIndex;

      let translateX = currentIndex * itemWidth;

      if (translateX > maxTranslateX()) {
        translateX = maxTranslateX();
        currentIndex = Math.round(translateX / itemWidth);
      }

      track.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      track.style.transform = `translateX(${-translateX + 35}px)`;
    }

    function moveNext() {
      currentIndex++;
      updateCarousel();
    }

    function movePrev() {
      currentIndex--;
      updateCarousel();
    }

    function onDragStart(pageX) {
      isDragging = true;
      dragStartX = pageX;
      dragCurrentX = pageX;
      track.style.transition = 'none';
    }

    function onDragMove(pageX) {
      if (!isDragging) return;

      dragCurrentX = pageX;
      const dragDistance = dragCurrentX - dragStartX;
      const itemWidth = getItemWidth();
      const maxTx = maxTranslateX();

      let translateX = currentIndex * itemWidth - dragDistance;

      if (translateX < 0) {
        translateX = translateX / 3;
      } else if (translateX > maxTx) {
        translateX = maxTx + (translateX - maxTx) / 3;
      }

      track.style.transform = `translateX(${-translateX}px)`;
    }

    function onDragEnd() {
      if (!isDragging) return;
      isDragging = false;

      const dragDistance = dragCurrentX - dragStartX;
      const itemWidth = getItemWidth();
      let newIndex = currentIndex - Math.round(dragDistance / itemWidth);
      const maxIndex = Math.max(items.length - visibleCount(), 0);

      newIndex = Math.min(Math.max(newIndex, 0), maxIndex);
      currentIndex = newIndex;

      updateCarousel();
    }

    carousel.addEventListener('mousedown', e => {
      e.preventDefault();
      onDragStart(e.pageX);
    });
    window.addEventListener('mouseup', e => {
      onDragEnd();
    });
    window.addEventListener('mousemove', e => {
      if (!isDragging) return;
      e.preventDefault();
      onDragMove(e.pageX);
    });

    carousel.addEventListener('touchstart', e => {
      onDragStart(e.touches[0].pageX);
    });
    window.addEventListener('touchend', e => {
      onDragEnd();
    });
    window.addEventListener('touchmove', e => {
      if (!isDragging) return;
      onDragMove(e.touches[0].pageX);
    }, {
      passive: false
    });

    prevBtn.addEventListener('click', movePrev);
    nextBtn.addEventListener('click', moveNext);

    window.addEventListener('resize', () => {
      const maxIndex = Math.max(items.length - visibleCount(), 0);
      if (currentIndex > maxIndex) currentIndex = maxIndex;
      updateCarousel();
      updateTrackWidth();
    });

    updateTrackWidth();
    updateCarousel();
  }
})();