// All JSON data embedded for easy management and modification
// This structure allows easy content updates without touching the application code

// Translation system supporting all languages
const translations = {
    'en-US': {
        siteName: "Ionut Bara's personal website",
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
            contact: 'Contact'
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
        blog: {
            title: 'Blog',
            subtitle: 'Technical articles and insights',
            readMore: 'Read More'
        },
        projects: {
            title: 'Software Projects',
            subtitle: 'Open source tools and utilities',
            viewOnGithub: 'View on GitHub'
        },
        cv: {
            title: 'My CV',
            subtitle: 'Complete professional profile',
            exportPdf: 'Export to PDF',
            socialMedia: { title: 'Connect with me' }
        },
        services: {
            title: 'Services',
            subtitle: 'Professional services with transparent pricing'
        },
        usdacm: {
            title: 'USDACM',
            subtitle: 'Political commentary and analysis'
        },
        devices: {
            title: 'Device Setup',
            subtitle: 'My current hardware specifications',
            accessories: 'Accessories',
            objectives: 'Objectives',
            collection: { title: 'Device Collection' }
        },
        downloads: {
            title: 'Downloads',
            subtitle: 'Available downloads and resources'
        },
        contact: {
            title: 'Contact',
            subtitle: 'Get in touch with me',
            form: {
                name: 'Name',
                email: 'Email',
                subject: 'Subject',
                message: 'Message',
                send: 'Send Message'
            },
            info: { title: 'Contact Information' },
            social: { title: 'Social Media' }
        }
    },
    'hu-HU': {
        siteName: "Ionut Bara személyes weboldala",
        nav: {
            home: 'Kezdőlap',
            about: 'Rólam',
            blog: 'Blog',
            projects: 'Projektek',
            cv: 'Önéletrajz',
            services: 'Szolgáltatások',
            usdacm: 'USDACM',
            devices: 'Eszközök',
            downloads: 'Letöltések',
            contact: 'Kapcsolat'
        },
        home: {
            title: 'Üdvözöljük a weboldalamon',
            subtitle: 'IT Részleg az Electricon-nál és AI Hallgató',
            work: {
                title: 'Szakmai Szerep',
                description: 'IT Részleg az Electricon-nál - IT menedzsment és termékek, beleértve az electricon.ro weboldalt'
            },
            education: {
                title: 'Oktatás',
                description: 'Mesterszakos hallgató Mesterséges Intelligencia területén az UMFST Tg Mures-ben'
            },
            location: {
                title: 'Helyszín',
                description: 'Romániában élek, Tg Mures, eredetileg Damuc, Neamt'
            },
            activism: {
                title: 'Aktivizmus',
                description: 'Korrupcióellenes aktivista Damuc-ban, Anton Covasan és PSD Damuc ellen'
            },
            viewProjects: 'Projektek Megtekintése',
            getInTouch: 'Kapcsolatfelvétel'
        },
        about: {
            title: 'Rólam',
            subtitle: 'Tudjon meg többet a hátteremről és érdeklődési köreiről',
            summary: 'Szenvedélyes IT szakember vagyok, aki az Electricon-nál dolgozik, IT műveleteket és termékeket kezelek. Jelenleg a Mesterséges Intelligencia mesterszakot végzem az UMFST Tg Mures-ben. Aktív korrupcióellenes aktivista is vagyok szülővárosomban, Damuc-ban, Neamt-ban.',
            ageLabel: 'Én vagyok',
            yearsOld: 'éves',
            faq: { title: 'Gyakran Ismételt Kérdések' },
            projects: { title: 'Kiemelt Projektek' }
        },
        blog: {
            title: 'Blog',
            subtitle: 'Technikai cikkek és betekintések',
            readMore: 'Tovább olvasom'
        },
        projects: {
            title: 'Szoftver Projektek',
            subtitle: 'Nyílt forráskódú eszközök és segédprogramok',
            viewOnGithub: 'Megtekintés GitHubon'
        },
        cv: {
            title: 'Önéletrajzom',
            subtitle: 'Teljes szakmai profil',
            exportPdf: 'Exportálás PDF-be',
            socialMedia: { title: 'Kapcsolódjon velem' }
        },
        services: {
            title: 'Szolgáltatások',
            subtitle: 'Professzionális szolgáltatások átlátható árazással'
        },
        usdacm: {
            title: 'USDACM',
            subtitle: 'Politikai kommentár és elemzés'
        },
        devices: {
            title: 'Eszköz Beállítás',
            subtitle: 'Jelenlegi hardver specifikációim',
            accessories: 'Kiegészítők',
            objectives: 'Objektívek',
            collection: { title: 'Eszköz Gyűjtemény' }
        },
        downloads: {
            title: 'Letöltések',
            subtitle: 'Elérhető letöltések és források'
        },
        contact: {
            title: 'Kapcsolat',
            subtitle: 'Vegye fel velem a kapcsolatot',
            form: {
                name: 'Név',
                email: 'Email',
                subject: 'Tárgy',
                message: 'Üzenet',
                send: 'Üzenet Küldése'
            },
            info: { title: 'Kapcsolattartási Információk' },
            social: { title: 'Közösségi Média' }
        }
    },
    'ro-RO': {
        siteName: "Site-ul personal al lui Ionut Bara",
        nav: {
            home: 'Acasă',
            about: 'Despre',
            blog: 'Blog',
            projects: 'Proiecte',
            cv: 'CV-ul Meu',
            services: 'Servicii',
            usdacm: 'USDACM',
            devices: 'Configurația Dispozitivelor',
            downloads: 'Descărcări',
            contact: 'Contact'
        },
        home: {
            title: 'Bun venit pe site-ul meu',
            subtitle: 'Departamentul IT la Electricon și Student AI',
            work: {
                title: 'Rol Profesional',
                description: 'Departamentul IT la Electricon - Management IT și produse, inclusiv site-ul electricon.ro'
            },
            education: {
                title: 'Educație',
                description: 'Student masterat în Inteligență Artificială la UMFST Tg Mureș'
            },
            location: {
                title: 'Locație',
                description: 'Locuiesc în România, Tg Mureș, originar din Damuc, Neamț'
            },
            activism: {
                title: 'Activism',
                description: 'Activist anti-corupție în Damuc, împotriva lui Anton Covasan și PSD Damuc'
            },
            viewProjects: 'Vezi Proiectele Mele',
            getInTouch: 'Ia Legătura'
        },
        about: {
            title: 'Despre Mine',
            subtitle: 'Aflați mai multe despre experiența și interesele mele',
            summary: 'Sunt un profesionist IT pasionat care lucrează la Electricon, gestionând operațiunile IT și produsele. În prezent urmez masteratul în Inteligență Artificială la UMFST Tg Mureș. Sunt și un activist activ împotriva corupției în orașul meu natal Damuc, Neamț.',
            ageLabel: 'Eu am',
            yearsOld: 'de ani',
            faq: { title: 'Întrebări Frecvente' },
            projects: { title: 'Proiecte Destacate' }
        },
        blog: {
            title: 'Blog',
            subtitle: 'Articole tehnice și perspective',
            readMore: 'Citește Mai Mult'
        },
        projects: {
            title: 'Proiecte Software',
            subtitle: 'Instrumente și utilitare open source',
            viewOnGithub: 'Vezi pe GitHub'
        },
        cv: {
            title: 'CV-ul Meu',
            subtitle: 'Profil profesional complet',
            exportPdf: 'Exportă în PDF',
            socialMedia: { title: 'Conectează-te cu mine' }
        },
        services: {
            title: 'Servicii',
            subtitle: 'Servicii profesionale cu prețuri transparente'
        },
        usdacm: {
            title: 'USDACM',
            subtitle: 'Comentarii și analize politice'
        },
        devices: {
            title: 'Configurația Dispozitivelor',
            subtitle: 'Specificațiile mele actuale hardware',
            accessories: 'Accesorii',
            objectives: 'Obiective',
            collection: { title: 'Colecția de Dispozitive' }
        },
        downloads: {
            title: 'Descărcări',
            subtitle: 'Descărcări și resurse disponibile'
        },
        contact: {
            title: 'Contact',
            subtitle: 'Ia legătura cu mine',
            form: {
                name: 'Nume',
                email: 'Email',
                subject: 'Subiect',
                message: 'Mesaj',
                send: 'Trimite Mesajul'
            },
            info: { title: 'Informații de Contact' },
            social: { title: 'Rețele Sociale' }
        }
    },
    'gall': {
        siteName: "Ionut Bara osobna stranica",
        nav: {
            home: 'Početna',
            about: 'O meni',
            blog: 'Blog',
            projects: 'Projekti',
            cv: 'Moj CV',
            services: 'Usluge',
            usdacm: 'USDACM',
            devices: 'Konfiguracija uređaja',
            downloads: 'Preuzimanja',
            contact: 'Kontakt'
        },
        home: {
            title: 'Dobrodošli na moju stranicu',
            subtitle: 'IT odjel u Electricon-u i AI student',
            work: {
                title: 'Profesionalna uloga',
                description: 'IT odjel u Electricon-u - upravljanje IT-om i proizvodima, uključujući electricon.ro web stranicu'
            },
            education: {
                title: 'Obrazovanje',
                description: 'Magistarski student Umjetne inteligencije na UMFST Tg Mures'
            },
            location: {
                title: 'Lokacija',
                description: 'Živim u Rumunjskoj, Tg Mures, porijeklo iz Damuc, Neamt'
            },
            activism: {
                title: 'Aktivizam',
                description: 'Antikorupcijski aktivist u Damuc-u, protiv Anton Covasan-a i PSD Damuc-a'
            },
            viewProjects: 'Pogledaj moje projekte',
            getInTouch: 'Stupi u kontakt'
        },
        about: {
            title: 'O meni',
            subtitle: 'Saznajte više o mojoj pozadini i interesima',
            summary: 'Strastan sam IT profesionalac koji radi u Electricon-u, upravljam IT operacijama i proizvodima. Trenutno studiram magisterij Umjetne inteligencije na UMFST Tg Mures. Također sam aktivan zagovornik protiv korupcije u mom rodnom gradu Damuc, Neamt.',
            ageLabel: 'Imam',
            yearsOld: 'godina',
            faq: { title: 'Često postavljana pitanja' },
            projects: { title: 'Istaknuti projekti' }
        },
        blog: {
            title: 'Blog',
            subtitle: 'Tehnički članci i uvidi',
            readMore: 'Čitaj više'
        },
        projects: {
            title: 'Softverski projekti',
            subtitle: 'Alati i programi otvorenog koda',
            viewOnGithub: 'Pogledaj na GitHub-u'
        },
        cv: {
            title: 'Moj CV',
            subtitle: 'Potpun profesionalni profil',
            exportPdf: 'Izvezi u PDF',
            socialMedia: { title: 'Povežite se sa mnom' }
        },
        services: {
            title: 'Usluge',
            subtitle: 'Profesionalne usluge s transparentnim cijenama'
        },
        usdacm: {
            title: 'USDACM',
            subtitle: 'Politički komentari i analize'
        },
        devices: {
            title: 'Konfiguracija uređaja',
            subtitle: 'Moje trenutne hardverske specifikacije',
            accessories: 'Pribor',
            objectives: 'Objektivi',
            collection: { title: 'Kolekcija uređaja' }
        },
        downloads: {
            title: 'Preuzimanja',
            subtitle: 'Dostupna preuzimanja i resursi'
        },
        contact: {
            title: 'Kontakt',
            subtitle: 'Stupi u kontakt sa mnom',
            form: {
                name: 'Ime',
                email: 'Email',
                subject: 'Predmet',
                message: 'Poruka',
                send: 'Pošalji poruku'
            },
            info: { title: 'Kontakt informacije' },
            social: { title: 'Društvene mreže' }
        }
    }
};

