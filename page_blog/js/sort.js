// Handle sorting functionality
document.getElementById('sortSelect').addEventListener('change', function() {
    const articlesList = document.getElementById('articles-list');
    const articles = Array.from(articlesList.children);

    switch (this.value) {
        case 'date-desc':
            articles.sort((a, b) => {
                const dateA = new Date(a.getAttribute('data-date'));
                const dateB = new Date(b.getAttribute('data-date'));
                return dateB - dateA;
            });
            break;
        case 'date-asc':
            articles.sort((a, b) => {
                const dateA = new Date(a.getAttribute('data-date'));
                const dateB = new Date(b.getAttribute('data-date'));
                return dateA - dateB;
            });
            break;
        case 'title-asc':
            articles.sort((a, b) => {
                const titleA = a.querySelector('h3').textContent;
                const titleB = b.querySelector('h3').textContent;
                return titleA.localeCompare(titleB);
            });
            break;
        case 'title-desc':
            articles.sort((a, b) => {
                const titleA = a.querySelector('h3').textContent;
                const titleB = b.querySelector('h3').textContent;
                return titleB.localeCompare(titleA);
            });
            break;
        default:
            break;
    }

    // Clear current list and append sorted articles
    articlesList.innerHTML = '';
    articles.forEach(article => articlesList.appendChild(article));
});
