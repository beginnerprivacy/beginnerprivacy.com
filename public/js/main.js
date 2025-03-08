// Light / Dark theme toggle
(function () {
  const defaultTheme = 'system'

  const themeToggleButtons = document.querySelectorAll(".theme-toggle");

  // Change the icons of the buttons based on previous settings or system theme
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      ((window.matchMedia("(prefers-color-scheme: dark)").matches && defaultTheme === "system") || defaultTheme === "dark"))
  ) {
    themeToggleButtons.forEach((el) => el.dataset.theme = "dark");
  } else {
    themeToggleButtons.forEach((el) => el.dataset.theme = "light");
  }

  // Add click event handler to the buttons
  themeToggleButtons.forEach((el) => {
    el.addEventListener("click", function () {
      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          setDarkTheme();
          localStorage.setItem("color-theme", "dark");
        } else {
          setLightTheme();
          localStorage.setItem("color-theme", "light");
        }
      } else {
        if (document.documentElement.classList.contains("dark")) {
          setLightTheme();
          localStorage.setItem("color-theme", "light");
        } else {
          setDarkTheme();
          localStorage.setItem("color-theme", "dark");
        }
      }
      el.dataset.theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    });
  });

  // Listen for system theme changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (defaultTheme === "system" && !("color-theme" in localStorage)) {
      e.matches ? setDarkTheme() : setLightTheme();
      themeToggleButtons.forEach((el) =>
        el.dataset.theme = document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    }
  });
})();

;
// Hamburger menu for mobile navigation

document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.hamburger-menu');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const sidebarContainer = document.querySelector('.sidebar-container');

  // Initialize the overlay
  const overlayClasses = ['hx-fixed', 'hx-inset-0', 'hx-z-10', 'hx-bg-black/80', 'dark:hx-bg-black/60'];
  overlay.classList.add('hx-bg-transparent');
  overlay.classList.remove("hx-hidden", ...overlayClasses);

  function toggleMenu() {
    // Toggle the hamburger menu
    menu.querySelector('svg').classList.toggle('open');

    // When the menu is open, we want to show the navigation sidebar
    sidebarContainer.classList.toggle('max-md:[transform:translate3d(0,-100%,0)]');
    sidebarContainer.classList.toggle('max-md:[transform:translate3d(0,0,0)]');

    // When the menu is open, we want to prevent the body from scrolling
    document.body.classList.toggle('hx-overflow-hidden');
    document.body.classList.toggle('md:hx-overflow-auto');
  }

  menu.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();

    if (overlay.classList.contains('hx-bg-transparent')) {
      // Show the overlay
      overlay.classList.add(...overlayClasses);
      overlay.classList.remove('hx-bg-transparent');
    } else {
      // Hide the overlay
      overlay.classList.remove(...overlayClasses);
      overlay.classList.add('hx-bg-transparent');
    }
  });

  overlay.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();

    // Hide the overlay
    overlay.classList.remove(...overlayClasses);
    overlay.classList.add('hx-bg-transparent');
  });
});

;
// Copy button for code blocks

document.addEventListener('DOMContentLoaded', function () {
  const getCopyIcon = () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.innerHTML = `
      <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    `;
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    return svg;
  }

  const getSuccessIcon = () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.innerHTML = `
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
    `;
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    return svg;
  }

  document.querySelectorAll('.hextra-code-copy-btn').forEach(function (button) {
    // Add copy and success icons
    button.querySelector('.copy-icon')?.appendChild(getCopyIcon());
    button.querySelector('.success-icon')?.appendChild(getSuccessIcon());

    // Add click event listener for copy button
    button.addEventListener('click', function (e) {
      e.preventDefault();
      // Get the code target
      const target = button.parentElement.previousElementSibling;
      let codeElement;
      if (target.tagName === 'CODE') {
        codeElement = target;
      } else {
        // Select the last code element in case line numbers are present
        const codeElements = target.querySelectorAll('code');
        codeElement = codeElements[codeElements.length - 1];
      }
      if (codeElement) {
        let code = codeElement.innerText;
        // Replace double newlines with single newlines in the innerText
        // as each line inside <span> has trailing newline '\n'
        if ("lang" in codeElement.dataset) {
          code = code.replace(/\n\n/g, '\n');
        }
        navigator.clipboard.writeText(code).then(function () {
          button.classList.add('copied');
          setTimeout(function () {
            button.classList.remove('copied');
          }, 1000);
        }).catch(function (err) {
          console.error('Failed to copy text: ', err);
        });
      } else {
        console.error('Target element not found');
      }
    });
  });
});