// FAQ data with multi-language support
const faqData = {
    'en-US': [
        {
            question: "What is your primary area of expertise?",
            answer: "I specialize in IT management, Windows system administration, and artificial intelligence development. I work at Electricon managing IT operations and products."
        },
        {
            question: "Do you work remotely?",
            answer: "Yes, I offer both remote and on-site services depending on the project requirements. I'm based in Târgu Mureș, Romania."
        },
        {
            question: "What programming languages do you use?",
            answer: "I primarily work with PowerShell, Batch scripting, Python, and various web technologies for my Windows optimization tools and AI projects."
        },
        {
            question: "How can I contact you for services?",
            answer: "You can reach me through the contact form on this website, or directly at ionutbaraooo@gmail.com. I respond to all inquiries within 24 hours."
        }
    ],
    'hu-HU': [
        {
            question: "Mi az Ön elsődleges szakterülete?",
            answer: "IT menedzsmenttel, Windows rendszeradminisztrációval és mesterséges intelligencia fejlesztéssel foglalkozom. Az Electricon-nál dolgozom, IT műveleteket és termékeket kezelek."
        },
        {
            question: "Dolgozik távolról?",
            answer: "Igen, a projekt követelményeitől függően távoli és helyszíni szolgáltatásokat is kínálok. Târgu Mureș-ben, Romániában vagyok."
        },
        {
            question: "Milyen programozási nyelveket használ?",
            answer: "Elsősorban PowerShell-lel, Batch szkripteléssel, Python-nal és különböző webes technológiákkal dolgozom Windows optimalizáló eszközeim és AI projektjeim számára."
        },
        {
            question: "Hogyan tudok kapcsolatba lépni Önnel szolgáltatások ügyében?",
            answer: "Elérhetsz az ezen a weboldalon található kapcsolatfelvételi űrlapon keresztül, vagy közvetlenül az ionutbaraooo@gmail.com címen. 24 órán belül válaszolok minden megkeresésre."
        }
    ],
    'ro-RO': [
        {
            question: "Care este domeniul dvs. principal de expertiză?",
            answer: "Sunt specializat în managementul IT, administrarea sistemelor Windows și dezvoltarea inteligenței artificiale. Lucrez la Electricon gestionând operațiunile și produsele IT."
        },
        {
            question: "Lucrați de la distanță?",
            answer: "Da, ofer atât servicii la distanță, cât și la fața locului, în funcție de cerințele proiectului. Sunt bazat în Târgu Mureș, România."
        },
        {
            question: "Ce limbaje de programare folosiți?",
            answer: "Lucrez în principal cu PowerShell, scripting Batch, Python și diverse tehnologii web pentru instrumentele mele de optimizare Windows și proiectele AI."
        },
        {
            question: "Cum vă pot contacta pentru servicii?",
            answer: "Mă puteți contacta prin formularul de contact de pe acest site web sau direct la ionutbaraooo@gmail.com. Răspund la toate solicitările în 24 de ore."
        }
    ],
    'gall': [
        {
            question: "Koja je vaša primarna oblast ekspertize?",
            answer: "Specijalizovan sam za IT menadžment, Windows sistem administraciju i razvoj umjetne inteligencije. Radim u Electricon-u upravljajući IT operacijama i proizvodima."
        },
        {
            question: "Radite li na daljinu?",
            answer: "Da, nudim i usluge na daljinu i na licu mjesta ovisno o zahtjevima projekta. Baziran sam u Târgu Mureș-u, Rumunija."
        },
        {
            question: "Koje programske jezike koristite?",
            answer: "Uglavnom radim s PowerShell-om, Batch skriptiranjem, Python-om i različitim web tehnologijama za moje Windows optimizacijske alate i AI projekte."
        },
        {
            question: "Kako me možete kontaktirati za usluge?",
            answer: "Možete me kontaktirati preko kontakt forme na ovoj web stranici ili direktno na ionutbaraooo@gmail.com. Odgovaram na sve upite unutar 24 sata."
        }
    ]
};

