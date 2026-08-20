const { useState, useEffect, createContext, useContext } = React;

const translations = {
    AZ: {
        company: "Şirkət",
        about: "Haqqımızda",
        management: "Rəhbərlik",
        career: "Karyera",
        portfolio: "Portfolio",
        residential: "Yaşayış Binaları",
        commercial: "Kommersiya Obyektləri",
        villas: "Fərdi Villalar",
        industrial: "Sənaye Obyektləri",
        services: "Xidmətlərimiz",
        turnkey: "Açar Təslimi Tikinti",
        monolithic: "Monolit İşləri",
        facade: "Fasad İşləri",
        roofing: "Dam Örtükləri",
        renovation: "Əsaslı Təmir",
        architecture: "Memarlıq və Layihə",
        landscaping: "Landşaft və Hovuz",
        machinery: "Ağır Texnika",
        cooperation: "Əməkdaşlıq",
        media: "Media",
        contact: "Əlaqə",
        hero1Title: "Zövqünüzü oxşayacaq <span>inşaat !</span>",
        hero1Sub: "Peşəkar və Beynəlxalq təcrübəmiz ilə daim xidmətinizdəyik. Siz xəyal edin, biz inşa edək.",
        hero2Title: "Gələcəyi <span>inşa edirik !</span>",
        hero2Sub: "Müasir texnologiyalar və innovativ mühəndislik həlləri ilə.",
        btnAbout: "Haqqımızda",
        btnProjects: "Layihələr",
        ourServices: "Bizim <span>Xidmətlər</span>",
        ourServicesSub: "Tikinti sahəsi üzrə ixtisaslaşmış komandamız xidmətinizdədir",
        srvTurnkeyDesc: "Sıfırdan tam təmirli evlərin və binaların inşası.",
        srvMonolithicDesc: "Davamlı və etibarlı beton-monolit konstruksiya işləri.",
        srvFacadeDesc: "Müasir və klassik üslubda fasad üzləmə işləri.",
        srvRoofingDesc: "Hər növ binalar üçün keyfiyyətli dam örtüklərinin vurulması.",
        srvRenovationDesc: "Bina və fərdi evlərin peşəkar səviyyədə əsaslı təmiri.",
        srvArchDesc: "Peşəkar memarlıq, dizayn və mühəndislik həlləri.",
        srvLandDesc: "Həyətyanı sahələrin abadlaşdırılması və hovuz inşası.",
        srvMachDesc: "Tikinti layihələri üçün ağır texnikaların icarəsi.",
        btnDetails: "Ətraflı",
        latestProjects: "Son <span>Layihələr</span>",
        latestProjectsSub: "Ən son təhvil verdiyimiz tikinti layihələri ilə tanış olun",
        btnView: "Bax",
        ctaTitle: "Xəyalınızı inşa edirik !",
        ctaSub: "Layihəniz var? Bizimlə əlaqə saxlayın və xəyallarınızı gerçəkləşdirək.",
        footerAbout: "Peşəkar və Beynəlxalq təcrübəmiz ilə daim xidmətinizdəyik. Siz xəyal edin, biz gerçəkləşdirək.",
        quickLinks: "Sürətli Keçidlər",
        footerServices: "Xidmətlər",
        footerContact: "Əlaqə",
        address: "----",
        copyright: "© 2010-2025 Elcan İnşaat. Bütün hüquqlar qorunur.",
        builtBy: "Sayt CDN React vasitəsilə agent tərəfindən yaradılıb",
        orderTitle: "İndi <span>Sifariş</span> Edin",
        orderSub: "Layihənizi bizə etibar edin, ən qısa zamanda sizinlə əlaqə saxlayaq.",
        formName: "Adınız və Soyadınız",
        formPhone: "Əlaqə nömrəniz",
        formService: "Xidmət növünü seçin",
        formMessage: "Mesajınız (Əlavə qeydlər)",
        btnSubmit: "Sifariş Göndər",
        chooseService: "-- Xidmət seçin --"
    },
    RU: {
        company: "Компания",
        about: "О нас",
        management: "Руководство",
        career: "Карьера",
        portfolio: "Портфолио",
        residential: "Жилые Здания",
        commercial: "Коммерческие Объекты",
        villas: "Частные Виллы",
        industrial: "Промышленные Объекты",
        services: "Наши Услуги",
        turnkey: "Строительство под ключ",
        monolithic: "Монолитные работы",
        facade: "Фасадные работы",
        roofing: "Кровельные работы",
        renovation: "Капитальный ремонт",
        architecture: "Архитектура и Проектирование",
        landscaping: "Ландшафт и Бассейны",
        machinery: "Тяжелая техника",
        cooperation: "Сотрудничество",
        media: "Медиа",
        contact: "Контакт",
        hero1Title: "Строительство на ваш <span>вкус !</span>",
        hero1Sub: "Мы всегда к вашим услугам с нашим профессиональным опытом. Вы мечтаете, мы строим.",
        hero2Title: "Мы строим <span>будущее !</span>",
        hero2Sub: "С современными технологиями и инновационными решениями.",
        btnAbout: "О нас",
        btnProjects: "Проекты",
        ourServices: "Наши <span>Услуги</span>",
        ourServicesSub: "Наша команда специалистов по строительству к вашим услугам",
        srvTurnkeyDesc: "Строительство домов и зданий с нуля под ключ.",
        srvMonolithicDesc: "Надежные бетонно-монолитные конструкции.",
        srvFacadeDesc: "Облицовка фасадов в современном и классическом стиле.",
        srvRoofingDesc: "Установка качественной кровли для любых зданий.",
        srvRenovationDesc: "Профессиональный капитальный ремонт зданий и домов.",
        srvArchDesc: "Профессиональные архитектурные и инженерные решения.",
        srvLandDesc: "Благоустройство дворов и строительство бассейнов.",
        srvMachDesc: "Аренда тяжелой техники для строительных проектов.",
        btnDetails: "Подробнее",
        latestProjects: "Последние <span>Проекты</span>",
        latestProjectsSub: "Ознакомьтесь с нашими последними строительными проектами",
        btnView: "Смотреть",
        ctaTitle: "Мы строим вашу мечту !",
        ctaSub: "Есть проект? Свяжитесь с нами, и мы воплотим ваши мечты в реальность.",
        footerAbout: "Мы всегда к вашим услугам с нашим профессиональным и международным опытом. Вы мечтаете, мы реализуем.",
        quickLinks: "Быстрые Ссылки",
        footerServices: "Услуги",
        footerContact: "Контакт",
        address: "----",
        copyright: "© 2010-2025 Elcan İnşaat. Все права защищены.",
        builtBy: "Сайт создан через CDN React",
        orderTitle: "Заказать <span>Сейчас</span>",
        orderSub: "Доверьте нам свой проект, и мы свяжемся с вами в кратчайшие сроки.",
        formName: "Имя и Фамилия",
        formPhone: "Номер телефона",
        formService: "Выберите тип услуги",
        formMessage: "Ваше сообщение (Дополнительно)",
        btnSubmit: "Отправить Заказ",
        chooseService: "-- Выберите услугу --"
    },
    EN: {
        company: "Company",
        about: "About Us",
        management: "Management",
        career: "Career",
        portfolio: "Portfolio",
        residential: "Residential Buildings",
        commercial: "Commercial Facilities",
        villas: "Private Villas",
        industrial: "Industrial Facilities",
        services: "Our Services",
        turnkey: "Turnkey Construction",
        monolithic: "Monolithic Works",
        facade: "Facade Works",
        roofing: "Roofing Solutions",
        renovation: "General Renovation",
        architecture: "Architecture & Engineering",
        landscaping: "Landscaping & Pools",
        machinery: "Heavy Machinery",
        cooperation: "Cooperation",
        media: "Media",
        contact: "Contact",
        hero1Title: "Construction to your <span>taste !</span>",
        hero1Sub: "We are always at your service with our professional experience. You dream, we build.",
        hero2Title: "We build the <span>future !</span>",
        hero2Sub: "With modern technologies and innovative engineering solutions.",
        btnAbout: "About Us",
        btnProjects: "Projects",
        ourServices: "Our <span>Services</span>",
        ourServicesSub: "Our construction specialized team is at your service",
        srvTurnkeyDesc: "Construction of fully renovated houses and buildings from scratch.",
        srvMonolithicDesc: "Durable and reliable concrete-monolithic construction works.",
        srvFacadeDesc: "Modern and classic style facade cladding works.",
        srvRoofingDesc: "Installation of high-quality roofing for all types of buildings.",
        srvRenovationDesc: "Professional general renovation of buildings and houses.",
        srvArchDesc: "Professional architectural and engineering solutions.",
        srvLandDesc: "Landscaping of yards and construction of pools.",
        srvMachDesc: "Rental of heavy machinery for construction projects.",
        btnDetails: "Details",
        latestProjects: "Latest <span>Projects</span>",
        latestProjectsSub: "Check out our latest delivered construction projects",
        btnView: "View",
        ctaTitle: "We build your dream !",
        ctaSub: "Have a project? Contact us and let's make your dreams come true.",
        footerAbout: "We are always at your service with our professional and international experience. You dream, we realize.",
        quickLinks: "Quick Links",
        footerServices: "Services",
        footerContact: "Contact",
        address: "----",
        copyright: "© 2010-2025 Elcan İnşaat. All rights reserved.",
        builtBy: "Site built via CDN React",
        orderTitle: "Order <span>Now</span>",
        orderSub: "Entrust your project to us, and we will contact you as soon as possible.",
        formName: "Your Name and Surname",
        formPhone: "Phone Number",
        formService: "Select Service Type",
        formMessage: "Your Message (Optional)",
        btnSubmit: "Submit Order",
        chooseService: "-- Select a service --"
    }
};