;
document.querySelectorAll('.hextra-tabs-toggle').forEach(function (button) {
  button.addEventListener('click', function (e) {
    // set parent tabs to unselected
    const tabs = Array.from(e.target.parentElement.querySelectorAll('.hextra-tabs-toggle'));
    tabs.map(tab => tab.dataset.state = '');

    // set current tab to selected
    e.target.dataset.state = 'selected';

    // set all panels to unselected
    const panelsContainer = e.target.parentElement.parentElement.nextElementSibling;
    Array.from(panelsContainer.children).forEach(function (panel) {
      panel.dataset.state = '';
    });

    const panelId = e.target.getAttribute('aria-controls');
    const panel = panelsContainer.querySelector(`#${panelId}`);
    panel.dataset.state = 'selected';
  });
});

function updateRoadmap() {
  const sections = document.querySelectorAll('.roadmap-section');
  sections.forEach(section => section.style.display = 'none');

  const selectedTab = document.querySelector('input[name="tabs"]:checked').value;
  document.getElementById(selectedTab + 'Content').style.display = 'block';

  const selectedLabel = document.querySelector(`label[for="radio-${selectedTab}"]`);
  const glider = document.querySelector('.glider');
  const labelRect = selectedLabel.getBoundingClientRect();
  const tabsRect = document.querySelector('.tabs').getBoundingClientRect();

  glider.style.width = `${labelRect.width}px`;
  glider.style.transform = `translateX(${labelRect.left - tabsRect.left}px)`;
}
window.onload = updateRoadmap;

function exportCheckbox() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedItems = [];

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedItems.push({
          featureCardTitle: checkbox.id.replace('checkbox-', ''),
          checked: true
        });
      }
    });

    const json = JSON.stringify(checkedItems, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'checked_items.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

function importCheckbox() {
    const fileInput = document.getElementById('importFile');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select a file to import.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        try {
        const data = JSON.parse(event.target.result);
        data.forEach(item => {
            const checkbox = document.getElementById(`checkbox-${item.featureCardTitle}`);
            if (checkbox) {
            checkbox.checked = item.checked;
            }
        });
        } catch (error) {
        alert('Error parsing JSON: ' + error.message);
        }
    };

    reader.readAsText(file);
}

function showTourModal() {
  const modal = document.createElement('div');
  const modalContent = document.createElement('div');
  const message = document.createElement('p');
  const yesButton = document.createElement('button');
  const noButton = document.createElement('button');
  const checkboxLabel = document.createElement('label');
  const checkbox = document.createElement('input');

  modal.className = 'modal';
  modalContent.className = 'modal-content';
  checkboxLabel.className = 'modal-ask-again';
  yesButton.className = 'modal-button';
  noButton.className = 'modal-button';

  const isSpanish = window.location.href.includes('/es/');
  const isChinese = window.location.href.includes('/zh-cn/');

  message.textContent = isSpanish ? '¿Te gustaría hacer un recorrido?' : isChinese ? '您想参加导览吗？' : 'Would you like to take a tour?';
  yesButton.textContent = isSpanish ? 'Sí' : isChinese ? '是' : 'Yes';
  noButton.textContent = isSpanish ? 'No' : isChinese ? '否' : 'No';

  checkbox.type = 'checkbox';
  checkboxLabel.appendChild(checkbox);
  checkboxLabel.appendChild(document.createTextNode(isSpanish ? ' No preguntar de nuevo' : isChinese ? ' 不再询问' : ' Do not ask again'));
  
  modalContent.appendChild(message);
  modalContent.appendChild(checkboxLabel);
  modalContent.appendChild(yesButton);
  modalContent.appendChild(noButton);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  yesButton.onclick = function() {
      if (checkbox.checked) {
          localStorage.setItem('doNotAskAgain', 'true');
      }
      guidedTour();
      document.body.removeChild(modal);
  };

  noButton.onclick = function() {
      if (checkbox.checked) {
          localStorage.setItem('doNotAskAgain', 'true');
      }
      document.body.removeChild(modal);
  };
}