// Projects data with multi-language support
const projectsData = {
    'en-US': [
        {
            name: "Defender Remover",
            description: "A tool which is used to remove Windows Defender in Windows 8.x, Windows 10 (every version) and Windows 11.",
            github: "https://github.com/ionuttbara/windows-defender-remover",
            technologies: ["Batch", "PowerShell", "Windows"],
            status: "Active"
        },
        {
            name: "Melody Script",
            description: "Melody Optimization Script for Windows - bundled app for Windows 7/8.x/10/11 which consists of several high-quality tweaks",
            github: "https://github.com/ionuttbara/melody_windows",
            technologies: ["PowerShell", "Batch", "Windows"],
            status: "Active"
        }
    ],
    'hu-HU': [
        {
            name: "Defender Remover",
            description: "Egy eszköz, amelyet a Windows Defender eltávolítására használnak Windows 8.x, Windows 10 (minden verzió) és Windows 11 rendszereken.",
            github: "https://github.com/ionuttbara/windows-defender-remover",
            technologies: ["Batch", "PowerShell", "Windows"],
            status: "Aktív"
        },
        {
            name: "Melody Script",
            description: "Melody Optimalizálási Szkript Windows-hoz - összeállított alkalmazás Windows 7/8.x/10/11 rendszerekhez, amely több magas minőségű finomhangolást tartalmaz",
            github: "https://github.com/ionuttbara/melody_windows",
            technologies: ["PowerShell", "Batch", "Windows"],
            status: "Aktív"
        }
    ],
    'ro-RO': [
        {
            name: "Defender Remover",
            description: "Un instrument care este folosit pentru a elimina Windows Defender în Windows 8.x, Windows 10 (orice versiune) și Windows 11.",
            github: "https://github.com/ionuttbara/windows-defender-remover",
            technologies: ["Batch", "PowerShell", "Windows"],
            status: "Activ"
        },
        {
            name: "Melody Script",
            description: "Script de Optimizare Melody pentru Windows - aplicație înglobată pentru Windows 7/8.x/10/11 care constă din mai multe ajustări de înaltă calitate",
            github: "https://github.com/ionuttbara/melody_windows",
            technologies: ["PowerShell", "Batch", "Windows"],
            status: "Activ"
        }
    ],
    'gall': [
        {
            name: "Defender Remover",
            description: "Alat koji se koristi za uklanjanje Windows Defender-a u Windows 8.x, Windows 10 (svaka verzija) i Windows 11.",
            github: "https://github.com/ionuttbara/windows-defender-remover",
            technologies: ["Batch", "PowerShell", "Windows"],
            status: "Aktivan"
        },
        {
            name: "Melody Script",
            description: "Melody Optimizacijska Skripta za Windows - pakirana aplikacija za Windows 7/8.x/10/11 koja se sastoji od nekoliko visokokvalitetnih podešavanja",
            github: "https://github.com/ionuttbara/melody_windows",
            technologies: ["PowerShell", "Batch", "Windows"],
            status: "Aktivan"
        }
    ]
};

// CV data with multi-language support
const cvData = {
    'en-US': {
        personalInfo: {
            name: "Ionut Bara",
            email: "ionutbaraooo@gmail.com",
            phone: "+40 XXX XXX XXX",
            location: "Târgu Mureș, Romania"
        },
        education: [
            {
                degree: "Master's in Artificial Intelligence",
                institution: "UMFST Târgu Mureș",
                period: "2023 - Present",
                status: "Current"
            },
            {
                degree: "Bachelor's in Computer Science",
                institution: "Technical University",
                period: "2020 - 2023",
                status: "Completed"
            }
        ],
        experience: [
            {
                position: "IT Department Manager",
                company: "Electricon",
                period: "2022 - Present",
                description: "Managing IT operations, products, and the electricon.ro website. Responsible for system administration and digital infrastructure."
            }
        ],
        skills: ["PowerShell", "Batch Scripting", "Windows Administration", "System Optimization", "Python", "JavaScript", "HTML/CSS", "Network Administration", "Cybersecurity"],
        certificates: ["Windows Server Administration", "Network Security", "Python Programming"],
        languages: ["Romanian (Native)", "English (Fluent)", "Hungarian (Conversational)", "GALL (Basic)"],
        projects: ["Defender Remover", "Melody Script", "Windows Optimization Tools"]
    },
    'hu-HU': {
        personalInfo: {
            name: "Ionut Bara",
            email: "ionutbaraooo@gmail.com",
            phone: "+40 XXX XXX XXX",
            location: "Târgu Mureș, Románia"
        },
        education: [
            {
                degree: "Mesterszak Mesterséges Intelligenciában",
                institution: "UMFST Târgu Mureș",
                period: "2023 - Jelenlegi",
                status: "Jelenlegi"
            },
            {
                degree: "Informatikai Alapszak",
                institution: "Műszaki Egyetem",
                period: "2020 - 2023",
                status: "Befejezett"
            }
        ],
        experience: [
            {
                position: "IT Részleg Vezető",
                company: "Electricon",
                period: "2022 - Jelenlegi",
                description: "IT műveletek, termékek és az electricon.ro weboldal kezelése. Felelős a rendszeradminisztrációért és a digitális infrastruktúráért."
            }
        ],
        skills: ["PowerShell", "Batch Scripting", "Windows Adminisztráció", "Rendszer Optimalizálás", "Python", "JavaScript", "HTML/CSS", "Hálózat Adminisztráció", "Kiberbiztonsággal"],
        certificates: ["Windows Server Adminisztráció", "Hálózati Biztonság", "Python Programozás"],
        languages: ["Román (Anyanyelv)", "Angol (Folyékony)", "Magyar (Társalgási)", "GALL (Alapfok)"],
        projects: ["Defender Remover", "Melody Script", "Windows Optimalizálási Eszközök"]
    },
    'ro-RO': {
        personalInfo: {
            name: "Ionut Bara",
            email: "ionutbaraooo@gmail.com",
            phone: "+40 XXX XXX XXX",
            location: "Târgu Mureș, România"
        },
        education: [
            {
                degree: "Masterat în Inteligență Artificială",
                institution: "UMFST Târgu Mureș",
                period: "2023 - Prezent",
                status: "Curent"
            },
            {
                degree: "Licență în Informatică",
                institution: "Universitatea Tehnică",
                period: "2020 - 2023",
                status: "Finalizat"
            }
        ],
        experience: [
            {
                position: "Manager Departament IT",
                company: "Electricon",
                period: "2022 - Prezent",
                description: "Gestionarea operațiunilor IT, produselor și site-ului web electricon.ro. Responsabil pentru administrarea sistemelor și infrastructura digitală."
            }
        ],
        skills: ["PowerShell", "Scripting Batch", "Administrare Windows", "Optimizare Sistem", "Python", "JavaScript", "HTML/CSS", "Administrare Rețea", "Securitate Cibernetică"],
        certificates: ["Administrare Windows Server", "Securitate Rețea", "Programare Python"],
        languages: ["Română (Nativă)", "Engleză (Fluent)", "Maghiară (Conversațională)", "GALL (De bază)"],
        projects: ["Defender Remover", "Melody Script", "Instrumente de Optimizare Windows"]
    },
    'gall': {
        personalInfo: {
            name: "Ionut Bara",
            email: "ionutbaraooo@gmail.com",
            phone: "+40 XXX XXX XXX",
            location: "Târgu Mureș, Rumunija"
        },
        education: [
            {
                degree: "Magisterij u Umjetnoj inteligenciji",
                institution: "UMFST Târgu Mureș",
                period: "2023 - Sadašnje",
                status: "Trenutno"
            },
            {
                degree: "Diplom u Informatici",
                institution: "Tehnički univerzitet",
                period: "2020 - 2023",
                status: "Završen"
            }
        ],
        experience: [
            {
                position: "Manager IT odjela",
                company: "Electricon",
                period: "2022 - Sadašnje",
                description: "Upravljanje IT operacijama, proizvodima i electricon.ro web stranicom. Odgovoran za administraciju sistema i digitalnu infrastrukturu."
            }
        ],
        skills: ["PowerShell", "Batch Scripting", "Windows Administracija", "Sistemska optimizacija", "Python", "JavaScript", "HTML/CSS", "Mrežna administracija", "Kiberbezbednost"],
        certificates: ["Windows Server Administracija", "Mrežna bezbednost", "Python programiranje"],
        languages: ["Rumunski (Maternji)", "Engleski (Tečno)", "Mađarski (Konverzacijski)", "GALL (Osnovno)"],
        projects: ["Defender Remover", "Melody Script", "Windows optimizacijski alati"]
    }
};

