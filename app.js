const { useState, useEffect, createContext, useContext } = React;

const translations = {
    AZ: {
        company: "Şirkət",
        about: "Haqqımızda",
        management: "Rəhbərlik",
        career: "Karyera",
        portfolio: "Portfolio",
        privateApts: "Fərdi Mənzillər",
        architecture: "Memarlıq - Layihə",
        catering: "İctimai İaşə",
        projects360: "360° Layihələr",
        poolProjects: "Hovuz Layihələri",
        services: "Xidmətlərimiz",
        repair: "Təmir",
        construction: "Tikinti",
        design: "Dizayn",
        furniture: "Mebel",
        curtains: "Pərdə",
        electricity: "Elektrik",
        energy: "Enerji",
        cooperation: "Əməkdaşlıq",
        media: "Media",
        contact: "Əlaqə",
        hero1Title: "Zövqünüzü oxşayacaq <span>xidmətimiz !</span>",
        hero1Sub: "Peşəkar və Beynəlxalq təcrübəmiz ilə daim xidmətinizdəyik. Siz xəyal edin, biz gerçəkləşdirək.",
        hero2Title: "Xəyalınızı <span>dizayn edirik !</span>",
        hero2Sub: "Müasir texnologiyalar və innovativ həllərlə.",
        btnAbout: "Haqqımızda",
        btnProjects: "Layihələr",
        ourServices: "Bizim <span>Xidmətlər</span>",
        ourServicesSub: "Hər bir sahə üzrə ixtisaslaşmış komandamız xidmətinizdədir",
        srvRepairDesc: "Mənzil və obyektlərin yüksək keyfiyyətli təmiri.",
        srvConstDesc: "Sıfırdan evlərin və binaların inşası.",
        srvDesignDesc: "Müasir və klassik interyer dizayn layihələri.",
        srvArchDesc: "Peşəkar memarlıq və mühəndislik həlləri.",
        srvFurnDesc: "Sifarişlə mebel istehsalı və quraşdırılması.",
        srvCurtDesc: "İnteryerə uyğun pərdə dizaynı və satışı.",
        srvEnerDesc: "Alternativ enerji və günəş paneli həlləri.",
        srvElecDesc: "Təhlükəsiz və standartlara uyğun elektrik çəkilişi.",
        btnDetails: "Ətraflı",
        latestProjects: "Son <span>Layihələr</span>",
        latestProjectsSub: "Ən son təhvil verdiyimiz işlərlə tanış olun",
        btnView: "Bax",
        ctaTitle: "Xəyalınızı inşa edirik !",
        ctaSub: "Layihəniz var? Bizimlə əlaqə saxlayın və xəyallarınızı gerçəkləşdirək.",
        footerAbout: "Peşəkar və Beynəlxalq təcrübəmiz ilə daim xidmətinizdəyik. Siz xəyal edin, biz gerçəkləşdirək.",
        quickLinks: "Sürətli Keçidlər",
        footerServices: "Xidmətlər",
        footerContact: "Əlaqə",
        address: "Babək Plaza 10-cu mərtəbə, Bakı şəhəri, Babək pr.",
        copyright: "© 2010-2025 Premium Regional İnşaat. Bütün hüquqlar qorunur.",
        builtBy: "Sayt CDN React vasitəsilə agent tərəfindən yaradılıb"
    },
    RU: {
        company: "Компания",
        about: "О нас",
        management: "Руководство",
        career: "Карьера",
        portfolio: "Портфолио",
        privateApts: "Частные Квартиры",
        architecture: "Архитектура - Проект",
        catering: "Общественное питание",
        projects360: "360° Проекты",
        poolProjects: "Проекты Бассейнов",
        services: "Наши Услуги",
        repair: "Ремонт",
        construction: "Строительство",
        design: "Дизайн",
        furniture: "Мебель",
        curtains: "Шторы",
        electricity: "Электрика",
        energy: "Энергия",
        cooperation: "Сотрудничество",
        media: "Медиа",
        contact: "Контакт",
        hero1Title: "Услуги на ваш <span>вкус !</span>",
        hero1Sub: "Мы всегда к вашим услугам с нашим профессиональным и международным опытом. Вы мечтаете, мы реализуем.",
        hero2Title: "Мы проектируем вашу <span>мечту !</span>",
        hero2Sub: "С современными технологиями и инновационными решениями.",
        btnAbout: "О нас",
        btnProjects: "Проекты",
        ourServices: "Наши <span>Услуги</span>",
        ourServicesSub: "Наша специализированная команда к вашим услугам в каждой области",
        srvRepairDesc: "Высококачественный ремонт квартир и объектов.",
        srvConstDesc: "Строительство домов и зданий с нуля.",
        srvDesignDesc: "Современные и классические проекты дизайна интерьера.",
        srvArchDesc: "Профессиональные архитектурные и инженерные решения.",
        srvFurnDesc: "Производство и установка мебели на заказ.",
        srvCurtDesc: "Дизайн и продажа штор, подходящих к интерьеру.",
        srvEnerDesc: "Альтернативная энергетика и солнечные панели.",
        srvElecDesc: "Безопасная электропроводка по стандартам.",
        btnDetails: "Подробнее",
        latestProjects: "Последние <span>Проекты</span>",
        latestProjectsSub: "Ознакомьтесь с нашими последними работами",
        btnView: "Смотреть",
        ctaTitle: "Мы строим вашу мечту !",
        ctaSub: "Есть проект? Свяжитесь с нами, и мы воплотим ваши мечты в реальность.",
        footerAbout: "Мы всегда к вашим услугам с нашим профессиональным и международным опытом. Вы мечтаете, мы реализуем.",
        quickLinks: "Быстрые Ссылки",
        footerServices: "Услуги",
        footerContact: "Контакт",
        address: "Бабек Плаза 10-й этаж, город Баку, пр. Бабека",
        copyright: "© 2010-2025 Premium Regional İnşaat. Все права защищены.",
        builtBy: "Сайт создан через CDN React"
    },
    EN: {
        company: "Company",
        about: "About Us",
        management: "Management",
        career: "Career",
        portfolio: "Portfolio",
        privateApts: "Private Apartments",
        architecture: "Architecture - Project",
        catering: "Catering",
        projects360: "360° Projects",
        poolProjects: "Pool Projects",
        services: "Our Services",
        repair: "Repair",
        construction: "Construction",
        design: "Design",
        furniture: "Furniture",
        curtains: "Curtains",
        electricity: "Electricity",
        energy: "Energy",
        cooperation: "Cooperation",
        media: "Media",
        contact: "Contact",
        hero1Title: "Services to your <span>taste !</span>",
        hero1Sub: "We are always at your service with our professional and international experience. You dream, we realize.",
        hero2Title: "We design your <span>dream !</span>",
        hero2Sub: "With modern technologies and innovative solutions.",
        btnAbout: "About Us",
        btnProjects: "Projects",
        ourServices: "Our <span>Services</span>",
        ourServicesSub: "Our specialized team is at your service in every field",
        srvRepairDesc: "High-quality repair of apartments and facilities.",
        srvConstDesc: "Construction of houses and buildings from scratch.",
        srvDesignDesc: "Modern and classic interior design projects.",
        srvArchDesc: "Professional architectural and engineering solutions.",
        srvFurnDesc: "Custom furniture production and installation.",
        srvCurtDesc: "Curtain design and sales matching the interior.",
        srvEnerDesc: "Alternative energy and solar panel solutions.",
        srvElecDesc: "Safe wiring according to standards.",
        btnDetails: "Details",
        latestProjects: "Latest <span>Projects</span>",
        latestProjectsSub: "Check out our latest delivered works",
        btnView: "View",
        ctaTitle: "We build your dream !",
        ctaSub: "Have a project? Contact us and let's make your dreams come true.",
        footerAbout: "We are always at your service with our professional and international experience. You dream, we realize.",
        quickLinks: "Quick Links",
        footerServices: "Services",
        footerContact: "Contact",
        address: "Babek Plaza 10th floor, Baku city, Babek ave.",
        copyright: "© 2010-2025 Premium Regional İnşaat. All rights reserved.",
        builtBy: "Site built via CDN React"
    }
};

