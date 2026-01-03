(function () {
  const triggers = document.querySelectorAll('.language-switcher, .explore-trigger');

  function closeAllExcept(excludeTrigger = null) {
    triggers.forEach((trigger) => {
      if (trigger === excludeTrigger) return;

      if (trigger.dataset.state === 'open') {
        trigger.dataset.state = 'closed';
        const menu = trigger.nextElementSibling;
        if (menu) menu.classList.add('hx-hidden');
      }
    });
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const wasOpen = trigger.dataset.state === 'open';

      closeAllExcept(trigger);

      if (wasOpen) {
        trigger.dataset.state = 'closed';
        const menu = trigger.nextElementSibling;
        if (menu) menu.classList.add('hx-hidden');
      } else {
        trigger.dataset.state = 'open';
        const menu = trigger.nextElementSibling;
        if (!menu) return;

        menu.classList.remove('hx-hidden');

        const triggerRect = trigger.getBoundingClientRect();
        const menuHeight = menu.offsetHeight;

        const spaceBelow = window.innerHeight - triggerRect.bottom;
        const spaceAbove = triggerRect.top;

        let top;

        if (spaceBelow < menuHeight + 20 && spaceAbove > spaceBelow) {
          top = triggerRect.top - menuHeight - 10;
        } else {
          top = triggerRect.bottom + 10;
        }

        Object.assign(menu.style, {
          position: 'fixed',
          left: `${triggerRect.left}px`,
          top: `${top}px`,
          zIndex: 9999
        });
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-switcher') && !e.target.closest('.explore-trigger')) {
      closeAllExcept();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllExcept();
    }
  });
})();