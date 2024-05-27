function fetchArticles() {
    fetch('../page_blog/articles/')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(data, 'text/html');
            const articles = htmlDoc.querySelectorAll('a[href$=".html"]');

            articles.forEach(article => {
                const articlePath = article.getAttribute('href');
                const articleDate = articlePath.split('/')[2];
                const articleTitle = article.innerHTML;

                // Fetch each article content
                fetchArticleContent(articlePath, articleDate, articleTitle);
            });
        })
        .catch(error => console.error('Error fetching articles:', error));
}

function fetchArticleContent(articlePath, articleDate, articleTitle) {
    fetch(`../page_blog/${articlePath}`)
        .then(response => response.text())
        .then(articleContent => {
            // Parse the individual article content
            const articleParser = new DOMParser();
            const articleDoc = articleParser.parseFromString(articleContent, 'text/html');

            // Extract title, preview text, and image if available
            const articleTitle = articleDoc.title;
            const articlePreview = articleDoc.querySelector('p').textContent;
            const articleImage = articleDoc.querySelector('img');

            // Create article preview item
            const articleLink = document.createElement('a');
            articleLink.href = '#';
            articleLink.innerHTML = `
                <div class="article-item" data-date="${articleDate}">
                    ${articleImage ? `<img src="${articleImage.src}" alt="${articleImage.alt}">` : ''}
                    <div class="article-info">
                        <h3>${articleTitle}</h3>
                        <p>${articlePreview}</p>
                    </div>
                </div>
            `;
            articleLink.addEventListener('click', (event) => {
                event.preventDefault();
                loadArticle(articlePath);
            });

            const articlesList = document.getElementById('articles-list');
            const listItem = document.createElement('div');
            listItem.appendChild(articleLink);
            articlesList.appendChild(listItem);
        })
        .catch(error => console.error('Error fetching individual article:', error));
}

function loadArticle(path) {
    fetch(`../page_blog/${path}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('article-content').innerHTML = data;
            document.getElementById('articles-list').style.display = 'none';
            document.getElementById('article-content').style.display = 'block';
        })
        .catch(error => console.error('Error fetching article:', error));
}

function showFullArticle(articlePath, articleDate) {
    fetch(`../page_blog/${articlePath}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('full-article-content').innerHTML = data;
            document.getElementById('blog-section').style.display = 'none';
            document.getElementById('full-article').style.display = 'block';
            handleArticleNavigation(articlePath, articleDate);
        })
        .catch(error => console.error('Error fetching full article:', error));
}

function handleArticleNavigation(currentArticlePath, currentArticleDate) {
    const articlesList = document.getElementById('articles-list');
    const articles = Array.from(articlesList.children);
    const currentIndex = articles.findIndex(article => {
        const articlePath = article.querySelector('a').getAttribute('href').replace('../', '');
        return articlePath === currentArticlePath;
    });

    // Previous article
    const prevIndex = (currentIndex === 0) ? articles.length - 1 : currentIndex - 1;
    const prevArticlePath = articles[prevIndex].querySelector('a').getAttribute('href').replace('../', '');
    document.getElementById('prevArticleBtn').addEventListener('click', () => {
        showFullArticle(prevArticlePath, articles[prevIndex].getAttribute('data-date'));
    });
    document.getElementById('prevArticleBtnBottom').addEventListener('click', () => {
        showFullArticle(prevArticlePath, articles[prevIndex].getAttribute('data-date'));
    });

    // Next article
    const nextIndex = (currentIndex === articles.length - 1) ? 0 : currentIndex + 1;
    const nextArticlePath = articles[nextIndex].querySelector('a').getAttribute('href').replace('../', '');
    document.getElementById('nextArticleBtn').addEventListener('click', () => {
        showFullArticle(nextArticlePath, articles[nextIndex].getAttribute('data-date'));
    });
    document.getElementById('nextArticleBtnBottom').addEventListener('click', () => {
        showFullArticle(nextArticlePath, articles[nextIndex].getAttribute('data-date'));
    });

    // Back to Blog button
    document.getElementById('backToBlogBtn').addEventListener('click', () => {
        document.getElementById('full-article').style.display = 'none';
        document.getElementById('blog-section').style.display = 'block';
    });
    document.getElementById('backToBlogBtnBottom').addEventListener('click', () => {
        document.getElementById('full-article').style.display = 'none';
        document.getElementById('blog-section').style.display = 'block';
    });
}

// Export functions for testing purposes
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        fetchArticles,
        loadArticle,
        showFullArticle,
        handleArticleNavigation
    };
}
