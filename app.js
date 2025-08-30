// All JSON data embedded for easy management and modification
// This structure allows easy content updates without touching the application code

// Translation system supporting all languages (Hungarian removed as requested)
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
            tools: 'Tools',
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
                description: 'Anti-corruption activist in Damuc, against administration corruption'
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
            faq: {
                title: 'Frequently Asked Questions'
            },
            projects: {
                title: 'Featured Projects'
            }
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
            socialMedia: {
                title: 'Connect with me'
            }
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
            configuration: 'Configuration',
            collection: {
                title: 'Device Collection'
            }
        },
        downloads: {
            title: 'Downloads',
            subtitle: 'Available downloads and resources'
        },
        tools: {
            title: 'Tools',
            subtitle: 'Useful online tools and utilities'
        },
        contact: {
            title: 'Contact',
            subtitle: 'Get in touch with me',
            form: {
                subject: 'Subject',
                message: 'Message',
                send: 'Send Email'
            },
            info: {
                title: 'Contact Information'
            },
            social: {
                title: 'Social Media'
            },
            gaming: {
                title: 'Gaming Profiles'
            }
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
            tools: 'Instrumente',
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
                description: 'Activist anti-corupție în Damuc, împotriva corupției administrive'
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
            faq: {
                title: 'Întrebări Frecvente'
            },
            projects: {
                title: 'Proiecte Destacate'
            }
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
            socialMedia: {
                title: 'Conectează-te cu mine'
            }
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
            configuration: 'Configurație',
            collection: {
                title: 'Colecția de Dispozitive'
            }
        },
        downloads: {
            title: 'Descărcări',
            subtitle: 'Descărcări și resurse disponibile'
        },
        tools: {
            title: 'Instrumente',
            subtitle: 'Instrumente online utile și utilitare'
        },
        contact: {
            title: 'Contact',
            subtitle: 'Ia legătura cu mine',
            form: {
                subject: 'Subiect',
                message: 'Mesaj',
                send: 'Trimite Email'
            },
            info: {
                title: 'Informații de Contact'
            },
            social: {
                title: 'Rețele Sociale'
            },
            gaming: {
                title: 'Profile Gaming'
            }
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
            tools: 'Alati',
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
                description: 'Antikorupcijski aktivist u Damuc-u, protiv Anton Covasan-a i PSD-AUR Damuc-a koalitza'
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
            faq: {
                title: 'Često postavljana pitanja'
            },
            projects: {
                title: 'Istaknuti projekti'
            }
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
            socialMedia: {
                title: 'Povežite se sa mnom'
            }
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
            configuration: 'Konfiguracija',
            collection: {
                title: 'Kolekcija uređaja'
            }
        },
        downloads: {
            title: 'Preuzimanja',
            subtitle: 'Dostupna preuzimanja i resursi'
        },
        tools: {
            title: 'Alati',
            subtitle: 'Korisni online alati i utiliteti'
        },
        contact: {
            title: 'Kontakt',
            subtitle: 'Stupi u kontakt sa mnom',
            form: {
                subject: 'Predmet',
                message: 'Poruka',
                send: 'Pošalji Email'
            },
            info: {
                title: 'Kontakt informacije'
            },
            social: {
                title: 'Društvene mreže'
            },
            gaming: {
                title: 'Gaming profili'
            }
        }
    }
};

// FAQ data with multi-language support (Hungarian removed)
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

// Projects data with multi-language support (Hungarian removed)
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

// CV data with multi-language support (Hungarian removed)
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
        languages: ["Romanian (Native)", "English (Fluent)", "GALL (Basic)"],
        projects: ["Defender Remover", "Melody Script", "Windows Optimization Tools"]
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
        languages: ["Română (Nativă)", "Engleză (Fluent)", "GALL (De bază)"],
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
        languages: ["Rumunski (Maternji)", "Engleski (Tečno)", "GALL (Osnovno)"],
        projects: ["Defender Remover", "Melody Script", "Windows optimizacijski alati"]
    }
};

// Updated services data with new pricing structure and currency support
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
                customPrograms: "10€/program"
            },
            calculator: true,
            options: {
                windows: [
                    { name: "Windows OEM", price: 0 },
                    { name: "Windows Pro", price: 7 },
                    { name: "Windows IoT Enterprise LTSC", price: 17 }
                ],
                office: [
                    { name: "Without Office", price: 0 },
                    { name: "Office 2024 LTSC", price: 10 }
                ],
                adobe: [
                    { name: "Without Adobe", price: 0 },
                    { name: "Adobe Acrobat Pro DC 2019", price: 3 }
                ],
                customPrograms: {
                    name: "Custom Programs",
                    pricePerProgram: 10
                }
            }
        },
        {
            id: "networking",
            category: "Networking",
            description: "Equipment installation and configuration with total cost calculation",
            pricing: {
                laborPercent: 20,
                minimum: "4500€ minimum equipment cost"
            },
            calculator: true
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
                customPrograms: "35 lei/program"
            },
            calculator: true,
            options: {
                windows: [
                    { name: "Windows OEM", price: 0 },
                    { name: "Windows Pro", price: 20 },
                    { name: "Windows IoT Enterprise LTSC", price: 50 }
                ],
                office: [
                    { name: "Fără Office", price: 0 },
                    { name: "Office 2024 LTSC", price: 30 }
                ],
                adobe: [
                    { name: "Fără Adobe", price: 0 },
                    { name: "Adobe Acrobat Pro DC 2019", price: 10 }
                ],
                customPrograms: {
                    name: "Programe Personalizate",
                    pricePerProgram: 35
                }
            }
        },
        {
            id: "networking",
            category: "Rețelistică",
            description: "Instalare și configurare echipamente cu calculul costului total",
            pricing: {
                laborPercent: 20,
                minimum: "25.000 lei cost minim echipamente"
            },
            calculator: true
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
                customPrograms: "10€/program"
            },
            calculator: true,
            options: {
                windows: [
                    { name: "Windows OEM", price: 0 },
                    { name: "Windows Pro", price: 7 },
                    { name: "Windows IoT Enterprise LTSC", price: 17 }
                ],
                office: [
                    { name: "Bez Office-a", price: 0 },
                    { name: "Office 2024 LTSC", price: 10 }
                ],
                adobe: [
                    { name: "Bez Adobe-a", price: 0 },
                    { name: "Adobe Acrobat Pro DC 2019", price: 3 }
                ],
                customPrograms: {
                    name: "Prilagođeni programi",
                    pricePerProgram: 10
                }
            }
        },
        {
            id: "networking",
            category: "Umrežavanje",
            description: "Instalacija i konfiguracija opreme s izračunom ukupnog troška",
            pricing: {
                laborPercent: 20,
                minimum: "4500€ minimalni trošak opreme"
            },
            calculator: true
        }
    ]
};