const LanguageContext = createContext();

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const { lang, setLang, t } = useContext(LanguageContext);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <a href="#" className="logo-container">
                    <i className="fa-solid fa-building"></i> PREMIUM REGIONAL
                </a>
                
                <nav className="nav-links">
                    <div className="nav-item">
                        <a href="#" className="nav-link">{t.company}</a>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">{t.about}</a>
                            <a href="#" className="dropdown-item">{t.management}</a>
                            <a href="#" className="dropdown-item">{t.career}</a>
                        </div>
                    </div>
                    <div className="nav-item">
                        <a href="#" className="nav-link">{t.portfolio}</a>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">{t.privateApts}</a>
                            <a href="#" className="dropdown-item">{t.architecture}</a>
                            <a href="#" className="dropdown-item">{t.catering}</a>
                            <a href="#" className="dropdown-item">{t.projects360}</a>
                            <a href="#" className="dropdown-item">{t.poolProjects}</a>
                        </div>
                    </div>
                    <div className="nav-item">
                        <a href="#" className="nav-link active">{t.services}</a>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">{t.repair}</a>
                            <a href="#" className="dropdown-item">{t.construction}</a>
                            <a href="#" className="dropdown-item">{t.design}</a>
                            <a href="#" className="dropdown-item">{t.furniture}</a>
                            <a href="#" className="dropdown-item">{t.curtains}</a>
                            <a href="#" className="dropdown-item">{t.electricity}</a>
                        </div>
                    </div>
                    <div className="nav-item">
                        <a href="#" className="nav-link">{t.cooperation}</a>
                    </div>
                    <div className="nav-item">
                        <a href="#" className="nav-link">{t.media}</a>
                    </div>
                    <div className="nav-item">
                        <a href="#" className="nav-link">{t.contact}</a>
                    </div>
                </nav>

                <div className="header-actions">
                    <div className="lang-switch">
                        <span className={lang === 'AZ' ? 'active' : ''} onClick={() => setLang('AZ')}>AZ</span>
                        <span className={lang === 'RU' ? 'active' : ''} onClick={() => setLang('RU')}>RU</span>
                        <span className={lang === 'EN' ? 'active' : ''} onClick={() => setLang('EN')}>EN</span>
                    </div>
                    <i className="fa-solid fa-bars menu-toggle"></i>
                </div>
            </div>
        </header>
    );
};

