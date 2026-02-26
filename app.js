// --- Global State ---
let currentLanguage = localStorage.getItem('currentLanguage') || 'en-US';
let currentPage = 'home';
let cachedData = {}; 
let allDownloadsData = []; 
let allToolsData = []; 
let downloadLinkMap = {}; 
let globalDeviceData = []; 
let iconCollection = {}; 
let servicesDataCache = []; 
let linksData = {}; 

// --- Initialization ---

document.addEventListener('DOMContentLoaded', async () => {
    console.log('App Initializing...');
    
    document.documentElement.setAttribute('lang', currentLanguage.split('-')[0]);
    document.documentElement.setAttribute('data-lang', currentLanguage);
    const langSelector = document.getElementById('languageSelector');
    if(langSelector) langSelector.value = currentLanguage;

    calculateAge();
    setInterval(calculateAge, 60000);
    
    setupEventListeners();
    
    await loadLinks(); 
    await loadIcons();
    await loadTranslations();
    
    let hashPage = window.location.hash.substring(1);
    const validPages = ['home', 'projects', 'services', 'blog', 'usdacm', 'devices', 'downloads', 'tools', 'about', 'contact'];
    if (hashPage && validPages.includes(hashPage)) {
        currentPage = hashPage;
    } else {
        currentPage = localStorage.getItem('currentPage') || 'home';
    }

    await loadPageContent(currentPage);
    showPage(currentPage);
});

window.addEventListener('hashchange', async () => {
    let hashPage = window.location.hash.substring(1);
    if (hashPage && hashPage !== currentPage) {
        await loadPageContent(hashPage);
        showPage(hashPage);
    }
});


document.addEventListener('dragstart', e => e.preventDefault());
document.addEventListener('drop', e => e.preventDefault());
document.addEventListener('dragover', e => e.preventDefault());

// Setup pentru butonul de setări
const settingsBtn = document.getElementById('settingsBtn');
if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
        document.getElementById('settingsModal').classList.remove('hidden');
    });
}
// --- Core Data Fetching ---

async function fetchJSON(filename) {
    if (cachedData[filename]) return cachedData[filename];
    try {
        const response = await fetch(`data/${filename}?v=${new Date().getTime()}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        cachedData[filename] = data;
        return data;
    } catch (error) {
        console.error(`Could not load ${filename}:`, error);
        return null;
    }
}

async function loadLinks() {
    const data = await fetchJSON('links.json');
    if (data) linksData = data;
}

function resolveLink(linkId) {
    if (!linkId) return '#';
    if (linkId.startsWith('http') || linkId.startsWith('tools/')) return linkId;
    const parts = linkId.split('.');
    if (parts.length === 2 && linksData[parts[0]] && linksData[parts[0]][parts[1]]) {
        return linksData[parts[0]][parts[1]];
    }
    return '#'; 
}

async function loadIcons() {
    const icons = await fetchJSON('icon-collection.json');
    if (icons) iconCollection = icons;
}

function loadTranslations() {
    const uiData = {
        'en-US': { 
            siteName: "Ionut Bara", 
            nav: { home: "Home", about: "About", blog: "Blog", projects: "Projects", cv: "CV", services: "Services", usdacm: "USDACM", devices: "Devices", downloads: "Downloads", tools: "Tools", contact: "Contact" },
            cv: { downloadPdf: "Download CV" }
        },
        'ro-RO': { 
            siteName: "Ionut Bara", 
            nav: { home: "Acasă", about: "Despre", blog: "Blog", projects: "Proiecte", cv: "CV", services: "Servicii", usdacm: "USDACM", devices: "Dispozitive", downloads: "Descărcări", tools: "Unelte", contact: "Contact" },
            cv: { downloadPdf: "Descarcă CV" }
        },
        'gall': { 
            siteName: "Ionut Bara", 
            nav: { home: "Početna", about: "O meni", blog: "Blog", projects: "Projekti", cv: "CV", services: "Usluge", usdacm: "USDACM", devices: "Uređaji", downloads: "Preuzimanja", tools: "Alati", contact: "Kontakt" },
            cv: { downloadPdf: "Preuzmi CV" }
        }
    };
    updateUIText(uiData[currentLanguage]);
}

function updateUIText(data) {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        const val = key.split('.').reduce((obj, i) => obj ? obj[i] : null, data);
        if (val) {
            if (el.tagName === 'SPAN' || el.tagName === 'P' || el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'BUTTON' || el.tagName === 'A') {
                if (el.querySelector('i')) {
                    const iconHTML = el.querySelector('i').outerHTML;
                    el.innerHTML = iconHTML + " " + val;
                } else {
                    el.textContent = val;
                }
            } else {
                el.textContent = val;
            }
        }
    });
}

// --- Content Routing ---

async function loadPageContent(page) {
    switch (page) {
        case 'home': await loadHome(); break;
        case 'about': await loadAbout(); break;
        case 'projects': await loadProjects(); break;
        case 'blog': await loadBlog(); break;
        case 'usdacm': await loadUSDACM(); break;
        case 'services': await loadServices(); break;
        case 'devices': await loadDevices(); break;
        case 'downloads': await loadDownloads(); break;
        case 'tools': await loadTools(); break;
        case 'contact': await loadContact(); break;
    }
}

// --- Section Loaders ---

async function loadHome() {
    const data = await fetchJSON('home.json');
    if (!data) return;
    const content = data[currentLanguage] || data['en-US'];
    
    const container = document.getElementById('homePresentation');
    if (container && content.presentation) {
        container.innerHTML = content.presentation.map(item => `
            <div class="presentation-item ${item.cssClass || ''}">
                <h3><i data-lucide="${item.icon}" style="margin-right: 8px;"></i>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');
        if(window.lucide) window.lucide.createIcons();
    }
}

function renderCarouselSection(containerId, items, itemRenderer) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = ''; 
    container.className = ''; 

    const groups = items.reduce((acc, item) => {
        const cat = item.category || 'General';
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(item);
        return acc;
    }, {});

    Object.keys(groups).forEach((category, index) => {
        const sectionId = `${containerId}-carousel-${index}`;
        const section = document.createElement('div');
        section.className = 'category-section';
        
        section.innerHTML = `
            <h3 class="category-title">${category}</h3>
            <div class="carousel-wrapper">
                <button class="carousel-btn prev" onclick="scrollCarousel('${sectionId}', -320)"><i data-lucide="chevron-left"></i></button>
                <div class="carousel-track" id="${sectionId}">
                    ${groups[category].map(item => itemRenderer(item)).join('')}
                </div>
                <button class="carousel-btn next" onclick="scrollCarousel('${sectionId}', 320)"><i data-lucide="chevron-right"></i></button>
            </div>
        `;
        container.appendChild(section);
    });
    if(window.lucide) window.lucide.createIcons();
}

