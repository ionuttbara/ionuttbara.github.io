// Enhanced Personal Website Application with JSON Support
// Fixed version with proper JSON loading and content discovery

class PersonalWebsite {
    constructor() {
        this.currentLanguage = 'en-US';
        this.currentPage = 'home';
        this.jsonCache = new Map();
        this.translations = this.initializeTranslations();
        this.init();
    }

    // Initialize the application
    init() {
        console.log('Initializing Personal Website Application...');
        document.addEventListener('DOMContentLoaded', () => {
            this.setupEventListeners();
            this.restorePageState();
            this.loadAllContent();
            this.calculateAge();
            setInterval(() => this.calculateAge(), 1000);
            console.log('Application initialized successfully');
        });
    }

    // Restore the last visited page from localStorage
    restorePageState() {
        const savedPage = localStorage.getItem('currentPage');
        const savedLanguage = localStorage.getItem('currentLanguage');

        if (savedLanguage && this.translations[savedLanguage]) {
            this.currentLanguage = savedLanguage;
        }

        if (savedPage) {
            this.currentPage = savedPage;
            this.showPage(savedPage);
        } else {
            this.showPage('home');
        }

        this.setLanguage(this.currentLanguage);
    }

    // Save current state to localStorage
    savePageState() {
        localStorage.setItem('currentPage', this.currentPage);
        localStorage.setItem('currentLanguage', this.currentLanguage);
    }

    // Enhanced translations with pricing support
    initializeTranslations() {
        return {
            'en-US': {
                siteName: "Ionut Bara's personal website",
                currency: "€",
                nav: {
                    home: 'Home',
                    about: 'About',
                    blog: 'Blog',
                    projects: 'Projects',
                    cv: 'My CV',
                    services: 'Services',
                    usdacm: 'USDACM',
                    devices: 'Device Setup',
                    downloads: 'Downloads',
                    contact: 'Contact',
                    tools: 'Tools'
                },
                home: {
                    title: 'Welcome to My Website',
                    subtitle: 'IT Department at Electricon & AI Student',
                    work: {
                        title: 'Professional Role',
                        description: 'IT Department at Electricon - Management IT and products, including electricon.ro website'
                    },
                    education: {
                        title: 'Education',
                        description: "Master's student in Artificial Intelligence at UMFST Tg Mures"
                    },
                    location: {
                        title: 'Location',
                        description: 'Living in Romania, Tg Mures, originally from Damuc, Neamt'
                    },
                    activism: {
                        title: 'Activism',
                        description: 'Anti-corruption activist in Damuc, against Anton Covasan and PSD Damuc'
                    },
                    viewProjects: 'View My Projects',
                    getInTouch: 'Get in Touch'
                },
                about: {
                    title: 'About Me',
                    subtitle: 'Learn more about my background and interests',
                    summary: "I'm a passionate IT professional working at Electricon, managing IT operations and products. Currently pursuing my Master's in Artificial Intelligence at UMFST Tg Mures. I'm also an active advocate against corruption in my hometown of Damuc, Neamt.",
                    ageLabel: 'I am',
                    yearsOld: 'years old',
                    faq: { title: 'Frequently Asked Questions' },
                    projects: { title: 'Featured Projects' }
                },
                devices: {
                    title: 'Device Setup',
                    subtitle: 'My current hardware specifications',
                    accessories: 'Accessories',
                    objectives: 'Objectives',
                    configuration: 'Configuration',
                    collection: { title: 'Device Collection' }
                },
                contact: {
                    title: 'Contact',
                    subtitle: 'Get in touch with me',
                    form: {
                        name: 'Full Name',
                        email: 'Email Address',
                        company: 'Company (Optional)',
                        phone: 'Phone Number (Optional)',
                        subject: 'Subject',
                        message: 'Your Message',
                        budget: 'Project Budget',
                        timeline: 'Expected Timeline',
                        send: 'Send Message'
                    },
                    info: { title: 'Contact Information' },
                    social: { title: 'Social Media' },
                    gaming: { title: 'Gaming Profiles' }
                },
                services: {
                    phoneAdmin: { base: "10", labor: "No labor cost" },
                    windowsInstallation: {
                        base: "15", customPrograms: "10", windowsOem: "included",
                        windowsPro: "7", windowsLtsc: "17", office: "10", adobe: "3"
                    },
                    networking: { laborPercent: "20", minimum: "4500" }
                }
            },
            'hu-HU': {
                siteName: "Ionut Bara személyes weboldala",
                currency: "€",
                nav: {
                    home: 'Kezdőlap', about: 'Rólam', blog: 'Blog', projects: 'Projektek',
                    cv: 'Önéletrajz', services: 'Szolgáltatások', usdacm: 'USDACM',
                    devices: 'Eszközök', downloads: 'Letöltések', contact: 'Kapcsolat', tools: 'Eszközök'
                },
                services: {
                    phoneAdmin: { base: "10", labor: "Nincs munkadíj" },
                    windowsInstallation: {
                        base: "15", customPrograms: "10", windowsOem: "benne van",
                        windowsPro: "7", windowsLtsc: "17", office: "10", adobe: "3"
                    },
                    networking: { laborPercent: "20", minimum: "4500" }
                }
            },
            'ro-RO': {
                siteName: "Site-ul personal al lui Ionut Bara",
                currency: "lei",
                nav: {
                    home: 'Acasă', about: 'Despre', blog: 'Blog', projects: 'Proiecte',
                    cv: 'CV-ul Meu', services: 'Servicii', usdacm: 'USDACM',
                    devices: 'Configurația Dispozitivelor', downloads: 'Descărcări',
                    contact: 'Contact', tools: 'Instrumente'
                },
                services: {
                    phoneAdmin: { base: "30", labor: "Fără cost manoperă" },
                    windowsInstallation: {
                        base: "45", customPrograms: "35", windowsOem: "inclus",
                        windowsPro: "20", windowsLtsc: "50", office: "30", adobe: "10"
                    },
                    networking: { laborPercent: "20", minimum: "25000" }
                }
            },
            'gall': {
                siteName: "Ionut Bara osobna stranica",
                currency: "€",
                nav: {
                    home: 'Početna', about: 'O meni', blog: 'Blog', projects: 'Projekti',
                    cv: 'Moj CV', services: 'Usluge', usdacm: 'USDACM',
                    devices: 'Konfiguracija uređaja', downloads: 'Preuzimanja',
                    contact: 'Kontakt', tools: 'Alati'
                },
                services: {
                    phoneAdmin: { base: "10", labor: "Bez troška rada" },
                    windowsInstallation: {
                        base: "15", customPrograms: "10", windowsOem: "uključeno",
                        windowsPro: "7", windowsLtsc: "17", office: "10", adobe: "3"
                    },
                    networking: { laborPercent: "20", minimum: "4500" }
                }
            }
        };
    }