function scrollDown() {
  window.scrollBy({
      top: 400,
      behavior: 'smooth'
  });
  
  setTimeout(() => {
      if (localStorage.getItem('doNotAskAgain') !== 'true') {
          showTourModal();
      }
  }, 400);
}

const steps = [
  {
    element: '.roadmap',
    text: 'This is the Roadmap. Here you can see all the steps.',
    text_es: 'Este es el Roadmap. Aquí puedes ver todos los pasos.',
    text_zh_cn: '这是路线图。在这里你可以看到所有的步骤。'
  },
  {
    element: '.tabs',
    text: 'You can use the tabs to switch between different difficulties.',
    text_es: 'Puedes usar las pestañas para cambiar entre diferentes niveles de dificultad.',
    text_zh_cn: '你可以使用标签在不同难度之间切换。'
  },
  {
    element: '#checkbox-about-beginner-privacy',
    element_es: '#checkbox-sobre-beginner-privacy',
    element_zh_cn: '#checkbox-关于-beginner-privacy',
    text: 'On every step, there is a checkbox to track your progress.',
    text_es: 'En cada paso, hay una casilla de verificación para rastrear tu progreso.',
    text_zh_cn: '在每一步都有一个复选框来跟踪你的进度。'
  },
  {
    element: '#import-export',
    text: 'You can save your progress by using the Import/Export buttons.',
    text_es: 'Puedes guardar tu progreso utilizando los botones de Importar/Exportar.',
    text_zh_cn: '您可以通过使用导入/导出按钮来保存您的进度。'  
  },
  {
    element: 'a[title="PrivacyAI"]',
    under: true,
    noBtn: true,
    text: 'This is the navigation bar, go to PrivacyAI.',
    text_es: 'Esta es la barra de navegación, ve a PrivacyAI.',
    text_zh_cn: '这是导航栏，前往PrivacyAI。'
  },
  {
    element: '.chat-container',
    text: 'This is PrivacyAI, your privacy adviser.',
    text_es: 'Este es PrivacyAI, tu asesor de privacidad.',
    text_zh_cn: '这是PrivacyAI，您的隐私顾问。'  
  },
];

if (window.innerWidth <= 768) {
  steps.splice(4, 0, {
      element: '.hamburger-menu',
      under: true,
      noBtn: true,
      text: 'Click the hamburger menu.',
      text_es: 'Haz clic en el menú de hamburguesa.',
      text_zh_cn: '点击汉堡菜单。'  
  });
  steps.splice(5, 1, {
    element: 'a[href="/privacyai/"]',
    element_es: 'a[href="/es/privacyai/"]',
    element_zh_cn: 'a[href="/zh-cn/privacyai/"]',
    under: true,
    noBtn: true,
    text: 'Navigate to PrivacyAI.',
    text_es: 'Navega a PrivacyAI.',
    text_zh_cn: '导航到PrivacyAI。'  
  });
}

const container = document.createElement('div');
container.className = 'tour-container';
document.body.appendChild(container);

const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

