function updateRoadmap() {
  const sections = document.querySelectorAll('.roadmap-section');
  sections.forEach(section => section.style.display = 'none');

  const selectedTabInput = document.querySelector('input[name="tabs"]:checked');
  if (selectedTabInput) {
      const selectedTab = selectedTabInput.value;
      const contentElement = document.getElementById(selectedTab + 'Content');
      
      if (contentElement) {
          contentElement.style.display = 'block';
      }

      const selectedLabel = document.querySelector(`label[for="radio-${selectedTab}"]`);
      const glider = document.querySelector('.glider');
      
      if (selectedLabel && glider) {
          const labelRect = selectedLabel.getBoundingClientRect();
          const tabsRect = document.querySelector('.tabs')?.getBoundingClientRect();

          if (tabsRect) {
              glider.style.width = `${labelRect.width}px`;
              const verticalOffset = labelRect.top - tabsRect.top;
              glider.style.transform = `translate(${labelRect.left - tabsRect.left}px, ${verticalOffset}px)`;
          }
      }
  }
}
window.onload = updateRoadmap;

// Roadmap modals
function handleModalParam() {
  const params = new URLSearchParams(window.location.search);
  const modalID = params.get('m');
  
  document.querySelectorAll('.roadmap-modal').forEach(modal => {
    modal.style.display = 'none';
  });
  
  if (modalID) {
    const modal = document.getElementById(modalID);
    if (modal) {
      const parentSection = modal.closest('.roadmap-section');

      if (parentSection) {
        const tabName = parentSection.id.replace('Content', '');
        const tabInput = document.querySelector(`input[name="tabs"][value="${tabName}"]`);

        if (tabInput) {
          tabInput.checked = true;
          updateRoadmap();
          modal.style.display = 'block';
          const overlay = document.querySelector('.overlay')
          const navoverlay = document.querySelector('.nav-overlay')
          overlay.style.display = 'block';
          navoverlay.style.display = 'block';
        }
      }
    }
  }
}

function closeRoadmapModal() {
  const params = new URLSearchParams(window.location.search);
  const modalID = params.get('m');
  const url = new URL(window.location);
  url.searchParams.delete('m');
  window.history.replaceState({}, '', url);
  document.getElementById(modalID).style.display = 'none';
  const overlay = document.querySelector('.overlay')
  const navoverlay = document.querySelector('.nav-overlay')
  overlay.style.display = 'none';
  navoverlay.style.display = 'none';
  return false;
}

document.querySelectorAll('a[href^="?m="]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const modalID = new URL(this.href).searchParams.get('m');
    const url = new URL(window.location);
    url.searchParams.set('m', modalID);
    window.history.pushState({}, '', url);
    handleModalParam();
  });
});

document.querySelectorAll('.roadmap-modal-close').forEach(btn => {
  btn.onclick = () => {
    closeRoadmapModal();
  };
});

document.querySelectorAll('.overlay, .nav-overlay').forEach(overlay => {
  overlay.onclick = () => {
    closeRoadmapModal();
  }
});

window.addEventListener('popstate', handleModalParam);
document.addEventListener('DOMContentLoaded', handleModalParam);

function previousRoadmapModal() {
  const params = new URLSearchParams(window.location.search);
  const currentModalID = params.get('m');
  const modals = document.querySelectorAll('.roadmap-modal');
  let currentIndex = -1;

  modals.forEach((modal, index) => {
    if (modal.id === currentModalID) {
      currentIndex = index;
    }
  });

  while (currentIndex > 0) {
    const previousModal = modals[currentIndex - 1];
    const previousModalID = previousModal.id;

    if (previousModalID !== 'something-missing-contribute') {
      const url = new URL(window.location);
      url.searchParams.set('m', previousModalID);
      window.history.pushState({}, '', url);
      handleModalParam();
      break;
    }
    currentIndex--;
  }
}

function nextRoadmapModal() {
  const params = new URLSearchParams(window.location.search);
  const currentModalID = params.get('m');
  const modals = document.querySelectorAll('.roadmap-modal');
  let currentIndex = -1;

  modals.forEach((modal, index) => {
    if (modal.id === currentModalID) {
      currentIndex = index;
    }
  });

  while (currentIndex < modals.length - 1) {
    const nextModal = modals[currentIndex + 1];
    const nextModalID = nextModal.id;

    if (nextModalID !== 'something-missing-contribute') {
      const url = new URL(window.location);
      url.searchParams.set('m', nextModalID);
      window.history.pushState({}, '', url);
      handleModalParam();
      break;
    }
    currentIndex++;
  }
}

// Checkbox
function markAsDone(id) {
  const checkbox = document.getElementById(`roadmap-${id}`);
  if (!checkbox) return;

  const isChecked = checkbox.getAttribute('aria-checked') === 'true';
  checkbox.setAttribute('aria-checked', !isChecked);

  updateStatus(checkbox);
  localStorage.setItem(`roadmap-${id}`, checkbox.getAttribute('aria-checked'));
}

function updateStatus(checkbox) {
  const id = checkbox.id.replace('roadmap-', '');
  const button = document.getElementById(`mark-done-${id}`);
  const icon = document.getElementById(`status-icon-${id}`);
  const todoIcon = document.getElementById(`todo-icon-${id}`);
  const doneIcon = document.getElementById(`done-icon-${id}`);

  if (!button || !icon || !todoIcon || !doneIcon) return;

  const isChecked = checkbox.getAttribute('aria-checked') === 'true';
  const isSpanish = window.location.href.includes('/es/');
  const isChinese = window.location.href.includes('/zh-cn/');
  if (isSpanish) {
    button.textContent = isChecked ? 'Marcar como pendiente' : 'Marcar como hecho';
  }
  else if (isChinese) {
    button.textContent = isChecked ? '标记为待办事项' : '标记为完成';
  }
  else {
    button.textContent = isChecked ? 'Mark as to do' : 'Mark as done';
  }

  icon.style.color = isChecked ? '#008d0c' : '#9CA3AF';
  todoIcon.classList.toggle('hx-hidden', isChecked);
  doneIcon.classList.toggle('hx-hidden', !isChecked);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.roadmap-checkbox div').forEach(checkbox => {
    const id = checkbox.id;
    const savedState = localStorage.getItem(id);
    if (savedState === 'true') {
      checkbox.setAttribute('aria-checked', 'true');
      updateStatus(checkbox);
    }
  });
  handleModalParam();
});