// Camera configuration profiles for Nikon Z50ii
const cameraProfiles = {
    'en-US': {
        U1: {
            name: "U1 Profile",
            pictureSettings: {
                iso: "800",
                sensitivity: "Manual (not auto)",
                mode: "Not M-mode",
                color: "Neutral",
                whiteBalance: "Auto",
                format: "RAW+HEIC",
                colorSpace: "HLG",
                longExposure: "ON"
            },
            videoSettings: {
                iso: "10,000",
                format: "HEVC 10-bit",
                resolution: "4K@60fps"
            }
        },
        U2: {
            name: "U2 Profile",
            pictureSettings: {
                iso: "800",
                sensitivity: "Manual (not auto)",
                mode: "Not M-mode",
                color: "Neutral",
                whiteBalance: "Auto",
                format: "RAW+HEIC",
                colorSpace: "HLG",
                longExposure: "ON"
            },
            videoSettings: {
                iso: "10,000",
                format: "HEVC 10-bit",
                resolution: "4K@60fps"
            }
        },
        U3: {
            name: "U3 Profile",
            pictureSettings: {
                iso: "800",
                sensitivity: "Manual (not auto)",
                mode: "Not M-mode",
                color: "Neutral",
                whiteBalance: "Auto",
                format: "RAW+HEIC",
                colorSpace: "HLG",
                longExposure: "ON"
            },
            videoSettings: {
                iso: "10,000",
                format: "HEVC 10-bit",
                resolution: "4K@60fps"
            }
        }
    },
    'ro-RO': {
        U1: {
            name: "Profil U1",
            pictureSettings: {
                iso: "800",
                sensitivity: "Manual (nu auto)",
                mode: "Nu mod M",
                color: "Neutru",
                whiteBalance: "Auto",
                format: "RAW+HEIC",
                colorSpace: "HLG",
                longExposure: "PORNIT"
            },
            videoSettings: {
                iso: "10,000",
                format: "HEVC 10-bit",
                resolution: "4K@60fps"
            }
        },
        U2: {
            name: "Profil U2",
            pictureSettings: {
                iso: "800",
                sensitivity: "Manual (nu auto)",
                mode: "Nu mod M",
                color: "Neutru",
                whiteBalance: "Auto",
                format: "RAW+HEIC",
                colorSpace: "HLG",
                longExposure: "PORNIT"
            },
            videoSettings: {
                iso: "10,000",
                format: "HEVC 10-bit",
                resolution: "4K@60fps"
            }
        },
        U3: {
            name: "Profil U3",
            pictureSettings: {
                iso: "800",
                sensitivity: "Manual (nu auto)",
                mode: "Nu mod M",
                color: "Neutru",
                whiteBalance: "Auto",
                format: "RAW+HEIC",
                colorSpace: "HLG",
                longExposure: "PORNIT"
            },
            videoSettings: {
                iso: "10,000",
                format: "HEVC 10-bit",
                resolution: "4K@60fps"
            }
        }
    },
    'gall': {
        U1: {
            name: "U1 Profil",
            pictureSettings: {
                iso: "800",
                sensitivity: "Ručno (ne auto)",
                mode: "Ne M-mode",
                color: "Neutralan",
                whiteBalance: "Auto",
                format: "RAW+HEIC",
                colorSpace: "HLG",
                longExposure: "UKLJUČENO"
            },
            videoSettings: {
                iso: "10,000",
                format: "HEVC 10-bit",
                resolution: "4K@60fps"
            }
        },
        U2: {
            name: "U2 Profil",
            pictureSettings: {
                iso: "800",
                sensitivity: "Ručno (ne auto)",
                mode: "Ne M-mode",
                color: "Neutralan",
                whiteBalance: "Auto",
                format: "RAW+HEIC",
                colorSpace: "HLG",
                longExposure: "UKLJUČENO"
            },
            videoSettings: {
                iso: "10,000",
                format: "HEVC 10-bit",
                resolution: "4K@60fps"
            }
        },
        U3: {
            name: "U3 Profil",
            pictureSettings: {
                iso: "800",
                sensitivity: "Ručno (ne auto)",
                mode: "Ne M-mode",
                color: "Neutralan",
                whiteBalance: "Auto",
                format: "RAW+HEIC",
                colorSpace: "HLG",
                longExposure: "UKLJUČENO"
            },
            videoSettings: {
                iso: "10,000",
                format: "HEVC 10-bit",
                resolution: "4K@60fps"
            }
        }
    }
};