const navOverlay = document.createElement('div');
navOverlay.className = 'nav-overlay';
const navContainer = document.querySelector('.nav-container');
navContainer.appendChild(navOverlay);

const mobileMenuContainer = document.querySelector('.sidebar-container');
const overlayMobile = document.createElement('div');
overlayMobile.className = 'overlay-mobile';
if (mobileMenuContainer) {
  mobileMenuContainer.appendChild(overlayMobile);
}

let currentStep = parseInt(localStorage.getItem('currentStep')) || 0;
let isGuidedTour = localStorage.getItem('isGuidedTour') === 'true';

function guidedTour() {
  localStorage.setItem('isGuidedTour', 'true');
  updateTourContainer(steps[currentStep]);
}

if (isGuidedTour && currentStep < steps.length) {
  guidedTour();
}

document.body.addEventListener('click', (event) => {
  const target = event.target;
  const isGuidedTour = localStorage.getItem('isGuidedTour') === 'true';
  const isSpanish = window.location.href.includes('/es/');
  const isChinese = window.location.href.includes('/zh-cn/');

  if (isGuidedTour) {
    let elementSelector = steps[currentStep].element;
    if (isSpanish && steps[currentStep].element_es) {
        elementSelector = steps[currentStep].element_es;
    } else if (isChinese && steps[currentStep].element_zh_cn) {
        elementSelector = steps[currentStep].element_zh_cn;
    }
    const currentElement = document.querySelector(elementSelector);

    if (target.closest('a[title="PrivacyAI"]')) {
        event.stopPropagation();
        if (currentElement) {currentElement.classList.remove('highlight-tour');}
        currentStep++;
        localStorage.setItem('currentStep', currentStep);
        updateTourContainer(steps[currentStep]);
    }
    if (target.closest('a[href="/privacyai/"]')) {
        event.stopPropagation();
        if (currentElement) {currentElement.classList.remove('highlight-tour');}
        currentStep++;
        localStorage.setItem('currentStep', currentStep);
        updateTourContainer(steps[currentStep]);
    }
    if (target.closest('a[href="/es/privacyai/"]')) {
      event.stopPropagation();
      if (currentElement) {currentElement.classList.remove('highlight-tour');}
      currentStep++;
      localStorage.setItem('currentStep', currentStep);
      updateTourContainer(steps[currentStep]);
    }
    if (target.closest('a[href="/zh-cn/privacyai/"]')) {
      event.stopPropagation();
      if (currentElement) {currentElement.classList.remove('highlight-tour');}
      currentStep++;
      localStorage.setItem('currentStep', currentStep);
      updateTourContainer(steps[currentStep]);
    }
    if (target.closest('.hamburger-menu')) {
        event.stopPropagation();
        if (currentElement) {currentElement.classList.remove('highlight-tour');}
        currentStep++;
        localStorage.setItem('currentStep', currentStep);
        updateTourContainer(steps[currentStep]);
    }
  }
});

