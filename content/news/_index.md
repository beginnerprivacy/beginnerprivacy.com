---
title: News
excludeSearch: true
---
{{< callout type="warning" styleClass="hx-flex hx-justify-between" customClass="news-warning-container" >}}
  <div>The news sites below may track you. Please complete our <a href="../checklists/?m=casual-internet-user">Casual Internet User Checklist</a> before clicking any links!</div> 
  <div class="news-warning-close">&times;</div>
{{< /callout >}}

<div class="news-top-bar">
    <input type="text" id="search" placeholder="Search news..." oninput="filterNews()" />
    <select id="category" onchange="filterNews()">
        <option value="">Category</option>
        <option value="Data Breaches">Data Breaches</option>
        <option value="Privacy">Privacy</option>
        <option value="Cyber Security">Cyber Security</option>
    </select>
    <select id="region" onchange="filterNews()">
        <option value="">Region</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Africa">Africa</option>
        <option value="Middle East">Middle East</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
    </select>
    <select id="sort" onchange="filterNews()">
        <option value="recent">Sort by Recent</option>
        <option value="oldest">Sort by Oldest</option>
    </select>
</div>

<div id="news-loading-message" class="hx-text-center hx-my-4 hx-text-2xl">Fetching news...</div>
<div id="news-container" class="news-container"></div>

<div class="news-pagination">
    <button id="prev" onclick="changePage(-1)">Previous</button>
    <span id="news-page-info">Page 1</span>
    <button id="next" onclick="changePage(1)">Next</button>
</div>