// Updated services data with merged structure and currency support
const servicesData = {
    'en-US': [
        {
            id: "phoneAdmin",
            category: "Phone Administration",
            description: "Android/iPhone cleaning, Google/iCloud unlock, content management, etc.",
            pricing: {
                base: "10€",
                labor: "No labor cost"
            }
        },
        {
            id: "windowsInstallation",
            category: "Windows Installation & Custom Programs",
            description: "Complete Windows installation with various options and custom software installation",
            pricing: {
                base: "15€ labor",
                customPrograms: "23€/program"
            },
            options: [
                { name: "Windows OEM License", price: "included" },
                { name: "Windows Pro", price: "+7€" },
                { name: "Windows IoT Enterprise LTSC", price: "+17€" },
                { name: "Office 2024 LTSC", price: "+10€" },
                { name: "Adobe Acrobat Pro DC 2019", price: "+3€" }
            ]
        },
        {
            id: "networking",
            category: "Networking",
            description: "Equipment installation and configuration with total cost calculation",
            pricing: {
                labor: "20% of equipment price",
                minimum: "4500€ minimum equipment cost"
            }
        }
    ],
    'hu-HU': [
        {
            id: "phoneAdmin",
            category: "Telefon Adminisztráció",
            description: "Android/iPhone tisztítás, Google/iCloud feloldás, tartalom kezelés, stb.",
            pricing: {
                base: "10€",
                labor: "Nincs munkadíj"
            }
        },
        {
            id: "windowsInstallation",
            category: "Windows Telepítés és Egyedi Programok",
            description: "Teljes Windows telepítés különböző opciókkal és egyedi szoftver telepítés",
            pricing: {
                base: "15€ munkadíj",
                customPrograms: "23€/program"
            },
            options: [
                { name: "Windows OEM Licenc", price: "benne van" },
                { name: "Windows Pro", price: "+7€" },
                { name: "Windows IoT Enterprise LTSC", price: "+17€" },
                { name: "Office 2024 LTSC", price: "+10€" },
                { name: "Adobe Acrobat Pro DC 2019", price: "+3€" }
            ]
        },
        {
            id: "networking",
            category: "Hálózatépítés",
            description: "Berendezések telepítése és konfigurálása teljes költségszámítással",
            pricing: {
                labor: "Berendezés árának 20%-a",
                minimum: "4500€ minimum berendezési költség"
            }
        }
    ],
    'ro-RO': [
        {
            id: "phoneAdmin",
            category: "Administrare Telefon",
            description: "Curățare Android/iPhone, deblocare Google/iCloud, gestionare conținut, etc.",
            pricing: {
                base: "30 lei",
                labor: "Fără cost manoperă"
            }
        },
        {
            id: "windowsInstallation",
            category: "Instalare Windows și Programe Personalizate",
            description: "Instalare completă Windows cu diverse opțiuni și instalare software personalizat",
            pricing: {
                base: "45 lei manoperă",
                customPrograms: "70 lei/program"
            },
            options: [
                { name: "Licență Windows OEM", price: "inclus" },
                { name: "Windows Pro", price: "+20 lei" },
                { name: "Windows IoT Enterprise LTSC", price: "+50 lei" },
                { name: "Office 2024 LTSC", price: "+30 lei" },
                { name: "Adobe Acrobat Pro DC 2019", price: "+10 lei" }
            ]
        },
        {
            id: "networking",
            category: "Rețelistică",
            description: "Instalare și configurare echipamente cu calculul costului total",
            pricing: {
                labor: "20% din prețul echipamentelor",
                minimum: "25.000 lei cost minim echipamente"
            }
        }
    ],
    'gall': [
        {
            id: "phoneAdmin",
            category: "Administracija telefona",
            description: "Android/iPhone čišćenje, Google/iCloud otključavanje, upravljanje sadržajem, itd.",
            pricing: {
                base: "10€",
                labor: "Bez troška rada"
            }
        },
        {
            id: "windowsInstallation",
            category: "Windows instalacija i prilagođeni programi",
            description: "Kompletna Windows instalacija s različitim opcijama i instalacija prilagođenog softvera",
            pricing: {
                base: "15€ rad",
                customPrograms: "23€/program"
            },
            options: [
                { name: "Windows OEM licenca", price: "uključeno" },
                { name: "Windows Pro", price: "+7€" },
                { name: "Windows IoT Enterprise LTSC", price: "+17€" },
                { name: "Office 2024 LTSC", price: "+10€" },
                { name: "Adobe Acrobat Pro DC 2019", price: "+3€" }
            ]
        },
        {
            id: "networking",
            category: "Umrežavanje",
            description: "Instalacija i konfiguracija opreme s izračunom ukupnog troška",
            pricing: {
                labor: "20% cijene opreme",
                minimum: "4500€ minimalni trošak opreme"
            }
        }
    ]
};

// Updated devices data with new accessories structure
const devicesData = {
    'en-US': [
        {
            type: "Laptop",
            model: "Lenovo LOQ 15",
            icon: "laptop",
            specs: {
                "CPU": "AMD Ryzen 7745",
                "GPU": "NVIDIA RTX 4060 Laptop 8GB",
                "RAM": "64GB DDR5",
                "Storage": "2x4TB SSD NVMe",
                "OS": "Windows 11 Pro"
            },
            accessories: {
                "Mures Setup": [
                    "LG Monitor", "Logitech Keyboard", "Logitech Mouse", "Logitech Webcam",
                    "Logitech Speakers", "Xerox Printer", "Logitech Controller", "PlayStation Controller",
                    "Xbox Controller", "Logitech G29 + G-shift", "Canon Scanner"
                ],
                "Office Setup (Electricon)": [
                    "LG Monitor", "G613 Keyboard", "Baseus Docking Station", "G604 Mouse"
                ],
                "Damuc Setup": [
                    "G604 Mouse"
                ]
            }
        },
        {
            type: "Phone",
            model: "Samsung Galaxy S23 Ultra 1TB",
            icon: "phone",
            specs: {
                "Display": "6.8\" Dynamic AMOLED 2X",
                "Storage": "1TB",
                "RAM": "12GB",
                "Camera": "200MP main, 12MP ultra-wide, 10MP telephoto",
                "Battery": "5000mAh",
                "OS": "Android 14"
            }
        },
        {
            type: "Tablet",
            model: "Samsung Galaxy Tab S9 Ultra 512GB",
            icon: "tablet",
            specs: {
                "Display": "14.6\" Dynamic AMOLED 2X",
                "Storage": "512GB",
                "RAM": "12GB",
                "Processor": "Snapdragon 8 Gen 2",
                "OS": "Android 13"
            },
            accessories: {
                "Tablet Accessories": ["SD Card"]
            }
        },
        {
            type: "Desktop Backup",
            model: "24GB RAM DDR3 with Intel i5 gen 6 Esprimo",
            icon: "desktop",
            specs: {
                "CPU": "Intel i5 6th Gen",
                "RAM": "24GB DDR3",
                "Type": "Fujitsu Esprimo",
                "Purpose": "Backup system"
            }
        },
        {
            type: "Desktop Retro 1",
            model: "Fujitsu P600 with Pentium 4 and Windows XP",
            icon: "old-pc",
            specs: {
                "CPU": "Intel Pentium 4",
                "OS": "Windows XP",
                "Model": "Fujitsu P600",
                "Purpose": "Retro computing"
            }
        },
        {
            type: "Camera",
            model: "Nikon Z50ii",
            icon: "camera",
            specs: {
                "Sensor": "20.9MP APS-C CMOS",
                "Video": "10-bit 4K UHD",
                "Images": "10-bit HEIC",
                "Mount": "Nikon Z"
            },
            lenses: [
                "NIKKOR Z DX 16-50mm f/3.5-6.3 VR",
                "NIKKOR Z DX 50-250mm f/4.5-6.3 VR"
            ]
        },
        {
            type: "Server",
            model: "4TB SSD SATA integrated in Router",
            icon: "server",
            specs: {
                "Storage": "4TB SSD SATA",
                "Integration": "Built into router",
                "Purpose": "Network storage"
            }
        },
        {
            type: "Router",
            model: "TP-Link WiFi AX53",
            icon: "router",
            specs: {
                "Standard": "WiFi 6 (802.11ax)",
                "Speed": "AX3000",
                "Brand": "TP-Link",
                "Model": "AX53"
            }
        },
        {
            type: "External Storage",
            model: "55TB HDD + 14TB SSD",
            icon: "storage",
            specs: {
                "HDD Storage": "55TB",
                "SSD Storage": "14TB",
                "Type": "External drives",
                "Total": "69TB external storage"
            }
        },
        {
            type: "VR Headset",
            model: "HTC Vive Cosmos",
            icon: "vr",
            specs: {
                "Brand": "HTC",
                "Model": "Vive Cosmos",
                "Type": "Virtual Reality",
                "Tracking": "Inside-out tracking"
            }
        }
    ]
};