    // Fixed JSON Data Loading System
    async loadJsonData(filename) {
        if (this.jsonCache.has(filename)) {
            return this.jsonCache.get(filename);
        }

        try {
            console.log(`Loading JSON: ${filename}`);
            // Try multiple path variations
            const paths = [
                `config/${filename}`,
                `/config/${filename}`,
                `./config/${filename}`
            ];

            for (const path of paths) {
                try {
                    const response = await fetch(path);
                    if (response.ok) {
                        const data = await response.json();
                        this.jsonCache.set(filename, data);
                        console.log(`Successfully loaded ${filename} from ${path}`);
                        return data;
                    }
                } catch (e) {
                    console.log(`Failed to load from ${path}:`, e.message);
                }
            }

            throw new Error(`Failed to load ${filename} from any path`);
        } catch (error) {
            console.error(`Error loading ${filename}:`, error);
            return null;
        }
    }

    // Enhanced blog file discovery
    async loadBlogFiles() {
        console.log('Loading blog files...');
        try {
            // First try to load index.json
            const blogIndex = await this.loadJsonData('../blog/index.json');
            if (blogIndex) {
                console.log('Loaded blog index:', blogIndex);
                return blogIndex;
            }

            // Fallback: Auto-discover HTML files
            console.log('Auto-discovering blog files...');
            const commonFiles = [
                'blog-1.html', 'blog-2.html', 'blog-3.html', 'blog-4.html', 'blog-5.html',
                'windows-optimization.html', 'ai-system-admin.html', 'tech-tips.html'
            ];
            
            const availableFiles = [];
            
            for (const file of commonFiles) {
                try {
                    const paths = [`blog/${file}`, `/blog/${file}`, `./blog/${file}`];
                    
                    for (const path of paths) {
                        try {
                            const response = await fetch(path);
                            if (response.ok) {
                                const content = await response.text();
                                const title = this.extractTitleFromHTML(content, file);
                                const excerpt = this.extractExcerptFromHTML(content);
                                
                                availableFiles.push({
                                    file: file,
                                    path: path,
                                    title: title,
                                    excerpt: excerpt,
                                    content: content
                                });
                                console.log(`Found blog file: ${path}`);
                                break;
                            }
                        } catch (e) {
                            continue;
                        }
                    }
                } catch (e) {
                    continue;
                }
            }

            console.log(`Discovered ${availableFiles.length} blog files`);
            return availableFiles;
        } catch (error) {
            console.error('Error loading blog files:', error);
            return [];
        }
    }