// Updated devices data with camera configuration support
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
                "USB": "Type C 3.2 with OTG and Video Support",
                "OS": "Android 15"
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
                "USB": "Type C 3.2 with OTG and Video Support",
                "OS": "Android 15"
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
            hasConfiguration: true,
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
    ],
    'ro-RO': [
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
                "Configurația Mures": [
                    "Monitor LG", "Tastatură Logitech", "Mouse Logitech", "Webcam Logitech",
                    "Boxe Logitech", "Imprimantă Xerox", "Controller Logitech", "Controller PlayStation",
                    "Controller Xbox", "Logitech G29 + G-shift", "Scanner Canon"
                ],
                "Configurația Birou (Electricon)": [
                    "Monitor LG", "Tastatură G613", "Stație de andocare Baseus", "Mouse G604"
                ],
                "Configurația Damuc": [
                    "Mouse G604"
                ]
            }
        },
        {
            type: "Telefon",
            model: "Samsung Galaxy S23 Ultra 1TB",
            icon: "phone",
            specs: {
                "Display": "6.8\" Dynamic AMOLED 2X",
                "Storage": "1TB",
                "RAM": "12GB",
                "Camera": "200MP principal, 12MP ultra-wide, 10MP telephoto",
                "Battery": "5000mAh",
                "USB": "Type C 3.2 cu suport OTG și Video",
                "OS": "Android 15"
            }
        },
        {
            type: "Tabletă",
            model: "Samsung Galaxy Tab S9 Ultra 512GB",
            icon: "tablet",
            specs: {
                "Display": "14.6\" Dynamic AMOLED 2X",
                "Storage": "512GB",
                "RAM": "12GB",
                "Processor": "Snapdragon 8 Gen 2",
                "USB": "Type C 3.2 cu suport OTG și Video",
                "OS": "Android 15"
            },
            accessories: {
                "Accesorii Tabletă": ["Card SD"]
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
                "Purpose": "Sistem backup"
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
                "Purpose": "Computing retro"
            }
        },
        {
            type: "Cameră",
            model: "Nikon Z50ii",
            icon: "camera",
            hasConfiguration: true,
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
            model: "4TB SSD SATA integrat în Router",
            icon: "server",
            specs: {
                "Storage": "4TB SSD SATA",
                "Integration": "Integrat în router",
                "Purpose": "Stocare în rețea"
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
            type: "Stocare Externă",
            model: "55TB HDD + 14TB SSD",
            icon: "storage",
            specs: {
                "HDD Storage": "55TB",
                "SSD Storage": "14TB",
                "Type": "Drive-uri externe",
                "Total": "69TB stocare externă"
            }
        },
        {
            type: "Cască VR",
            model: "HTC Vive Cosmos",
            icon: "vr",
            specs: {
                "Brand": "HTC",
                "Model": "Vive Cosmos",
                "Type": "Realitate Virtuală",
                "Tracking": "Inside-out tracking"
            }
        }
    ],
    'gall': [
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
                    "LG Monitor", "Logitech Tastatura", "Logitech Miš", "Logitech Veb kamera",
                    "Logitech Zvučnici", "Xerox Štampač", "Logitech Kontroler", "PlayStation Kontroler",
                    "Xbox Kontroler", "Logitech G29 + G-shift", "Canon Skener"
                ],
                "Office Setup (Electricon)": [
                    "LG Monitor", "G613 Tastatura", "Baseus Docking Station", "G604 Miš"
                ],
                "Damuc Setup": [
                    "G604 Miš"
                ]
            }
        },
        {
            type: "Telefon",
            model: "Samsung Galaxy S23 Ultra 1TB",
            icon: "phone",
            specs: {
                "Display": "6.8\" Dynamic AMOLED 2X",
                "Storage": "1TB",
                "RAM": "12GB",
                "Camera": "200MP glavni, 12MP ultra-wide, 10MP telephoto",
                "Battery": "5000mAh",
                "USB": "Type C 3.2 sa OTG i Video podrškom",
                "OS": "Android 15"
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
                "USB": "Type C 3.2 sa OTG i Video podrškom",
                "OS": "Android 15"
            },
            accessories: {
                "Tablet pribor": ["SD Card"]
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
                "Purpose": "Backup sistem"
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
            type: "Kamera",
            model: "Nikon Z50ii",
            icon: "camera",
            hasConfiguration: true,
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
            model: "4TB SSD SATA integrisano u Router",
            icon: "server",
            specs: {
                "Storage": "4TB SSD SATA",
                "Integration": "Ugrađeno u router",
                "Purpose": "Mrežno skladište"
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
            type: "Vanjsko skladište",
            model: "55TB HDD + 14TB SSD",
            icon: "storage",
            specs: {
                "HDD Storage": "55TB",
                "SSD Storage": "14TB",
                "Type": "Vanjski diskovi",
                "Total": "69TB vanjsko skladište"
            }
        },
        {
            type: "VR Slušalice",
            model: "HTC Vive Cosmos",
            icon: "vr",
            specs: {
                "Brand": "HTC",
                "Model": "Vive Cosmos",
                "Type": "Virtuelna realnost",
                "Tracking": "Inside-out tracking"
            }
        }
    ]
};

// Device collection data (Hungarian removed)
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

// Downloads data with multi-language support (Hungarian removed)
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