// Device collection data
const deviceCollectionData = {
    'en-US': [
        {
            name: "PlayStation 2 Slim EU/PAL modded",
            icon: "playstation",
            description: "Modded gaming console for retro gaming"
        },
        {
            name: "Dell Inspiron retro PC",
            icon: "old-pc",
            description: "Vintage computer for retro computing tasks"
        }
    ],
    'hu-HU': [
        {
            name: "PlayStation 2 Slim EU/PAL módosított",
            icon: "playstation",
            description: "Módosított játékkonzol retro játékokhoz"
        },
        {
            name: "Dell Inspiron retro PC",
            icon: "old-pc",
            description: "Régi számítógép retro számítástechnikai feladatokhoz"
        }
    ],
    'ro-RO': [
        {
            name: "PlayStation 2 Slim EU/PAL modificat",
            icon: "playstation",
            description: "Consolă de jocuri modificată pentru gaming retro"
        },
        {
            name: "Dell Inspiron PC retro",
            icon: "old-pc",
            description: "Computer vintage pentru sarcini de computing retro"
        }
    ],
    'gall': [
        {
            name: "PlayStation 2 Slim EU/PAL modificiran",
            icon: "playstation",
            description: "Modificirana gaming konzola za retro gaming"
        },
        {
            name: "Dell Inspiron retro PC",
            icon: "old-pc",
            description: "Vintage računar za retro računarske zadatke"
        }
    ]
};

// Downloads data with multi-language support
const downloadsData = {
    'en-US': [
        {
            name: "Melody Script Windows",
            description: "Windows optimization script for better performance and system tweaks",
            downloadUrl: "https://github.com/ionuttbara/melody_windows",
            version: "v2.1",
            size: "25MB"
        },
        {
            name: "Defender Remover Tool",
            description: "Remove Windows Defender completely from your Windows system",
            downloadUrl: "https://github.com/ionuttbara/windows-defender-remover",
            version: "v1.5",
            size: "15MB"
        }
    ],
    'hu-HU': [
        {
            name: "Melody Script Windows",
            description: "Windows optimalizálási szkript jobb teljesítményért és rendszer finomhangolásért",
            downloadUrl: "https://github.com/ionuttbara/melody_windows",
            version: "v2.1",
            size: "25MB"
        },
        {
            name: "Defender Remover Tool",
            description: "Távolítsa el teljesen a Windows Defender-t a Windows rendszeréből",
            downloadUrl: "https://github.com/ionuttbara/windows-defender-remover",
            version: "v1.5",
            size: "15MB"
        }
    ],
    'ro-RO': [
        {
            name: "Melody Script Windows",
            description: "Script de optimizare Windows pentru performanță mai bună și ajustări de sistem",
            downloadUrl: "https://github.com/ionuttbara/melody_windows",
            version: "v2.1",
            size: "25MB"
        },
        {
            name: "Defender Remover Tool",
            description: "Eliminați complet Windows Defender din sistemul dvs. Windows",
            downloadUrl: "https://github.com/ionuttbara/windows-defender-remover",
            version: "v1.5",
            size: "15MB"
        }
    ],
    'gall': [
        {
            name: "Melody Script Windows",
            description: "Windows optimizacijska skripta za bolju performansu i sistemska podešavanja",
            downloadUrl: "https://github.com/ionuttbara/melody_windows",
            version: "v2.1",
            size: "25MB"
        },
        {
            name: "Defender Remover Tool",
            description: "Potpuno uklonite Windows Defender iz vašeg Windows sistema",
            downloadUrl: "https://github.com/ionuttbara/windows-defender-remover",
            version: "v1.5",
            size: "15MB"
        }
    ]
};

// Contact info data
const contactInfo = {
    email: "ionutbaraooo@gmail.com",
    socialMedia: [
        {
            name: "GitHub",
            url: "https://github.com/ionuttbara",
            icon: "github",
            username: "ionuttbara"
        },
        {
            name: "GitLab",
            url: "https://gitlab.com/ionuttbara",
            icon: "gitlab",
            username: "ionuttbara"
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/ionuttbara/",
            icon: "facebook",
            username: "ionuttbara"
        },
        {
            name: "Instagram",
            url: "https://instagram.com/ionuttbara",
            icon: "instagram",
            username: "ionuttbara",
            warning: "Instagram account is not used regularly and is deprecated. Continue?"
        },
        {
            name: "Snapchat",
            url: "https://snapchat.com/add/ionut_bara",
            icon: "snapchat",
            username: "ionut_bara",
            warning: "Snapchat account is not used regularly and is deprecated. Continue?"
        },
        {
            name: "Discord",
            url: "#",
            icon: "discord",
            username: "ionutbara"
        }
    ]
};

// Blog and USDACM content simulation
const blogContent = {
    'en-US': {
        blog1: {
            title: 'Windows Optimization Best Practices',
            excerpt: 'Learn the most effective techniques for optimizing Windows performance...',
            content: `
                <h1>Windows Optimization Best Practices</h1>
                <p>After years of working with Windows systems at Electricon and developing optimization tools, I've compiled the most effective techniques for improving system performance.</p>
                
                <h2>1. Startup Program Management</h2>
                <p>One of the biggest performance killers is having too many programs start automatically with Windows. Use Task Manager to disable unnecessary startup programs.</p>
                
                <h2>2. System File Cleanup</h2>
                <p>Regular cleanup of temporary files, cache, and system logs can free up significant disk space and improve performance. My Melody Script automates many of these tasks.</p>
                
                <h2>3. Registry Optimization</h2>
                <p>Careful registry cleanup and optimization can improve system responsiveness. Always backup before making changes.</p>
                
                <h2>4. Memory Management</h2>
                <p>Proper RAM management and virtual memory configuration is crucial for optimal performance, especially on systems with limited memory.</p>
                
                <p>These techniques form the foundation of my Windows optimization tools available in the downloads section.</p>
            `
        },
        blog2: {
            title: 'AI in System Administration',
            excerpt: 'How artificial intelligence is revolutionizing IT management and automation...',
            content: `
                <h1>AI in System Administration</h1>
                <p>As someone pursuing a Master's in AI while working in IT management, I see incredible potential for AI in system administration.</p>
                
                <h2>Predictive Maintenance</h2>
                <p>AI can analyze system logs and performance metrics to predict hardware failures before they occur, reducing downtime significantly.</p>
                
                <h2>Automated Problem Resolution</h2>
                <p>Machine learning algorithms can learn from past incidents to automatically resolve common issues without human intervention.</p>
                
                <h2>Security Enhancement</h2>
                <p>AI-powered security systems can detect anomalies and potential threats in real-time, providing better protection than traditional methods.</p>
                
                <h2>Resource Optimization</h2>
                <p>Intelligent resource allocation based on usage patterns can improve efficiency and reduce costs in enterprise environments.</p>
                
                <p>The future of IT management lies in the integration of human expertise with AI capabilities.</p>
            `
        }
    }
};

