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
      ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Confetti());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((particle, index) => {
      particle.update();
      particle.draw();

      if (particle.life >= particle.maxLife ||
        particle.x < -50 ||
        particle.x > width + 50 ||
        particle.y > height + 100) {
        particles.splice(index, 1);
      }
    });

    if (particles.length > 0) {
      requestAnimationFrame(animate);
    } else {
      canvas.remove();
    }
  }
  animate();
}

// Checklists Progress
function getChecklistsProgress() {
    let progress = localStorage.getItem('checklists-progress');
    if (!progress) {
        progress = '{"checkedBoxes":[]}';
        localStorage.setItem('checklists-progress', progress);
    }
    return JSON.parse(progress);
}

function saveChecklistsProgress(progress) {
    localStorage.setItem('checklists-progress', JSON.stringify(progress));
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.checklist-checkbox').forEach(checkbox => {
    const id = checkbox.id;
    const progress = getChecklistsProgress();
    if (progress.checkedBoxes.includes(id)) {
      checkbox.checked = true
    }

    checkbox.addEventListener('change', function() {
      let progress = getChecklistsProgress();
      if (checkbox.checked) {
        if (!progress.checkedBoxes.includes(id)) {
          progress.checkedBoxes.push(id);
        }
      } else {
        progress.checkedBoxes = progress.checkedBoxes.filter(taskId => taskId !== id);
      }
      saveChecklistsProgress(progress);

      const checkboxesAll = document.querySelectorAll('.checklist-checkbox');
      const allChecked = Array.from(checkboxesAll).every(cb => cb.checked);
      if (allChecked) {
        fireConfetti();
      }
    });
  });
});