// Tools data
const toolsData = {
    'en-US': [
        {
            name: "Windows System Information",
            description: "Get detailed system information about your Windows computer",
            url: "https://tools.ionutbara.com/sysinfo",
            type: "online"
        },
        {
            name: "Password Generator",
            description: "Generate secure passwords with customizable options",
            url: "https://tools.ionutbara.com/password",
            type: "online"
        },
        {
            name: "Hash Calculator",
            description: "Calculate MD5, SHA1, SHA256 hashes for files and text",
            url: "https://tools.ionutbara.com/hash",
            type: "online"
        },
        {
            name: "Network Scanner",
            description: "Scan and discover devices on your local network",
            url: "https://github.com/ionuttbara/network-scanner/releases",
            type: "download"
        }
    ],
    'ro-RO': [
        {
            name: "Informații Sistem Windows",
            description: "Obțineți informații detaliate despre sistemul dvs. Windows",
            url: "https://tools.ionutbara.com/sysinfo",
            type: "online"
        },
        {
            name: "Generator Parole",
            description: "Generați parole sigure cu opțiuni personalizabile",
            url: "https://tools.ionutbara.com/password",
            type: "online"
        },
        {
            name: "Calculator Hash",
            description: "Calculați hash-uri MD5, SHA1, SHA256 pentru fișiere și text",
            url: "https://tools.ionutbara.com/hash",
            type: "online"
        },
        {
            name: "Scanner Rețea",
            description: "Scanați și descoperiți dispozitive în rețeaua locală",
            url: "https://github.com/ionuttbara/network-scanner/releases",
            type: "download"
        }
    ],
    'gall': [
        {
            name: "Windows sistem informacije",
            description: "Dobijte detaljne informacije o vašem Windows računaru",
            url: "https://tools.ionutbara.com/sysinfo",
            type: "online"
        },
        {
            name: "Generator lozinki",
            description: "Generirajte sigurne lozinke s prilagođenim opcijama",
            url: "https://tools.ionutbara.com/password",
            type: "online"
        },
        {
            name: "Hash kalkulator",
            description: "Izračunajte MD5, SHA1, SHA256 hash-ove za datoteke i tekst",
            url: "https://tools.ionutbara.com/hash",
            type: "online"
        },
        {
            name: "Mrežni skener",
            description: "Skenirajte i otkrijte uređaje na vašoj lokalnoj mreži",
            url: "https://github.com/ionuttbara/network-scanner/releases",
            type: "download"
        }
    ]
};

// Updated contact info data with gaming profiles and fixed snapchat icon
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
            icon: "snapchat-ghost", // Fixed icon name
            username: "ionut_bara",
            warning: "Snapchat account is not used regularly and is deprecated. Continue?"
        },
        {
            name: "Discord",
            url: "#",
            icon: "discord",
            username: "ionutbara"
        },
        {
            name: "Spotify",
            url: "https://open.spotify.com/user/ionuttbara",
            icon: "spotify",
            username: "ionuttbara"
        }
    ],
    gamingProfiles: [
        {
            name: "Xbox",
            username: "JohnTheGamer595",
            icon: "xbox"
        },
        {
            name: "Steam",
            username: "johnroberthinio",
            icon: "steam"
        },
        {
            name: "Ubisoft Connect",
            username: "ionuttbara",
            icon: "ubisoft"
        },
        {
            name: "Epic Games",
            username: "ionut_bara",
            icon: "epic-games"
        },
        {
            name: "EA",
            username: "ionutbara",
            icon: "ea"
        },
        {
            name: "Rockstar",
            username: "ionutbara",
            icon: "rockstar"
        }
    ]
};

// Blog and USDACM content simulation (Hungarian removed)
const blogContent = {
    'en-US': {
        blog1: {
            title: 'Windows Optimization Best Practices',
            excerpt: 'Learn the most effective techniques for optimizing Windows performance...',
            content: `After years of working with Windows systems at Electricon and developing optimization tools, I've compiled the most effective techniques for improving system performance.

One of the biggest performance killers is having too many programs start automatically with Windows. Use Task Manager to disable unnecessary startup programs.

Regular cleanup of temporary files, cache, and system logs can free up significant disk space and improve performance. My Melody Script automates many of these tasks.

Careful registry cleanup and optimization can improve system responsiveness. Always backup before making changes.

Proper RAM management and virtual memory configuration is crucial for optimal performance, especially on systems with limited memory.

These techniques form the foundation of my Windows optimization tools available in the downloads section.`
        },
        blog2: {
            title: 'AI in System Administration',
            excerpt: 'How artificial intelligence is revolutionizing IT management and automation...',
            content: `As someone pursuing a Master's in AI while working in IT management, I see incredible potential for AI in system administration.

AI can analyze system logs and performance metrics to predict hardware failures before they occur, reducing downtime significantly.

Machine learning algorithms can learn from past incidents to automatically resolve common issues without human intervention.

AI-powered security systems can detect anomalies and potential threats in real-time, providing better protection than traditional methods.

Intelligent resource allocation based on usage patterns can improve efficiency and reduce costs in enterprise environments.

The future of IT management lies in the integration of human expertise with AI capabilities.`
        }
    }
};

const usdacmContent = {
    'en-US': {
        politik1: {
            title: 'Digital Rights in Romania',
            excerpt: 'Analysis of digital privacy and rights issues in Romanian politics...',
            content: `As both a technology professional and political activist, I believe digital rights are fundamental to modern democracy.

Romania faces significant challenges in balancing security needs with citizen privacy rights, especially in digital communications and data protection.

Technology should empower citizens, not enable surveillance. We need stronger protections for digital privacy and data sovereignty.

Digital tools can be powerful weapons against corruption when used transparently. My activism in Damuc has shown how technology can expose corruption.

We need comprehensive digital rights legislation that protects citizens while enabling innovation and economic growth.`
        }
    }
};

// App state
let currentLanguage = 'en-US';
let currentPage = 'home';

// Page state persistence
function savePageState() {
    localStorage.setItem('currentPage', currentPage);
    localStorage.setItem('currentLanguage', currentLanguage);
}