window.scrollCarousel = function(id, offset) {
    const track = document.getElementById(id);
    if (track) track.scrollBy({ left: offset, behavior: 'smooth' });
};

async function loadProjects() {
    const data = await fetchJSON('projects.json');
    if (!data) return;
    const projects = data[currentLanguage] || data['en-US'];
    const container = document.getElementById('projectsContainer');

    if (container) {
        // Setăm clasa pentru a folosi grid-ul definit în CSS (similar cu downloads)
        container.className = 'downloads-grid'; 
        
        container.innerHTML = projects.map(p => {
            let statusColor = 'var(--color-text-secondary)';
            let statusBg = 'var(--color-bg-2)';
            const status = p.status || 'Active';
            
            if (['Active', 'Activ', 'Aktivan'].includes(status)) {
                statusColor = 'var(--color-success)'; statusBg = 'rgba(var(--color-success-rgb), 0.1)';
            } else if (['Production', 'Producție', 'Produkcija', 'Completed', 'Finalizat'].includes(status)) {
                 statusColor = '#3b82f6'; statusBg = 'rgba(59, 130, 246, 0.1)';
            }

            const statusBadge = `<span style="display: inline-block; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; color: ${statusColor}; background: ${statusBg}; margin-bottom: 10px;">${status}</span>`;

            let actionBtn = '';
            const projLink = p.linkId || p.github || p.url; 
            if (projLink) {
                const url = resolveLink(projLink);
                actionBtn = `<a href="${url}" target="_blank" class="btn btn--outline btn--full-width btn--sm"><i class="btn-icon" data-lucide="external-link"></i> View Project</a>`;
            }

            return `
            <div class="download-card">
                <div style="display:flex; justify-content:space-between; align-items:start;">
                    <h3 class="download-title" style="font-size: 1.1rem;">${p.name}</h3>
                    ${statusBadge}
                </div>
                <p class="download-description" style="font-size: 0.9rem;">${p.description}</p>
                <div class="project-tech" style="margin-bottom: 15px;">
                    ${p.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
                <div style="margin-top: auto;">
                    ${actionBtn}
                </div>
            </div>`;
        }).join('');
        
        if(window.lucide) window.lucide.createIcons();
    }
}

async function loadTools() {
    const data = await fetchJSON('tools.json');
    if (!data) return;
    allToolsData = data[currentLanguage] || data['en-US'];
    const container = document.getElementById('toolsContainer');
    
    if (container) {
        container.className = 'downloads-grid';

        container.innerHTML = allToolsData.map(t => {
            const rawLink = t.linkId || t.url || t.link; 
            const toolUrl = resolveLink(rawLink);

            const btnAction = t.type === 'internal' 
                ? `onclick="fetchAndShowContent('${t.name}', '${toolUrl}', 'modal-tool')"`
                : `href="${toolUrl}" target="_blank"`;
            
            const btnClass = t.type === 'internal' ? 'btn--secondary' : 'btn--primary';
            const btnText = t.type === 'download' ? 'Download' : 'Open Tool';
            const icon = t.icon || 'box';

            return `
            <div class="download-card">
                <div class="download-header">
                    <i class="download-icon" data-lucide="${icon}"></i>
                    <h3 class="download-title" style="font-size: 1.1rem;">${t.name}</h3>
                </div>
                <p class="download-description" style="font-size: 0.9rem;">${t.description}</p>
                <div style="margin-top: auto;">
                    <a ${btnAction} class="btn ${btnClass} btn--full-width btn--sm" style="cursor: pointer;">
                        ${t.type === 'external' ? '<i class="btn-icon" data-lucide="external-link"></i>' : ''}
                        ${btnText}
                    </a>
                </div>
            </div>`;
        }).join('');

        if(window.lucide) window.lucide.createIcons();
    }
}