const HeroSlider = () => {
    const { t } = useContext(LanguageContext);

    useEffect(() => {
        const swiper = new Swiper(".hero-swiper", {
            rewind: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            effect: "fade",
            observer: true,
            observeParents: true,
        });
        return () => {
            if (swiper && !swiper.destroyed) swiper.destroy(true, true);
        };
    }, []);

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
            title: t.hero1Title,
            subtitle: t.hero1Sub
        },
        {
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
            title: t.hero2Title,
            subtitle: t.hero2Sub
        }
    ];

    return (
        <section className="hero-section">
            <div className="swiper hero-swiper">
                <div className="swiper-wrapper">
                    {slides.map((slide, index) => (
                        <div className="swiper-slide hero-slide" key={index} style={{ backgroundImage: `url(${slide.image})` }}>
                            <div className="hero-content">
                                <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
                                <p className="hero-subtitle">{slide.subtitle}</p>
                                <a href="#" className="btn-primary">{t.btnAbout}</a>
                                <a href="#" className="btn-outline">{t.btnProjects}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Services = () => {
    const { t } = useContext(LanguageContext);

    const servicesList = [
        { title: t.repair, icon: "fa-solid fa-hammer", desc: t.srvRepairDesc },
        { title: t.construction, icon: "fa-solid fa-trowel-bricks", desc: t.srvConstDesc },
        { title: t.design, icon: "fa-solid fa-pen-ruler", desc: t.srvDesignDesc },
        { title: t.architecture, icon: "fa-solid fa-compass-drafting", desc: t.srvArchDesc },
        { title: t.furniture, icon: "fa-solid fa-couch", desc: t.srvFurnDesc },
        { title: t.curtains, icon: "fa-solid fa-person-shelter", desc: t.srvCurtDesc },
        { title: t.energy, icon: "fa-solid fa-solar-panel", desc: t.srvEnerDesc },
        { title: t.electricity, icon: "fa-solid fa-bolt", desc: t.srvElecDesc }
    ];

    return (
        <section className="services-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t.ourServices }}></h2>
                    <p className="section-subtitle">{t.ourServicesSub}</p>
                </div>
                <div className="services-grid">
                    {servicesList.map((srv, idx) => (
                        <div className="service-card" key={idx}>
                            <i className={`service-icon ${srv.icon}`}></i>
                            <h3 className="service-title">{srv.title}</h3>
                            <p className="service-desc">{srv.desc}</p>
                            <a href="#" className="service-link">{t.btnDetails} <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const { t } = useContext(LanguageContext);

    const projects = [
        { title: t.privateApts, img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { title: t.architecture, img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { title: t.catering, img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ];

    return (
        <section className="portfolio-section">
            <div className="container" style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t.latestProjects }}></h2>
                <p className="section-subtitle">{t.latestProjectsSub}</p>
            </div>
            <div className="portfolio-grid container">
                {projects.map((proj, idx) => (
                    <div className="portfolio-item" key={idx}>
                        <img src={proj.img} alt={proj.title} className="portfolio-img" />
                        <div className="portfolio-overlay">
                            <h3 className="portfolio-title">{proj.title}</h3>
                            <a href="#" className="btn-outline" style={{ margin: 0, padding: '10px 20px', fontSize: '14px' }}>{t.btnView}</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const CtaBanner = () => {
    const { t } = useContext(LanguageContext);
    return (
        <section className="cta-section">
            <div className="container">
                <h2 className="cta-title">{t.ctaTitle}</h2>
                <p className="cta-subtitle">{t.ctaSub}</p>
                <a href="tel:+994517111111" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-phone"></i> +994 51 711 11 11
                </a>
            </div>
        </section>
    );
};

const Footer = () => {
    const { t } = useContext(LanguageContext);
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <h4 className="footer-col-title">
                            <i className="fa-solid fa-building"></i> PREMIUM REGIONAL
                        </h4>
                        <p style={{ color: '#aaa', marginBottom: '20px' }}>
                            {t.footerAbout}
                        </p>
                        <div className="social-links">
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="footer-col-title">{t.quickLinks}</h4>
                        <ul className="footer-links">
                            <li><a href="#">{t.about}</a></li>
                            <li><a href="#">{t.services}</a></li>
                            <li><a href="#">{t.portfolio}</a></li>
                            <li><a href="#">{t.cooperation}</a></li>
                            <li><a href="#">{t.career}</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="footer-col-title">{t.footerServices}</h4>
                        <ul className="footer-links">
                            <li><a href="#">{t.repair} & {t.construction}</a></li>
                            <li><a href="#">{t.design} & {t.architecture}</a></li>
                            <li><a href="#">{t.furniture} & {t.curtains}</a></li>
                            <li><a href="#">{t.electricity}</a></li>
                            <li><a href="#">{t.poolProjects}</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="footer-col-title">{t.footerContact}</h4>
                        <ul className="contact-info">
                            <li>
                                <i className="fa-solid fa-location-dot"></i>
                                <span>{t.address}</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-phone"></i>
                                <span>+994 51 711 11 11</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-envelope"></i>
                                <span>info@premiumregional.az</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>{t.copyright}</p>
                    <p style={{ marginTop: '5px' }}>{t.builtBy}</p>
                </div>
            </div>
        </footer>
    );
};

const App = () => {
    const [lang, setLang] = useState('AZ');

    return (
        <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
            <div>
                <Header />
                <HeroSlider />
                <Services />
                <Portfolio />
                <CtaBanner />
                <Footer />
            </div>
        </LanguageContext.Provider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