const usdacmContent = {
    'en-US': {
        politik1: {
            title: 'Digital Rights in Romania',
            excerpt: 'Analysis of digital privacy and rights issues in Romanian politics...',
            content: `
                <h1>Digital Rights in Romania</h1>
                <p>As both a technology professional and political activist, I believe digital rights are fundamental to modern democracy.</p>
                
                <h2>Current Challenges</h2>
                <p>Romania faces significant challenges in balancing security needs with citizen privacy rights, especially in digital communications and data protection.</p>
                
                <h2>The Role of Technology</h2>
                <p>Technology should empower citizens, not enable surveillance. We need stronger protections for digital privacy and data sovereignty.</p>
                
                <h2>Anti-Corruption and Transparency</h2>
                <p>Digital tools can be powerful weapons against corruption when used transparently. My activism in Damuc has shown how technology can expose corruption.</p>
                
                <h2>Moving Forward</h2>
                <p>We need comprehensive digital rights legislation that protects citizens while enabling innovation and economic growth.</p>
            `
        }
    }
};

// App state
let currentLanguage = 'en-US';
let currentPage = 'home';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing app...');
    
    setTimeout(() => {
        initializeApp();
        calculateAge();
        setupEventListeners();
        loadAllContent();
        
        setInterval(calculateAge, 1000);
        
        console.log('App initialized successfully');
    }, 100);
});

function initializeApp() {
    console.log('Initializing app...');
    setLanguage('en-US');
    showPage('home');
    updateNavigation();
    console.log('App initialization complete');
}

function loadAllContent() {
    console.log('Loading all content from JSON data...');
    loadHomePresentation();
    loadFAQ();
    loadProjects();
    loadCV();
    loadServices();
    loadDevices();
    loadDeviceCollection();
    loadDownloads();
    loadContactInfo();
    loadBlogPosts();
    loadUSDAcmPosts();
    console.log('All content loaded from JSON structures');
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    const languageSelector = document.getElementById('languageSelector');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const contactForm = document.getElementById('contactForm');
    const exportPdfBtn = document.getElementById('exportPdfBtn');
    
    // Language selector
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            console.log('Language changed to:', this.value);
            setLanguage(this.value);
        });
    }
    
    // Mobile menu toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Navigation links - enhanced to ensure they work
    setupNavigationListeners();
    
    // Modal events
    setupModalEvents();
    
    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Export PDF
    if (exportPdfBtn) {
        exportPdfBtn.addEventListener('click', handleExportPDF);
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu && !e.target.closest('.nav') && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
        }
    });
    
    // ESC key handling
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
            }
        }
    });
    
    console.log('Event listeners setup complete');
}

function setupNavigationListeners() {
    // Navigation links with proper event delegation
    const allNavLinks = document.querySelectorAll('[data-page]');
    console.log(`Found ${allNavLinks.length} navigation elements`);
    
    allNavLinks.forEach((link, index) => {
        console.log(`Setting up listener for nav item ${index}:`, link.getAttribute('data-page'));
        
        // Remove any existing listeners
        link.removeEventListener('click', handleNavClick);
        
        // Add new listener
        link.addEventListener('click', handleNavClick);
    });
    
    // Also setup hero action buttons
    setupHeroActionButtons();
}

function handleNavClick(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const page = this.getAttribute('data-page');
    console.log('Navigation clicked:', page, 'by element:', this.tagName, this.className);
    
    if (page) {
        showPage(page);
        
        // Close mobile menu if it's open
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
        }
    } else {
        console.error('No data-page attribute found on navigation element');
    }
}

function setupHeroActionButtons() {
    // Wait for content to load then setup hero buttons
    setTimeout(() => {
        const heroActions = document.querySelector('.hero-actions');
        if (heroActions) {
            const projectsBtn = heroActions.querySelector('[data-page="projects"]');
            const contactBtn = heroActions.querySelector('[data-page="contact"]');
            
            if (projectsBtn) {
                projectsBtn.removeEventListener('click', handleNavClick);
                projectsBtn.addEventListener('click', handleNavClick);
                console.log('Projects button listener added');
            }
            
            if (contactBtn) {
                contactBtn.removeEventListener('click', handleNavClick);
                contactBtn.addEventListener('click', handleNavClick);
                console.log('Contact button listener added');
            }
        }
    }, 500);
}

function setupModalEvents() {
    // Content modal
    const closeContentModal = document.getElementById('closeContentModal');
    const contentModalBackdrop = document.getElementById('contentModalBackdrop');
    
    if (closeContentModal) {
        closeContentModal.addEventListener('click', () => closeModal('contentModal'));
    }
    if (contentModalBackdrop) {
        contentModalBackdrop.addEventListener('click', () => closeModal('contentModal'));
    }
    
    // Accessories modal
    const closeAccessoriesModal = document.getElementById('closeAccessoriesModal');
    const accessoriesModalBackdrop = document.getElementById('accessoriesModalBackdrop');
    
    if (closeAccessoriesModal) {
        closeAccessoriesModal.addEventListener('click', () => closeModal('accessoriesModal'));
    }
    if (accessoriesModalBackdrop) {
        accessoriesModalBackdrop.addEventListener('click', () => closeModal('accessoriesModal'));
    }
}

function setLanguage(languageCode) {
    console.log('Setting language to:', languageCode);
    currentLanguage = languageCode;
    
    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        languageSelector.value = languageCode;
    }
    
    document.documentElement.setAttribute('lang', languageCode.split('-')[0]);
    document.documentElement.setAttribute('data-lang', languageCode);
    
    updateTranslations();
    loadAllContent(); // Reload content with new language
    
    // Re-setup navigation after content reload
    setTimeout(setupNavigationListeners, 100);
}

function updateTranslations() {
    const translation = translations[currentLanguage];
    if (!translation) {
        console.error('Translation not found for language:', currentLanguage);
        return;
    }
    
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        const value = getNestedValue(translation, key);
        if (value) {
            element.textContent = value;
        }
    });
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

function showPage(pageId) {
    console.log('Showing page:', pageId);
    
    const allPages = document.querySelectorAll('.page');
    console.log(`Found ${allPages.length} pages`);
    
    allPages.forEach(page => {
        page.classList.remove('active');
        console.log('Removed active from:', page.id);
    });
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        targetPage.classList.add('fade-in');
        currentPage = pageId;
        
        console.log('Page displayed successfully:', pageId);
        
        updateNavigation();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        setTimeout(() => targetPage.classList.remove('fade-in'), 300);
    } else {
        console.error('Page not found:', pageId);
    }
}

function updateNavigation() {
    console.log('Updating navigation for current page:', currentPage);
    
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('active');
            console.log('Set active navigation for:', currentPage);
        }
    });
}