async function loadAbout() {
    const dataAbout = await fetchJSON('about.json');
    const dataCV = await fetchJSON('cv.json');
    if (!dataAbout || !dataCV) return;

    const contentAbout = dataAbout[currentLanguage] || dataAbout['en-US'];
    const cv = dataCV[currentLanguage] || dataCV['en-US'];
    
    const summaryEl = document.querySelector('[data-key="about.summary"]');
    if (summaryEl) summaryEl.textContent = contentAbout.summary;

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

        const licenseLabel = currentLanguage === 'ro-RO' ? 'Permis Conducere' : (currentLanguage === 'gall' ? 'Vozačka Dozvola' : 'Driving License');

        container.innerHTML = `
            <div class="cv-section">
                <h2><i data-lucide="user" style="margin-right:10px;"></i> Personal Information</h2>
                <div class="cv-item" style="border:none;">
                    <h3 style="font-size:1.8rem; margin-bottom:15px;">${cv.personalInfo.name}</h3>
                    <div style="display:grid; gap:20px; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
                        <div>
                            <h4 style="font-size:0.9rem; color:var(--color-text-secondary); margin-bottom:8px; text-transform:uppercase;">Locations</h4>
                            ${locationsHtml}
                            <div style="margin-top: 15px;">
                                <h4 style="font-size:0.9rem; color:var(--color-text-secondary); margin-bottom:8px; text-transform:uppercase;">${licenseLabel}</h4>
                                <div style="display:flex; align-items:center; gap:8px;">
                                    <i data-lucide="car" style="width:16px; color:var(--color-primary)"></i> 
                                    <span>${cv.personalInfo.drivingLicense || 'None'}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 style="font-size:0.9rem; color:var(--color-text-secondary); margin-bottom:8px; text-transform:uppercase;">Contact</h4>
                            ${emailsHtml}
                        </div>
                    </div>
                </div>
            </div>

            <div class="cv-section">
                <h2><i data-lucide="graduation-cap" style="margin-right:10px;"></i> Education</h2>
                ${cv.education.map(edu => `
                    <div class="cv-item">
                        <div style="display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap;">
                            <h3 style="color:var(--color-primary); display:flex; align-items:center; gap:8px;"><i data-lucide="book-open" style="width: 18px;"></i> ${edu.degree}</h3>
                            <span class="cv-period" style="background:var(--color-bg-2); padding:2px 8px; border-radius:12px;">${edu.period}</span>
                        </div>
                        <p class="cv-institution" style="font-weight:bold; margin-top:5px;">${edu.institution}</p>
                        ${edu.grade ? `<p><strong>Grade:</strong> ${edu.grade} ${edu.projectGrade ? `(Project: ${edu.projectGrade})` : ''}</p>` : ''}
                        ${edu.docLink ? `<a href="${edu.docLink}" target="_blank" class="btn btn--outline btn--sm" style="margin-top: 10px;"><i class="btn-icon" data-lucide="eye"></i> View</a>` : ''}
                    </div>
                `).join('')}
            </div>

            <div class="cv-section">
                <h2><i data-lucide="briefcase" style="margin-right:10px;"></i> Experience</h2>
                ${cv.experience.map(exp => `
                    <div class="cv-item">
                        <div style="display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap;">
                            <h3 style="color:var(--color-primary); display:flex; align-items:center; gap:8px;"><i data-lucide="building" style="width: 18px;"></i> ${exp.position}</h3>
                            <span class="cv-period" style="background:var(--color-bg-2); padding:2px 8px; border-radius:12px;">${exp.period}</span>
                        </div>
                        <p class="cv-institution" style="font-weight:bold; margin-top:5px;">${exp.company}</p>
                        <p style="margin-top:8px; line-height:1.6;">${exp.description}</p>
                    </div>
                `).join('')}
            </div>

            <div class="cv-section">
                <h2><i data-lucide="code" style="margin-right:10px;"></i> Skills</h2>
                <div class="skills-grid">
                    ${cv.skills.map(skill => `<div class="skill-item" style="display:flex; align-items:center; justify-content:center; gap:6px;"><i data-lucide="check-circle-2" style="width: 14px; color: var(--color-primary);"></i> ${skill}</div>`).join('')}
                </div>
            </div>

            <div class="cv-section">
                <h2><i data-lucide="heart" style="margin-right:10px;"></i> Hobbies</h2>
                <div class="skills-grid">
                    ${cv.hobbies ? cv.hobbies.map(hobby => `<div class="skill-item" style="display:flex; align-items:center; justify-content:center; gap:6px;"><i data-lucide="star" style="width: 14px; color: var(--color-primary);"></i> ${hobby}</div>`).join('') : ''}
                </div>
            </div>
            
            <div class="cv-section">
                <h2><i data-lucide="award" style="margin-right:10px;"></i> Certificates</h2>
                <div class="skills-grid">
                    ${cv.certificates ? cv.certificates.map(cert => `<a href="${cert.link || '#'}" target="_blank" class="cert-link" style="display:flex; align-items:center; justify-content:center; gap:6px;"><i data-lucide="award" style="width: 14px;"></i> ${cert.name}</a>`).join('') : ''}
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
    if (years > 0) result += `${years} ${years === 1 ? (currentLanguage === 'ro-RO' ? 'an' : 'year') : (currentLanguage === 'ro-RO' ? 'ani' : 'years')}`;
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
        // AICI folosim clasa "modal-article"
        container.innerHTML = posts.map(post => `
            <div class="blog-post-preview" onclick="fetchAndShowContent('${post.title}', '${post.file}', 'modal-article')">
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
        const damucLinksHtml = `
            <div class="project-card" style="margin-bottom: 32px;">
                <h3 class="project-title" style="margin-bottom: 16px;"><i data-lucide="landmark"></i> Informații Publice - Comuna Dămuc</h3>
                <ul style="list-style: none; padding: 0; line-height: 1.8;">
                    <li><i data-lucide="external-link" style="width: 14px; margin-right: 8px; color: var(--color-primary);"></i><a href="https://transparenta.eu/entities/2614422" target="_blank" style="color: var(--color-text);">Execuții bugetare (transparenta.eu)</a></li>
                    <li><i data-lucide="external-link" style="width: 14px; margin-right: 8px; color: var(--color-primary);"></i><a href="https://extranet.anaf.mfinante.gov.ro/anaf/extranet/EXECUTIEBUGETARA/Rapoarte_Forexe/" target="_blank" style="color: var(--color-text);">Execuții bugetare (ANAF)</a></li>
                    <li><i data-lucide="external-link" style="width: 14px; margin-right: 8px; color: var(--color-primary);"></i><a href="https://comunadamuc.ro/monitorul-oficial-local/alte-documente/procesele-verbale-ale-sedintelor-autoritatii-deliberative/" target="_blank" style="color: var(--color-text);">Procese verbale ședințe</a></li>
                    <li><i data-lucide="external-link" style="width: 14px; margin-right: 8px; color: var(--color-primary);"></i><a href="https://comunadamuc.ro/monitorul-oficial-local/dispozitiile-autoritatii-executive/" target="_blank" style="color: var(--color-text);">Dispoziții primar</a></li>
                    <li><i data-lucide="external-link" style="width: 14px; margin-right: 8px; color: var(--color-primary);"></i><a href="https://sicap.ai/autoritate/2614422" target="_blank" style="color: var(--color-text);">Achiziții Publice (SICAP)</a></li>
                </ul>
            </div>
        `;

        // AICI folosim clasa "modal-article"
        const postsHtml = posts.map(post => `
            <div class="blog-post-preview" onclick="fetchAndShowContent('${post.title}', '${post.file}', 'modal-article')">
                <h3 class="blog-post-title">${post.title}</h3>
                <p class="blog-post-excerpt">${post.excerpt}</p>
                <span class="blog-read-more">Read More</span>
            </div>
        `).join('');

        container.innerHTML = damucLinksHtml + postsHtml;
        if(window.lucide) window.lucide.createIcons();
    }
}