function loadPageState() {
    const savedPage = localStorage.getItem('currentPage');
    const savedLanguage = localStorage.getItem('currentLanguage');

    if (savedPage) {
        currentPage = savedPage;
    }
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing app...');
    setTimeout(() => {
        loadPageState(); // Load saved state before initialization
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
    setLanguage(currentLanguage);
    showPage(currentPage);
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
    loadTools(); // New tools section
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

    // Camera configuration modal
    const closeCameraModal = document.getElementById('closeCameraModal');
    const cameraModalBackdrop = document.getElementById('cameraModalBackdrop');

    if (closeCameraModal) {
        closeCameraModal.addEventListener('click', () => closeModal('cameraModal'));
    }
    if (cameraModalBackdrop) {
        cameraModalBackdrop.addEventListener('click', () => closeModal('cameraModal'));
    }
}

function setLanguage(languageCode) {
    console.log('Setting language to:', languageCode);
    currentLanguage = languageCode;
    savePageState(); // Save state when language changes

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
        savePageState(); // Save state when page changes
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
}

function loadFAQ() {
    const container = document.getElementById('faqContainer');
    if (!container) return;

    const faqs = faqData[currentLanguage] || faqData['en-US'];

    container.innerHTML = faqs.map(faq => `
        <div class="faq-item">
            <div class="faq-question">${faq.question}</div>
            <div class="faq-answer">${faq.answer}</div>
        </div>
    `).join('');
}

function loadProjects() {
    const container = document.getElementById('projectsContainer');
    const previewContainer = document.getElementById('projectsPreview');

    const projects = projectsData[currentLanguage] || projectsData['en-US'];
    const translation = translations[currentLanguage] || translations['en-US'];

    const projectsHTML = projects.map(project => `
        <div class="project-card">
            <h3 class="project-title">${project.name}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-actions">
                <a href="${project.github}" target="_blank" class="btn btn--primary btn--sm">
                    <i class="btn-icon" data-lucide="github"></i>
                    ${translation.projects.viewOnGithub}
                </a>
                <span class="project-status status--success">${project.status}</span>
            </div>
        </div>
    `).join('');

    if (container) {
        container.innerHTML = projectsHTML;
    }
    if (previewContainer) {
        previewContainer.innerHTML = projectsHTML;
    }
}

function loadCV() {
    const container = document.getElementById('cvContainer');
    if (!container) return;

    const cv = cvData[currentLanguage] || cvData['en-US'];

    container.innerHTML = `
        <div class="cv-section">
            <h2>Personal Information</h2>
            <div class="cv-item">
                <h3>${cv.personalInfo.name}</h3>
                <p class="cv-institution">${cv.personalInfo.email}</p>
                <p class="cv-institution">${cv.personalInfo.location}</p>
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
            <h2>Experience</h2>
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
            <h2>Skills</h2>
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
    `;
}

function loadServices() {
    const container = document.getElementById('servicesContainer');
    if (!container) return;

    const services = servicesData[currentLanguage] || servicesData['en-US'];

    container.innerHTML = services.map(service => `
        <div class="service-card">
            <h3 class="service-title">${service.category}</h3>
            <p class="service-description">${service.description}</p>

            ${service.calculator ? generateServiceCalculator(service) : `
                <div class="service-pricing">
                    ${Object.entries(service.pricing).map(([key, value]) => `
                        <div class="price-item">
                            <span class="price-label">${key}:</span>
                            <span class="price-value">${value}</span>
                        </div>
                    `).join('')}
                </div>
            `}
        </div>
    `).join('');

    // Setup calculator event listeners
    setTimeout(setupCalculatorListeners, 100);
}

function generateServiceCalculator(service) {
    if (service.id === 'windowsInstallation') {
        return generateWindowsInstallationCalculator(service);
    } else if (service.id === 'networking') {
        return generateNetworkingCalculator(service);
    }
    return '';
}

function generateWindowsInstallationCalculator(service) {
    const currency = currentLanguage === 'ro-RO' ? 'lei' : '€';

    return `
        <div class="service-calculator">
            <h4>Price Calculator</h4>
            <div class="calculator-options">
                <div class="form-group">
                    <label class="form-label">Windows Version:</label>
                    <select class="form-control" id="windowsVersion" onchange="calculateWindowsPrice()">
                        ${service.options.windows.map(opt => `
                            <option value="${opt.price}">${opt.name} ${opt.price > 0 ? `(+${opt.price}${currency})` : ''}</option>
                        `).join('')}
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label">Office:</label>
                    <select class="form-control" id="officeVersion" onchange="calculateWindowsPrice()">
                        ${service.options.office.map(opt => `
                            <option value="${opt.price}">${opt.name} ${opt.price > 0 ? `(+${opt.price}${currency})` : ''}</option>
                        `).join('')}
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label">Adobe:</label>
                    <select class="form-control" id="adobeVersion" onchange="calculateWindowsPrice()">
                        ${service.options.adobe.map(opt => `
                            <option value="${opt.price}">${opt.name} ${opt.price > 0 ? `(+${opt.price}${currency})` : ''}</option>
                        `).join('')}
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label">Number of Custom Programs:</label>
                    <input type="number" class="form-control" id="customPrograms" min="0" value="0" onchange="calculateWindowsPrice()">
                    <small>(${service.options.customPrograms.pricePerProgram}${currency} per program)</small>
                </div>
            </div>

            <div class="calculator-result">
                <div class="price-item">
                    <span class="price-label">Base Labor:</span>
                    <span class="price-value">${service.pricing.base}</span>
                </div>
                <div class="price-item">
                    <span class="price-label">Total Price:</span>
                    <span class="price-value" id="windowsTotalPrice">${service.pricing.base}</span>
                </div>
            </div>
        </div>
    `;
}

function generateNetworkingCalculator(service) {
    const currency = currentLanguage === 'ro-RO' ? 'lei' : '€';

    return `
        <div class="service-calculator">
            <h4>Networking Cost Calculator</h4>
            <div class="calculator-options">
                <div class="form-group">
                    <label class="form-label">Equipment Price (${currency}):</label>
                    <input type="number" class="form-control" id="equipmentPrice" min="0" placeholder="Enter equipment cost" onchange="calculateNetworkingPrice()">
                    <small>Minimum: ${service.pricing.minimum}</small>
                </div>
            </div>

            <div class="calculator-result">
                <div class="price-item">
                    <span class="price-label">Equipment Cost:</span>
                    <span class="price-value" id="equipmentCost">0${currency}</span>
                </div>
                <div class="price-item">
                    <span class="price-label">Labor (${service.pricing.laborPercent}%):</span>
                    <span class="price-value" id="laborCost">0${currency}</span>
                </div>
                <div class="price-item">
                    <span class="price-label">Total Price:</span>
                    <span class="price-value" id="networkingTotalPrice">0${currency}</span>
                </div>
            </div>
        </div>
    `;
}

function calculateWindowsPrice() {
    const windowsPrice = parseInt(document.getElementById('windowsVersion')?.value || 0);
    const officePrice = parseInt(document.getElementById('officeVersion')?.value || 0);
    const adobePrice = parseInt(document.getElementById('adobeVersion')?.value || 0);
    const customPrograms = parseInt(document.getElementById('customPrograms')?.value || 0);

    const service = servicesData[currentLanguage].find(s => s.id === 'windowsInstallation');
    const baseLabor = currentLanguage === 'ro-RO' ? 45 : 15;
    const customProgramPrice = service.options.customPrograms.pricePerProgram;

    const customProgramsTotal = customPrograms * customProgramPrice;
    const totalPrice = baseLabor + windowsPrice + officePrice + adobePrice + customProgramsTotal;

    const currency = currentLanguage === 'ro-RO' ? 'lei' : '€';

    const totalElement = document.getElementById('windowsTotalPrice');
    if (totalElement) {
        totalElement.textContent = `${totalPrice}${currency}`;
    }
}

function calculateNetworkingPrice() {
    const equipmentPrice = parseFloat(document.getElementById('equipmentPrice')?.value || 0);
    const laborPercent = 20;
    const laborCost = (equipmentPrice * laborPercent) / 100;
    const totalPrice = equipmentPrice + laborCost;

    const currency = currentLanguage === 'ro-RO' ? 'lei' : '€';

    document.getElementById('equipmentCost').textContent = `${equipmentPrice}${currency}`;
    document.getElementById('laborCost').textContent = `${laborCost.toFixed(2)}${currency}`;
    document.getElementById('networkingTotalPrice').textContent = `${totalPrice.toFixed(2)}${currency}`;
}

function setupCalculatorListeners() {
    // This function is called after services are loaded to ensure calculators work
    const windowsElements = ['windowsVersion', 'officeVersion', 'adobeVersion', 'customPrograms'];
    windowsElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', calculateWindowsPrice);
            element.addEventListener('input', calculateWindowsPrice);
        }
    });

    const equipmentPriceElement = document.getElementById('equipmentPrice');
    if (equipmentPriceElement) {
        equipmentPriceElement.addEventListener('input', calculateNetworkingPrice);
        equipmentPriceElement.addEventListener('change', calculateNetworkingPrice);
    }
}