function updateTourContainer(step) {
    const isSpanish = window.location.href.includes('/es/');
    const isChinese = window.location.href.includes('/zh-cn/');

    let elementSelector = step.element;
    if (isSpanish && step.element_es) {
        elementSelector = step.element_es;
    } else if (isChinese && step.element_zh_cn) {
        elementSelector = step.element_zh_cn;
    }

    const element = document.querySelector(elementSelector);
    const rect = element.getBoundingClientRect();
    
    overlay.style.display = 'block';
    navOverlay.style.display = 'block';
    if (mobileMenuContainer) {
      overlayMobile.style.display = 'block';
    }
    document.body.style.overflow = 'hidden';

    if (window.innerWidth <= 768) {
      if (currentStep === 5) {
        overlay.style.display = 'none';
      }
      else {
        overlay.style.display = 'block';
      }
    }

    container.style.left = `${rect.left + window.scrollX}px`;
    if (window.innerWidth <= 768) {
      if (currentStep === 2) {
        container.style.left = `${rect.left + window.scrollX - 400}px`;
      }
      if (currentStep === 4) {
        container.style.left = `${rect.left + window.scrollX - 170}px`;
      }
    }
    if (!step.under) {
      container.style.top = `${rect.top + window.scrollY - 95}px`;
    }
    else {
      container.style.top = `${rect.top + window.scrollY + 50}px`;
      if (window.innerWidth <= 768) {
        if (currentStep === 5) {
          container.style.top = `${rect.top + window.scrollY + 987}px`;
        }
      }
    }
    if (!step.noBtn) {
      if (window.innerWidth <= 768) {
        buttonText = currentStep === 6 ? 'Finish' : 'Next';
      }
      else {
        buttonText = currentStep === 5 ? 'Finish' : 'Next';
      }
      const textToDisplay = isSpanish ? step.text_es : isChinese ? step.text_zh_cn : step.text;
      container.innerHTML = `<p>${textToDisplay}</p><button id="nextBtn">${buttonText}</button>`;

      const nextButton = document.getElementById('nextBtn');
      nextButton.onclick = () => {
        if (buttonText === 'Finish') {
            endTour();
            if (isSpanish) {
              window.location.href = '/es';
            }
            else if (isChinese) {
              window.location.href = '/zh-cn';
            }
            else {
              window.location.href = '/';
            }
        } else {
            let elementSelector = steps[currentStep].element;
            if (isSpanish && steps[currentStep].element_es) {
                elementSelector = steps[currentStep].element_es;
            } else if (isChinese && steps[currentStep].element_zh_cn) {
                elementSelector = steps[currentStep].element_zh_cn;
            }
            const currentElement = document.querySelector(elementSelector);
            if (currentElement) {currentElement.classList.remove('highlight-tour');}
            currentStep++;
            localStorage.setItem('currentStep', currentStep);
            if (currentStep === 2) {
              const startTabInput = document.getElementById('radio-start');
              if (startTabInput) {
                  startTabInput.checked = true;
              }
              updateRoadmap();
            }
            updateTourContainer(steps[currentStep]);
        }
      };
    }
    else {
      const textToDisplay = isSpanish ? step.text_es : isChinese ? step.text_zh_cn : step.text;
      container.innerHTML = `<p>${textToDisplay}</p>`;
    }

    container.style.display = 'block';
    if (currentStep === 1) {
      document.querySelector(elementSelector).style.zIndex = '99';
    }
    else {
      document.querySelector(elementSelector).classList.add('highlight-tour');
      document.querySelector(steps[1].element).style.zIndex = '1';
    }
}

function endTour() {
    container.style.display = 'none';
    document.body.style.overflow = 'visible';
    overlay.style.display = 'none';
    navOverlay.style.display = 'none';
    if (currentStep < steps.length) {
        document.querySelector(steps[currentStep].element).classList.remove('highlight-tour');
    }
    localStorage.removeItem('currentStep');
    localStorage.setItem('isGuidedTour', 'false');
    currentStep = 0;
}

function toggleShareDropdown () {
  const dropdown = document.getElementById("shareDropdown");
  dropdown.style.display = "block";
}

