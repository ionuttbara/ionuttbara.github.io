// --- Global State ---
let currentLanguage = localStorage.getItem('currentLanguage') || 'en-US';
let currentPage = localStorage.getItem('currentPage') || 'home';
let cachedData = {}; // Cache for JSON data
let allDownloadsData = []; // Store data for searching
let downloadLinkMap = {}; // Dynamic link map
let globalDeviceData = []; // Store device data for modal access
let iconCollection = {}; // Store fetched icons
let servicesDataCache = []; // Store services data for calculators

// --- Initialization ---

document.addEventListener('DOMContentLoaded', async () => {
    console.log('App Initializing...');
    
    // Set initial state
    document.documentElement.setAttribute('lang', currentLanguage.split('-')[0]);
    document.documentElement.setAttribute('data-lang', currentLanguage);
    const langSelector = document.getElementById('languageSelector');
    if(langSelector) langSelector.value = currentLanguage;

    calculateAge();
    setInterval(calculateAge, 60000); // Check every minute
    
    setupEventListeners();
    
    // Load essential data first
    await loadIcons();
    await loadTranslations();
    
    // Load content for the active page
    await loadPageContent(currentPage);
    
    // Show the page
    showPage(currentPage);
});

// --- Core Data Fetching ---

async function fetchJSON(filename) {
    if (cachedData[filename]) return cachedData[filename];
    try {
        const response = await fetch(`data/${filename}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        cachedData[filename] = data;
        return data;
    } catch (error) {
        console.error(`Could not load ${filename}:`, error);
        return null;
    }
}

async function loadIcons() {
    const icons = await fetchJSON('icon-collection.json');
    if (icons) {
        iconCollection = icons;
    }
}

async function loadTranslations() {
    // Basic UI translations that don't require a full JSON file
    const uiData = {
        'en-US': { siteName: "Ionut Bara", nav: { home: "Home", about: "About", blog: "Blog", projects: "Projects", cv: "CV", services: "Services", usdacm: "USDACM", devices: "Devices", downloads: "Downloads", tools: "Tools", contact: "Contact" } },
        'ro-RO': { siteName: "Ionut Bara", nav: { home: "Acasă", about: "Despre", blog: "Blog", projects: "Proiecte", cv: "CV", services: "Servicii", usdacm: "USDACM", devices: "Dispozitive", downloads: "Descărcări", tools: "Unelte", contact: "Contact" } },
        'gall': { siteName: "Ionut Bara", nav: { home: "Početna", about: "O meni", blog: "Blog", projects: "Projekti", cv: "CV", services: "Usluge", usdacm: "USDACM", devices: "Uređaji", downloads: "Preuzimanja", tools: "Alati", contact: "Kontakt" } }
    };
    updateUIText(uiData[currentLanguage]);
}

function updateUIText(data) {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        // Simple dot notation walker
        const val = key.split('.').reduce((obj, i) => obj ? obj[i] : null, data);
        if (val) el.textContent = val;
    });
}

// --- Content Routing ---

async function loadPageContent(page) {
    switch (page) {
        case 'about': await loadAbout(); break;
        case 'projects': await loadProjects(); break;
        case 'cv': await loadCV(); break;
        case 'blog': await loadBlog(); break;
        case 'usdacm': await loadUSDACM(); break;
        case 'services': await loadServices(); break;
        case 'devices': await loadDevices(); break;
        case 'downloads': await loadDownloads(); break;
        case 'tools': await loadTools(); break;
        case 'contact': await loadContact(); break;
    }
}

// --- Section Loaders (Standard) ---

async function loadAbout() {
    const data = await fetchJSON('about.json');
    if (!data) return;
    const content = data[currentLanguage] || data['en-US'];
    
    const summaryEl = document.querySelector('[data-key="about.summary"]');
    if (summaryEl) summaryEl.textContent = content.summary;

    const faqContainer = document.getElementById('faqContainer');
    if (faqContainer && content.faq) {
        faqContainer.innerHTML = content.faq.map(item => `
            <div class="faq-item">
                <div class="faq-question">${item.question}</div>
                <div class="faq-answer">${item.answer}</div>
            </div>
        `).join('');
    }
}

async function loadProjects() {
    const data = await fetchJSON('projects.json');
    if (!data) return;
    const projects = data[currentLanguage] || data['en-US'];
    const container = document.getElementById('projectsContainer');
    
    if (container) {
        container.innerHTML = projects.map(p => {
            // 1. Determine Status Badge Style
            let statusColor = 'var(--color-text-secondary)';
            let statusBg = 'var(--color-bg-2)';
            
            const status = p.status || 'Active';
            if (['Active', 'Activ', 'Aktivan'].includes(status)) {
                statusColor = 'var(--color-success)';
                statusBg = 'rgba(var(--color-success-rgb), 0.1)';
            } else if (['Production', 'Producție', 'Produkcija', 'Completed', 'Finalizat', 'Završeno'].includes(status)) {
                 statusColor = '#3b82f6'; // Blue
                 statusBg = 'rgba(59, 130, 246, 0.1)';
            } else if (['Private', 'Privat', 'Privatno'].includes(status)) {
                 statusColor = 'var(--color-warning)'; // Orange/Yellow
                 statusBg = 'rgba(var(--color-warning-rgb), 0.1)';
            } else if (['Archived', 'Arhivat', 'Arhivirano'].includes(status)) {
                 statusColor = 'var(--color-text-secondary)';
                 statusBg = 'var(--color-bg-1)';
            }

            const statusBadge = `<span style="display: inline-block; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; color: ${statusColor}; background: ${statusBg}; margin-bottom: 10px;">${status}</span>`;

            // 2. Determine Action Button
            let actionBtn = '';
            let extraBtn = ''; // For special cases like Rust variant

            // Logic for Rust Code Variant button for specific projects
            if (['Proiect Anatolia', 'Project Anatolia', 'Projekat Anatolia', 'Proiect Krotos', 'Project Krotos', 'Projekat Krotos'].includes(p.name)) {
                extraBtn = `<a href="#" class="btn btn--secondary btn--sm" style="margin-left: 5px;"><i class="btn-icon" data-lucide="code-2"></i> Rust Code</a>`;
            }
            
            if (['Private', 'Privat', 'Privatno'].includes(status)) {
                actionBtn = `<span class="btn btn--secondary btn--sm" style="cursor: default; opacity: 0.8; background: var(--color-bg-2);"><i class="btn-icon" data-lucide="lock"></i> Internal Project</span>`;
            } else if (p.github && p.github.includes('electricon.ro')) {
                 actionBtn = `<a href="${p.github}" target="_blank" class="btn btn--outline btn--sm"><i class="btn-icon" data-lucide="briefcase"></i> Visit Company Site</a>`;
            } else if (p.github && p.github.includes('github.com')) {
                actionBtn = `<a href="${p.github}" target="_blank" class="btn btn--primary btn--sm"><i class="btn-icon" data-lucide="github"></i> View on GitHub</a>`;
            } else if (p.github) {
                actionBtn = `<a href="${p.github}" target="_blank" class="btn btn--outline btn--sm"><i class="btn-icon" data-lucide="external-link"></i> View Project</a>`;
            } else {
                 actionBtn = `<span class="btn btn--secondary btn--sm" style="cursor: default; opacity: 0.5;">No Link Available</span>`;
            }

            return `
            <div class="project-card">
                <div style="display:flex; justify-content:space-between; align-items:start;">
                    <h3 class="project-title">${p.name}</h3>
                    ${statusBadge}
                </div>
                <p class="project-description">${p.description}</p>
                <div class="project-tech">
                    ${p.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
                <div class="project-actions" style="display: flex; flex-wrap: wrap; gap: 5px;">
                    ${actionBtn}
                    ${extraBtn}
                </div>
            </div>`;
        }).join('');
        
        lucide.createIcons();
    }
}


async function loadCV() {
    const data = await fetchJSON('cv.json');
    if (!data) return;

    const cv = data[currentLanguage] || data['en-US'];
    const container = document.getElementById('cvContainer');

    if (container) {
        const emailsHtml = cv.personalInfo.emails.map(email => 
            `<div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                <i data-lucide="mail" style="width:16px; color:var(--color-primary)"></i> 
                <a href="mailto:${email}" style="color:var(--color-text)">${email}</a>
             </div>`
        ).join('');

        const locationsHtml = cv.personalInfo.locations.map(loc => 
            `<div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                <i data-lucide="map-pin" style="width:16px; color:var(--color-primary)"></i> ${loc}
             </div>`
        ).join('');

        container.innerHTML = `
            <div class="cv-section">
                <h2><i data-lucide="user" style="margin-right:10px;"></i> Personal Information</h2>
                <div class="cv-item" style="border:none;">
                    <h3 style="font-size:1.8rem; margin-bottom:15px;">${cv.personalInfo.name}</h3>
                    
                    <div style="display:grid; gap:20px; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
                        <div>
                            <h4 style="font-size:0.9rem; color:var(--color-text-secondary); margin-bottom:8px; text-transform:uppercase;">Locations</h4>
                            ${locationsHtml}
                        </div>
                        <div>
                            <h4 style="font-size:0.9rem; color:var(--color-text-secondary); margin-bottom:8px; text-transform:uppercase;">Contact</h4>
                            ${emailsHtml}
                            <div style="margin-top:10px;">
                                <a href="tel:${cv.personalInfo.phone}" class="btn btn--primary btn--sm">
                                    <i class="btn-icon" data-lucide="phone"></i> Call Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cv-section">
                <h2><i data-lucide="graduation-cap" style="margin-right:10px;"></i> Education</h2>
                ${cv.education.map(edu => `
                    <div class="cv-item">
                        <div style="display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap;">
                            <h3 style="color:var(--color-primary);">${edu.degree}</h3>
                            <span class="cv-period" style="background:var(--color-bg-2); padding:2px 8px; border-radius:12px;">${edu.period}</span>
                        </div>
                        <p class="cv-institution" style="font-weight:bold; margin-top:5px;">${edu.institution}</p>
                        ${edu.address ? `<p style="font-size:0.9em; color:var(--color-text-secondary); margin-bottom:8px;"><i data-lucide="map-pin" style="width:12px;"></i> ${edu.address}</p>` : ''}
                        
                        ${edu.grade ? `<p><strong>Grade:</strong> ${edu.grade} ${edu.projectGrade ? `(Project: ${edu.projectGrade})` : ''}</p>` : ''}
                        ${edu.projectTitle ? `<p style="margin-top:5px; font-style:italic;">"${edu.projectTitle}"</p>` : ''}
                    </div>
                `).join('')}
            </div>

            <div class="cv-section">
                <h2><i data-lucide="briefcase" style="margin-right:10px;"></i> Experience</h2>
                ${cv.experience.map(exp => {
                    let duration = "";
                    // Check if this is the current Electricon job to calculate duration
                    if ((exp.company.includes("Electricon") || exp.company.includes("Elektricon")) && exp.period.includes("Present") || exp.period.includes("Prezent") || exp.period.includes("Danas")) {
                        duration = `(${calculateJobDuration("2024-10-01")})`;
                    }
                    
                    return `
                    <div class="cv-item">
                        <div style="display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap;">
                            <h3 style="color:var(--color-primary);">${exp.position}</h3>
                            <span class="cv-period" style="background:var(--color-bg-2); padding:2px 8px; border-radius:12px;">${exp.period} ${duration}</span>
                        </div>
                        <p class="cv-institution" style="font-weight:bold; margin-top:5px;">${exp.company}</p>
                        ${exp.address ? `<p style="font-size:0.9em; color:var(--color-text-secondary); margin-bottom:8px;"><i data-lucide="map-pin" style="width:12px;"></i> ${exp.address}</p>` : ''}
                        <p style="margin-top:8px; line-height:1.6;">${exp.description}</p>
                    </div>`;
                }).join('')}
            </div>

            <div class="cv-section">
                <h2><i data-lucide="code" style="margin-right:10px;"></i> Skills</h2>
                <div class="skills-grid">
                    ${cv.skills.map(skill => `<div class="skill-item">${skill}</div>`).join('')}
                </div>
            </div>
            
            <div class="cv-section">
                <h2><i data-lucide="award" style="margin-right:10px;"></i> Certificates</h2>
                <div class="skills-grid">
                    ${cv.certificates ? cv.certificates.map(cert => `<div class="skill-item">${cert}</div>`).join('') : ''}
                </div>
            </div>
            
             <div class="cv-section">
                <h2><i data-lucide="languages" style="margin-right:10px;"></i> Languages</h2>
                <div class="skills-grid">
                    ${cv.languages ? cv.languages.map(lang => `<div class="skill-item">${lang}</div>`).join('') : ''}
                </div>
            </div>
        `;
        lucide.createIcons();
    }
}


function calculateJobDuration(startDateString) {
    const start = new Date(startDateString); 
    const now = new Date();
    let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    
    if (months < 1) return currentLanguage === 'ro-RO' ? 'Mai puțin de o lună' : 'Less than a month';
    
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    let result = "";
    if (years > 0) {
        result += `${years} ${years === 1 ? (currentLanguage === 'ro-RO' ? 'an' : 'year') : (currentLanguage === 'ro-RO' ? 'ani' : 'years')}`;
    }
    if (remainingMonths > 0) {
        if (result) result += " ";
        result += `${remainingMonths} ${remainingMonths === 1 ? (currentLanguage === 'ro-RO' ? 'lună' : 'month') : (currentLanguage === 'ro-RO' ? 'luni' : 'months')}`;
    }
    return result;
}
async function loadBlog() {
    const data = await fetchJSON('blog.json');
    if (!data) return;
    const posts = data[currentLanguage] || data['en-US'];
    const container = document.getElementById('blogContainer');

    if (container) {
        container.innerHTML = posts.map(post => `
            <div class="blog-post-preview" onclick="fetchAndShowContent('${post.title}', '${post.file}')">
                <h3 class="blog-post-title">${post.title}</h3>
                <p class="blog-post-excerpt">${post.excerpt}</p>
                <span class="blog-read-more">Read More</span>
            </div>
        `).join('');
    }
}

async function loadUSDACM() {
    const data = await fetchJSON('usdacm.json');
    if (!data) return;
    const posts = data[currentLanguage] || data['en-US'];
    const container = document.getElementById('usdacmContainer');

    if (container) {
        container.innerHTML = posts.map(post => `
            <div class="blog-post-preview" onclick="fetchAndShowContent('${post.title}', '${post.file}')">
                <h3 class="blog-post-title">${post.title}</h3>
                <p class="blog-post-excerpt">${post.excerpt}</p>
                <span class="blog-read-more">Read More</span>
            </div>
        `).join('');
    }
}

// --- Special Content Loader (Text + Scripts) ---

async function fetchAndShowContent(title, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error('Content not found');
        const htmlContent = await response.text();
        
        const modal = document.getElementById('contentModal');
        document.getElementById('contentModalTitle').textContent = title;
        const body = document.getElementById('contentModalBody');
        body.innerHTML = htmlContent;
        
        // Execute scripts embedded in fetched HTML (Essential for Tools)
        const scripts = body.getElementsByTagName("script");
        for (let i = 0; i < scripts.length; i++) {
            eval(scripts[i].innerText);
        }

        modal.classList.remove('hidden');
        if(window.lucide) window.lucide.createIcons();
    } catch (e) {
        console.error(e);
        showContentModal('Error', '<p>Could not load content.</p>');
    }
}

// --- Services Logic (Calculators) ---

async function loadServices() {
    const data = await fetchJSON('services.json');
    if (!data) return;
    const services = data[currentLanguage] || data['en-US'];
    servicesDataCache = services; 

    const container = document.getElementById('servicesContainer');
    if(container) {
        container.innerHTML = services.map(service => `
            <div class="service-card">
                <h3 class="service-title">${service.category}</h3>
                <p class="service-description">${service.description}</p>
                ${service.warranty ? `<div class="status status--info" style="margin-bottom: 12px; width: fit-content;"><i data-lucide="shield-check" style="width: 14px; height: 14px; margin-right: 6px;"></i>${service.warranty}</div>` : ''}
                ${service.calculator ? generateServiceCalculator(service) : `
                    <div class="service-pricing">
                        ${Object.entries(service.pricing).map(([key, value]) => `
                            <div class="price-item">
                                <span class="price-label">${key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                                <span class="price-value">${value}</span>
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>
        `).join('');
        
        setupCalculatorListeners();
        lucide.createIcons();
    }
}

function generateServiceCalculator(service) {
    const currency = currentLanguage === 'ro-RO' ? 'lei' : '€';

    if (service.id === 'osInstallation') {
        let programOptions = '';
        for(let i = 0; i <= 20; i++) { programOptions += `<option value="${i}">${i}</option>`; }

        return `
        <div class="service-calculator">
            <h4>${currentLanguage === 'ro-RO' ? 'Configurator Software' : 'Software Configurator'}</h4>
            <div class="calculator-options">
                <div class="form-group">
                    <label class="form-label">OS Type:</label>
                    <div style="display: flex; gap: 10px;">
                        ${service.options.osFamily.map(os => `
                            <label class="radio-label" style="display:flex; align-items:center; gap:5px; cursor:pointer;">
                                <input type="radio" name="osFamily" value="${os.id}" ${os.id === 'win' ? 'checked' : ''} onchange="toggleWindowsOptions(this.value)">
                                ${os.name}
                            </label>
                        `).join('')}
                    </div>
                </div>

                <div class="form-group" id="winVerGroup">
                    <label class="form-label">Windows Version:</label>
                    <select class="form-control" id="windowsVersion">
                        ${service.options.windowsVersions.map(opt => `<option value="${opt.price}" data-name="${opt.name}">${opt.name} (+${opt.price}${currency})</option>`).join('')}
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label">Office:</label>
                    <select class="form-control" id="officeVersion">
                        ${service.options.office.map(opt => `<option value="${opt.price}" data-name="${opt.name}">${opt.name} ${opt.price > 0 ? `(+${opt.price}${currency})` : ''}</option>`).join('')}
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label">Adobe:</label>
                    <select class="form-control" id="adobeVersion">
                        ${service.options.adobe.map(opt => `<option value="${opt.price}" data-name="${opt.name}">${opt.name} ${opt.price > 0 ? `(+${opt.price}${currency})` : ''}</option>`).join('')}
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label">AutoCAD:</label>
                    <select class="form-control" id="autocadVersion">
                        ${service.options.autocad.map(opt => `<option value="${opt.price}" data-name="${opt.name}">${opt.name} ${opt.price > 0 ? `(+${opt.price}${currency})` : ''}</option>`).join('')}
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label">${service.options.customPrograms.name}:</label>
                    <select class="form-control" id="customPrograms">
                        ${programOptions}
                    </select>
                    <small style="color: var(--color-text-secondary); font-size: 0.8em;">(+${service.options.customPrograms.pricePerProgram}${currency} / program)</small>
                </div>
            </div>
            ${generateReceiptHtml(currency)}
        </div>`;
    } 
    
    else if (service.id === 'networking') {
        return `
        <div class="service-calculator">
            <h4>${currentLanguage === 'ro-RO' ? 'Calculator Rețea' : 'Network Calculator'}</h4>
            <div class="calculator-options">
                <div class="form-group">
                    <label class="form-label">Brand:</label>
                    <select class="form-control" id="netBrand" onchange="updateNetLimits()">
                        ${service.options.brands.map(b => `<option value="${b.name}" data-min="${b.min}" data-max="${b.max}">${b.name} (${b.label})</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Equipment Cost (${currency}):</label>
                    <input type="number" class="form-control" id="equipmentPrice" min="0" placeholder="0">
                    <small id="netLimitMsg" style="color: var(--color-text-secondary);"></small>
                </div>
            </div>
            <div class="calculator-result">
                <div class="price-item"><span class="price-label">Labor (20%):</span><span class="price-value" id="laborCost">0${currency}</span></div>
                <div class="price-item"><span class="price-label">Total:</span><span class="price-value" id="networkingTotalPrice">0${currency}</span></div>
            </div>
        </div>`;
    } 
    
    else if (service.id === 'phoneRepair') {
        return `
        <div class="service-calculator">
            <h4>${currentLanguage === 'ro-RO' ? 'Calculator Reparații' : 'Repair Calculator'}</h4>
            <div class="calculator-options">
                <div class="form-group"><input type="text" class="form-control" placeholder="Manufacturer (e.g. Samsung)" id="phoneMan"></div>
                <div class="form-group"><input type="text" class="form-control" placeholder="Model (e.g. S23)" id="phoneMod"></div>
                <div class="form-group">
                    <label class="form-label">Defect/Part:</label>
                    <select class="form-control" id="repairType">
                        ${service.options.types.map(t => `<option value="${t.laborPercent}" data-name="${t.name}">${t.name} (+${t.laborPercent}% labor)</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Component Price (${currency}):</label>
                    <input type="number" class="form-control" id="partPrice" min="0" placeholder="0">
                </div>
            </div>
            <div class="calculator-result">
                <div class="price-item"><span class="price-label">Labor:</span><span class="price-value" id="repairLabor">0${currency}</span></div>
                <div class="price-item"><span class="price-label">Total:</span><span class="price-value" id="repairTotal">0${currency}</span></div>
            </div>
        </div>`;
    }

    else if (service.id === 'pcComponents') {
        return `
        <div class="service-calculator">
            <h4>${currentLanguage === 'ro-RO' ? 'Calculator Componente' : 'Component Calculator'}</h4>
            
            <div style="margin-bottom: 10px; border-bottom: 1px solid var(--color-border); padding-bottom: 10px;">
                <h5 style="margin-bottom: 8px;"><i data-lucide="cpu"></i> RAM</h5>
                <div style="display: flex; gap: 10px;">
                    <select class="form-control" id="ramDDR" style="min-width: 120px;">
                        ${service.options.ramGenerations.map(g => `<option value="${g}">DDR${g}</option>`).join('')}
                    </select>
                    <input type="number" class="form-control" id="ramGB" placeholder="GB" min="0">
                </div>
                <div class="price-item" style="margin-top: 5px; font-size: 0.9em;">
                    <span>RAM Price:</span>
                    <span id="ramPrice" style="padding-left: 5px;">0${currency}</span>
                </div>
            </div>

            <div>
                <h5 style="margin-bottom: 8px;"><i data-lucide="hard-drive"></i> Storage</h5>
                <div class="form-group">
                    <select class="form-control" id="diskType">
                        ${service.options.diskTypes.map(d => `<option value="${d.pricePerUnit}" data-unit="${d.unit}">${d.name}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <input type="number" class="form-control" id="diskSize" placeholder="Size">
                </div>
                <div class="price-item" style="margin-top: 5px; font-size: 0.9em;">
                    <span>Disk Price:</span>
                    <span id="diskPrice" style="padding-left: 5px;">0${currency}</span>
                </div>
            </div>
            
            <div class="calculator-result" style="margin-top: 15px;">
                <div class="price-item"><span class="price-label">Total:</span><span class="price-value" id="compTotal" style="padding-left: 5px;">0${currency}</span></div>
            </div>
             ${service.infoMessage ? `<p style="margin-top: 15px; font-size: 0.9em; color: var(--color-text-secondary); font-style: italic;">${service.infoMessage}</p>` : ''}
        </div>`;
    }

    return '';
}

function generateReceiptHtml(currency) {
    return `
    <div class="calculator-result" style="background: var(--color-bg-2); color: var(--color-text); border: 1px dashed var(--color-border); padding: 15px;">
        <div style="text-align: center; font-weight: bold; margin-bottom: 10px; border-bottom: 1px solid var(--color-border); padding-bottom: 5px;">RECEIPT ESTIMATE</div>
        <div id="receiptItems" style="font-size: 0.9em; margin-bottom: 10px;"></div>
        <div class="price-item" style="border-top: 1px solid var(--color-border); padding-top: 5px; font-weight: bold;">
            <span class="price-label">TOTAL:</span>
            <span class="price-value" id="osTotalPrice">0${currency}</span>
        </div>
    </div>`;
}

// --- Calculator Event Handlers ---

window.toggleWindowsOptions = function(val) {
    const winGroup = document.getElementById('winVerGroup');
    if(winGroup) {
        winGroup.style.display = val === 'win' ? 'block' : 'none';
    }
    calculateOSPrice();
}

window.updateNetLimits = function() {
    const brand = document.getElementById('netBrand');
    const selected = brand.options[brand.selectedIndex];
    const msg = document.getElementById('netLimitMsg');
    const min = selected.getAttribute('data-min');
    msg.textContent = `Min: ${min}`;
    calculateNetworkingPrice();
}

function setupCalculatorListeners() {
    // OS Calculator
    const osIds = ['windowsVersion', 'officeVersion', 'adobeVersion', 'autocadVersion', 'customPrograms'];
    osIds.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.addEventListener('change', calculateOSPrice);
    });

    // Networking
    const netEl = document.getElementById('equipmentPrice');
    if(netEl) netEl.addEventListener('input', calculateNetworkingPrice);

    // Phone Repair
    const repairEl = document.getElementById('partPrice');
    const repairType = document.getElementById('repairType');
    if(repairEl) repairEl.addEventListener('input', calculateRepairPrice);
    if(repairType) repairType.addEventListener('change', calculateRepairPrice);

    // Components
    const compIds = ['ramDDR', 'ramGB', 'diskType', 'diskSize'];
    compIds.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.addEventListener('input', calculateComponentPrice);
    });
    
    // Initialize toggles
    const osFamily = document.querySelector('input[name="osFamily"]:checked');
    if (osFamily) toggleWindowsOptions(osFamily.value);
}

function calculateOSPrice() {
    const isWin = document.querySelector('input[name="osFamily"]:checked')?.value === 'win';
    const winCost = isWin ? parseFloat(document.getElementById('windowsVersion')?.value || 0) : 0;
    const officeCost = parseFloat(document.getElementById('officeVersion')?.value || 0);
    const adobeCost = parseFloat(document.getElementById('adobeVersion')?.value || 0);
    const autocadCost = parseFloat(document.getElementById('autocadVersion')?.value || 0);
    const customCount = parseInt(document.getElementById('customPrograms')?.value || 0);
    
    const currency = currentLanguage === 'ro-RO' ? 'lei' : '€';
    const baseLabor = currentLanguage === 'ro-RO' ? 45 : 15;
    const customPrice = currentLanguage === 'ro-RO' ? 70 : 20; 
    
    let total = baseLabor + winCost + officeCost + adobeCost + autocadCost + (customCount * customPrice);
    
    // Update Receipt
    const receiptDiv = document.getElementById('receiptItems');
    if (receiptDiv) {
        let html = `<div style="display:flex;justify-content:space-between;"><span>Base Labor</span><span>${baseLabor}${currency}</span></div>`;
        if (isWin && winCost > 0) html += `<div style="display:flex;justify-content:space-between;"><span>Windows</span><span>${winCost}${currency}</span></div>`;
        if (officeCost > 0) html += `<div style="display:flex;justify-content:space-between;"><span>Office</span><span>${officeCost}${currency}</span></div>`;
        if (adobeCost > 0) html += `<div style="display:flex;justify-content:space-between;"><span>Adobe</span><span>${adobeCost}${currency}</span></div>`;
        if (autocadCost > 0) html += `<div style="display:flex;justify-content:space-between;"><span>AutoCAD</span><span>${autocadCost}${currency}</span></div>`;
        if (customCount > 0) html += `<div style="display:flex;justify-content:space-between;"><span>Custom Apps (${customCount})</span><span>${customCount * customPrice}${currency}</span></div>`;
        if (!isWin) html += `<div style="display:flex;justify-content:space-between;font-style:italic;"><span>Acrobat DC included</span><span>0${currency}</span></div>`;
        receiptDiv.innerHTML = html;
    }
    
    document.getElementById('osTotalPrice').textContent = `${total}${currency}`;
}

function calculateNetworkingPrice() {
    const brandSelect = document.getElementById('netBrand');
    const min = parseFloat(brandSelect.options[brandSelect.selectedIndex].getAttribute('data-min'));
    const price = parseFloat(document.getElementById('equipmentPrice')?.value || 0);
    const currency = currentLanguage === 'ro-RO' ? 'lei' : '€';
    const msg = document.getElementById('netLimitMsg');

    if (price < min) {
        msg.style.color = "red";
        msg.textContent = `Price too low! Minimum is ${min}${currency}`;
        return;
    } else {
        msg.style.color = "var(--color-text-secondary)";
    }

    const labor = price * 0.20;
    const total = price + labor;

    document.getElementById('laborCost').textContent = `${labor.toFixed(2)}${currency}`;
    document.getElementById('networkingTotalPrice').textContent = `${total.toFixed(2)}${currency}`;
}

function calculateRepairPrice() {
    const partPrice = parseFloat(document.getElementById('partPrice')?.value || 0);
    const typeSelect = document.getElementById('repairType');
    const percent = parseFloat(typeSelect.value) / 100;
    const currency = currentLanguage === 'ro-RO' ? 'lei' : '€';

    const labor = partPrice * percent;
    const total = partPrice + labor;

    document.getElementById('repairLabor').textContent = `${labor.toFixed(2)}${currency}`;
    document.getElementById('repairTotal').textContent = `${total.toFixed(2)}${currency}`;
}

function calculateComponentPrice() {
    const ddr = parseInt(document.getElementById('ramDDR')?.value || 0);
    const gb = parseFloat(document.getElementById('ramGB')?.value || 0);
    const currency = currentLanguage === 'ro-RO' ? 'lei' : '€';
    
    // RAM Formula: (GB * (DDR * 50)) / 10 * 1.35
    let rawRamTotalLei = (gb * (ddr * 50));
    rawRamTotalLei = rawRamTotalLei / 10; // Apply reduction
    let ramPriceInLei = rawRamTotalLei * 1.35;

    let finalRamPrice;
    if (currentLanguage === 'ro-RO') {
        finalRamPrice = ramPriceInLei;
    } else {
        finalRamPrice = ramPriceInLei / 5.2; // Euro conversion
    }

    const diskSelect = document.getElementById('diskType');
    const pricePerUnit = parseFloat(diskSelect.value);
    const unitType = diskSelect.options[diskSelect.selectedIndex].getAttribute('data-unit');
    const diskInput = parseFloat(document.getElementById('diskSize')?.value || 0);
    
    let diskPrice = 0;
    if (diskInput > 0) {
        if (unitType === 'GB') {
            // SSD: Input is GB, price is per TB (~1000GB)
            diskPrice = (diskInput / 1000) * pricePerUnit;
        } else {
            // HDD: Input is TB, price is per TB
            diskPrice = diskInput * pricePerUnit;
        }
    }
    
    document.getElementById('ramPrice').textContent = `${finalRamPrice.toFixed(2)}${currency}`;
    document.getElementById('diskPrice').textContent = `${diskPrice.toFixed(2)}${currency}`;
    document.getElementById('compTotal').textContent = `${(finalRamPrice + diskPrice).toFixed(2)}${currency}`;
}

// --- Devices Logic ---

async function loadDevices() {
    const data = await fetchJSON('devices.json');
    if (!data) return;
    const deviceData = data[currentLanguage] || data['en-US'];
    globalDeviceData = deviceData.main; 
    window.currentCameraProfiles = deviceData.cameraProfiles;

    const mainContainer = document.getElementById('devicesContainer');
    if (mainContainer && deviceData.main) {
        mainContainer.innerHTML = deviceData.main.map(d => `
            <div class="device-card">
                <div class="device-header"><i class="device-icon" data-lucide="${d.icon}"></i><h3 class="device-title">${d.model}</h3></div>
                <div class="device-specs">
                    ${Object.entries(d.specs).map(([k,v]) => `<div class="spec-item"><span class="spec-label">${k}:</span><span class="spec-value">${v}</span></div>`).join('')}
                    ${d.lenses ? `<div class="spec-item" style="flex-direction: column; align-items: flex-start;"><span class="spec-label">Lenses:</span><span class="spec-value" style="font-size: 0.9em; margin-top: 4px;">${d.lenses.join('<br>')}</span></div>` : ''}
                    ${d.configuration ? `<div class="spec-item" style="flex-direction: column; align-items: flex-start; margin-top: 12px; background-color: var(--color-bg-2);"><span class="spec-label" style="color: var(--color-primary); font-weight: bold; margin-bottom: 6px;">Configuration</span>${Object.entries(d.configuration).map(([k,v]) => `<div style="display: flex; justify-content: space-between; width: 100%; font-size: 0.85em; margin-bottom: 2px;"><span style="opacity: 0.8;">${k}:</span><span>${v}</span></div>`).join('')}</div>` : ''}
                </div>
                <div class="device-actions">
                     ${d.accessories ? `<button class="btn btn--secondary btn--sm" onclick="showAccessories('${d.model}')">Accessories</button>` : ''}
                     ${d.hasConfiguration ? `<button class="btn btn--primary btn--sm" onclick="showCameraConfiguration('${d.configUrl || ''}')">Configuration</button>` : ''}
                </div>
            </div>
        `).join('');
    }

    const collectionContainer = document.getElementById('deviceCollectionContainer');
    if (collectionContainer && deviceData.collection) {
        collectionContainer.innerHTML = deviceData.collection.map(item => `
            <div class="collection-item">
                <i class="collection-icon" data-lucide="${item.icon}"></i>
                <div class="collection-name">${item.name}</div>
                <p>${item.description}</p>
                ${item.downloads ? `<div style="display: flex; gap: 8px; justify-content: center; margin-top: 12px; flex-wrap: wrap;">${item.downloads.map(dl => `<a href="${dl.url}" target="_blank" class="btn btn--outline btn--sm" style="font-size: 11px; padding: 4px 8px;"><i class="btn-icon" data-lucide="download" style="width: 12px; height: 12px;"></i> ${dl.label}</a>`).join('')}</div>` : ''}
            </div>
        `).join('');
    }
    lucide.createIcons();
}

// --- Downloads Logic ---

async function loadDownloads() {
    const data = await fetchJSON('downloads.json');
    if (!data) return;
    allDownloadsData = data[currentLanguage] || data['en-US'];
    const container = document.getElementById('downloadsContainer');
    if (container) {
        let searchContainer = document.getElementById('downloadsSearch');
        if (!searchContainer) {
            searchContainer = document.createElement('div');
            searchContainer.id = 'downloadsSearch';
            searchContainer.style.marginBottom = '24px';
            searchContainer.style.gridColumn = '1 / -1';
            searchContainer.innerHTML = `
                <div class="form-group">
                    <div style="position: relative;">
                        <i data-lucide="search" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--color-text-secondary);"></i>
                        <input type="text" class="form-control" id="downloadSearchInput" placeholder="Search downloads, versions, or tools..." style="padding-left: 40px;">
                    </div>
                </div>`;
            container.parentNode.insertBefore(searchContainer, container);
            const input = document.getElementById('downloadSearchInput');
            input.addEventListener('input', (e) => { renderDownloadList(e.target.value); });
        }
        renderDownloadList('');
    }
}

function renderDownloadList(query) {
    const container = document.getElementById('downloadsContainer');
    const lowerQuery = query.toLowerCase();
    const filteredData = allDownloadsData.filter(d => d.name.toLowerCase().includes(lowerQuery) || d.description.toLowerCase().includes(lowerQuery) || (d.type === 'selector' && d.options.versions.some(v => v.toLowerCase().includes(lowerQuery))));
    downloadLinkMap = {};

    if (filteredData.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--color-text-secondary);">No downloads found matching "${query}"</div>`;
        return;
    }

    container.innerHTML = filteredData.map(d => {
        if (d.type === 'selector') {
            downloadLinkMap[d.id] = d.links;
            return `<div class="download-card" id="card-${d.id}"><div class="download-header"><i class="download-icon" data-lucide="disc"></i><h3 class="download-title">${d.name}</h3></div><p class="download-description">${d.description}</p><div class="download-selectors" style="margin-bottom: 16px;"><div style="margin-bottom: 8px;"><label style="font-size: 12px; font-weight: bold; display: block; margin-bottom: 4px;">Version:</label><div class="btn-group" id="version-group-${d.id}" style="display: flex; gap: 4px; flex-wrap: wrap;">${d.options.versions.map(ver => `<button class="btn btn--sm ${ver === d.defaultVersion ? 'btn--primary' : 'btn--outline'}" onclick="updateDownloadSelection('${d.id}', 'version', '${ver}', this)">${ver}</button>`).join('')}</div></div><div><label style="font-size: 12px; font-weight: bold; display: block; margin-bottom: 4px;">Source:</label><div class="btn-group" id="source-group-${d.id}" style="display: flex; gap: 4px; flex-wrap: wrap;">${d.options.sources.map(src => `<button class="btn btn--sm ${src === d.defaultSource ? 'btn--primary' : 'btn--outline'}" onclick="updateDownloadSelection('${d.id}', 'source', '${src}', this)">${src}</button>`).join('')}</div></div></div><a href="${d.links[d.defaultVersion][d.defaultSource]}" id="download-btn-${d.id}" target="_blank" class="btn btn--primary btn--full-width" data-version="${d.defaultVersion}" data-source="${d.defaultSource}"><i class="btn-icon" data-lucide="download"></i> Download</a></div>`;
        } else if (d.type === 'video') {
            return `<div class="download-card"><div class="download-header"><i class="download-icon" data-lucide="video"></i><h3 class="download-title">${d.name}</h3></div><p class="download-description">${d.description}</p><div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: auto;"><a href="${d.watchUrl}" target="_blank" class="btn btn--primary" style="flex: 1;"><i class="btn-icon" data-lucide="play-circle"></i> Watch</a><a href="${d.sourceUrl}" target="_blank" class="btn btn--outline" style="flex: 1;"><i class="btn-icon" data-lucide="globe"></i> Damuc Source</a></div></div>`;
        } else if (d.type === 'folder') {
             return `<div class="download-card"><div class="download-header"><i class="download-icon" data-lucide="folder"></i><h3 class="download-title">${d.name}</h3></div><p class="download-description">${d.description}</p><a href="${d.url}" target="_blank" class="btn btn--primary btn--full-width"><i class="btn-icon" data-lucide="external-link"></i> Show list</a></div>`;
        } else if (d.type === 'github-info') {
             return `<div class="download-card"><div class="download-header"><i class="download-icon" data-lucide="package"></i><h3 class="download-title">${d.name}</h3></div><p class="download-description">${d.description}</p><div class="download-meta"><span>Version: ${d.version}</span><span>Size: ${d.size}</span></div><div style="display: flex; gap: 8px; flex-wrap: wrap;"><a href="${d.sourceUrl}" target="_blank" class="btn btn--outline" style="flex: 1;"><i class="btn-icon" data-lucide="info"></i> View informations</a><a href="${d.downloadUrl}" target="_blank" class="btn btn--primary" style="flex: 1;"><i class="btn-icon" data-lucide="download"></i> Download</a></div></div>`;
        } else {
            return `<div class="download-card"><div class="download-header"><i class="download-icon" data-lucide="download"></i><h3 class="download-title">${d.name}</h3></div><p class="download-description">${d.description}</p><div class="download-meta"><span>Version: ${d.version}</span><span>Size: ${d.size}</span></div><div style="display: flex; gap: 8px; flex-wrap: wrap;"><a href="${d.sourceUrl}" target="_blank" class="btn btn--outline" style="flex: 1;"><i class="btn-icon" data-lucide="code"></i> Source</a><a href="${d.downloadUrl}" target="_blank" class="btn btn--primary" style="flex: 1;"><i class="btn-icon" data-lucide="download"></i> Download</a></div></div>`;
        }
    }).join('');
    lucide.createIcons();
}

// --- Tools Logic ---

async function loadTools() {
    const data = await fetchJSON('tools.json');
    if (!data) return;
    
    allToolsData = data[currentLanguage] || data['en-US'];
    
    const container = document.getElementById('toolsContainer');
    if (container) {
        let searchContainer = document.getElementById('toolsSearch');
        if (!searchContainer) {
            searchContainer = document.createElement('div');
            searchContainer.id = 'toolsSearch';
            searchContainer.style.marginBottom = '24px';
            searchContainer.style.gridColumn = '1 / -1';
            searchContainer.innerHTML = `
                <div class="form-group">
                    <div style="position: relative;">
                        <i data-lucide="search" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--color-text-secondary);"></i>
                        <input type="text" class="form-control" id="toolSearchInput" placeholder="Search tools..." style="padding-left: 40px;">
                    </div>
                </div>`;
            container.parentNode.insertBefore(searchContainer, container);
            
            const input = document.getElementById('toolSearchInput');
            input.addEventListener('input', (e) => renderToolsList(e.target.value));
        }
        renderToolsList('');
    }
}

function renderToolsList(query) {
    const container = document.getElementById('toolsContainer');
    const lowerQuery = query.toLowerCase();
    
    const filteredData = allToolsData.filter(t => 
        t.name.toLowerCase().includes(lowerQuery) || 
        t.description.toLowerCase().includes(lowerQuery)
    );

    if (filteredData.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--color-text-secondary);">No tools found matching "${query}"</div>`;
        return;
    }

    container.innerHTML = filteredData.map(t => {
        const btnAction = t.type === 'internal' 
            ? `onclick="fetchAndShowContent('${t.name}', '${t.url}')"`
            : `href="${t.url}" target="_blank"`;
        
        const btnClass = t.type === 'internal' ? 'btn--secondary' : 'btn--primary';
        const btnText = t.type === 'download' ? 'Download' : 'Open Tool';
        const icon = t.icon || 'box';

        return `
        <div class="download-card">
            <div class="download-header">
                <i class="download-icon" data-lucide="${icon}"></i>
                <h3 class="download-title">${t.name}</h3>
            </div>
            <p class="download-description">${t.description}</p>
            <a ${btnAction} class="btn ${btnClass} btn--full-width">
                ${t.type === 'external' ? '<i class="btn-icon" data-lucide="external-link"></i>' : ''}
                ${btnText}
            </a>
        </div>`;
    }).join('');
    
    if(window.lucide) window.lucide.createIcons();
}
// --- Contact Logic ---

async function loadContact() {
    const data = await fetchJSON('contact.json');
    if (!data) return;
    const socialContainer = document.getElementById('socialMediaContainer');
    if (socialContainer && data.socialMedia) socialContainer.innerHTML = data.socialMedia.map(s => generateSocialLink(s)).join('');
    const gamingContainer = document.getElementById('gamingProfilesContainer');
    if (gamingContainer && data.gamingProfiles) gamingContainer.innerHTML = data.gamingProfiles.map(g => generateGamingLink(g)).join('');
    lucide.createIcons();
}

// --- Helper Functions ---

function getIconHtml(iconName) {
    if (iconCollection[iconName]) {
        return `<svg class="contact-icon" viewBox="0 0 24 24" width="24" height="24" style="fill: none;">${iconCollection[iconName]}</svg>`;
    }
    return `<i class="contact-icon" data-lucide="${iconName}"></i>`;
}

function generateSocialLink(item) {
    let iconHtml = getIconHtml(item.icon).replace('contact-icon', 'social-link-icon');
    return `<a href="${item.url}" target="_blank" class="social-link">${iconHtml}<span>${item.name}: ${item.username}</span></a>`;
}

function generateGamingLink(item) {
    let iconHtml = getIconHtml(item.icon);
    return `<div class="contact-item">${iconHtml}<span>${item.name}: ${item.username}</span></div>`;
}

// --- Modal & Interaction Handlers ---

window.showAccessories = function(deviceModel) {
    const device = globalDeviceData.find(d => d.model === deviceModel);
    if (!device || !device.accessories) return;

    const modalBody = document.getElementById('accessoriesModalBody');
    if (modalBody) {
        modalBody.innerHTML = `
            <h3 style="margin-bottom: 16px; color: var(--color-primary);">${device.model} Accessories</h3>
            ${Object.entries(device.accessories).map(([setupName, items]) => `
                <div class="accessories-section" style="margin-bottom: 20px;">
                    <h4 style="margin-bottom: 10px; border-bottom: 1px solid var(--color-border); padding-bottom: 5px;">${setupName}</h4>
                    <div class="accessories-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px;">
                        ${items.map(item => {
                            const iconSvg = iconCollection[item.icon] 
                                ? `<svg viewBox="0 0 24 24" width="24" height="24" style="color: var(--color-text);">${iconCollection[item.icon]}</svg>`
                                : `<i data-lucide="${item.icon}"></i>`;
                            return `<div class="accessory-item" style="background: var(--color-bg-2); padding: 8px; border-radius: 6px; font-size: 13px; display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; position: relative;">${iconSvg}<span>${item.name}</span>${item.download ? `<a href="${item.download.url}" target="_blank" class="btn btn--primary btn--sm" style="font-size: 10px; padding: 2px 6px; margin-top: 4px; width: 100%; text-align: center;"><i class="btn-icon" data-lucide="download" style="width: 10px; height: 10px;"></i> ${item.download.label}</a>` : ''}</div>`;
                        }).join('')}
                    </div>
                </div>
            `).join('')}
        `;
    }
    const modal = document.getElementById('accessoriesModal');
    if (modal) { modal.classList.remove('hidden'); lucide.createIcons(); }
};

window.showCameraConfiguration = function(configUrl) {
    const modal = document.getElementById('cameraModal');
    const profiles = window.currentCameraProfiles;
    if (!profiles) { alert("Configuration not available"); return; }

    const modalBody = document.getElementById('cameraModalBody');
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="camera-config-header">
                <h3>Nikon Z50ii Camera Configuration Profiles</h3>
                <div class="camera-download-section">
                    <a href="${configUrl || '#'}" target="_blank" class="btn btn--primary" ${!configUrl ? 'disabled' : ''}>
                        <i class="btn-icon" data-lucide="download"></i>
                        Download .bin Configuration File
                    </a>
                </div>
            </div>
            <div class="camera-profiles">
                ${Object.entries(profiles).map(([profileKey, profile]) => `
                    <div class="camera-profile-card">
                        <h4 class="camera-profile-title"><i data-lucide="camera"></i> ${profile.name}</h4>
                        <div class="camera-settings-section"><h5><i data-lucide="image"></i> Picture Settings</h5><div class="camera-settings-grid">${Object.entries(profile.pictureSettings).map(([k, v]) => `<div class="setting-item"><span class="setting-label">${k}:</span><span class="setting-value">${v}</span></div>`).join('')}</div></div>
                         <div class="camera-settings-section"><h5><i data-lucide="video"></i> Video Settings</h5><div class="camera-settings-grid">${Object.entries(profile.videoSettings).map(([k, v]) => `<div class="setting-item"><span class="setting-label">${k}:</span><span class="setting-value">${v}</span></div>`).join('')}</div></div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    if (modal) { modal.classList.remove('hidden'); lucide.createIcons(); }
}

window.updateDownloadSelection = function(id, type, value, btnElement) {
    const group = btnElement.parentElement;
    const buttons = group.querySelectorAll('button');
    buttons.forEach(b => { b.classList.remove('btn--primary'); b.classList.add('btn--outline'); });
    btnElement.classList.remove('btn--outline');
    btnElement.classList.add('btn--primary');

    const downloadBtn = document.getElementById(`download-btn-${id}`);
    if (type === 'version') downloadBtn.setAttribute('data-version', value);
    else downloadBtn.setAttribute('data-source', value);

    const currentVer = downloadBtn.getAttribute('data-version');
    const currentSrc = downloadBtn.getAttribute('data-source');
    
    if (downloadLinkMap[id] && downloadLinkMap[id][currentVer] && downloadLinkMap[id][currentVer][currentSrc]) {
        downloadBtn.href = downloadLinkMap[id][currentVer][currentSrc];
    } else {
        downloadBtn.href = "#";
    }
};

function setupEventListeners() {
    const ls = document.getElementById('languageSelector');
    if (ls) {
        ls.addEventListener('change', (e) => {
            currentLanguage = e.target.value;
            localStorage.setItem('currentLanguage', currentLanguage);
            location.reload(); 
        });
    }

    document.querySelectorAll('[data-page]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('data-page') || e.target.closest('[data-page]').getAttribute('data-page');
            showPage(page);
        });
    });

    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => { mobileMenu.classList.toggle('active'); });
    }

    document.querySelectorAll('.modal-close, .modal-backdrop').forEach(el => {
        el.addEventListener('click', () => { document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden')); });
    });
}

function showPage(pageId) {
    currentPage = pageId;
    localStorage.setItem('currentPage', pageId);
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(pageId);
    if(target) { target.classList.add('active'); loadPageContent(pageId); }
    updateNavigationState();
    window.scrollTo(0,0);
}

function updateNavigationState() {
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(l => {
        l.classList.remove('active');
        if(l.getAttribute('data-page') === currentPage) l.classList.add('active');
    });
    const mobileMenu = document.getElementById('mobileMenu');
    if(mobileMenu) mobileMenu.classList.remove('active');
}

function calculateAge() {
    const birthDate = new Date('2002-12-18');
    const age = Math.floor((new Date() - birthDate) / 31557600000);
    const el = document.getElementById('currentAge');
    if(el) el.textContent = age;
}

function showContentModal(title, htmlContent) {
    const modal = document.getElementById('contentModal');
    document.getElementById('contentModalTitle').textContent = title;
    document.getElementById('contentModalBody').innerHTML = htmlContent;
    modal.classList.remove('hidden');
}

const exportBtn = document.getElementById('exportPdfBtn');
if(exportBtn) exportBtn.addEventListener('click', () => window.print());