// ---- LOGICA PENTRU MODAL SI STILURI SEPARATE ----

function showContentModal(title, htmlContent, modalClass = '') {
    const modal = document.getElementById('contentModal');
    const modalContentWrapper = modal.querySelector('.modal-content');
    
    // Curatam clasele vechi
    modalContentWrapper.classList.remove('modal-article', 'modal-tool', 'modal-info');
    
    // Adaugam clasa dorita pentru stil (daca exista)
    if (modalClass) {
        modalContentWrapper.classList.add(modalClass);
    }

    document.getElementById('contentModalTitle').textContent = title;
    document.getElementById('contentModalBody').innerHTML = htmlContent;
    modal.classList.remove('hidden');
}

window.fetchAndShowContent = async function(title, filePath, modalClass = '') {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error('Content not found on server');
        const htmlContent = await response.text();
        
        window.showContentModal(title, htmlContent, modalClass);
        
        const body = document.getElementById('contentModalBody');
        const scripts = body.getElementsByTagName("script");
        for (let i = 0; i < scripts.length; i++) {
            try { eval(scripts[i].innerText); } 
            catch(err) { console.error("Script execution error:", err); }
        }

        if(window.lucide) window.lucide.createIcons();

        // Imediat ce s-a incarcat HTML-ul, initializam playerele Media Custom
        window.initCustomVideoPlayers();
        window.initCustomAudioPlayers();

    } catch (e) {
        console.error("Modal fetch error:", e);
        window.showContentModal('Error', '<p>Could not load content.</p>', '');
    }
};
window.initCustomVideoPlayers = function() {
    const wrappers = document.querySelectorAll('.custom-video-wrapper');
    wrappers.forEach(wrapper => {
        const video = wrapper.querySelector('video');
        const playBtn = wrapper.querySelector('.video-play-btn');
        const rewindBtn = wrapper.querySelector('.video-rewind-btn');
        const forwardBtn = wrapper.querySelector('.video-forward-btn');
        const volumeBtn = wrapper.querySelector('.video-volume-btn');
        const volumeSlider = wrapper.querySelector('.video-volume-slider');
        const timeDisplay = wrapper.querySelector('.video-time');
        const progressContainer = wrapper.querySelector('.video-progress-container');
        const progressFilled = wrapper.querySelector('.video-progress-filled');
        const fullscreenBtn = wrapper.querySelector('.video-fullscreen-btn');
        const pipBtn = wrapper.querySelector('.video-pip-btn');

        if(!video) return;

        const formatTime = (time) => {
            if (isNaN(time)) return "0:00";
            const min = Math.floor(time / 60);
            const sec = Math.floor(time % 60);
            return `${min}:${sec < 10 ? '0' : ''}${sec}`;
        };

        const togglePlay = () => {
            if(video.paused) { 
                video.play(); 
                wrapper.classList.remove('paused'); 
                playBtn.innerHTML = '<i data-lucide="pause"></i>'; 
            } else { 
                video.pause(); 
                wrapper.classList.add('paused'); 
                playBtn.innerHTML = '<i data-lucide="play"></i>'; 
            }
            if(window.lucide) window.lucide.createIcons();
        };

        playBtn.addEventListener('click', togglePlay);
        video.addEventListener('click', togglePlay);

        // Dublu click pe video pentru Fullscreen
        video.addEventListener('dblclick', () => {
            if (!document.fullscreenElement) {
                if(wrapper.requestFullscreen) wrapper.requestFullscreen();
                else if(wrapper.webkitRequestFullscreen) wrapper.webkitRequestFullscreen();
            } else {
                if(document.exitFullscreen) document.exitFullscreen();
            }
        });

        // Suport Tastatura (Săgeți pentru Seek, Spațiu pentru Play/Pause)
        wrapper.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') { video.currentTime = Math.min(video.duration, video.currentTime + 10); e.preventDefault(); }
            if (e.key === 'ArrowLeft') { video.currentTime = Math.max(0, video.currentTime - 10); e.preventDefault(); }
            if (e.key === ' ') { togglePlay(); e.preventDefault(); }
        });

        rewindBtn.addEventListener('click', () => { video.currentTime = Math.max(0, video.currentTime - 10); });
        forwardBtn.addEventListener('click', () => { video.currentTime = Math.min(video.duration, video.currentTime + 10); });

        video.addEventListener('timeupdate', () => {
            const percent = (video.currentTime / video.duration) * 100;
            progressFilled.style.width = `${percent}%`;
            timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
        });

        video.addEventListener('loadedmetadata', () => {
            timeDisplay.textContent = `0:00 / ${formatTime(video.duration)}`;
        });

        progressContainer.addEventListener('click', (e) => {
            const rect = progressContainer.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            video.currentTime = pos * video.duration;
        });

        volumeBtn.addEventListener('click', () => {
            video.muted = !video.muted;
            volumeBtn.innerHTML = video.muted ? '<i data-lucide="volume-x"></i>' : '<i data-lucide="volume-2"></i>';
            volumeSlider.value = video.muted ? 0 : video.volume;
            if(window.lucide) window.lucide.createIcons();
        });

        volumeSlider.addEventListener('input', (e) => {
            video.volume = e.target.value;
            video.muted = video.volume === 0;
            volumeBtn.innerHTML = video.muted ? '<i data-lucide="volume-x"></i>' : '<i data-lucide="volume-2"></i>';
            if(window.lucide) window.lucide.createIcons();
        });

        if (pipBtn) {
            pipBtn.addEventListener('click', async () => {
                try {
                    if (document.pictureInPictureElement) {
                        await document.exitPictureInPicture();
                    } else if (video.requestPictureInPicture) {
                        await video.requestPictureInPicture();
                    }
                } catch (err) {
                    console.error("PiP not supported or failed", err);
                }
            });
        }

        fullscreenBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                if(wrapper.requestFullscreen) wrapper.requestFullscreen();
                else if(wrapper.webkitRequestFullscreen) wrapper.webkitRequestFullscreen();
            } else {
                if(document.exitFullscreen) document.exitFullscreen();
            }
        });
    });
};

