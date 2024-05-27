// search part
document.getElementById('searchBtn').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const articles = document.querySelectorAll('.article-item');

    articles.forEach(article => {
        const title = article.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
});