function calculateAge() {
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

function loadHomePresentation() {
    const container = document.getElementById('homePresentation');
    if (!container) return;
    
    const translation = translations[currentLanguage];
    if (!translation) return;
    
    container.innerHTML = `
        <div class="presentation-item">
            <h3>${translation.home.work.title}</h3>
            <p>${translation.home.work.description}</p>
        </div>
        <div class="presentation-item">
            <h3>${translation.home.education.title}</h3>
            <p>${translation.home.education.description}</p>
        </div>
        <div class="presentation-item">
            <h3>${translation.home.location.title}</h3>
            <p>${translation.home.location.description}</p>
        </div>
        <div class="presentation-item activism">
            <h3>${translation.home.activism.title}</h3>
            <p>${translation.home.activism.description}</p>
        </div>
    `;
    
    // Re-setup hero button listeners after content load
    setTimeout(setupHeroActionButtons, 100);
}

function loadFAQ() {
    const faqList = document.getElementById('faqList');
    if (!faqList) return;
    
    const faqs = faqData[currentLanguage] || faqData['en-US'];
    
    faqList.innerHTML = faqs.map(faq => `
        <div class="faq-item">
            <div class="faq-question">${faq.question}</div>
            <div class="faq-answer">${faq.answer}</div>
        </div>
    `).join('');
}

function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const projectsPreview = document.getElementById('projectsPreview');
    
    const projects = projectsData[currentLanguage] || projectsData['en-US'];
    
    const projectHTML = (project) => `
        <div class="project-card">
            <h3 class="project-title">${project.name}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-status">${project.status}</div>
            <a href="${project.github}" target="_blank" class="btn btn--primary">
                <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <span data-key="projects.viewOnGithub">View on GitHub</span>
            </a>
        </div>
    `;
    
    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map(projectHTML).join('');
    }
    
    if (projectsPreview) {
        projectsPreview.innerHTML = projects.map(project => `
            <div class="project-preview-item">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-status">${project.status}</div>
            </div>
        `).join('');
    }
}

function loadCV() {
    const cvContent = document.getElementById('cvContent');
    if (!cvContent) return;
    
    const cv = cvData[currentLanguage] || cvData['en-US'];
    
    cvContent.innerHTML = `
        <div class="cv-section">
            <h2>Personal Information</h2>
            <div class="cv-item">
                <h3>${cv.personalInfo.name}</h3>
                <p class="cv-institution">${cv.personalInfo.email}</p>
                <p class="cv-period">${cv.personalInfo.location}</p>
            </div>
        </div>
        
        <div class="cv-section">
            <h2>Education</h2>
            ${cv.education.map(edu => `
                <div class="cv-item">
                    <h3>${edu.degree}</h3>
                    <p class="cv-institution">${edu.institution}</p>
                    <p class="cv-period">${edu.period}</p>
                </div>
            `).join('')}
        </div>
        
        <div class="cv-section">
            <h2>Professional Experience</h2>
            ${cv.experience.map(exp => `
                <div class="cv-item">
                    <h3>${exp.position}</h3>
                    <p class="cv-institution">${exp.company}</p>
                    <p class="cv-period">${exp.period}</p>
                    <p>${exp.description}</p>
                </div>
            `).join('')}
        </div>
        
        <div class="cv-section">
            <h2>Technical Skills</h2>
            <div class="skills-grid">
                ${cv.skills.map(skill => `<div class="skill-item">${skill}</div>`).join('')}
            </div>
        </div>
        
        <div class="cv-section">
            <h2>Languages</h2>
            <div class="skills-grid">
                ${cv.languages.map(lang => `<div class="skill-item">${lang}</div>`).join('')}
            </div>
        </div>
        
        <div class="cv-section">
            <h2>Certificates</h2>
            <div class="skills-grid">
                ${cv.certificates.map(cert => `<div class="skill-item">${cert}</div>`).join('')}
            </div>
        </div>
    `;
}

function loadServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;
    
    const services = servicesData[currentLanguage] || servicesData['en-US'];
    
    servicesGrid.innerHTML = services.map(service => `
        <div class="service-card">
            <h3 class="service-title">${service.category}</h3>
            <p class="service-description">${service.description}</p>
            <div class="service-pricing">
                ${Object.entries(service.pricing).map(([key, value]) => `
                    <div class="price-item">
                        <span class="price-label">${key}:</span>
                        <span class="price-value">${value}</span>
                    </div>
                `).join('')}
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

function loadDevices() {
    const devicesGrid = document.getElementById('devicesGrid');
    if (!devicesGrid) return;
    
    const devices = devicesData[currentLanguage] || devicesData['en-US'];
    
    devicesGrid.innerHTML = devices.map((device, index) => `
        <div class="device-card">
            <div class="device-header">
                ${getDeviceIcon(device.icon)}
                <h3 class="device-title">${device.type}</h3>
            </div>
            <h4>${device.model}</h4>
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
                    <button class="btn btn--outline device-btn" onclick="showAccessories('${device.type}', '${index}')">
                        <span data-key="devices.accessories">Accessories</span>
                    </button>
                ` : ''}
                ${device.lenses ? `
                    <button class="btn btn--outline device-btn" onclick="showLenses('${device.type}', '${index}')">
                        <span data-key="devices.objectives">Objectives</span>
                    </button>
                ` : ''}
            </div>
        </div>
    `).join('');
    
    console.log('Devices loaded successfully with accessories buttons');
}

function loadDeviceCollection() {
    const container = document.getElementById('deviceCollectionGrid');
    if (!container) return;
    
    const collection = deviceCollectionData[currentLanguage] || deviceCollectionData['en-US'];
    
    container.innerHTML = collection.map(item => `
        <div class="collection-item">
            ${getDeviceIcon(item.icon, 'collection-icon')}
            <div class="collection-name">${item.name}</div>
            <p class="collection-description">${item.description}</p>
        </div>
    `).join('');
    
    console.log('Device collection loaded successfully');
}

function getDeviceIcon(iconType, className = 'device-icon') {
    const icons = {
        laptop: `<svg class="${className}" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 14V6h16l.002 8H4z"/></svg>`,
        phone: `<svg class="${className}" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M17 2H7c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM7 16.999V5h10l.002 11.999H7z"/></svg>`,
        tablet: `<svg class="${className}" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19V5h14l.002 14H5z"/></svg>`,
        desktop: `<svg class="${className}" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 14V5h16l.002 9H4z"/></svg>`,
        'old-pc': `<svg class="${className}" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h6v2H7v2h10v-2h-3v-2h6c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 13V5h16v8H4z"/><rect x="6" y="7" width="2" height="4" fill="currentColor"/><rect x="10" y="7" width="2" height="4" fill="currentColor"/><rect x="14" y="7" width="2" height="4" fill="currentColor"/></svg>`,
        playstation: `<svg class="${className}" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path fill="currentColor" d="M8 8h2v8H8V8zm6 0h2v8h-2V8z"/><circle cx="8" cy="10" r="1" fill="currentColor"/><circle cx="16" cy="10" r="1" fill="currentColor"/></svg>`,
        camera: `<svg class="${className}" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9c-1.626 0-3 1.374-3 3 0 1.626 1.374 3 3 3s3-1.374 3-3c0-1.626-1.374-3-3-3z"/><path fill="currentColor" d="M20 5h-2.586l-2.707-2.707A.996.996 0 0014 2h-4a.996.996 0 00-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM12 16c-2.71 0-5-2.29-5-5s2.29-5 5-5 5 2.29 5 5-2.29 5-5 5z"/></svg>`,
        server: `<svg class="${className}" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2h16c1.103 0 2 .897 2 2v4c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2zm0 6h16V4H4v4z"/><path fill="currentColor" d="M4 12h16c1.103 0 2 .897 2 2v4c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2v-4c0-1.103.897-2 2-2zm0 6h16v-4H4v4z"/></svg>`,
        router: `<svg class="${className}" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7z"/><path fill="currentColor" d="M12 6c-1.66 0-3 1.34-3 3h2c0-.55.45-1 1-1s1 .45 1 1h2c0-1.66-1.34-3-3-3z"/><circle fill="currentColor" cx="12" cy="12" r="2"/><path fill="currentColor" d="M21 14H3v7h18v-7z"/></svg>`,
        storage: `<svg class="${className}" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2h12c1.103 0 2 .897 2 2v16c0 1.103-.897 2-2 2H6c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2zm0 2v16h12V4H6z"/><path fill="currentColor" d="M8 6h8v2H8V6zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"/></svg>`,
        vr: `<svg class="${className}" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5zm0 2h14v14H5V5z"/><circle fill="currentColor" cx="8" cy="10" r="2"/><circle fill="currentColor" cx="16" cy="10" r="2"/><path fill="currentColor" d="M8 15h8v2H8v-2z"/></svg>`
    };
    return icons[iconType] || icons.desktop;
}