window.initCustomAudioPlayers = function() {
    const wrappers = document.querySelectorAll('.custom-audio-wrapper');
    wrappers.forEach(wrapper => {
        const audio = wrapper.querySelector('audio');
        const playBtn = wrapper.querySelector('.audio-play-btn');
        const progressContainer = wrapper.querySelector('.audio-progress-container');
        const progressFilled = wrapper.querySelector('.audio-progress-filled');
        const timeDisplay = wrapper.querySelector('.audio-time');
        const volumeBtn = wrapper.querySelector('.audio-volume-btn');
        const volumeSlider = wrapper.querySelector('.audio-volume-slider');
        const speedBtn = wrapper.querySelector('.audio-speed-btn');

        if(!audio) return;

        const formatTime = (time) => {
            if (isNaN(time)) return "0:00";
            const min = Math.floor(time / 60);
            const sec = Math.floor(time % 60);
            return `${min}:${sec < 10 ? '0' : ''}${sec}`;
        };

        const togglePlay = () => {
            if(audio.paused) { 
                audio.play(); 
                playBtn.innerHTML = '<i data-lucide="pause"></i>'; 
            } else { 
                audio.pause(); 
                playBtn.innerHTML = '<i data-lucide="play"></i>'; 
            }
            if(window.lucide) window.lucide.createIcons();
        };

        playBtn.addEventListener('click', togglePlay);

        // Suport tastatură (Săgeți pt derulare 10s și Spațiu pt pauză)
        wrapper.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') { audio.currentTime = Math.min(audio.duration, audio.currentTime + 10); e.preventDefault(); }
            if (e.key === 'ArrowLeft') { audio.currentTime = Math.max(0, audio.currentTime - 10); e.preventDefault(); }
            if (e.key === ' ') { togglePlay(); e.preventDefault(); }
        });

        // Suport viteză de redare
        if (speedBtn) {
            const speeds = [1, 1.25, 1.5, 2];
            let currentSpeedIdx = 0;
            speedBtn.addEventListener('click', () => {
                currentSpeedIdx = (currentSpeedIdx + 1) % speeds.length;
                audio.playbackRate = speeds[currentSpeedIdx];
                speedBtn.textContent = speeds[currentSpeedIdx] + 'x';
            });
        }

        audio.addEventListener('timeupdate', () => {
            const percent = (audio.currentTime / audio.duration) * 100;
            progressFilled.style.width = `${percent}%`;
            timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
        });

        audio.addEventListener('loadedmetadata', () => {
            timeDisplay.textContent = `0:00 / ${formatTime(audio.duration)}`;
        });

        progressContainer.addEventListener('click', (e) => {
            const rect = progressContainer.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            audio.currentTime = pos * audio.duration;
        });

        volumeBtn.addEventListener('click', () => {
            audio.muted = !audio.muted;
            volumeBtn.innerHTML = audio.muted ? '<i data-lucide="volume-x"></i>' : '<i data-lucide="volume-2"></i>';
            volumeSlider.value = audio.muted ? 0 : audio.volume;
            if(window.lucide) window.lucide.createIcons();
        });

        volumeSlider.addEventListener('input', (e) => {
            audio.volume = e.target.value;
            audio.muted = audio.volume === 0;
            volumeBtn.innerHTML = audio.muted ? '<i data-lucide="volume-x"></i>' : '<i data-lucide="volume-2"></i>';
            if(window.lucide) window.lucide.createIcons();
        });
    });
};

// --------------------------------------------------

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