function loadDevices() {
    const container = document.getElementById('devicesContainer');
    if (!container) return;

    const devices = devicesData[currentLanguage] || devicesData['en-US'];
    const translation = translations[currentLanguage] || translations['en-US'];

    container.innerHTML = devices.map(device => `
        <div class="device-card">
            <div class="device-header">
                <i class="device-icon" data-lucide="${device.icon}"></i>
                <h3 class="device-title">${device.model}</h3>
            </div>

            <div class="device-specs">
                ${Object.entries(device.specs).map(([key, value]) => `
                    <div class="spec-item">
                        <span class="spec-label">${key}:</span>
                        <span class="spec-value">${value}</span>
                    </div>
                `).join('')}

                ${device.lenses ? `
                    <div class="spec-item">
                        <span class="spec-label">Lenses:</span>
                        <span class="spec-value">${device.lenses.join(', ')}</span>
                    </div>
                ` : ''}
            </div>

            <div class="device-actions">
                ${device.accessories ? `
                    <button class="btn btn--secondary btn--sm" onclick="showAccessories('${device.model}')">
                        <i class="btn-icon" data-lucide="package"></i>
                        ${translation.devices.accessories}
                    </button>
                ` : ''}

                ${device.hasConfiguration ? `
                    <button class="btn btn--primary btn--sm" onclick="showCameraConfiguration()">
                        <i class="btn-icon" data-lucide="settings"></i>
                        ${translation.devices.configuration}
                    </button>
                ` : ''}
            </div>
        </div>
    `).join('');
}

function loadDeviceCollection() {
    const container = document.getElementById('deviceCollectionContainer');
    if (!container) return;

    const collection = deviceCollectionData[currentLanguage] || deviceCollectionData['en-US'];

    container.innerHTML = collection.map(item => `
        <div class="collection-item">
            <i class="collection-icon" data-lucide="${item.icon}"></i>
            <div class="collection-name">${item.name}</div>
            <p>${item.description}</p>
        </div>
    `).join('');
}

function loadDownloads() {
    const container = document.getElementById('downloadsContainer');
    if (!container) return;

    const downloads = downloadsData[currentLanguage] || downloadsData['en-US'];

    container.innerHTML = downloads.map(download => `
        <div class="download-card">
            <div class="download-header">
                <i class="download-icon" data-lucide="download"></i>
                <h3 class="download-title">${download.name}</h3>
            </div>
            <p class="download-description">${download.description}</p>
            <div class="download-meta">
                <span>Version: ${download.version}</span>
                <span>Size: ${download.size}</span>
            </div>
            <a href="${download.downloadUrl}" target="_blank" class="btn btn--primary btn--full-width">
                <i class="btn-icon" data-lucide="download"></i>
                Download
            </a>
        </div>
    `).join('');
}