function showAccessories(deviceType, deviceIndex) {
    console.log('showAccessories called with:', deviceType, deviceIndex);
    
    const devices = devicesData[currentLanguage] || devicesData['en-US'];
    const device = devices[parseInt(deviceIndex)];
    
    if (!device || !device.accessories) {
        console.error('Device or accessories not found');
        return;
    }
    
    const modal = document.getElementById('accessoriesModal');
    const title = document.getElementById('accessoriesModalTitle');
    const content = document.getElementById('accessoriesModalContent');
    
    if (modal && title && content) {
        title.textContent = `${deviceType} Accessories`;
        
        if (typeof device.accessories === 'object' && !Array.isArray(device.accessories)) {
            // Multiple sections
            content.innerHTML = Object.entries(device.accessories).map(([sectionName, items]) => `
                <div class="accessories-section">
                    <h4>${sectionName}</h4>
                    <div class="accessories-grid">
                        ${items.map(item => `
                            <div class="accessory-item">
                                <svg class="accessory-icon" width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                                <span class="accessory-name">${item}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        } else {
            // Single array
            content.innerHTML = `
                <div class="accessories-grid">
                    ${device.accessories.map(accessory => `
                        <div class="accessory-item">
                            <svg class="accessory-icon" width="20" height="20" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            <span class="accessory-name">${accessory}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        console.log('Accessories modal opened successfully');
    }
}

function showLenses(deviceType, deviceIndex) {
    console.log('showLenses called with:', deviceType, deviceIndex);
    
    const devices = devicesData[currentLanguage] || devicesData['en-US'];
    const device = devices[parseInt(deviceIndex)];
    
    if (!device || !device.lenses) {
        console.error('Device or lenses not found');
        return;
    }
    
    const modal = document.getElementById('accessoriesModal');
    const title = document.getElementById('accessoriesModalTitle');
    const content = document.getElementById('accessoriesModalContent');
    
    if (modal && title && content) {
        title.textContent = `${deviceType} Lenses`;
        content.innerHTML = `
            <div class="accessories-grid">
                ${device.lenses.map(lens => `
                    <div class="accessory-item">
                        <svg class="accessory-icon" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                        </svg>
                        <span class="accessory-name">${lens}</span>
                    </div>
                `).join('')}
            </div>
        `;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        console.log('Lenses modal opened successfully');
    }
}

function loadDownloads() {
    const downloadsGrid = document.getElementById('downloadsGrid');
    if (!downloadsGrid) return;
    
    const downloads = downloadsData[currentLanguage] || downloadsData['en-US'];
    
    downloadsGrid.innerHTML = downloads.map(download => `
        <div class="download-card">
            <div class="download-header">
                <svg class="download-icon" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"/>
                </svg>
                <h3 class="download-title">${download.name}</h3>
            </div>
            <p class="download-description">${download.description}</p>
            <div class="download-meta">
                <span>Version: ${download.version}</span>
                <span>Size: ${download.size}</span>
            </div>
            <a href="${download.downloadUrl}" target="_blank" class="btn btn--primary btn--full-width">Download</a>
        </div>
    `).join('');
}

function loadContactInfo() {
    const socialMediaLinks = document.getElementById('socialMediaLinks');
    if (!socialMediaLinks) return;
    
    socialMediaLinks.innerHTML = contactInfo.socialMedia.map(social => `
        <a href="${social.url}" class="social-link" ${social.warning ? `onclick="return confirm('${social.warning}')"` : ''} ${social.url !== '#' ? 'target="_blank"' : ''}>
            ${getSocialIcon(social.icon)}
            <span class="social-link-text">
                <strong>${social.name}</strong><br>
                <small>${social.username}</small>
            </span>
        </a>
    `).join('');
}

function getSocialIcon(iconType) {
    const icons = {
        github: `<svg class="social-link-icon" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>`,
        gitlab: `<svg class="social-link-icon" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/></svg>`,
        facebook: `<svg class="social-link-icon" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
        instagram: `<svg class="social-link-icon" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
        snapchat: `<svg class="social-link-icon" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.958 1.404-5.958s-.358-.719-.358-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.739.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.167-1.535-.711-2.496-2.943-2.496-4.74 0-3.771 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001.001 12.017z"/></svg>`,
        discord: `<svg class="social-link-icon" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189Z"/></svg>`
    };
    return icons[iconType] || '';
}

function loadBlogPosts() {
    const blogList = document.getElementById('blogList');
    if (!blogList) return;
    
    const blogLang = blogContent[currentLanguage] || blogContent['en-US'];
    
    blogList.innerHTML = Object.entries(blogLang).map(([key, post]) => `
        <article class="blog-post-preview" data-blog="${key}">
            <h2 class="blog-post-title">${post.title}</h2>
            <p class="blog-post-excerpt">${post.excerpt}</p>
            <button class="btn btn--outline blog-read-more" data-key="blog.readMore">Read More</button>
        </article>
    `).join('');
    
    setTimeout(() => {
        document.querySelectorAll('[data-blog]').forEach(element => {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                const blogId = this.getAttribute('data-blog');
                const blogLang = blogContent[currentLanguage] || blogContent['en-US'];
                showContent(blogLang[blogId]);
            });
        });
    }, 100);
}

function loadUSDAcmPosts() {
    const usdacmList = document.getElementById('usdacmList');
    if (!usdacmList) return;
    
    const usdacmLang = usdacmContent[currentLanguage] || usdacmContent['en-US'];
    
    usdacmList.innerHTML = Object.entries(usdacmLang).map(([key, post]) => `
        <article class="blog-post-preview" data-politik="${key}">
            <h2 class="blog-post-title">${post.title}</h2>
            <p class="blog-post-excerpt">${post.excerpt}</p>
            <button class="btn btn--outline blog-read-more" data-key="blog.readMore">Read More</button>
        </article>
    `).join('');
    
    setTimeout(() => {
        document.querySelectorAll('[data-politik]').forEach(element => {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                const politikId = this.getAttribute('data-politik');
                const usdacmLang = usdacmContent[currentLanguage] || usdacmContent['en-US'];
                showContent(usdacmLang[politikId]);
            });
        });
    }, 100);
}

function showContent(content) {
    const modal = document.getElementById('contentModal');
    const modalContent = document.getElementById('modalContent');
    
    if (modal && modalContent && content) {
        modalContent.innerHTML = content.content;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function closeAllModals() {
    closeModal('contentModal');
    closeModal('accessoriesModal');
}

function handleContactForm(e) {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;
    
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    setTimeout(() => {
        alert(`Thank you for your message! Your message has been sent to ionutbaraooo@gmail.com. I will get back to you soon at ${email}.`);
        e.target.reset();
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }, 1500);
}

function handleExportPDF() {
    alert('CV export functionality: This would generate a PDF with the complete CV information including the short description from the home page about IT work at Electricon and AI studies.');
}

// Make functions globally available for onclick handlers
window.showAccessories = showAccessories;
window.showLenses = showLenses;

// Theme detection
function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-color-scheme', 'dark');
    } else {
        document.documentElement.setAttribute('data-color-scheme', 'light');
    }
}

if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectSystemTheme);
}

detectSystemTheme();