window.toggleWindowsOptions = function(val) {
    const winGroup = document.getElementById('winVerGroup');
    if(winGroup) winGroup.style.display = val === 'win' ? 'block' : 'none';
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
    const osIds = ['windowsVersion', 'officeVersion', 'adobeVersion', 'autocadVersion', 'customPrograms'];
    osIds.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.addEventListener('change', calculateOSPrice);
    });

    const netEl = document.getElementById('equipmentPrice');
    if(netEl) netEl.addEventListener('input', calculateNetworkingPrice);

    const repairEl = document.getElementById('partPrice');
    const repairType = document.getElementById('repairType');
    if(repairEl) repairEl.addEventListener('input', calculateRepairPrice);
    if(repairType) repairType.addEventListener('change', calculateRepairPrice);

    const compIds = ['ramDDR', 'ramGB', 'diskType', 'diskSize'];
    compIds.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.addEventListener('input', calculateComponentPrice);
    });
    
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
    
    let rawRamTotalLei = (gb * (ddr * 50));
    rawRamTotalLei = rawRamTotalLei / 10;
    let ramPriceInLei = rawRamTotalLei * 1.35;

    let finalRamPrice;
    if (currentLanguage === 'ro-RO') finalRamPrice = ramPriceInLei;
    else finalRamPrice = ramPriceInLei / 5.2;

    const diskSelect = document.getElementById('diskType');
    const pricePerUnit = parseFloat(diskSelect.value);
    const unitType = diskSelect.options[diskSelect.selectedIndex].getAttribute('data-unit');
    const diskInput = parseFloat(document.getElementById('diskSize')?.value || 0);
    
    let diskPrice = 0;
    if (diskInput > 0) {
        if (unitType === 'GB') diskPrice = (diskInput / 1000) * pricePerUnit;
        else diskPrice = diskInput * pricePerUnit;
    }
    
    document.getElementById('ramPrice').textContent = `${finalRamPrice.toFixed(2)}${currency}`;
    document.getElementById('diskPrice').textContent = `${diskPrice.toFixed(2)}${currency}`;
    document.getElementById('compTotal').textContent = `${(finalRamPrice + diskPrice).toFixed(2)}${currency}`;
}

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
                     ${d.hasConfiguration ? `<button class="btn btn--primary btn--sm" onclick="showCameraConfiguration('${resolveLink(d.configLinkId || d.configUrl)}')">Configuration</button>` : ''}
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
                ${item.downloads ? `<div style="display: flex; gap: 8px; justify-content: center; margin-top: 12px; flex-wrap: wrap;">${item.downloads.map(dl => `<a href="${resolveLink(dl.linkId || dl.url)}" target="_blank" class="btn btn--outline btn--sm" style="font-size: 11px; padding: 4px 8px;"><i class="btn-icon" data-lucide="download" style="width: 12px; height: 12px;"></i> ${dl.label}</a>`).join('')}</div>` : ''}
            </div>
        `).join('');
    }
    lucide.createIcons();
}

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

// LOGICĂ ADAUGATĂ PENTRU BUTOANELE VIEW INFO
window.openDownloadInfo = function(id) {
    const item = allDownloadsData.find(d => d.id === id);
    if (item) {
        const content = item.infoHtml || `<p>${item.infoText}</p>`;
        // Folosim clasa 'modal-info'
        showContentModal(item.name, content, 'modal-info');
        if(window.lucide) window.lucide.createIcons();
    }
};

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
        const srcLink = resolveLink(d.sourceLinkId || d.sourceUrl);
        const dlLink = resolveLink(d.downloadLinkId || d.downloadUrl);
        const watchLink = resolveLink(d.watchLinkId || d.watchUrl);
        const singleLink = resolveLink(d.linkId || d.url);

        if (d.type === 'selector') {
            d.resolvedLinks = {};
            const sourceMap = d.linkIds || d.links || {}; 
            for (const ver in sourceMap) {
                d.resolvedLinks[ver] = {};
                for (const src in sourceMap[ver]) {
                    d.resolvedLinks[ver][src] = resolveLink(sourceMap[ver][src]);
                }
            }
            downloadLinkMap[d.id] = d.resolvedLinks;
            const defaultLink = (d.resolvedLinks[d.defaultVersion] && d.resolvedLinks[d.defaultVersion][d.defaultSource]) ? d.resolvedLinks[d.defaultVersion][d.defaultSource] : '#';
            
            return `<div class="download-card" id="card-${d.id}"><div class="download-header"><i class="download-icon" data-lucide="disc"></i><h3 class="download-title">${d.name}</h3></div><p class="download-description">${d.description}</p><div class="download-selectors" style="margin-bottom: 16px;"><div style="margin-bottom: 8px;"><label style="font-size: 12px; font-weight: bold; display: block; margin-bottom: 4px;">Version:</label><div class="btn-group" id="version-group-${d.id}" style="display: flex; gap: 4px; flex-wrap: wrap;">${d.options.versions.map(ver => `<button class="btn btn--sm ${ver === d.defaultVersion ? 'btn--primary' : 'btn--outline'}" onclick="updateDownloadSelection('${d.id}', 'version', '${ver}', this)">${ver}</button>`).join('')}</div></div><div><label style="font-size: 12px; font-weight: bold; display: block; margin-bottom: 4px;">Source:</label><div class="btn-group" id="source-group-${d.id}" style="display: flex; gap: 4px; flex-wrap: wrap;">${d.options.sources.map(src => `<button class="btn btn--sm ${src === d.defaultSource ? 'btn--primary' : 'btn--outline'}" onclick="updateDownloadSelection('${d.id}', 'source', '${src}', this)">${src}</button>`).join('')}</div></div></div><a href="${defaultLink}" id="download-btn-${d.id}" target="_blank" class="btn btn--primary btn--full-width" data-version="${d.defaultVersion}" data-source="${d.defaultSource}"><i class="btn-icon" data-lucide="download"></i> Download</a></div>`;
        
        } else if (d.type === 'video') {
            let infoBtn = '';
            if (d.infoText || d.infoHtml) {
                // AICI e adăugat butonul care apelează openDownloadInfo
                infoBtn = `<button class="btn btn--outline" style="flex: 1;" onclick="openDownloadInfo('${d.id}')"><i class="btn-icon" data-lucide="info"></i> View info</button>`;
            }
            return `<div class="download-card"><div class="download-header"><i class="download-icon" data-lucide="video"></i><h3 class="download-title">${d.name}</h3></div><p class="download-description">${d.description}</p><div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: auto;"><a href="${watchLink}" target="_blank" class="btn btn--primary" style="flex: 1;"><i class="btn-icon" data-lucide="play-circle"></i> Watch</a><a href="${srcLink}" target="_blank" class="btn btn--outline" style="flex: 1;"><i class="btn-icon" data-lucide="globe"></i> Source</a>${infoBtn}</div></div>`;
        
        } else if (d.type === 'folder') {
             return `<div class="download-card"><div class="download-header"><i class="download-icon" data-lucide="folder"></i><h3 class="download-title">${d.name}</h3></div><p class="download-description">${d.description}</p><a href="${singleLink}" target="_blank" class="btn btn--primary btn--full-width"><i class="btn-icon" data-lucide="external-link"></i> Show list</a></div>`;
        
        } else if (d.type === 'github-info') {
             let infoBtn = `<a href="${srcLink}" target="_blank" class="btn btn--outline" style="flex: 1;"><i class="btn-icon" data-lucide="github"></i> Source</a>`;
             if (d.infoText || d.infoHtml) {
                 // AICI e adăugat butonul care apelează openDownloadInfo
                 infoBtn = `<button class="btn btn--outline" style="flex: 1;" onclick="openDownloadInfo('${d.id}')"><i class="btn-icon" data-lucide="info"></i> View info</button>`;
             }
             return `<div class="download-card"><div class="download-header"><i class="download-icon" data-lucide="package"></i><h3 class="download-title">${d.name}</h3></div><p class="download-description">${d.description}</p><div class="download-meta"><span>Version: ${d.version}</span><span>Size: ${d.size}</span></div><div style="display: flex; gap: 8px; flex-wrap: wrap;">${infoBtn}<a href="${dlLink}" target="_blank" class="btn btn--primary" style="flex: 1;"><i class="btn-icon" data-lucide="download"></i> Download</a></div></div>`;
        
        } else {
            return `<div class="download-card"><div class="download-header"><i class="download-icon" data-lucide="download"></i><h3 class="download-title">${d.name}</h3></div><p class="download-description">${d.description}</p><div class="download-meta"><span>Version: ${d.version}</span><span>Size: ${d.size}</span></div><div style="display: flex; gap: 8px; flex-wrap: wrap;"><a href="${srcLink}" target="_blank" class="btn btn--outline" style="flex: 1;"><i class="btn-icon" data-lucide="code"></i> Source</a><a href="${dlLink}" target="_blank" class="btn btn--primary" style="flex: 1;"><i class="btn-icon" data-lucide="download"></i> Download</a></div></div>`;
        }
    }).join('');
    lucide.createIcons();
}

