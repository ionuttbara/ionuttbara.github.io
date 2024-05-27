document.addEventListener('DOMContentLoaded', function() {
    const articlesList = document.getElementById('articles-list');
    const articleContent = document.getElementById('article-content');

    // Function to calculate the relative time since the article was posted
    function timeSince(date) {
        const seconds = Math.floor((new Date() - new Date(date)) / 1000);
        let interval = seconds / 31536000;

        if (interval > 1) return Math.floor(interval) + " years ago";
        interval = seconds / 2592000;
        if (interval > 1) return Math.floor(interval) + " months ago";
        interval = seconds / 86400;
        if (interval > 1) return Math.floor(interval) + " days ago";
        interval = seconds / 3600;
        if (interval > 1) return Math.floor(interval) + " hours ago";
        interval = seconds / 60;
        if (interval > 1) return Math.floor(interval) + " minutes ago";
        return "just now";
    }

    // Function to fetch articles list and display them
    function fetchArticles() {
        fetch('../page_blog/articles/')
            .then(response => response.text())
            .then(data => {
                // Parse the HTML response into a document object
                const parser = new DOMParser();
                const htmlDoc = parser.parseFromString(data, 'text/html');
                const articleDates = Array.from(htmlDoc.querySelectorAll('a[href$="/"]')).map(a => a.getAttribute('href').replace('/', ''));
                
                // Iterate over each date directory and fetch articles
                articleDates.forEach(articleDate => {
                    fetch(`../page_blog/articles/${articleDate}/`)
                        .then(response => response.text())
                        .then(articleList => {
                            const parser = new DOMParser();
                            const articleListDoc = parser.parseFromString(articleList, 'text/html');
                            const articles = articleListDoc.querySelectorAll('a[href$=".html"]');
                            
                            articles.forEach(article => {
                                const articlePath = `page_blog/articles/${articleDate}/${article.getAttribute('href')}`;
                                const articleTitle = article.innerHTML;

                                // Create article preview item
                                const articleLink = document.createElement('a');
                                articleLink.href = '#';
                                articleLink.innerHTML = `
                                    <div class="article-item">
                                        <div class="article-info">
                                            <h3>${articleTitle}</h3>
                                            <p>${timeSince(new Date(articleDate))}</p>
                                        </div>
                                    </div>
                                `;
                                articleLink.addEventListener('click', (event) => {
                                    event.preventDefault();
                                    loadFullArticle(articlePath);
                                });

                                const listItem = document.createElement('div');
                                listItem.appendChild(articleLink);
                                articlesList.appendChild(listItem);
                            });
                        })
                        .catch(error => console.error('Error fetching article list:', error));
                });
            })
            .catch(error => console.error('Error fetching article dates:', error));
    }

    // Function to load and display full article content
    function loadFullArticle(articlePath) {
        // Redirect to the full article view
        window.location.href = `../page_blog/full-article.html?article=${articlePath}`;
    }
    // Fetch and display the list of articles
    fetchArticles();
});
