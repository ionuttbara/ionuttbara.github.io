// full-article.js

// Function to fetch and display the full article content
function fetchFullArticle(articlePath) {
    fetch(`../page_blog/${articlePath}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('article-content').innerHTML = data;
        })
        .catch(error => console.error('Error fetching article:', error));
}

// Function to navigate to the previous article
function navigateToPreviousArticle() {
    const articlesList = JSON.parse(localStorage.getItem('articlesList')) || [];
    const urlParams = new URLSearchParams(window.location.search);
    const articlePath = urlParams.get('article');
    const currentIndex = articlesList.findIndex(article => article.path === articlePath);

    if (currentIndex > -1) {
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
            const prevArticlePath = articlesList[prevIndex].path;
            window.location.href = `../page_blog/full-article.html?article=${prevArticlePath}`;
        } else {
            console.log('No previous article.');
            // Optionally handle this case, for example, by disabling the previous button
        }
    } else {
        console.error('Current article not found in the articles list.');
    }
}

// Function to navigate to the next article
 function navigateToNextArticle() {
            const articlesList = JSON.parse(localStorage.getItem('articlesList')) || [];
            const urlParams = new URLSearchParams(window.location.search);
            const articlePath = urlParams.get('article');
            const currentIndex = articlesList.findIndex(article => article.path === articlePath);

            if (currentIndex > -1) {
                const nextIndex = currentIndex + 1;
                if (nextIndex < articlesList.length) {
                    const nextArticlePath = articlesList[nextIndex].path;
                    window.location.href = `../page_blog/full-article.html?article=${nextArticlePath}`;
                } else {
                    console.log('No more articles to navigate.');
                }
            } else {
                console.error('Current article not found in the articles list.');
            }
}
// Handle article navigation buttons
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const articlePath = urlParams.get('article');

    if (articlePath) {
        fetchFullArticle(articlePath);
    } else {
        console.error('Article path parameter is missing.');
    }

    document.getElementById('prevArticleBtn').addEventListener('click', navigateToPreviousArticle);
    document.getElementById('nextArticleBtn').addEventListener('click', navigateToNextArticle);
});
