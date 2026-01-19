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

function saveLastTab(tabValue) {
  try {
    localStorage.setItem('roadmap-last-tab', tabValue);
  } catch (e) {}
}

function getLastTab() {
  try {
    return localStorage.getItem('roadmap-last-tab');
  } catch (e) {
    return null;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const last = getLastTab();
  if (last) {
    const input = document.getElementById(`radio-${last}`);
    if (input) {
      input.checked = true;
    }
  }

  document.querySelectorAll('input[name="tabs"]').forEach(input => {
    input.addEventListener('change', () => {
      if (input.checked) saveLastTab(input.value);
      updateRoadmap();
    });
  });

  updateRoadmap();
});

// Roadmap Progress
function getRoadmapProgress() {
    let progress = localStorage.getItem('roadmap-progress');
    if (!progress) {
        progress = '{"completedTasks":[]}';
        localStorage.setItem('roadmap-progress', progress);
    }
    return JSON.parse(progress);
}

function saveRoadmapProgress(progress) {
    localStorage.setItem('roadmap-progress', JSON.stringify(progress));
}

function updateRoadmapProgress() {
    const progress = getRoadmapProgress();
    const completedTasks = progress.completedTasks || [];
    const totalTasks = document.querySelectorAll('.hextra-feature-card').length;

    const percentComplete = totalTasks > 0
        ? Math.round((completedTasks.length / totalTasks) * 100)
        : 0;

    if (!totalTasks) {
        return;
    }

    document.getElementById('tasks-completed').textContent = completedTasks.length;
    document.getElementById('total-tasks').textContent = totalTasks;
    document.getElementById('percent-display').textContent = `${percentComplete}%`;

    const circle = document.getElementById('progress-circle');
    const circumference = 276.46;
    const offset = circumference - (percentComplete / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    const startTasks = Array.from(document.querySelectorAll('.start-hf-card-color.hextra-feature-card')).map(card => card.id);
    const basicTasks = Array.from(document.querySelectorAll('.basic-hf-card-color.hextra-feature-card')).map(card => card.id);
    const mediumTasks = Array.from(document.querySelectorAll('.medium-hf-card-color.hextra-feature-card')).map(card => card.id);
    const advancedTasks = Array.from(document.querySelectorAll('.advanced-hf-card-color.hextra-feature-card')).map(card => card.id);

    let privacyLevel = window.translations.privacyStarter;
    const allComplete = (tasks) => tasks.every(taskId => completedTasks.includes(taskId));

    if (allComplete(startTasks) && allComplete(basicTasks) && allComplete(mediumTasks) && allComplete(advancedTasks)) {
        privacyLevel = window.translations.privacyExpert;
    } else if (allComplete(startTasks) && allComplete(basicTasks) && allComplete(mediumTasks)) {
        privacyLevel = window.translations.privacyDefender;
    } else if (allComplete(startTasks) && allComplete(basicTasks)) {
        privacyLevel = window.translations.privacyEnthusiast;
    } else if (allComplete(startTasks)) {
        privacyLevel = window.translations.privacyAware;
    }

    document.getElementById('privacy-level').textContent = privacyLevel;

    document.querySelectorAll('.hextra-feature-card').forEach(card => {
        const taskId = card.id;
        const timeBadgeInfo = card.querySelector('.time-badge-info');
        const startTaskButton = card.querySelector('.start-task-button');

        if (completedTasks.includes(taskId)) {
            const badge = document.createElement('span');
            badge.textContent = window.translations.taskCompleted;
            badge.classList.add('completed-badge');
            timeBadgeInfo.appendChild(badge);

            card.classList.add('completed');
            startTaskButton.textContent = window.translations.reviewTask;
        }
    });
}

function markAsDone(id) {
    let progress = getRoadmapProgress();
    
    if (!progress.completedTasks.includes(id)) {
        progress.completedTasks.push(id);
        saveRoadmapProgress(progress);
    }

    document.querySelectorAll(`button#${id}`).forEach(button => {
        const p = button.querySelector('p');
        if (p) p.textContent = window.translations.taskCompleted;
        button.classList.add('completed');
        button.disabled = true;
    });

    updateRoadmapProgress();
}

document.addEventListener('DOMContentLoaded', () => {
    const progress = getRoadmapProgress();

    document.querySelectorAll('button[id]').forEach(button => {
        const id = button.id;
        if (progress.completedTasks.includes(id)) {
            const p = button.querySelector('p');
            if (p) p.textContent = window.translations.taskCompleted;
            button.classList.add('completed');
            button.disabled = true;
        }
    });

    updateRoadmapProgress();
});

function resetRoadmapProgress() {
    localStorage.removeItem('roadmap-progress');

    const circle = document.getElementById('progress-circle');
    if (circle) circle.style.strokeDashoffset = '276.46';

    document.getElementById('percent-display').textContent = '0%';
    document.getElementById('tasks-completed').textContent = '0';

    document.querySelectorAll('.hextra-feature-card .completed-badge').forEach(badge => badge.remove());
    document.querySelectorAll('.hextra-feature-card.completed').forEach(card => card.classList.remove('completed'));
    document.querySelectorAll('.hextra-feature-card .start-task-button').forEach(button => {
        button.textContent = window.translations.startTask;
    });

    updateRoadmapProgress();
}

document.addEventListener('DOMContentLoaded', () => {
    const resetButton = document.getElementById('reset-roadmap-progress');
    if (resetButton) {
        resetButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm(window.translations.resetRoadmapProgressPrompt)) {
                resetRoadmapProgress();
            }
        });
    }
});