async function loadContact() {
    const data = await fetchJSON('contact.json');
    if (!data) return;

    let locContainer = document.getElementById('contactLocationContainer');
    const socialContainer = document.getElementById('socialMediaContainer');
    
    if (!locContainer && socialContainer && data.location) {
        locContainer = document.createElement('div');
        locContainer.id = 'contactLocationContainer';
        locContainer.style.marginBottom = '24px';
        locContainer.style.padding = '12px 16px';
        locContainer.style.background = 'var(--color-bg-2)';
        locContainer.style.border = '1px solid var(--color-border)';
        locContainer.style.borderRadius = 'var(--radius-base)';
        
        locContainer.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                <i data-lucide="map-pin" style="color: var(--color-primary); width: 20px; height: 20px;"></i>
                <span style="font-weight: 500; font-size: 1rem;">${data.location}</span>
            </div>
            ${data.sendFileLink ? `
            <div style="display: flex; align-items: center; gap: 10px; padding-top: 10px; border-top: 1px dashed var(--color-border);">
                <i data-lucide="upload-cloud" style="color: var(--color-primary); width: 20px; height: 20px;"></i>
                <a href="${data.sendFileLink}" target="_blank" style="color: var(--color-text); text-decoration: none; font-weight: 500;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-text)'">Send me files...</a>
            </div>` : ''}
        `;
        
        // Căutăm titlul <h3> ("Social Media") care se află fix deasupra containerului
        const socialHeading = socialContainer.previousElementSibling;
        
        // Inserăm locația fix deasupra titlului <h3>
        if (socialHeading && socialHeading.tagName === 'H3') {
            socialContainer.parentNode.insertBefore(locContainer, socialHeading);
        } else {
            socialContainer.parentNode.insertBefore(locContainer, socialContainer);
        }
    }

    if (socialContainer && data.socialMedia) socialContainer.innerHTML = data.socialMedia.map(s => generateSocialLink(s)).join('');
    
    const gamingContainer = document.getElementById('gamingProfilesContainer');
    if (gamingContainer && data.gamingProfiles) gamingContainer.innerHTML = data.gamingProfiles.map(g => generateGamingLink(g)).join('');
    
    if(window.lucide) window.lucide.createIcons();
}

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
    if(item.url) {
        return `<a href="${item.url}" target="_blank" class="contact-item" style="text-decoration:none; transition: transform 0.2s;">${iconHtml}<span>${item.name}: ${item.username} <i data-lucide="external-link" style="width: 12px; margin-left: 4px; color: var(--color-primary);"></i></span></a>`;
    }
    return `<div class="contact-item">${iconHtml}<span>${item.name}: ${item.username}</span></div>`;
}

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
                            
                            const downloadUrl = item.download ? resolveLink(item.download.linkId || item.download.url) : '#';

                            return `<div class="accessory-item" style="background: var(--color-bg-2); padding: 8px; border-radius: 6px; font-size: 13px; display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; position: relative;">${iconSvg}<span>${item.name}</span>${item.download ? `<a href="${downloadUrl}" target="_blank" class="btn btn--primary btn--sm" style="font-size: 10px; padding: 2px 6px; margin-top: 4px; width: 100%; text-align: center;"><i class="btn-icon" data-lucide="download" style="width: 10px; height: 10px;"></i> ${item.download.label}</a>` : ''}</div>`;
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
                    <a href="${configUrl || '#'}" target="_blank" class="btn btn--primary" ${!configUrl || configUrl === '#' ? 'disabled' : ''}>
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

window.copyCode = function(btnElement, codeId) {
    const codeEl = document.getElementById(codeId);
    if(codeEl) {
        // Obținem textul pur (fără tag-urile de sintaxă)
        const textToCopy = codeEl.textContent || codeEl.innerText;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalHtml = btnElement.innerHTML;
            btnElement.innerHTML = `<i data-lucide="check" style="width: 14px; margin-right: 4px; color: var(--color-success);"></i> Copied!`;
            
            // Re-renderizam noile iconițe inserate
            if(window.lucide) window.lucide.createIcons();
            
            // Resetăm butonul după 2 secunde
            setTimeout(() => {
                btnElement.innerHTML = originalHtml;
                if(window.lucide) window.lucide.createIcons();
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy code: ', err);
            btnElement.innerHTML = `<i data-lucide="x" style="width: 14px; margin-right: 4px; color: var(--color-error);"></i> Error`;
            if(window.lucide) window.lucide.createIcons();
        });
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

    // --- Contact Form Submission Logic (mailto:) ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Previne reîncărcarea paginii

            // Pune AICI adresa ta reală de email
            const destinationEmail = "ionutbaraooo@gmail.com"; 

            // Preluăm valorile introduse de utilizator
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const message = document.getElementById('contactMessage').value;

            // Construim Subiectul și Corpul mesajului (codate URL pentru a suporta spații și diacritice)
            const subject = encodeURIComponent(`New Contact Message from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            
            // Creăm link-ul mailto:
            const mailtoLink = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;

            // Deschidem clientul de mail
            window.location.href = mailtoLink;

            // Afișăm un mic mesaj de confirmare și golim formularul
            const resultEl = document.getElementById('formResult');
            resultEl.textContent = "Opening your email client...";
            resultEl.style.color = "var(--color-primary)";
            resultEl.style.display = "block";
            
            contactForm.reset();
            
            setTimeout(() => {
                resultEl.style.display = "none";
            }, 3000);
        });
    }
}

