let allNewsItems = [];
let filteredNewsItems = [];
let currentPage = 1;
const itemsPerPage = 12;

async function fetchNews() {
  const newsLoadingMessage = document.getElementById('news-loading-message')
  if (newsLoadingMessage) {
    newsLoadingMessage.style.display = 'block';
  }

  try {
    const response = await fetch('https://raw.githubusercontent.com/beginnerprivacy/news/refs/heads/main/news.json');
    const data = await response.json();
    allNewsItems = data.articles || [];
    filteredNewsItems = [...allNewsItems].sort((a, b) => new Date(b.date) - new Date(a.date));
    renderNews();
  } finally {
    if (newsLoadingMessage) {
      document.getElementById('news-loading-message').style.display = 'none';
    }
  }
}

function filterNews() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  const category = document.getElementById('category').value;
  const region = document.getElementById('region').value;
  const sortOrder = document.getElementById('sort').value;

  filteredNewsItems = allNewsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm);
    const matchesCategory = category ? item.category === category : true;
    const matchesRegion = region ? item.region === region : true;
    return matchesSearch && matchesCategory && matchesRegion;
  });

  filteredNewsItems.sort((a, b) => {
    return sortOrder === 'recent' ?
      new Date(b.date) - new Date(a.date) :
      new Date(a.date) - new Date(b.date);
  });

  currentPage = 1;
  renderNews();
}

function changePage(direction) {
  const newPage = currentPage + direction;
  const totalPages = Math.ceil(filteredNewsItems.length / itemsPerPage);

  if (newPage > 0 && newPage <= totalPages) {
    currentPage = newPage;
    renderNews();
  }
}

function renderNews() {
  const container = document.getElementById('news-container');
  if (container) {
    container.innerHTML = '';
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = filteredNewsItems.slice(startIndex, endIndex);

    paginatedItems.forEach(item => {
      const card = document.createElement('a');
      card.className = 'news-card';
      card.href = item.url;
      card.rel = 'noreferrer nofollow';
      card.target = '_blank';

      if (item.title.length > 115) {
        truncatedTitle = item.title.substring(0, 115) + "...";
      } else {
        truncatedTitle = item.title
      }

      card.innerHTML = `
                <div class="news-card-content">
                    <h3>${truncatedTitle}</h3>
                </div>
                <div class="news-card-footer">
                    <small>${item.source}</small>
                    <small>${item.date}</small>
                </div>
            `;

      container.appendChild(card);
    });

    const totalPages = Math.ceil(filteredNewsItems.length / itemsPerPage);
    document.getElementById('prev').disabled = currentPage <= 1;
    document.getElementById('next').disabled = currentPage >= totalPages;
    document.getElementById('news-page-info').textContent = `${currentPage}/${totalPages}`;
  }
}

window.addEventListener('DOMContentLoaded', fetchNews);

// News warning callout
const newsWarningClose = document.querySelector('.news-warning-close')
if (newsWarningClose) {
  newsWarningClose.addEventListener('click', () => {
    document.querySelector('.news-warning-container').style.display = 'none';
  })
}