// New function to load tools section
function loadTools() {
    const container = document.getElementById('toolsContainer');
    if (!container) return;

    const tools = toolsData[currentLanguage] || toolsData['en-US'];

    container.innerHTML = tools.map(tool => `
        <div class="download-card">
            <div class="download-header">
                <i class="download-icon" data-lucide="${tool.type === 'online' ? 'globe' : 'download'}"></i>
                <h3 class="download-title">${tool.name}</h3>
            </div>
            <p class="download-description">${tool.description}</p>
            <a href="${tool.url}" target="_blank" class="btn btn--primary btn--full-width">
                <i class="btn-icon" data-lucide="${tool.type === 'online' ? 'external-link' : 'download'}"></i>
                ${tool.type === 'online' ? 'Open Tool' : 'Download'}
            </a>
        </div>
    `).join('');
}

function loadContactInfo() {
    const container = document.getElementById('contactInfoContainer');
    const socialContainer = document.getElementById('socialMediaContainer');
    const gamingContainer = document.getElementById('gamingProfilesContainer');

    if (container) {
        container.innerHTML = `
            <div class="contact-item">
                <i class="contact-icon" data-lucide="mail"></i>
                <span>${contactInfo.email}</span>
            </div>
        `;
    }

    if (socialContainer) {
        socialContainer.innerHTML = contactInfo.socialMedia.map(social => `
            <a href="${social.url}" target="_blank" class="social-link" ${social.warning ? `onclick="return confirm('${social.warning}')"` : ''}>
                <i class="social-link-icon" data-lucide="${social.icon}"></i>
                <span>${social.name}: ${social.username}</span>
            </a>
        `).join('');
    }

    if (gamingContainer) {
        gamingContainer.innerHTML = contactInfo.gamingProfiles.map(gaming => `
            <div class="contact-item">
                <i class="contact-icon" data-lucide="${gaming.icon}"></i>
                <span>${gaming.name}: ${gaming.username}</span>
            </div>
        `).join('');
    }
}

function loadBlogPosts() {
    const container = document.getElementById('blogContainer');
    if (!container) return;

    const blog = blogContent[currentLanguage] || blogContent['en-US'];
    const translation = translations[currentLanguage] || translations['en-US'];

    container.innerHTML = Object.entries(blog).map(([key, post]) => `
        <div class="blog-post-preview" onclick="showContentModal('${post.title}', \`${post.content}\`)">
            <h3 class="blog-post-title">${post.title}</h3>
            <p class="blog-post-excerpt">${post.excerpt}</p>
            <span class="blog-read-more">${translation.blog.readMore}</span>
        </div>
    `).join('');
}

function loadUSDAcmPosts() {
    const container = document.getElementById('usdacmContainer');
    if (!container) return;

    const usdacm = usdacmContent[currentLanguage] || usdacmContent['en-US'];
    const translation = translations[currentLanguage] || translations['en-US'];

    container.innerHTML = Object.entries(usdacm).map(([key, post]) => `
        <div class="blog-post-preview" onclick="showContentModal('${post.title}', \`${post.content}\`)">
            <h3 class="blog-post-title">${post.title}</h3>
            <p class="blog-post-excerpt">${post.excerpt}</p>
            <span class="blog-read-more">${translation.blog.readMore}</span>
        </div>
    `).join('');
}

