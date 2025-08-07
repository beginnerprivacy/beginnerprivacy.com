document.addEventListener("DOMContentLoaded", function() {
    function showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
            const overlay = document.querySelector('.overlay');
            const navoverlay = document.querySelector('.nav-overlay');
            overlay.style.display = 'block';
            navoverlay.style.display = 'block';
        }
    }

    const modalId = getQueryParam('m');
    if (modalId) {
        showModal(modalId);
    }

    const checklistCards = document.querySelectorAll('.checklist-card');
    checklistCards.forEach(card => {
        card.addEventListener('click', function(event) {
            event.preventDefault();
            const href = card.getAttribute('href');
            const modalIdFromHref = new URLSearchParams(href.split('?')[1]).get('m');
            if (modalIdFromHref) {
                showModal(modalIdFromHref);
            }
        });
    });
});

function fireConfetti() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles = [];
    const particleCount = 300;
  
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    canvas.width = width;
    canvas.height = height;
    document.body.appendChild(canvas);
  
    class Confetti {
      constructor() {
        this.x = Math.random() * width;
        this.y = height;
        this.angle = Math.random() * Math.PI * 2;
        this.tilt = Math.random() * Math.PI * 2;
        this.tiltAngle = (Math.random() - 0.5) * 0.2;
        this.vx = (Math.random() - 0.5) * 8;
        this.vy = Math.random() * -25 - 15;
        this.friction = 0.92;
        this.gravity = 0.7;
        this.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
        this.width = Math.random() * 8 + 4;
        this.height = Math.random() * 3 + 1;
        this.life = 0;
        this.maxLife = Math.random() * 150 + 100;
      }
      
      update() {
        this.vy += this.gravity;
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.x += this.vx;
        this.y += this.vy;
        this.tilt += this.tiltAngle;
        this.life++;
      }
      
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.tilt);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
        ctx.restore();
      }
    }
  
    for(let i = 0; i < particleCount; i++) {
      particles.push(new Confetti());
    }
  
    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        
        if(particle.life >= particle.maxLife || 
           particle.x < -50 || 
           particle.x > width + 50 || 
           particle.y > height + 100) {
          particles.splice(index, 1);
        }
      });
      
      if(particles.length > 0) {
        requestAnimationFrame(animate);
      } else {
        canvas.remove();
      }
    }
    animate();
  }

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.checklist-checkbox').forEach(checkbox => {
        const id = checkbox.id;
        const savedState = localStorage.getItem(id);
        if (savedState === 'true') {
            checkbox.checked = true;
        }

        checkbox.addEventListener('change', function() {
            localStorage.setItem(id, checkbox.checked);

            document.querySelectorAll(`#${id}`).forEach(cb => {
              cb.checked = checkbox.checked;
            });
            
            const modalId = getQueryParam('m');
            const card = document.getElementById(modalId);
            if (card) {
                const checkboxesInCard = card.querySelectorAll('.checklist-checkbox');
                const allChecked = Array.from(checkboxesInCard).every(cb => cb.checked);
                if (allChecked) {
                    fireConfetti();
                }
            }
        });
    });
});

// Carousel for checklists on homepage
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
        }, { passive: false });

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