    // Enhanced USDACM file discovery
    async loadUsdacmFiles() {
        console.log('Loading USDACM files...');
        try {
            // First try to load index.json
            const usdacmIndex = await this.loadJsonData('../usdacm/index.json');
            if (usdacmIndex) {
                console.log('Loaded USDACM index:', usdacmIndex);
                return usdacmIndex;
            }

            // Fallback: Auto-discover HTML files
            console.log('Auto-discovering USDACM files...');
            const commonFiles = [
                'usdacm1.html', 'usdacm2.html', 'usdacm3.html', 'usdacm4.html', 'usdacm5.html',
                'digital-rights.html', 'corruption-analysis.html', 'political-commentary.html'
            ];
            
            const availableFiles = [];
            
            for (const file of commonFiles) {
                try {
                    const paths = [`usdacm/${file}`, `/usdacm/${file}`, `./usdacm/${file}`];
                    
                    for (const path of paths) {
                        try {
                            const response = await fetch(path);
                            if (response.ok) {
                                const content = await response.text();
                                const title = this.extractTitleFromHTML(content, file);
                                const excerpt = this.extractExcerptFromHTML(content);
                                
                                availableFiles.push({
                                    file: file,
                                    path: path,
                                    title: title,
                                    excerpt: excerpt,
                                    content: content
                                });
                                console.log(`Found USDACM file: ${path}`);
                                break;
                            }
                        } catch (e) {
                            continue;
                        }
                    }
                } catch (e) {
                    continue;
                }
            }

            console.log(`Discovered ${availableFiles.length} USDACM files`);
            return availableFiles;
        } catch (error) {
            console.error('Error loading USDACM files:', error);
            return [];
        }
    }

    // Extract title from HTML content
    extractTitleFromHTML(html, filename) {
        const titleMatch = html.match(/<title>(.*?)<\/title>/i) || 
                          html.match(/<h1[^>]*>(.*?)<\/h1>/i) ||
                          html.match(/<h2[^>]*>(.*?)<\/h2>/i);
        
        if (titleMatch) {
            return titleMatch[1].trim();
        }
        
        // Fallback to filename
        return filename.replace('.html', '').replace(/[-_]/g, ' ')
               .replace(/\b\w/g, l => l.toUpperCase());
    }

    // Extract excerpt from HTML content
    extractExcerptFromHTML(html) {
        // Remove HTML tags and get first paragraph
        const textContent = html.replace(/<[^>]*>/g, '').trim();
        const sentences = textContent.split('.').slice(0, 2);
        return sentences.join('.') + (sentences.length > 1 ? '.' : '');
    }