// Camera configuration functions
function showCameraConfiguration() {
    const modal = document.getElementById('cameraModal');
    const profiles = cameraProfiles[currentLanguage] || cameraProfiles['en-US'];
    const translation = translations[currentLanguage] || translations['en-US'];

    const modalBody = document.getElementById('cameraModalBody');
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="camera-config-header">
                <h3>Nikon Z50ii Camera Configuration Profiles</h3>
                <div class="camera-download-section">
                    <button class="btn btn--primary" onclick="downloadCameraConfig()">
                        <i class="btn-icon" data-lucide="download"></i>
                        Download .bin Configuration File
                    </button>
                </div>
            </div>

            <div class="camera-import-instructions">
                <h4><i data-lucide="info"></i> Import Instructions</h4>
                <ol>
                    <li>Download the .bin configuration file using the button above</li>
                    <li>Copy the .bin file to your camera's SD card in the root directory</li>
                    <li>On your camera, go to Setup Menu → Save/Load Settings → Load Settings</li>
                    <li>Select the .bin file and confirm to import the configuration</li>
                    <li>The camera will restart and apply the new settings to U1, U2, and U3 profiles</li>
                </ol>
            </div>

            <div class="camera-profiles">
                ${Object.entries(profiles).map(([profileKey, profile]) => `
                    <div class="camera-profile-card">
                        <h4 class="camera-profile-title">
                            <i data-lucide="camera"></i>
                            ${profile.name}
                        </h4>

                        <div class="camera-settings-section">
                            <h5>
                                <i data-lucide="image"></i>
                                Picture Settings
                            </h5>
                            <div class="camera-settings-grid">
                                <div class="setting-item">
                                    <span class="setting-label">ISO:</span>
                                    <span class="setting-value">${profile.pictureSettings.iso}</span>
                                </div>
                                <div class="setting-item">
                                    <span class="setting-label">Sensitivity:</span>
                                    <span class="setting-value">${profile.pictureSettings.sensitivity}</span>
                                </div>
                                <div class="setting-item">
                                    <span class="setting-label">Mode:</span>
                                    <span class="setting-value">${profile.pictureSettings.mode}</span>
                                </div>
                                <div class="setting-item">
                                    <span class="setting-label">Color:</span>
                                    <span class="setting-value">${profile.pictureSettings.color}</span>
                                </div>
                                <div class="setting-item">
                                    <span class="setting-label">White Balance:</span>
                                    <span class="setting-value">${profile.pictureSettings.whiteBalance}</span>
                                </div>
                                <div class="setting-item">
                                    <span class="setting-label">Format:</span>
                                    <span class="setting-value">${profile.pictureSettings.format}</span>
                                </div>
                                <div class="setting-item">
                                    <span class="setting-label">Color Space:</span>
                                    <span class="setting-value">${profile.pictureSettings.colorSpace}</span>
                                </div>
                                <div class="setting-item">
                                    <span class="setting-label">Long Exposure:</span>
                                    <span class="setting-value">${profile.pictureSettings.longExposure}</span>
                                </div>
                            </div>
                        </div>

                        <div class="camera-settings-section">
                            <h5>
                                <i data-lucide="video"></i>
                                Video Settings
                            </h5>
                            <div class="camera-settings-grid">
                                <div class="setting-item">
                                    <span class="setting-label">ISO:</span>
                                    <span class="setting-value">${profile.videoSettings.iso}</span>
                                </div>
                                <div class="setting-item">
                                    <span class="setting-label">Format:</span>
                                    <span class="setting-value">${profile.videoSettings.format}</span>
                                </div>
                                <div class="setting-item">
                                    <span class="setting-label">Resolution:</span>
                                    <span class="setting-value">${profile.videoSettings.resolution}</span>
                                </div>
                            </div>
                        </div>

                        <div class="camera-settings-section">
                            <h5>
                                <i data-lucide="settings"></i>
                                Custom Settings
                            </h5>
                            <p class="not-implemented">Settings not implemented yet</p>
                        </div>

                        <div class="camera-settings-section">
                            <h5>
                                <i data-lucide="play"></i>
                                Playback Menu
                            </h5>
                            <p class="not-implemented">Settings not implemented yet</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    if (modal) {
        modal.classList.remove('hidden');
    }
}

function downloadCameraConfig() {
    // Create a sample .bin file content (this would normally be actual camera configuration data)
    const configData = "NIKON_Z50II_CONFIG_U1U2U3_PROFILES_IONUT_BARA_SETTINGS";
    const blob = new Blob([configData], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'Z50ii_U1U2U3_Config.bin';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Modal functions
function showAccessories(deviceModel) {
    const modal = document.getElementById('accessoriesModal');
    const devices = devicesData[currentLanguage] || devicesData['en-US'];
    const device = devices.find(d => d.model === deviceModel);

    if (!device || !device.accessories) return;

    const modalBody = document.getElementById('accessoriesModalBody');
    if (modalBody) {
        modalBody.innerHTML = `
            <h3>${deviceModel} - Accessories</h3>
            ${Object.entries(device.accessories).map(([setupName, accessories]) => `
                <div class="accessories-section">
                    <h4>${setupName}</h4>
                    <div class="accessories-grid">
                        ${accessories.map(accessory => `
                            <div class="accessory-item">
                                <i class="accessory-icon" data-lucide="package"></i>
                                <span class="accessory-name">${accessory}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        `;
    }

    if (modal) {
        modal.classList.remove('hidden');
    }
}

function showContentModal(title, content) {
    const modal = document.getElementById('contentModal');
    const modalTitle = document.getElementById('contentModalTitle');
    const modalBody = document.getElementById('contentModalBody');

    if (modalTitle) {
        modalTitle.textContent = title;
    }

    if (modalBody) {
        modalBody.innerHTML = content.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('');
    }

    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.classList.add('hidden');
    });
}

// Updated contact form handler for email format
function handleContactForm(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const to = formData.get('to') || 'ionutbaraooo@gmail.com';
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Create mailto link
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form
    e.target.reset();

    // Show success message
    alert('Email client opened. Please send the email from your email application.');
}

function handleExportPDF() {
    // Simple PDF export using browser print functionality
    const originalTitle = document.title;
    document.title = 'Ionut_Bara_CV.pdf';

    const printStyles = `
        <style>
            @media print {
                .header, .nav-actions, .btn, .mobile-menu { display: none !important; }
                .page { display: block !important; }
                body { background: white !important; color: black !important; }
            }
        </style>
    `;

    document.head.insertAdjacentHTML('beforeend', printStyles);
    window.print();
    document.title = originalTitle;
}

// Initialize Lucide icons when content is loaded
function initializeLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Call icon initialization after content loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeLucideIcons, 500);
});

// Re-initialize icons when content changes
function reinitializeIcons() {
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 100);
}

// Update existing functions to reinitialize icons
const originalShowPage = showPage;
showPage = function(pageId) {
    originalShowPage(pageId);
    reinitializeIcons();
};

const originalSetLanguage = setLanguage;
setLanguage = function(languageCode) {
    originalSetLanguage(languageCode);
    reinitializeIcons();
};

// Social media link handlers with warnings
function handleSocialClick(url, warning) {
    if (warning) {
        if (confirm(warning)) {
            window.open(url, '_blank');
        }
    } else {
        window.open(url, '_blank');
    }
}

// Error handling for missing elements
function safeElementOperation(elementId, operation) {
    const element = document.getElementById(elementId);
    if (element) {
        operation(element);
    } else {
        console.warn(`Element with id '${elementId}' not found`);
    }
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scrolling for anchor links
function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Theme detection and handling
function detectSystemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Performance optimization: lazy load content
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Initialize intersection observer for performance
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    // Observe elements that should fade in
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            document.querySelectorAll('.card, .device-card, .service-card').forEach(el => {
                observer.observe(el);
            });
        }, 1000);
    });
}

// Console welcome message
console.log('%c👋 Welcome to Ionut Bara\'s Website!', 'color: #40D41D; font-size: 16px; font-weight: bold;');
console.log('%cThis website is built with vanilla JavaScript and modern CSS.', 'color: #626C71; font-size: 12px;');
console.log('%cCheck out my projects: https://github.com/ionuttbara', 'color: #626C71; font-size: 12px;');

// Export functions for debugging (development only)
if (typeof window !== 'undefined') {
    window.debugApp = {
        currentLanguage,
        currentPage,
        translations,
        showPage,
        setLanguage,
        savePageState,
        loadPageState
    };
}

// Service worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