const LanguageContext = createContext();

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);
    return (
        <div className={`preloader ${!loading ? 'fade-out' : ''}`}>
            <div className="preloader-content">
                <i className="fa-solid fa-building" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '20px' }}></i>
                <h1 style={{ fontFamily: 'var(--font-heading)', color: '#fff', letterSpacing: '3px', textTransform: 'uppercase' }}>Elcan İnşaat</h1>
                <div className="loading-bar"><div className="loading-progress"></div></div>
            </div>
        </div>
    );
};



const MagneticButton = ({ children, className, href, onClick, style, type }) => {
    const btnRef = React.useRef(null);

    const handleMouseMove = (e) => {
        if (!btnRef.current) return;
        const btn = btnRef.current;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };

    const handleMouseLeave = () => {
        if (!btnRef.current) return;
        const btn = btnRef.current;
        btn.style.transform = `translate(0px, 0px)`;
    };

    const props = {
        ref: btnRef,
        className: className,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        onClick,
        style: { ...style, transition: 'transform 0.1s ease-out, background 0.5s ease, color 0.5s ease' }
    };

    if (href) {
        return <a href={href} {...props}>{children}</a>;
    }
    return <button type={type} {...props}>{children}</button>;
};

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { lang, setLang, t, theme, toggleTheme } = useContext(LanguageContext);

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
                    <i className="fa-solid fa-building"></i> ELCAN İNŞAAT
                </a>
                
                <nav className={`nav-links ${isMenuOpen ? 'active-mobile' : ''}`}>
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
                            <a href="#" className="dropdown-item">{t.residential}</a>
                            <a href="#" className="dropdown-item">{t.commercial}</a>
                            <a href="#" className="dropdown-item">{t.villas}</a>
                            <a href="#" className="dropdown-item">{t.industrial}</a>
                        </div>
                    </div>
                    <div className="nav-item">
                        <a href="#" className="nav-link active">{t.services}</a>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">{t.turnkey}</a>
                            <a href="#" className="dropdown-item">{t.monolithic}</a>
                            <a href="#" className="dropdown-item">{t.facade}</a>
                            <a href="#" className="dropdown-item">{t.roofing}</a>
                            <a href="#" className="dropdown-item">{t.renovation}</a>
                            <a href="#" className="dropdown-item">{t.architecture}</a>
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
                    <i 
                        className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} 
                        onClick={toggleTheme} 
                        style={{ cursor: 'pointer', fontSize: '18px', color: 'var(--text-dark)' }}
                        title="Toggle Dark/Light Mode"
                    ></i>
                    <div className="lang-switch">
                        <span className={lang === 'AZ' ? 'active' : ''} onClick={() => setLang('AZ')}>AZ</span>
                        <span className={lang === 'RU' ? 'active' : ''} onClick={() => setLang('RU')}>RU</span>
                        <span className={lang === 'EN' ? 'active' : ''} onClick={() => setLang('EN')}>EN</span>
                    </div>
                    <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} menu-toggle`} onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
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
                                <MagneticButton href="#order" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('order').scrollIntoView({ behavior: 'smooth' }); }}>{t.btnAbout}</MagneticButton>
                                <MagneticButton href="#order" className="btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('order').scrollIntoView({ behavior: 'smooth' }); }}>{t.btnProjects}</MagneticButton>
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
        { title: t.turnkey, icon: "fa-solid fa-building", desc: t.srvTurnkeyDesc },
        { title: t.monolithic, icon: "fa-solid fa-layer-group", desc: t.srvMonolithicDesc },
        { title: t.facade, icon: "fa-solid fa-border-all", desc: t.srvFacadeDesc },
        { title: t.roofing, icon: "fa-solid fa-house-chimney", desc: t.srvRoofingDesc },
        { title: t.renovation, icon: "fa-solid fa-hammer", desc: t.srvRenovationDesc },
        { title: t.architecture, icon: "fa-solid fa-compass-drafting", desc: t.srvArchDesc },
        { title: t.landscaping, icon: "fa-solid fa-tree", desc: t.srvLandDesc },
        { title: t.machinery, icon: "fa-solid fa-truck-moving", desc: t.srvMachDesc }
    ];

    return (
        <section className="services-section">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t.ourServices }}></h2>
                    <p className="section-subtitle">{t.ourServicesSub}</p>
                </div>
                <div className="services-grid">
                    {servicesList.map((srv, idx) => (
                        <div className="service-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
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
        { title: t.residential, img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { title: t.commercial, img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { title: t.villas, img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ];

    return (
        <section className="portfolio-section">
            <div className="container" style={{ textAlign: 'center', marginBottom: '60px' }} data-aos="fade-up">
                <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t.latestProjects }}></h2>
                <p className="section-subtitle">{t.latestProjectsSub}</p>
            </div>
            <div className="portfolio-grid container">
                {projects.map((proj, idx) => (
                    <div className="portfolio-item" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                        <img src={proj.img} alt={proj.title} className="portfolio-img" />
                        <div className="portfolio-overlay">
                            <h3 className="portfolio-title">{proj.title}</h3>
                            <MagneticButton href="#" className="btn-outline" style={{ margin: 0, padding: '10px 20px', fontSize: '14px' }}>{t.btnView}</MagneticButton>
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
            <div className="container" data-aos="zoom-in">
                <h2 className="cta-title">{t.ctaTitle}</h2>
                <p className="cta-subtitle">{t.ctaSub}</p>
                <MagneticButton href="tel:+994" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-phone"></i> +994
                </MagneticButton>
            </div>
        </section>
    );
};

const Footer = () => {
    const { t } = useContext(LanguageContext);
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid" data-aos="fade-up">
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
                            <li><a href="#">{t.turnkey}</a></li>
                            <li><a href="#">{t.monolithic} & {t.facade}</a></li>
                            <li><a href="#">{t.roofing}</a></li>
                            <li><a href="#">{t.architecture}</a></li>
                            <li><a href="#">{t.landscaping}</a></li>
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
                                <span>+994</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-envelope"></i>
                                <span>elcancbrayilli2@gmail.com</span>
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

const OrderSection = () => {
    const { t } = useContext(LanguageContext);
    
    return (
        <section className="order-section" id="order">
            <div className="container">
                <div className="order-wrapper">
                    <div className="order-content" data-aos="fade-right">
                        <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t.orderTitle }}></h2>
                        <p className="section-subtitle" style={{ marginLeft: 0, textAlign: 'left' }}>{t.orderSub}</p>
                        <div className="order-contact-info">
                            <div className="info-item">
                                <i className="fa-solid fa-phone"></i>
                                <div>
                                    <h4>{t.footerContact}</h4>
                                    <p>+994</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <i className="fa-solid fa-envelope"></i>
                                <div>
                                    <h4>Email</h4>
                                    <p>elcancbrayilli2@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-form-container" data-aos="fade-left">
                        <form className="order-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>{t.formName}</label>
                                <input type="text" placeholder="John Doe" required />
                            </div>
                            <div className="form-group">
                                <label>{t.formPhone}</label>
                                <input type="tel" placeholder="+994 -- --- -- --" required />
                            </div>
                            <div className="form-group">
                                <label>{t.formService}</label>
                                <select required>
                                    <option value="">{t.chooseService}</option>
                                    <option value="turnkey">{t.turnkey}</option>
                                    <option value="monolithic">{t.monolithic}</option>
                                    <option value="facade">{t.facade}</option>
                                    <option value="roofing">{t.roofing}</option>
                                    <option value="renovation">{t.renovation}</option>
                                    <option value="architecture">{t.architecture}</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>{t.formMessage}</label>
                                <textarea rows="4" placeholder="..."></textarea>
                            </div>
                            <MagneticButton type="submit" className="btn-primary btn-submit">{t.btnSubmit} <i className="fa-solid fa-paper-plane"></i></MagneticButton>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

const App = () => {
    const [lang, setLang] = useState('AZ');
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        if (window.AOS) {
            window.AOS.init({
                duration: 1000,
                once: true,
                offset: 50
            });
        }
    }, []);

    return (
        <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], theme, toggleTheme }}>
            <div>
                <Preloader />
                <Header />
                <HeroSlider />
                <Services />
                <Portfolio />
                <OrderSection />
                <CtaBanner />
                <Footer />
            </div>
        </LanguageContext.Provider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