    // Enhanced event listeners setup
    setupEventListeners() {
        console.log('Setting up enhanced event listeners...');

        // Language selector
        const languageSelector = document.getElementById('languageSelector');
        if (languageSelector) {
            languageSelector.addEventListener('change', (e) => {
                this.setLanguage(e.target.value);
            });
        }

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', (e) => {
                e.preventDefault();
                mobileMenu.classList.toggle('active');
            });
        }

        // Navigation links with delegation
        document.addEventListener('click', (e) => {
            const navLink = e.target.closest('[data-page]');
            if (navLink) {
                e.preventDefault();
                const page = navLink.getAttribute('data-page');
                this.showPage(page);
                
                // Close mobile menu if open
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                }
            }
        });

        // Contact form with enhanced fields
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleContactForm(e));
        }

        // Modal events
        this.setupModalEvents();

        // Equipment price calculator
        this.setupPriceCalculators();

        // ESC key handling
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
                if (mobileMenu) {
                    mobileMenu.classList.remove('active');
                }
            }
        });

        // Beforeunload to save state
        window.addEventListener('beforeunload', () => {
            this.savePageState();
        });
    }

    // Enhanced modal setup
    setupModalEvents() {
        // Content modal
        const closeContentModal = document.getElementById('closeContentModal');
        const contentModalBackdrop = document.getElementById('contentModalBackdrop');
        
        if (closeContentModal) {
            closeContentModal.addEventListener('click', () => this.closeModal('contentModal'));
        }
        if (contentModalBackdrop) {
            contentModalBackdrop.addEventListener('click', () => this.closeModal('contentModal'));
        }

        // Accessories modal
        const closeAccessoriesModal = document.getElementById('closeAccessoriesModal');
        const accessoriesModalBackdrop = document.getElementById('accessoriesModalBackdrop');
        
        if (closeAccessoriesModal) {
            closeAccessoriesModal.addEventListener('click', () => this.closeModal('accessoriesModal'));
        }
        if (accessoriesModalBackdrop) {
            accessoriesModalBackdrop.addEventListener('click', () => this.closeModal('accessoriesModal'));
        }

        // Camera configuration modal
        const closeCameraModal = document.getElementById('closeCameraConfigModal');
        const cameraModalBackdrop = document.getElementById('cameraConfigModalBackdrop');
        
        if (closeCameraModal) {
            closeCameraModal.addEventListener('click', () => this.closeModal('cameraConfigModal'));
        }
        if (cameraModalBackdrop) {
            cameraModalBackdrop.addEventListener('click', () => this.closeModal('cameraConfigModal'));
        }
    }

    // Price calculator setup for services
    setupPriceCalculators() {
        // Windows installation price calculator
        const windowsForm = document.getElementById('windowsCalculator');
        if (windowsForm) {
            windowsForm.addEventListener('change', () => this.calculateWindowsPrice());
        }

        // Networking price calculator
        const equipmentPriceInput = document.getElementById('equipmentPrice');
        if (equipmentPriceInput) {
            equipmentPriceInput.addEventListener('input', () => this.calculateNetworkingPrice());
        }
    }

    // Calculate Windows installation price
    calculateWindowsPrice() {
        const form = document.getElementById('windowsCalculator');
        if (!form) return;

        const formData = new FormData(form);
        const services = this.translations[this.currentLanguage].services;
        const currency = this.translations[this.currentLanguage].currency;

        let total = parseFloat(services.windowsInstallation.base);

        // Windows license
        const windowsType = formData.get('windowsType');
        if (windowsType === 'pro') {
            total += parseFloat(services.windowsInstallation.windowsPro);
        } else if (windowsType === 'ltsc') {
            total += parseFloat(services.windowsInstallation.windowsLtsc);
        }

        // Office
        if (formData.get('office') === 'yes') {
            total += parseFloat(services.windowsInstallation.office);
        }

        // Adobe
        if (formData.get('adobe') === 'yes') {
            total += parseFloat(services.windowsInstallation.adobe);
        }

        // Custom programs
        const customPrograms = parseInt(formData.get('customPrograms') || '0');
        total += customPrograms * parseFloat(services.windowsInstallation.customPrograms);

        const totalDisplay = document.getElementById('windowsTotalPrice');
        if (totalDisplay) {
            totalDisplay.textContent = `${total} ${currency}`;
        }
    }

    // Calculate networking price
    calculateNetworkingPrice() {
        const equipmentPrice = parseFloat(document.getElementById('equipmentPrice').value || '0');
        const services = this.translations[this.currentLanguage].services;
        const currency = this.translations[this.currentLanguage].currency;
        const minimum = parseFloat(services.networking.minimum);

        if (equipmentPrice < minimum) {
            const errorDisplay = document.getElementById('networkingError');
            if (errorDisplay) {
                errorDisplay.textContent = `Minimum equipment cost: ${minimum} ${currency}`;
                errorDisplay.style.display = 'block';
            }
            return;
        }

        const laborPercent = parseFloat(services.networking.laborPercent) / 100;
        const laborCost = equipmentPrice * laborPercent;
        const total = equipmentPrice + laborCost;

        const laborDisplay = document.getElementById('networkingLaborCost');
        const totalDisplay = document.getElementById('networkingTotalPrice');
        const errorDisplay = document.getElementById('networkingError');

        if (laborDisplay) laborDisplay.textContent = `${laborCost.toFixed(2)} ${currency}`;
        if (totalDisplay) totalDisplay.textContent = `${total.toFixed(2)} ${currency}`;
        if (errorDisplay) errorDisplay.style.display = 'none';
    }

    // Enhanced page management
    showPage(pageId) {
        console.log('Showing page:', pageId);
        
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Show target page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            targetPage.classList.add('fade-in');
            this.currentPage = pageId;
            this.updateNavigation();
            this.savePageState();

            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Remove fade-in class after animation
            setTimeout(() => targetPage.classList.remove('fade-in'), 300);
        } else {
            console.error('Page not found:', pageId);
        }
    }

    // Language management
    setLanguage(languageCode) {
        console.log('Setting language to:', languageCode);
        this.currentLanguage = languageCode;

        const languageSelector = document.getElementById('languageSelector');
        if (languageSelector) {
            languageSelector.value = languageCode;
        }

        document.documentElement.setAttribute('lang', languageCode.split('-')[0]);
        document.documentElement.setAttribute('data-lang', languageCode);

        this.updateTranslations();
        this.loadAllContent();
        this.savePageState();
    }

    // Update all translatable elements
    updateTranslations() {
        const translation = this.translations[this.currentLanguage];
        if (!translation) {
            console.error('Translation not found for language:', this.currentLanguage);
            return;
        }

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            const value = this.getNestedValue(translation, key);
            if (value) {
                element.textContent = value;
            }
        });
    }

    // Update navigation active states
    updateNavigation() {
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === this.currentPage) {
                link.classList.add('active');
            }
        });
    }

    // Utility function to get nested object values
    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current && current[key], obj);
    }

    // Load all content from JSON files
    async loadAllContent() {
        console.log('Loading all content from JSON files...');
        try {
            await Promise.all([
                this.loadHomeContent(),
                this.loadFAQContent(),
                this.loadProjectsContent(),
                this.loadCVContent(),
                this.loadServicesContent(),
                this.loadDevicesContent(),
                this.loadDeviceCollectionContent(),
                this.loadDownloadsContent(),
                this.loadContactContent(),
                this.loadToolsContent(),
                this.loadBlogContent(),
                this.loadUsdacmContent()
            ]);
            console.log('All content loaded successfully');
        } catch (error) {
            console.error('Error loading content:', error);
        }
    }

    // Load home presentation badges
    async loadHomeContent() {
        // This can be expanded to load from JSON if needed
        // For now, using the existing structure
        console.log('Home content loaded');
    }

    // Load FAQ content
    async loadFAQContent() {
        const faqData = await this.loadJsonData('faq.json');
        if (!faqData) {
            console.log('FAQ data not found, using fallback');
            return;
        }

        const container = document.getElementById('faqList');
        if (!container) return;

        const questions = faqData[this.currentLanguage] || faqData['en-US'] || [];
        container.innerHTML = questions.map(item => `
            <div class="faq-item">
                <div class="faq-question">${item.question}</div>
                <div class="faq-answer">${item.answer}</div>
            </div>
        `).join('');
    }

    // Load projects content
    async loadProjectsContent() {
        const projectsData = await this.loadJsonData('projects.json');
        if (!projectsData) {
            console.log('Projects data not found, using fallback');
            return;
        }

        const container = document.getElementById('projectsGrid');
        const previewContainer = document.getElementById('projectsPreview');
        
        const projects = projectsData[this.currentLanguage] || projectsData['en-US'] || [];

        const projectHTML = projects.map(project => `
            <div class="project-card">
                <h3 class="project-title">${project.name}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-actions">
                    <a href="${project.github}" target="_blank" class="btn btn--primary">
                        <i class="fab fa-github btn-icon"></i>
                        View on GitHub
                    </a>
                    <span class="project-status">${project.status}</span>
                </div>
            </div>
        `).join('');

        if (container) container.innerHTML = projectHTML;
        if (previewContainer) previewContainer.innerHTML = projectHTML;
    }

    // Load CV content
    async loadCVContent() {
        const cvData = await this.loadJsonData('cv.json');
        if (!cvData) {
            console.log('CV data not found, using fallback');
            return;
        }

        const cv = cvData[this.currentLanguage] || cvData['en-US'];
        if (!cv) return;

        // Personal Info
        const personalInfoContainer = document.getElementById('cvPersonalInfo');
        if (personalInfoContainer) {
            personalInfoContainer.innerHTML = `
                <div class="cv-item">
                    <div class="contact-info">
                        <div class="contact-item">
                            <i class="fas fa-envelope contact-icon"></i>
                            <span>${cv.personalInfo.email}</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt contact-icon"></i>
                            <span>${cv.personalInfo.location}</span>
                        </div>
                    </div>
                </div>
            `;
        }

        // Education
        const educationContainer = document.getElementById('cvEducation');
        if (educationContainer) {
            educationContainer.innerHTML = cv.education.map(edu => `
                <div class="cv-item">
                    <h3>${edu.degree}</h3>
                    <div class="cv-institution">${edu.institution}</div>
                    <div class="cv-period">${edu.period}</div>
                </div>
            `).join('');
        }

        // Experience
        const experienceContainer = document.getElementById('cvExperience');
        if (experienceContainer) {
            experienceContainer.innerHTML = cv.experience.map(exp => `
                <div class="cv-item">
                    <h3>${exp.position}</h3>
                    <div class="cv-institution">${exp.company}</div>
                    <div class="cv-period">${exp.period}</div>
                    <p>${exp.description}</p>
                </div>
            `).join('');
        }

        // Skills
        const skillsContainer = document.getElementById('cvSkills');
        if (skillsContainer) {
            skillsContainer.innerHTML = cv.skills.map(skill => `
                <div class="skill-item">${skill}</div>
            `).join('');
        }
    }

    // Load services content
    async loadServicesContent() {
        const servicesData = await this.loadJsonData('services.json');
        if (!servicesData) {
            console.log('Services data not found, using fallback');
            return;
        }

        const container = document.getElementById('servicesGrid');
        if (!container) return;

        const services = servicesData[this.currentLanguage] || servicesData['en-US'] || [];
        const currency = this.translations[this.currentLanguage].currency;

        container.innerHTML = services.map(service => `
            <div class="service-card">
                <h3 class="service-title">${service.category}</h3>
                <p class="service-description">${service.description}</p>
                <div class="service-pricing">
                    <div class="price-item">
                        <span class="price-label">Base Price:</span>
                        <span class="price-value">${service.pricing.base}</span>
                    </div>
                    ${service.pricing.labor ? `
                        <div class="price-item">
                            <span class="price-label">Labor:</span>
                            <span class="price-value">${service.pricing.labor}</span>
                        </div>
                    ` : ''}
                </div>
                ${service.options ? `
                    <div class="service-options">
                        ${service.options.map(option => `
                            <div class="service-option">
                                <span>${option.name}</span>
                                <span>${option.price}</span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `).join('');
    }

    // Load devices content
    async loadDevicesContent() {
        const devicesData = await this.loadJsonData('devices.json');
        if (!devicesData) {
            console.log('Devices data not found, using fallback');
            return;
        }

        const container = document.getElementById('devicesGrid');
        if (!container) return;

        const devices = devicesData['en-US'] || [];

        container.innerHTML = devices.map(device => `
            <div class="device-card">
                <div class="device-header">
                    <i class="fas fa-${this.getDeviceIcon(device.icon)} device-icon"></i>
                    <h3 class="device-title">${device.model}</h3>
                </div>
                <div class="device-specs">
                    ${Object.entries(device.specs).map(([key, value]) => `
                        <div class="spec-item">
                            <span class="spec-label">${key}:</span>
                            <span class="spec-value">${value}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="device-actions">
                    ${device.accessories ? `
                        <button class="btn btn--secondary device-btn" onclick="website.showAccessories('${device.type}')">
                            <i class="fas fa-plug"></i> Accessories
                        </button>
                    ` : ''}
                    ${device.lenses ? `
                        <button class="btn btn--secondary device-btn" onclick="website.showObjectives('${device.type}')">
                            <i class="fas fa-camera"></i> Objectives
                        </button>
                    ` : ''}
                    ${device.type === 'Camera' ? `
                        <button class="btn btn--primary device-btn" onclick="website.showCameraConfig()">
                            <i class="fas fa-cog"></i> Configuration
                        </button>
                    ` : ''}
                </div>
            </div>
        `).join('');
    }

    // Load device collection content
    async loadDeviceCollectionContent() {
        const deviceCollectionData = await this.loadJsonData('device-collection.json');
        if (!deviceCollectionData) {
            console.log('Device collection data not found, using fallback');
            return;
        }

        const container = document.getElementById('deviceCollection');
        if (!container) return;

        const collection = deviceCollectionData[this.currentLanguage] || deviceCollectionData['en-US'] || [];

        container.innerHTML = `
            <h2>Device Collection</h2>
            <div class="device-collection-grid">
                ${collection.map(item => `
                    <div class="collection-item">
                        <i class="fas fa-${this.getDeviceIcon(item.icon)} collection-icon"></i>
                        <div class="collection-name">${item.name}</div>
                        <p>${item.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Load downloads content
    async loadDownloadsContent() {
        const downloadsData = await this.loadJsonData('downloads.json');
        if (!downloadsData) {
            console.log('Downloads data not found, using fallback');
            return;
        }

        const container = document.getElementById('downloadsGrid');
        if (!container) return;

        const downloads = downloadsData[this.currentLanguage] || downloadsData['en-US'] || [];

        container.innerHTML = downloads.map(download => `
            <div class="download-card">
                <div class="download-header">
                    <i class="fas fa-download download-icon"></i>
                    <h3 class="download-title">${download.name}</h3>
                </div>
                <p class="download-description">${download.description}</p>
                <div class="download-meta">
                    <span>Version: ${download.version}</span>
                    <span>Size: ${download.size}</span>
                </div>
                <a href="${download.downloadUrl}" target="_blank" class="btn btn--primary">
                    <i class="fas fa-download"></i> Download
                </a>
            </div>
        `).join('');
    }

    // Load contact content
    async loadContactContent() {
        const contactData = await this.loadJsonData('contact.json');
        if (!contactData) {
            console.log('Contact data not found, using fallback');
            return;
        }

        const socialContainer = document.getElementById('socialMediaLinks');
        const gamingContainer = document.getElementById('gamingProfiles');
        
        if (socialContainer && contactData.socialMedia) {
            socialContainer.innerHTML = contactData.socialMedia.map(social => `
                <a href="${social.url}" target="_blank" class="social-link" ${social.warning ? `onclick="return confirm('${social.warning}')"` : ''}>
                    <i class="fab fa-${social.icon} social-link-icon"></i>
                    <div>
                        <div>${social.name}</div>
                        <div style="font-size: 0.875rem; opacity: 0.7;">${social.username}</div>
                    </div>
                </a>
            `).join('');
        }

        if (gamingContainer && contactData.gamingProfiles) {
            gamingContainer.innerHTML = `
                <h3>Gaming Profiles</h3>
                <div class="social-media-links">
                    ${contactData.gamingProfiles.map(profile => `
                        <div class="social-link">
                            <i class="fas fa-gamepad social-link-icon"></i>
                            <div>
                                <div>${profile.platform}</div>
                                <div style="font-size: 0.875rem; opacity: 0.7;">${profile.username}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    }

    // Load tools content
    async loadToolsContent() {
        const toolsData = await this.loadJsonData('tools.json');
        if (!toolsData) {
            console.log('Tools data not found, using fallback');
            return;
        }

        const container = document.getElementById('toolsGrid');
        if (!container) return;

        const tools = toolsData[this.currentLanguage] || toolsData['en-US'] || [];

        container.innerHTML = tools.map(tool => `
            <div class="tool-card">
                <div class="tool-header">
                    <i class="fas fa-${tool.icon} tool-icon"></i>
                    <h3 class="tool-title">${tool.name}</h3>
                </div>
                <p class="tool-description">${tool.description}</p>
                <a href="${tool.url}" target="_blank" class="btn btn--primary">
                    <i class="fas fa-external-link-alt"></i> Open Tool
                </a>
            </div>
        `).join('');
    }

    // Load blog content
    async loadBlogContent() {
        const blogFiles = await this.loadBlogFiles();
        const container = document.getElementById('blogList');
        
        if (!container || !blogFiles.length) {
            console.log('No blog content found');
            return;
        }

        container.innerHTML = blogFiles.map(post => `
            <div class="blog-post-preview" onclick="website.showBlogPost('${post.file}')">
                <h3 class="blog-post-title">${post.title}</h3>
                <p class="blog-post-excerpt">${post.excerpt}</p>
                <div class="blog-read-more">Read More →</div>
            </div>
        `).join('');
    }

    // Load USDACM content
    async loadUsdacmContent() {
        const usdacmFiles = await this.loadUsdacmFiles();
        const container = document.getElementById('usdacmList');
        
        if (!container || !usdacmFiles.length) {
            console.log('No USDACM content found');
            return;
        }

        container.innerHTML = usdacmFiles.map(post => `
            <div class="blog-post-preview" onclick="website.showUsdacmPost('${post.file}')">
                <h3 class="blog-post-title">${post.title}</h3>
                <p class="blog-post-excerpt">${post.excerpt}</p>
                <div class="blog-read-more">Read More →</div>
            </div>
        `).join('');
    }

    // Show blog post in modal
    async showBlogPost(filename) {
        const blogFiles = await this.loadBlogFiles();
        const post = blogFiles.find(p => p.file === filename);
        
        if (!post) return;

        const modal = document.getElementById('contentModal');
        const titleElement = document.getElementById('contentModalTitle');
        const bodyElement = document.getElementById('contentModalBody');

        if (titleElement) titleElement.textContent = post.title;
        if (bodyElement) bodyElement.innerHTML = post.content;
        if (modal) modal.classList.remove('hidden');
    }

    // Show USDACM post in modal
    async showUsdacmPost(filename) {
        const usdacmFiles = await this.loadUsdacmFiles();
        const post = usdacmFiles.find(p => p.file === filename);
        
        if (!post) return;

        const modal = document.getElementById('contentModal');
        const titleElement = document.getElementById('contentModalTitle');
        const bodyElement = document.getElementById('contentModalBody');

        if (titleElement) titleElement.textContent = post.title;
        if (bodyElement) bodyElement.innerHTML = post.content;
        if (modal) modal.classList.remove('hidden');
    }

    // Show accessories modal
    showAccessories(deviceType) {
        // Implementation for showing accessories
        console.log('Showing accessories for:', deviceType);
    }

    // Show objectives modal  
    showObjectives(deviceType) {
        // Implementation for showing objectives/lenses
        console.log('Showing objectives for:', deviceType);
    }

    // Show camera configuration modal
    showCameraConfig() {
        // Implementation for camera configuration
        console.log('Showing camera configuration');
    }

    // Close modal
    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    // Close all modals
    closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.add('hidden');
        });
    }

    // Handle contact form submission
    handleContactForm(e) {
        e.preventDefault();
        // Implementation for form handling
        console.log('Contact form submitted');
    }

    // Get device icon
    getDeviceIcon(iconType) {
        const iconMap = {
            laptop: 'laptop',
            phone: 'mobile-alt',
            tablet: 'tablet-alt',
            desktop: 'desktop',
            'old-pc': 'computer',
            camera: 'camera',
            server: 'server',
            router: 'wifi',
            storage: 'hdd',
            vr: 'vr-cardboard',
            playstation: 'gamepad'
        };
        return iconMap[iconType] || 'microchip';
    }

    // Calculate age
    calculateAge() {
        const birthDate = new Date('2002-12-18');
        const now = new Date();
        const diffTime = Math.abs(now - birthDate);
        const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
        const age = Math.floor(diffYears);

        const currentAge = document.getElementById('currentAge');
        if (currentAge) {
            currentAge.textContent = age;
        }
    }
}

// Initialize the website
const website = new PersonalWebsite();