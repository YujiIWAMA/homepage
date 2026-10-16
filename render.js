// content.js の中身をページに流し込むスクリプト（通常は編集不要）
(function () {
  const esc = (s) => s; // content.js は自分で書くのでHTMLタグ（<br>など）をそのまま許可

  function newsItem(n) {
    const label = n.linkLabel || "リンク";
    const link = n.link
      ? ` <a class="news-link" href="${n.link}" target="_blank" rel="noopener">[${label}]</a>`
      : "";
    return `<li><time>${n.date}</time><span>${esc(n.text)}${link}</span></li>`;
  }

  function card(c) {
    const img = `<img src="${c.image}" alt="" loading="lazy">`;
    const media = c.link
      ? `<a href="${c.link}" target="_blank" rel="noopener">${img}</a>`
      : img;
    return `<article class="card">${media}<h3>${c.title}</h3><p>${c.body}</p></article>`;
  }

  const $ = (id) => document.getElementById(id);

  if ($("news-top")) $("news-top").innerHTML = NEWS.slice(0, NEWS_ON_TOP).map(newsItem).join("");
  if ($("news-past")) $("news-past").innerHTML = NEWS.slice(NEWS_ON_TOP).map(newsItem).join("");
  if ($("projects")) $("projects").innerHTML = PROJECTS.map(card).join("");
  if ($("portfolio")) $("portfolio").innerHTML = PORTFOLIO.map(card).join("");
  document.querySelectorAll(".last-updated").forEach((el) => (el.textContent = LAST_UPDATED));
  if (NEWS.length <= NEWS_ON_TOP && $("past-link")) $("past-link").hidden = true;
})();
