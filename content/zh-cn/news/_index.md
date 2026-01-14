---
title: 新闻
description: 获取最新的隐私与安全新闻、数据泄露事件以及网络威胁，随时了解动态并保护你的个人数据。
excludeSearch: true
Params:
  sidebar:
    exclude: true
---
{{< callout type="warning" styleClass="hx-flex hx-justify-between" customClass="news-warning-container hx-mb-4" >}}
  <div>以下新闻网站可能会追踪您。在点击任何链接之前，请完成我们的<a href="../checklists/?m=casual-internet-user">普通互联网用户检查清单</a>!</div> 
  <div class="news-warning-close">&times;</div>
{{< /callout >}}

<div class="news-top-bar">
    <input type="text" id="search" placeholder="搜索新闻..." oninput="filterNews()" />
    <select id="category" onchange="filterNews()">
        <option value="">类别</option>
        <option value="Data Breaches">数据泄露</option>
        <option value="Privacy">隐私</option>
        <option value="Cyber Security">网络安全</option>
    </select>
    <select id="region" onchange="filterNews()">
        <option value="">地区</option>
        <option value="North America">北美</option>
        <option value="South America">南美</option>
        <option value="Africa">非洲</option>
        <option value="Middle East">中东</option>
        <option value="United Kingdom">英国</option>
        <option value="Asia">亚洲</option>
        <option value="Oceania">大洋洲</option>
        <option value="Europe">欧洲</option>
    </select>
    <select id="sort" onchange="filterNews()">
        <option value="recent">按最近排序</option>
        <option value="oldest">按最旧排序</option>
    </select>
</div>

<div id="news-loading-message" class="hx-text-center hx-my-4 hx-text-2xl">正在获取新闻...</div>
<div id="news-container" class="news-container"></div>

<div class="news-pagination">
    <button id="prev" onclick="changePage(-1)">上一页</button>
    <span id="news-page-info">第 1 页</span>
    <button id="next" onclick="changePage(1)">下一页</button>
</div>