function showPage(pageId) {
    currentPage = pageId;
    localStorage.setItem('currentPage', pageId);
    window.location.hash = pageId; 
    
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

// --- PARSER PENTRU COMPONENTE BLOG ---
function parseBlogComponents(container) {
    if (!container) return;

    // 1. Transformare Video Local
    container.querySelectorAll('.blog-video').forEach(el => {
        const src = el.getAttribute('data-src');
        const poster = el.getAttribute('data-poster') || '';
        el.outerHTML = `
            <div class="custom-video-wrapper paused" tabindex="0">
                <video src="${src}" poster="${poster}" preload="metadata"></video>
                <div class="custom-video-controls">
                    <div class="video-progress-container"><div class="video-progress-filled"></div></div>
                    <div class="video-controls-main">
                        <div class="video-controls-left">
                            <button class="video-btn video-play-btn" title="Play/Pause"><i data-lucide="play"></i></button>
                            <button class="video-btn video-rewind-btn" title="Rewind 10s"><i data-lucide="rotate-ccw"></i></button>
                            <button class="video-btn video-forward-btn" title="Forward 10s"><i data-lucide="rotate-cw"></i></button>
                            <button class="video-btn video-volume-btn" title="Mute/Unmute"><i data-lucide="volume-2"></i></button>
                            <input type="range" class="video-volume-slider" min="0" max="1" step="0.1" value="1">
                            <span class="video-time">0:00 / 0:00</span>
                        </div>
                        <div class="video-controls-right">
                            <a href="${src}" download class="video-btn video-download-btn" title="Download Video"><i data-lucide="download"></i></a>
                            <button class="video-btn video-pip-btn" title="Picture in Picture"><i data-lucide="picture-in-picture"></i></button>
                            <button class="video-btn video-fullscreen-btn" title="Fullscreen"><i data-lucide="maximize"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    // 2. Transformare Audio Local
    container.querySelectorAll('.blog-audio').forEach(el => {
        const src = el.getAttribute('data-src');
        el.outerHTML = `
            <div class="custom-audio-wrapper" tabindex="0">
                <audio src="${src}" preload="metadata"></audio>
                <button class="audio-btn audio-play-btn" title="Play/Pause"><i data-lucide="play"></i></button>
                <div class="audio-progress-container"><div class="audio-progress-filled"></div></div>
                <span class="audio-time">0:00 / 0:00</span>
                <button class="audio-btn audio-speed-btn" title="Playback Speed" style="font-size: 0.9rem; font-weight: bold; width: 40px;">1x</button>
                <button class="audio-btn audio-volume-btn" title="Mute/Unmute"><i data-lucide="volume-2"></i></button>
                <input type="range" class="audio-volume-slider" min="0" max="1" step="0.1" value="1">
                <a href="${src}" download class="audio-btn" title="Download Audio"><i data-lucide="download"></i></a>
            </div>
        `;
    });

    // 3. Transformare YouTube Embed
    container.querySelectorAll('.blog-youtube').forEach(el => {
        const videoId = el.getAttribute('data-id');
        el.outerHTML = `
            <div class="youtube-embed-container">
                <iframe src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        `;
    });

    // 4. Transformare Bloc de Cod
    container.querySelectorAll('.blog-code').forEach((el, index) => {
        const lang = el.getAttribute('data-lang') || 'code';
        const codeContent = el.innerHTML; 
        const codeId = 'auto-code-' + index;
        
        el.outerHTML = `
            <div class="code-block-wrapper">
                <div class="code-block-header">
                    <span><i data-lucide="file-code-2" style="width: 16px; margin-right: 6px;"></i> ${lang}</span>
                    <button class="btn-copy" onclick="window.copyCode(this, '${codeId}')">
                        <i data-lucide="copy" style="width: 14px; margin-right: 4px;"></i> Copy Code
                    </button>
                </div>
                <div class="code-block-body">
                    <pre><code id="${codeId}">${codeContent}</code></pre>
                </div>
            </div>
        `;
    });

    // 5. Transformare Fisiere Download
    container.querySelectorAll('.blog-download').forEach(el => {
        const file = el.getAttribute('data-file');
        const title = el.getAttribute('data-title');
        const info = el.getAttribute('data-info');
        const icon = el.getAttribute('data-icon') || 'file';
        
        el.outerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 15px; padding: 15px 20px; border-bottom: 1px solid var(--color-border); background: var(--color-bg-2);">
                <div style="display: flex; align-items: center; gap: 16px;">
                    <div style="background: var(--color-border); color: white; padding: 10px; border-radius: var(--radius-base); display: flex;">
                        <i data-lucide="${icon}" style="width: 20px; height: 20px;"></i>
                    </div>
                    <div>
                        <h4 style="margin: 0; font-size: 1.05rem;">${title}</h4>
                        <span style="font-size: 0.85rem; color: var(--color-text-secondary); font-weight: 500;">${info}</span>
                    </div>
                </div>
                <a href="${file}" download class="btn btn--outline btn--sm">
                    <i data-lucide="download" style="width: 16px; margin-right: 6px;"></i> Download
                </a>
            </div>
        `;
    });
}

// --- ACTUALIZARE FUNCTIE FETCH ---
window.fetchAndShowContent = async function(title, filePath, modalClass = '') {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error('Content not found on server');
        const htmlContent = await response.text();
        
        const modal = document.getElementById('contentModal');
        const modalContentWrapper = modal.querySelector('.modal-content');
        
        modalContentWrapper.classList.remove('modal-article', 'modal-tool', 'modal-info');
        if (modalClass) modalContentWrapper.classList.add(modalClass);

        document.getElementById('contentModalTitle').textContent = title;
        
        const body = document.getElementById('contentModalBody');
        body.innerHTML = htmlContent;
        
        // --- 1. APLICĂ PARSERUL PENTRU BLOG ---
        parseBlogComponents(body);

        // --- 2. Rulăm Scripturile dacă există ---
        const scripts = body.getElementsByTagName("script");
        for (let i = 0; i < scripts.length; i++) {
            try { eval(scripts[i].innerText); } 
            catch(err) { console.error("Script execution failed:", err); }
        }

        modal.classList.remove('hidden');

        // --- 3. INIȚIALIZĂM FUNCȚIILE PLAYERELELOR (Care tocmai au fost generate) ---
        if(window.lucide) window.lucide.createIcons();
        window.initCustomVideoPlayers();
        window.initCustomAudioPlayers();

    } catch (e) {
        console.error("Modal fetch error:", e);
        showContentModal('Error', '<p>Could not load content.</p>', '');
    }
};