window.onclick = function(event) {
    if (!event.target.matches('.share-button')) {
        const dropdowns = document.getElementsByClassName ("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

function markAsDone(id) {
  const checkbox = document.getElementById(`checkbox-${id}`);
  if (!checkbox) return;
  checkbox.checked = !checkbox.checked;
  updateStatus(checkbox);
}

function updateStatus(checkbox) {
  const id = checkbox.id.replace('checkbox-', '');
  const button = document.getElementById(`mark-done-${id}`);
  const icon = document.getElementById(`status-icon-${id}`);
  const todoIcon = document.getElementById(`todo-icon-${id}`);
  const doneIcon = document.getElementById(`done-icon-${id}`);

  if (!button || !icon || !todoIcon || !doneIcon) return;

  const isChecked = checkbox.checked;
  button.textContent = isChecked ? 'Mark as todo' : 'Mark as done';
  icon.style.color = isChecked ? '#008d0c' : '#9CA3AF';
  todoIcon.classList.toggle('hx-hidden', isChecked);
  doneIcon.classList.toggle('hx-hidden', !isChecked);
}

document.querySelectorAll('.hx-checkbox').forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    updateStatus(this);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hx-checkbox').forEach(checkbox => {
    updateStatus(checkbox);
  });
  handleModalParam();
});

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
          const checkboxId = modalID.replace('modal-', '');
          const checkbox = document.getElementById(`checkbox-${checkboxId}`);
          if (checkbox) updateStatus(checkbox);
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

document.querySelectorAll('.hx-checkbox').forEach(checkbox => {
  checkbox.addEventListener('click', function(e) {
    e.stopPropagation();
  });
})

window.addEventListener('popstate', handleModalParam);
document.addEventListener('DOMContentLoaded', handleModalParam);

document.addEventListener("DOMContentLoaded", function() {
  const grids = [
      document.querySelector('#basicContent .hextra-feature-grid'),
      document.querySelector('#advancedContent .hextra-feature-grid')
  ];

  if (window.innerWidth > 1025) {
    grids.forEach(grid => {
        if (!grid) return;
        const cards = Array.from(grid.children); 
        
        if (cards.length < 10) {
            return;
        }

        const cardsToRearrange = [
            cards[11],
            cards[13],
            cards[15],
            cards[17],
            cards[19]
        ];

        const newOrder = [
            cardsToRearrange[4],
            cardsToRearrange[3],
            cardsToRearrange[2],
            cardsToRearrange[1],
            cardsToRearrange[0]
        ];

        const insertPositions = [
            cards[11].nextElementSibling,
            cards[13].nextElementSibling,
            cards[15].nextElementSibling,
            cards[17].nextElementSibling,
            cards[19].nextElementSibling
        ];

        cardsToRearrange.forEach(card => {
            grid.removeChild(card);
        });

        newOrder.forEach((card, index) => {
            grid.insertBefore(card, insertPositions[index]);
        });
    });
  }
});


function startAssessment(id) {
  const container = document.querySelector(`#${id}`);
  container.querySelector('.tm-start-button').style.display = 'none';
  container.querySelector('.tm-questions-container').style.display = 'block';
  showQuestion(id, 0);
}

let currentScores = {};

function showQuestion(id, index) {
  const container = document.querySelector(`#${id}`);
  container.querySelectorAll('.tm-question').forEach(q => {
    q.classList.remove('active');
  });
  container.querySelector(`.tm-question[data-index="${index}"]`).classList.add('active');
}

function previousQuestion(id) {
  const currentIndex = parseInt(document.querySelector(`#${id} .tm-question.active`).dataset.index);
  showQuestion(id, Math.max(0, currentIndex - 1));
}

document.querySelectorAll('.tm-option').forEach(button => {
  button.addEventListener('click', function() {
    const assessmentId = this.closest('.threat-model-assessment').id;
    const currentIndex = parseInt(this.closest('.tm-question').dataset.index);
    const totalQuestions = document.querySelectorAll(`#${assessmentId} .tm-question`).length;
    
    currentScores[assessmentId] = (currentScores[assessmentId] || 0) + parseInt(this.dataset.score);
    
    if(currentIndex < totalQuestions - 1) {
      showQuestion(assessmentId, currentIndex + 1);
    } else {
      showResult(assessmentId);
    }
  });
});

