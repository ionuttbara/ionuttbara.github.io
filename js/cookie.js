document.addEventListener('DOMContentLoaded', function() {
    const languageSwitchBtn = document.getElementById('languageSwitchBtn');
    const defaultLanguage = 'en'; // Set your default language code here
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookiesBtn = document.getElementById('acceptCookiesBtn');
    const privacyPolicyLink = document.querySelector('#cookieConsent a');

    // Event listener for accept cookies button
    acceptCookiesBtn.addEventListener('click', function() {
        setCookie('cookiesAccepted', true, 365); // Set cookie for 365 days
        cookieConsent.style.display = 'none';
        checkCookie();
    });

    // Event listener for language switch button
    languageSwitchBtn.addEventListener('click', function() {
        const currentLanguage = getCookie('lang') || defaultLanguage;
        const nextLanguage = currentLanguage === 'en' ? 'fr' : 'en'; // Example toggle between English ('en') and French ('fr')

        // Save the selected language to a cookie
        setCookie('lang', nextLanguage, 365); // Cookie expiration set to 365 days

        // Load the language resources for the selected language
        loadLanguageResources(nextLanguage);
    });

    // Function to check if the user has accepted cookies
    function checkCookiesAccepted() {
        return getCookie('cookiesAccepted') === 'true';
    }

    // Function to show the cookie consent dialog if cookies are not accepted
    function showCookieConsent() {
        if (!checkCookiesAccepted()) {
            cookieConsent.style.display = 'block';
        }
    }

    // Function to load language resources
    function loadLanguageResources(language) {
        // Fetch language JSON file based on the selected language
        fetch(`../langs/${language}.json`)
            .then(response => response.json())
            .then(data => {
                // Update text content of website elements using the language resources
                const elements = document.querySelectorAll('[data-lang-key]');
                elements.forEach(element => {
                    const key = element.getAttribute('data-lang-key');
                    if (data[key]) {
                        element.textContent = data[key];
                    }
                });

                // Update language switcher button text
                languageSwitchBtn.textContent = language.toUpperCase(); // Update button text to show the current language
            })
            .catch(error => console.error('Error loading language resources:', error));
    }

    // Function to retrieve a cookie value
    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName.trim() === name) {
                return cookieValue;
            }
        }
        return null;
    }

    // Function to set a cookie value
    function setCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = `expires=${date.toUTCString()};`;
        }
        document.cookie = `${name}=${value};${expires}path=/`;
    }

    // Function to check if the cookie is set
    function checkCookie() {
        const userLang = getCookie('lang');
        if (userLang) {
            loadLanguageResources(userLang);
        } else {
            // Load the default language resources
            loadLanguageResources(defaultLanguage);
        }
    }

    // Check if cookie is already set and load the corresponding language
    checkCookie();

    // Show the cookie consent dialog on page load if cookies are not accepted
    showCookieConsent();
});
