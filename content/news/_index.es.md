---
title: Noticia (Beta)
excludeSearch: true
---
<div class="news-top-bar">
    <input type="text" id="search" placeholder="Buscar noticias..." oninput="filterNews()" />
    <select id="category" onchange="filterNews()">
        <option value="">Categoría</option>
        <option value="Data Breaches">Filtraciones de Datos</option>
        <option value="Privacy">Privacidad</option>
        <option value="Artificial Intelligence">Inteligencia Artificial</option>
        <option value="Government">Gobierno</option>
        <option value="War">Guerra</option>
        <option value="Cyber Security">Ciberseguridad</option>
    </select>
    <select id="region" onchange="filterNews()">
        <option value="">Región</option>
        <option value="North America">América del Norte</option>
        <option value="South America">América del Sur</option>
        <option value="Africa">África</option>
        <option value="Middle East">Medio Oriente</option>
        <option value="United Kingdom">Reino Unido</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceanía</option>
        <option value="Europe">Europa</option>
    </select>
    <select id="sort" onchange="filterNews()">
        <option value="recent">Ordenar por Reciente</option>
        <option value="oldest">Ordenar por Más Antiguo</option>
    </select>
</div>

<div id="news-loading-message" class="hx-text-center hx-my-4 hx-text-2xl">Cargando noticias...</div>
<div id="news-container" class="news-container"></div>

<div class="news-pagination">
    <button id="prev" onclick="changePage(-1)">Anterior</button>
    <span id="news-page-info">Página 1</span>
    <button id="next" onclick="changePage(1)">Siguiente</button>
</div>