function showResult(id) {
  const container = document.querySelector(`#${id}`);
  const totalScore = currentScores[id] || 0;
  let resultText = '';
  
  if(totalScore <= 5) {
    resultText = resultTexts.casual;
  } else if(totalScore <= 10) {
    resultText = resultTexts.privacyConscious;
  } else {
    resultText = resultTexts.advanced;
  }
  
  container.querySelector('.tm-result-content').textContent = resultText;
  container.querySelector('.tm-result').style.display = 'block';
  container.querySelectorAll('.tm-question').forEach(q => {
    q.style.display = 'none';
  });
}

function restartAssessment(id) {
  const container = document.querySelector(`#${id}`);
  currentScores[id] = 0;
  container.querySelector('.tm-result').style.display = 'none';
  container.querySelectorAll('.tm-question').forEach(q => {
    q.style.cssText = '';
  });
  container.querySelector('.tm-questions-container').style.display = 'block';
  showQuestion(id, 0);
}
;
(function () {
  const languageSwitchers = document.querySelectorAll('.language-switcher');
  languageSwitchers.forEach((switcher) => {
    switcher.addEventListener('click', (e) => {
      e.preventDefault();
      switcher.dataset.state = switcher.dataset.state === 'open' ? 'closed' : 'open';
      const optionsElement = switcher.nextElementSibling;
      optionsElement.classList.toggle('hx-hidden');

      // Calculate position of language options element
      const switcherRect = switcher.getBoundingClientRect();
      const translateY = switcherRect.top - window.innerHeight - 15;
      optionsElement.style.transform = `translate3d(${switcherRect.left}px, ${translateY}px, 0)`;
      optionsElement.style.minWidth = `${Math.max(switcherRect.width, 50)}px`;
    });
  });

  // Dismiss language switcher when clicking outside
  document.addEventListener('click', (e) => {
    if (e.target.closest('.language-switcher') === null) {
      languageSwitchers.forEach((switcher) => {
        switcher.dataset.state = 'closed';
        const optionsElement = switcher.nextElementSibling;
        optionsElement.classList.add('hx-hidden');
      });
    }
  });
})();

;
// Script for filetree shortcode collapsing/expanding folders used in the theme
// ======================================================================
document.addEventListener("DOMContentLoaded", function () {
  const folders = document.querySelectorAll(".hextra-filetree-folder");
  folders.forEach(function (folder) {
    folder.addEventListener("click", function () {
      Array.from(folder.children).forEach(function (el) {
        el.dataset.state = el.dataset.state === "open" ? "closed" : "open";
      });
      folder.nextElementSibling.dataset.state = folder.nextElementSibling.dataset.state === "open" ? "closed" : "open";
    });
  });
});

;
document.addEventListener("DOMContentLoaded", function () {
  scrollToActiveItem();
  enableCollapsibles();
});

function enableCollapsibles() {
  const buttons = document.querySelectorAll(".hextra-sidebar-collapsible-button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const list = button.parentElement.parentElement;
      if (list) {
        list.classList.toggle("open")
      }
    });
  });
}

function scrollToActiveItem() {
  const sidebarScrollbar = document.querySelector("aside.sidebar-container > .hextra-scrollbar");
  const activeItems = document.querySelectorAll(".sidebar-active-item");
  const visibleActiveItem = Array.from(activeItems).find(function (activeItem) {
    return activeItem.getBoundingClientRect().height > 0;
  });

  if (!visibleActiveItem) {
    return;
  }

  const yOffset = visibleActiveItem.clientHeight;
  const yDistance = visibleActiveItem.getBoundingClientRect().top - sidebarScrollbar.getBoundingClientRect().top;
  sidebarScrollbar.scrollTo({
    behavior: "instant",
    top: yDistance - yOffset
  });
}

;
// Back to top button

document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.querySelector("#backToTop");
  if (backToTop) {
    document.addEventListener("scroll", (e) => {
      if (window.scrollY > 300) {
        backToTop.classList.remove("hx-opacity-0");
      } else {
        backToTop.classList.add("hx-opacity-0");
      }
    });
  }
});

function scrollUp() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
