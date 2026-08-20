/* ═══════════════════════════════════════════════
   INSHAAT v4 — Clean Commercial Site JS
   ═══════════════════════════════════════════════ */
'use strict';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const easeOut = t => 1 - Math.pow(1 - t, 4);

/* ════════════════════════════════════════════════
   TRANSLATION ENGINE & DICTIONARY
   ════════════════════════════════════════════════ */
const translations = {
  az: {
    logo_sub: "İnşaat",
    nav_company: "Şirkət",
    nav_about: "Haqqımızda",
    nav_team: "Komandamız",
    nav_awards: "Mükafatlar",
    nav_partners: "Tərəfdaşlar",
    nav_portfolio: "Portfolio",
    nav_all_projects: "Bütün layihələr",
    nav_arch: "Arxitektura",
    nav_interior: "İnteryer",
    nav_construction: "Tikinti",
    nav_services: "Xidmətlərimiz",
    nav_interior_design: "İnteryer dizaynı",
    nav_landscape: "Landşaft",
    nav_cooperation: "Əməkdaşlıq",
    nav_media: "Media",
    nav_news: "Xəbərlər",
    nav_photos: "Foto qalereya",
    nav_video: "Video",
    nav_contact: "Əlaqə",
    slide1_tag: "Arxitektura studiyası · Bakı, Azərbaycan",
    slide1_title: "Siz arzulayın —<br>biz həyata<br><span class=\"red\">keçirək</span>",
    slide1_sub: "Peşəkar və beynərnəzər təcrübəmizlə həmişə xidmətinizdəyik. Siz xəyal edin, biz gerçəkləşdirək.",
    btn_about_company: "Şirkət haqqında",
    slide2_tag: "İnteryer dizaynı · 18 illik təcrübə",
    slide2_title: "140+ layihə<br>uğurla həyata<br><span class=\"red\">keçirildi</span>",
    slide2_sub: "Hər bir layihəyə tam diqqət, peşəkar yanaşma və keyfiyyətli materiallar.",
    btn_view_portfolio: "Portfolioya bax",
    slide3_tag: "Tikinti · Tam xidmət dövrü",
    slide3_title: "İlk eskizdən<br>açarların<br><span class=\"red\">təhvilinə qədər</span>",
    slide3_sub: "Arxitektura, dizayn və tikinti — hamısı bir dam altında. Sizin üçün ən rahat həll.",
    btn_submit_request: "Müraciət edin",
    services_title: "Nə təklif edirik?",
    filter_all: "Hamısı",
    srv_arch_desc: "Konsepsiyadan tikintinin sonuna qədər — yaşayış və kommersiya binaları üçün peşəkar layihələndirmə.",
    btn_details: "Ətraflı",
    srv_interior_desc: "Nəfəs alan interyerlər. Materiallar, işıqlandırma, xüsusi mebel — vahid, atmosferi zəngin məkan.",
    srv_construction_desc: "Tam tikinti idarəetməsi — materiallar nəzarəti, usta seçimi, layihə müddətlərinə riayət.",
    srv_landscape_desc: "Binanı əhatə edən mühit də önəmlidir. Bağ və landşaft layihələndirməsi — təbiətlə harmoniyada.",
    experience_years: "İllik təcrübə",
    about_title: "Keyfiyyət və peşəkar yanaşma",
    about_text1: "ELCAN INSHAAT — Bakıda yerləşən arxitektura studiyasıdır. Biz arxitektura, tikinti və interyer dizaynı üzrə kompleks xidmət göstəririk. Hər bir layihə üçün tam yaradıcı və peşəkar diqqət.",
    about_text2: "Biz eyni anda məhdud sayda müştəri ilə işləyirik — bu hər layihəyə tam diqqət yetirməyimizə imkan verir.",
    projects_label: "Layihələr",
    awards_label: "Mükafatlar",
    btn_about_company_more: "Şirkət haqqında ətraflı",
    portfolio_title: "Son layihələr",
    project_casa_azur_info: "Xüsusi Rezidensiya · Bakı · 2024",
    project_meridian_info: "Lüks Mənzil · Bakı · 2024",
    project_travertine_info: "Xüsusi Villa · Gəncə · 2024",
    project_stone_house_info: "Xüsusi Ev · Şəki · 2023",
    project_compound_info: "Yaşayış Kompleksi · Sumqayıt · 2023",
    project_tower_office_info: "Biznes Mərkəzi · Bakı · 2023",
    btn_all_projects_view: "Bütün layihələrə bax",
    num_completed: "Tamamlanan layihələr",
    num_awards: "Arxitektura mükafatları",
    num_cities: "Xidmət göstərilən şəhərlər",
    process_label: "İş prosesi",
    process_title: "Biz necə işləyirik?",
    step1_title: "Konsultasiya",
    step1_desc: "Ehtiyaclarınızı anlamaq. Arzularınız, büdcəniz və müddətləriniz barədə müzakirə edirik.",
    step2_title: "Layihələndirmə",
    step2_desc: "Güclü bir arxitektura ideyası — eskizlər, modellər və materiallar vasitəsilə işlənib hazırlanır.",
    step3_title: "Tikinti",
    step3_desc: "Layihə tam nəzarət altında həyata keçirilir. Keyfiyyət və müddətlərə ciddi riayət edilir.",
    step4_title: "Təhvil vermə",
    step4_desc: "Açarların təhvilinə qədər yanınızdayıq. Hazır iş layihəyə tam uyğun gəlir.",
    testi_quote: "\"ELCAN INSHAAT ilə işləmək inanılmaz bir təcrübə oldu. Onlar sadəcə vizual baxımdan nə istədiyimizi deyil, necə yaşamaq istədiyimizi də anladılar — və bu arzuları gerçəkliyə çevirdilər.\"",
    testi_cite: "Casa Azur, Bakı · 2024",
    testi_all_reviews: "Bütün rəylər",
    review2_text: "Evimizin interyer dizaynı üçün müraciət etdik. İşini vaxtında və peşəkar təhvil verdilər. Material seçimləri və işıqlandırma detalları heyranedicidir.",
    review2_cite: "Meridian Penthouse, Bakı · 2024",
    review3_text: "Monolit beton işləri və tikinti tam layihəyə uyğun olaraq idarə olundu. Hər mərhələdə hesabat verdilər. Keyfiyyət üçün təşəkkürlər!",
    review3_cite: "Compound Sumqayıt · 2023",
    review4_text: "Landşaft və bağımızın layihələndirilməsi çox gözəl alındı. Villa ilə bağın harmoniyası mükəmməldir.",
    review4_cite: "Villa Travertine, Gəncə · 2024",
    about_mission_title: "Məqsədimiz",
    about_mission_desc: "Müştərilərimizin xəyallarındakı yaşayış və iş məkanlarını ən yüksək keyfiyyət standartları ilə gerçəkliyə çevirmək, modern və funksional memarlıq sahəsində fərq yaratmaq.",
    about_history_title: "Tariximiz",
    about_history_desc: "ELCAN INSHAAT olaraq, 18 ildən artıq təcrübəmizlə Azərbaycanda və beynəlxalq memarlıq arenasında 140-dan çox layihəni uğurla tamamlamışıq. İlk eskizdən açarların təhvilinə qədər peşəkar komandamızla müştərilərimizin xidmətindəyik.",
    role_founder: "Təsisçi & Baş Memar",
    role_designer: "Aparıcı İnteryer Dizayneri",
    role_engineer: "Baş Mühəndis",
    award1_title: "İlin Arxitektura Şirkəti",
    award1_desc: "Azərbaycan Memarlıq və Tikinti Mükafatı",
    award2_title: "Ən Yaxşı Yaşayış Kompleksi Layihəsi",
    award2_desc: "Baku Architectural Expo 2021",
    award3_title: "İnteryer Dizaynda Peşəkarlıq",
    award3_desc: "Beynəlxalq Dizayn Assosiasiyası Diplomu",
    contact_title: "Layihənizi<br><span class=\"red\">başlayaq!</span>",
    contact_sub: "Biz hər il məhdud sayda layihə qəbul edirik. Əgər sizin ideyalar varsa — biz dinləməyə hazırıq.",
    contact_phone_label: "Telefon",
    contact_address_label: "Ünvan",
    contact_address_val: "Bakı, Azərbaycan",
    form_name: "Adınız *",
    form_name_placeholder: "Tam adınız",
    form_phone: "Telefon *",
    form_phone_placeholder: "+994 __ ___ __ __",
    form_email: "Email",
    form_email_placeholder: "email@nümunə.az",
    form_project_type: "Layihənin növü",
    form_select: "Seçin",
    type_villa: "Xüsusi Ev / Villa",
    type_commercial: "Kommersiya Binası",
    type_interior: "Yalnız İnteryer Dizaynı",
    type_masterplan: "Şəhərsalma / Masterplan",
    type_other: "Digər",
    form_about_project: "Layihə haqqında *",
    form_message_placeholder: "Layihənizi qısaca təsvir edin...",
    form_submit: "Göndər",
    form_note: "* — məcburi sahələr. Məlumatlarınız üçüncü şəxslərə verilmir.",
    footer_desc: "Arxitektura, tikinti və interyer dizaynı studiyası.<br>Bakı, Azərbaycan",
    footer_working_hours: "İş vaxtı: 9:00–18:00",
    footer_copy: "© 2024 Elcan İnşaat. Bütün hüquqlar qorunur.",
    back_to_top: "↑ Yuxarı",
    modal_loc_label: "Ünvan:",
    modal_year_label: "İl:",
    modal_order_btn: "Layihəni Sifariş Et",
    success_title: "Sifarişiniz Qəbul Olundu!",
    success_desc: "Ən qısa zamanda sizinlə əlaqə saxlayacağıq. Təşəkkür edirik!",
    ok: "Tamam",
    page_title: "Elcan İnşaat — Arxitektura & Tikinti",
    meta_desc: "Elcan İnşaat — Arxitektura, tikinti və interyer dizaynı şirkəti. Bakı, Azərbaycan."
  },
  ru: {
    logo_sub: "Строительство",
    nav_company: "Компания",
    nav_about: "О нас",
    nav_team: "Наша команда",
    nav_awards: "Награды",
    nav_partners: "Партнеры",
    nav_portfolio: "Портфолио",
    nav_all_projects: "Все проекты",
    nav_arch: "Архитектура",
    nav_interior: "Интерьер",
    nav_construction: "Строительство",
    nav_services: "Наши услуги",
    nav_interior_design: "Дизайн интерьера",
    nav_landscape: "Ландшафт",
    nav_cooperation: "Сотрудничество",
    nav_media: "Медиа",
    nav_news: "Новости",
    nav_photos: "Фотогалерея",
    nav_video: "Видео",
    nav_contact: "Контакты",
    slide1_tag: "Архитектурная студия · Баку, Азербайджан",
    slide1_title: "Вы мечтайте —<br>мы воплотим в<br><span class=\"red\">жизнь</span>",
    slide1_sub: "Мы всегда к вашим услугам с нашим профессиональным и международным опытом. Вы мечтаете, мы реализуем.",
    btn_about_company: "О компании",
    slide2_tag: "Дизайн интерьера · 18 лет опыта",
    slide2_title: "Успешно реализовано<br>более 140<br><span class=\"red\">проектов</span>",
    slide2_sub: "Полное внимание к каждому проекту, профессиональный подход и качественные материалы.",
    btn_view_portfolio: "Посмотреть портфолио",
    slide3_tag: "Строительство · Полный цикл услуг",
    slide3_title: "От первого эскиза<br>до сдачи<br><span class=\"red\">ключей</span>",
    slide3_sub: "Архитектура, дизайн и строительство — все под одной крышей. Самое удобное решение для вас.",
    btn_submit_request: "Связаться с нами",
    services_title: "Что мы предлагаем?",
    filter_all: "Все",
    srv_arch_desc: "От концепции до конца строительства — профессиональное проектирование жилых и коммерческих зданий.",
    btn_details: "Подробнее",
    srv_interior_desc: "Интерьеры, которые дышат. Материалы, освещение, эксклюзивная мебель — единое, богатое атмосферой пространство.",
    srv_construction_desc: "Полное управление строительством — контроль материалов, выбор мастеров, соблюдение сроков проекта.",
    srv_landscape_desc: "Окружение здания также важно. Проектирование садов и ландшафтов — в гармонии с природой.",
    experience_years: "Лет опыта",
    about_title: "Качество и профессиональный подход",
    about_text1: "ELCAN INSHAAT — архитектурная студия в Баку. Мы предоставляем комплексные услуги по архитектуре, строительству и дизайну интерьеров. Творческий и профессиональный подход к каждому проекту.",
    about_text2: "Мы работаем с ограниченным количеством клиентов одновременно — это позволяет нам уделять максимум внимания каждому проекту.",
    projects_label: "Проекты",
    awards_label: "Награды",
    btn_about_company_more: "Подробнее о компании",
    portfolio_title: "Последние проекты",
    project_casa_azur_info: "Частная резиденция · Баку · 2024",
    project_meridian_info: "Люкс апартаменты · Баку · 2024",
    project_travertine_info: "Частная вилла · Гянджа · 2024",
    project_stone_house_info: "Частный дом · Шеки · 2023",
    project_compound_info: "Жилой комплекс · Сумгаит · 2023",
    project_tower_office_info: "Бизнес-центр · Баку · 2023",
    btn_all_projects_view: "Посмотреть все проекты",
    num_completed: "Завершенные проекты",
    num_awards: "Архитектурные награды",
    num_cities: "Городов обслуживания",
    process_label: "Ход работы",
    process_title: "Как мы работаем?",
    step1_title: "Консультация",
    step1_desc: "Понимание ваших потребностей. Обсуждаем ваши пожелания, бюджет и сроки.",
    step2_title: "Проектирование",
    step2_desc: "Сильная архитектурная идея разрабатывается с помощью эскизов, моделей и материалов.",
    step3_title: "Строительство",
    step3_desc: "Проект реализуется под полным контролем. Строго соблюдаются качество и сроки.",
    step4_title: "Сдача объекта",
    step4_desc: "Мы с вами до передачи ключей. Готовая работа полностью соответствует проекту.",
    testi_quote: "\"Работать с ELCAN INSHAAT было невероятным опытом. Они поняли не только то, что мы хотели визуально, но и то, как мы хотели жить — и воплотили эти мечты в реальность.\"",
    testi_cite: "Casa Azur, Баку · 2024",
    testi_all_reviews: "Все отзывы",
    review2_text: "Мы обратились за дизайном интерьера нашего дома. Сдали работу вовремя и профессионально. Выбор материалов и детали освещения просто потрясающие.",
    review2_cite: "Meridian Penthouse, Баку · 2024",
    review3_text: "Монолитные бетонные работы и строительство велись в полном соответствии с проектом. Отчет предоставляли на каждом этапе. Спасибо за качество!",
    review3_cite: "Compound Сумгаит · 2023",
    review4_text: "Проектирование ландшафта и нашего сада получилось очень красивым. Гармония виллы с садом идеальна.",
    review4_cite: "Villa Travertine, Гянджа · 2024",
    about_mission_title: "Наша цель",
    about_mission_desc: "Воплощать в реальность жилые и рабочие пространства мечты наших клиентов с высочайшими стандартами качества, внося вклад в развитие архитектуры.",
    about_history_title: "Наша история",
    about_history_desc: "Как ELCAN INSHAAT, с более чем 18-летним опытом, мы успешно завершили более 140 проектов в Азербайджане и за рубежом. Мы всегда к вашим услугам с первого дня с качественными материалами и профессиональной командой.",
    role_founder: "Основатель и главный архитектор",
    role_designer: "Ведущий дизайнер интерьера",
    role_engineer: "Главный инженер",
    award1_title: "Архитектурная компания года",
    award1_desc: "Азербайджанская архитектурно-строительная премия",
    award2_title: "Лучший проект жилого комплекса",
    award2_desc: "Baku Architectural Expo 2021",
    award3_title: "Профессионализм в дизайне интерьера",
    award3_desc: "Диплом Международной Ассоциации Дизайна",
    contact_title: "Давайте начнем<br><span class=\"red\">ваш проект!</span>",
    contact_sub: "Мы принимаем ограниченное количество проектов каждый год. Если у вас есть идеи — мы готовы выслушать.",
    contact_phone_label: "Телефон",
    contact_address_label: "Адрес",
    contact_address_val: "Баку, Азербайджан",
    form_name: "Ваше имя *",
    form_name_placeholder: "Полное имя",
    form_phone: "Телефон *",
    form_phone_placeholder: "+994 __ ___ __ __",
    form_email: "Email",
    form_email_placeholder: "email@primer.az",
    form_project_type: "Тип проекта",
    form_select: "Выберите",
    type_villa: "Частный дом / Вилла",
    type_commercial: "Коммерческое здание",
    type_interior: "Только дизайн интерьера",
    type_masterplan: "Градостроительство / Генплан",
    type_other: "Другое",
    form_about_project: "О проекте *",
    form_message_placeholder: "Кратко опишите ваш проект...",
    form_submit: "Отправить",
    form_note: "* — обязательные поля. Ваши данные не передаются третьим лицам.",
    footer_desc: "Студия архитектуры, строительства и дизайна интерьера.<br>Баку, Азербайджан",
    footer_working_hours: "Рабочее время: 9:00–18:00",
    footer_copy: "© 2024 Elcan İnşaat. Все права защищены.",
    back_to_top: "↑ Наверх",
    modal_loc_label: "Адрес:",
    modal_year_label: "Год:",
    modal_order_btn: "Заказать проект",
    success_title: "Ваш заказ принят!",
    success_desc: "Мы свяжемся с вами в ближайшее время. Спасибо!",
    ok: "Отлично",
    page_title: "Elcan İnşaat — Архитектура & Строительство",
    meta_desc: "Elcan İnşaat — Компания по архитектуре, строительству и дизайну интерьеров. Баку, Азербайджан."
  },
  en: {
    logo_sub: "Construction",
    nav_company: "Company",
    nav_about: "About Us",
    nav_team: "Our Team",
    nav_awards: "Awards",
    nav_partners: "Partners",
    nav_portfolio: "Portfolio",
    nav_all_projects: "All projects",
    nav_arch: "Architecture",
    nav_interior: "Interior",
    nav_construction: "Construction",
    nav_services: "Our Services",
    nav_interior_design: "Interior design",
    nav_landscape: "Landscape",
    nav_cooperation: "Cooperation",
    nav_media: "Media",
    nav_news: "News",
    nav_photos: "Photo gallery",
    nav_video: "Video",
    nav_contact: "Contact",
    slide1_tag: "Architectural studio · Baku, Azerbaijan",
    slide1_title: "You dream —<br>we will make it<br><span class=\"red\">happen</span>",
    slide1_sub: "We are always at your service with our professional and international experience. You dream, we realize.",
    btn_about_company: "About company",
    slide2_tag: "Interior design · 18 years of experience",
    slide2_title: "Over 140 projects<br>successfully<br><span class=\"red\">realized</span>",
    slide2_sub: "Full attention to every project, professional approach and quality materials.",
    btn_view_portfolio: "View portfolio",
    slide3_tag: "Construction · Full service cycle",
    slide3_title: "From first sketch<br>to handover of<br><span class=\"red\">keys</span>",
    slide3_sub: "Architecture, design and construction — all under one roof. The most convenient solution for you.",
    btn_submit_request: "Contact us",
    services_title: "What do we offer?",
    filter_all: "All",
    srv_arch_desc: "From concept to completion of construction — professional design for residential and commercial buildings.",
    btn_details: "Details",
    srv_interior_desc: "Interiors that breathe. Materials, lighting, custom furniture — a unified, atmosphere-rich space.",
    srv_construction_desc: "Full construction management — materials control, selection of craftsmen, compliance with project deadlines.",
    srv_landscape_desc: "The environment surrounding the building is also important. Garden and landscape design — in harmony with nature.",
    experience_years: "Years of experience",
    about_title: "Quality and professional approach",
    about_text1: "ELCAN INSHAAT is an architectural studio based in Baku. We provide comprehensive services in architecture, construction, and interior design. Full creative and professional attention to every project.",
    about_text2: "We work with a limited number of clients at the same time — this allows us to give full attention to each project.",
    projects_label: "Projects",
    awards_label: "Awards",
    btn_about_company_more: "Read more about company",
    portfolio_title: "Recent projects",
    project_casa_azur_info: "Private Residence · Baku · 2024",
    project_meridian_info: "Luxury Apartment · Baku · 2024",
    project_travertine_info: "Private Villa · Ganja · 2024",
    project_stone_house_info: "Private House · Sheki · 2023",
    project_compound_info: "Residential Complex · Sumqayit · 2023",
    project_tower_office_info: "Business Center · Baku · 2023",
    btn_all_projects_view: "View all projects",
    num_completed: "Completed projects",
    num_awards: "Architectural awards",
    num_cities: "Cities served",
    process_label: "Work Process",
    process_title: "How do we work?",
    step1_title: "Consultation",
    step1_desc: "Understanding your needs. We discuss your desires, budget, and deadlines.",
    step2_title: "Design & Planning",
    step2_desc: "A strong architectural idea is developed through sketches, models, and materials.",
    step3_title: "Construction",
    step3_desc: "The project is implemented under full control. Quality and deadlines are strictly observed.",
    step4_title: "Handover",
    step4_desc: "We are with you until the keys are handed over. The finished work fully matches the project.",
    testi_quote: "\"Working with ELCAN INSHAAT was an incredible experience. They understood not just what we wanted visually, but how we wanted to live — and turned those dreams into reality.\"",
    testi_cite: "Casa Azur, Baku · 2024",
    testi_all_reviews: "All reviews",
    review2_text: "We contacted them for the interior design of our house. They delivered the work on time and professionally. The material choices and lighting details are amazing.",
    review2_cite: "Meridian Penthouse, Baku · 2024",
    review3_text: "Monolithic concrete works and construction were managed in full compliance with the project. They provided reports at every stage. Thanks for the quality!",
    review3_cite: "Compound Sumqayit · 2023",
    review4_text: "The landscaping and design of our garden turned out beautiful. The harmony of the villa with the garden is perfect.",
    review4_cite: "Villa Travertine, Ganja · 2024",
    about_mission_title: "Our Mission",
    about_mission_desc: "To turn the dream residential and commercial spaces of our clients into reality with the highest standards of quality, making a difference in architecture.",
    about_history_title: "Our History",
    about_history_desc: "As ELCAN INSHAAT, with over 18 years of experience, we have successfully completed more than 140 projects in Azerbaijan and internationally. We are at your service since day one with quality materials and a professional team.",
    role_founder: "Founder & Chief Architect",
    role_designer: "Lead Interior Designer",
    role_engineer: "Chief Engineer",
    award1_title: "Architectural Company of the Year",
    award1_desc: "Azerbaijan Architecture and Construction Award",
    award2_title: "Best Residential Complex Project",
    award2_desc: "Baku Architectural Expo 2021",
    award3_title: "Professionalism in Interior Design",
    award3_desc: "International Design Association Diploma",
    contact_title: "Let's start<br><span class=\"red\">your project!</span>",
    contact_sub: "We accept a limited number of projects every year. If you have ideas — we are ready to listen.",
    contact_phone_label: "Phone",
    contact_address_label: "Address",
    contact_address_val: "Baku, Azerbaijan",
    form_name: "Your Name *",
    form_name_placeholder: "Full name",
    form_phone: "Phone *",
    form_phone_placeholder: "+994 __ ___ __ __",
    form_email: "Email",
    form_email_placeholder: "email@example.com",
    form_project_type: "Project Type",
    form_select: "Select",
    type_villa: "Private House / Villa",
    type_commercial: "Commercial Building",
    type_interior: "Interior Design Only",
    type_masterplan: "Urban Planning / Master Plan",
    type_other: "Other",
    form_about_project: "About Project *",
    form_message_placeholder: "Briefly describe your project...",
    form_submit: "Submit",
    form_note: "* — required fields. Your information is not shared with third parties.",
    footer_desc: "Architecture, construction and interior design studio.<br>Baku, Azerbaijan",
    footer_working_hours: "Working hours: 9:00–18:00",
    footer_copy: "© 2024 Elcan İnşaat. All rights reserved.",
    back_to_top: "↑ Up",
    modal_loc_label: "Address:",
    modal_year_label: "Year:",
    modal_order_btn: "Order Project",
    success_title: "Your Order is Received!",
    success_desc: "We will contact you as soon as possible. Thank you!",
    ok: "Done",
    page_title: "Elcan İnşaat — Architecture & Construction",
    meta_desc: "Elcan İnşaat — Architectural, construction and interior design company. Baku, Azerbaijan."
  }
};

let currentLang = 'az';

function translatePage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const dict = translations[lang];
  if (!dict) return;

  // 1. Translate page title & description
  document.title = dict.page_title;
  const metaDesc = $('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', dict.meta_desc);

  // 2. Translate standard elements with [data-translate]
  $$('[data-translate]').forEach(el => {
    const key = el.dataset.translate;
    if (dict[key]) {
      // Preserve red highlights if any
      el.innerHTML = dict[key];
    }
  });

  // 3. Translate placeholders with [data-translate-placeholder]
  $$('[data-translate-placeholder]').forEach(el => {
    const key = el.dataset.translatePlaceholder;
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });
}

// Language Click Listeners
(function () {
  const switchers = $$('.lang-sw');
  if (!switchers.length) return;
  $$('.lang').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      $$('.lang').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
      translatePage(lang);
    });
  });

  // Initialize lang on page load
  const stored = localStorage.getItem('lang') || 'az';
  $$('.lang').forEach(b => b.classList.toggle('active', b.dataset.lang === stored));
  translatePage(stored);
})();

/* ════════════════════════════════════════════════
   HEADER — sticky + scroll
   ════════════════════════════════════════════════ */
(function () {
  const header = $('#header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
})();

/* ════════════════════════════════════════════════
   MOBILE MENU
   ════════════════════════════════════════════════ */
(function () {
  const burger  = $('#burger');
  const overlay = $('#mobOverlay');
  if (!burger || !overlay) return;
  let open = false;

  function toggleMenu(state) {
    open = state ?? !open;
    overlay.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    const [s1, s2, s3] = $$('span', burger);
    if (open) {
      s1.style.cssText = 'transform:translateY(7px) rotate(45deg)';
      s2.style.cssText = 'opacity:0';
      s3.style.cssText = 'transform:translateY(-7px) rotate(-45deg)';
    } else {
      s1.style.cssText = ''; s2.style.cssText = ''; s3.style.cssText = '';
    }
  }

  burger.addEventListener('click', () => toggleMenu());

  overlay.addEventListener('click', e => {
    if (e.target === overlay) toggleMenu(false);
  });

  $$('.mob-acc').forEach(acc => {
    const btn = $('.mob-acc-btn', acc);
    btn.addEventListener('click', () => {
      const isOpen = acc.classList.contains('open');
      $$('.mob-acc').forEach(a => a.classList.remove('open'));
      if (!isOpen) acc.classList.add('open');
    });
  });

  $$('.mob-link', overlay).forEach(a => {
    a.addEventListener('click', () => toggleMenu(false));
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && open) toggleMenu(false);
  });
})();

/* ════════════════════════════════════════════════
   HERO SLIDER
   ════════════════════════════════════════════════ */
(function () {
  const slides = $$('.slide');
  const dots   = $$('.dot');
  const curEl  = $('#scCur');
  if (!slides.length) return;

  let current = 0;
  let timer;
  const INTERVAL = 5500;

  function goto(n) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
    if (curEl) curEl.textContent = String(current + 1).padStart(2, '0');
  }

  function autoplay() {
    timer = setInterval(() => goto(current + 1), INTERVAL);
  }

  function resetAutoplay() {
    clearInterval(timer);
    autoplay();
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goto(i); resetAutoplay(); });
  });

  const prev = $('#slidePrev');
  const next = $('#slideNext');
  if (prev) prev.addEventListener('click', () => { goto(current - 1); resetAutoplay(); });
  if (next) next.addEventListener('click', () => { goto(current + 1); resetAutoplay(); });

  let touchStart = 0;
  const sliderEl = $('.hero');
  if (sliderEl) {
    sliderEl.addEventListener('touchstart', e => (touchStart = e.touches[0].clientX), { passive: true });
    sliderEl.addEventListener('touchend', e => {
      const diff = touchStart - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) { goto(diff > 0 ? current + 1 : current - 1); resetAutoplay(); }
    }, { passive: true });
  }

  goto(0);
  autoplay();
})();

/* ════════════════════════════════════════════════
   PORTFOLIO FILTER
   ════════════════════════════════════════════════ */
(function () {
  const tabs  = $$('.tab');
  const cards = $$('.pcard');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.cat === filter;
        card.classList.toggle('hidden', !match);
        if (match) {
          card.style.animation = 'none';
          requestAnimationFrame(() => {
            card.style.animation = 'fadeUp .4s ease forwards';
          });
        }
      });
    });
  });

  // Handle "Bütün layihələrə bax" button click to reset filter to 'all'
  const viewAllBtn = $('#viewAllProjectsBtn');
  if (viewAllBtn) {
    viewAllBtn.addEventListener('click', e => {
      e.preventDefault();
      // Click the "Hamısı" tab
      const allTab = $('.tab[data-filter="all"]');
      if (allTab) allTab.click();
      
      // Scroll to portfolio section
      const target = $('#portfolio');
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  }
})();

/* ════════════════════════════════════════════════
   NAVIGATION LINK TRIGGER TO PORTFOLIO FILTER
   ════════════════════════════════════════════════ */
(function () {
  $$('[data-filter-trigger]').forEach(link => {
    link.addEventListener('click', e => {
      const category = link.dataset.filterTrigger;
      const target = $('#portfolio');
      if (!target) return;
      e.preventDefault();

      // Trigger the click event on the corresponding filter tab
      const filterBtn = $(`.tab[data-filter="${category}"]`);
      if (filterBtn) {
        filterBtn.click();
      }

      // Smooth scroll to portfolio
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ════════════════════════════════════════════════
   COUNTER ANIMATION
   ════════════════════════════════════════════════ */
function animateCount(el, target, duration = 1600) {
  if (el._counted) return;
  el._counted = true;
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    el.textContent = Math.round(easeOut(p) * target);
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// About section facts
(function () {
  const facts = $$('.fact-n');
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    facts.forEach(el => animateCount(el, +el.dataset.count));
    io.disconnect();
  }, { threshold: 0.4 });
  const about = $('.about');
  if (about) io.observe(about);
})();

// Numbers section
(function () {
  const section = $('.numbers');
  if (!section) return;
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    $$('.nc', section).forEach(el => animateCount(el, +el.dataset.count));
    io.disconnect();
  }, { threshold: 0.3 });
  io.observe(section);
})();

/* ════════════════════════════════════════════════
   SCROLL REVEAL
   ════════════════════════════════════════════════ */
(function () {
  const selectors = [
    '.svc-card', '.pcard', '.pstep', '.nitem',
    '.about-content', '.about-img',
    '.testi-img', '.testi-content',
    '.contact-left', '.contact-right',
    '.section-top', '.pillar'
  ];

  selectors.forEach(sel => {
    $$(sel).forEach((el, i) => {
      el.classList.add('js-fade');
      el.style.setProperty('--d', `${Math.min(i * 0.08, 0.3)}s`);
    });
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  $$('.js-fade').forEach(el => io.observe(el));
})();

/* ════════════════════════════════════════════════
   SMOOTH ANCHOR SCROLL
   ════════════════════════════════════════════════ */
$$('a[href^="#"]').forEach(a => {
  if (a.hasAttribute('data-filter-trigger') || a.id === 'viewAllProjectsBtn') return; // handled separately
  a.addEventListener('click', e => {
    const target = $(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ════════════════════════════════════════════════
   BACK TO TOP
   ════════════════════════════════════════════════ */
const backTop = $('#backTop');
if (backTop) backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ════════════════════════════════════════════════
   WHATSAPP FAB — show after scroll
   ════════════════════════════════════════════════ */
(function () {
  const fab = $('.wa-fab');
  if (!fab) return;
  window.addEventListener('scroll', () => {
    fab.classList.toggle('show', window.scrollY > window.innerHeight * 0.5);
  }, { passive: true });
})();

/* ════════════════════════════════════════════════
   PORTFOLIO DETAILS MODAL
   ════════════════════════════════════════════════ */
const projectData = {
  casa_azur: {
    title: "Casa Azur",
    catKey: "nav_arch",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1000&q=90",
    loc: { az: "Bakı, Azərbaycan", ru: "Баку, Азербайджан", en: "Baku, Azerbaijan" },
    year: "2024",
    cat: "arch",
    desc: {
      az: "Casa Azur modern arxitektura üslubunda layihələndirilmiş, dəniz kənarında yerləşən lüks fərdi yaşayış rezidensiyasıdır. Geniş şüşə panellər və təbii daş örtüklər layihənin əsas vizual xüsusiyyətləridir. Günəş şüalarının maksimum səviyyədə daxil olması və dəniz mənzərəsinin tam görünməsi üçün panoram pəncərələr tətbiq edilmişdir.",
      ru: "Casa Azur — роскошная частная жилая резиденция на берегу моря, спроектированная в современном архитектурном стиле. Панорамное остекление и облицовка натуральным камнем являются ключевыми визуальными особенностями проекта. Окна спроектированы так, чтобы впускать максимум естественного света.",
      en: "Casa Azur is a luxury private residential villa located on the seaside, designed in a modern architectural style. Expansive glass panels and natural stone cladding are key design elements. Panoramic window setups were designed to maximize natural light and ensure wide ocean views."
    }
  },
  meridian_penthouse: {
    title: "Meridian Penthouse",
    catKey: "nav_interior",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=90",
    loc: { az: "Bakı, Azərbaycan", ru: "Баку, Азербайджан", en: "Baku, Azerbaijan" },
    year: "2024",
    cat: "interior",
    desc: {
      az: "Meridian Penthouse yüksək mərtəbəli binada yerləşən, minimalist və lüks interyer dizaynına malik geniş mənzildir. Xüsusi işıqlandırma sistemləri, inteqrasiya edilmiş ağıllı ev elementləri və İtalyan mebelləri bu məkana son dərəcə zərif və modern bir ab-hava qazandırır.",
      ru: "Meridian Penthouse — просторные апартаменты в высотном здании с минималистичным и роскошным дизайном интерьера. Специальные системы освещения, интегрированные элементы умного дома и итальянская мебель придают этому пространству исключительно элегантный вид.",
      en: "Meridian Penthouse is a spacious apartment in a high-rise building featuring a minimalist and luxurious interior design. Custom lighting installations, smart-home automation systems, and Italian designer furniture give the space an exceptionally elegant and contemporary feel."
    }
  },
  villa_travertine: {
    title: "Villa Travertine",
    catKey: "nav_arch",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000&q=90",
    loc: { az: "Gəncə, Azərbaycan", ru: "Гянджа, Азербайджан", en: "Ganja, Azerbaijan" },
    year: "2024",
    cat: "arch",
    desc: {
      az: "Travertin daşı ilə tam üzlənmiş bu möhtəşəm fərdi villa klassik və modern memarlığın sintezini təqdim edir. Həyətyanı sahəsində yerləşən geniş açıq hovuz, landşaft dizaynı və istirahət pavilyonu layihəni mükəmməl şəkildə tamamlayır.",
      ru: "Эта великолепная вилла, полностью облицованная травертином, представляет собой синтез классической и современной архитектуры. Просторный открытый бассейн во дворе, профессиональный ландшафтный дизайн дополняют этот великолепный проект.",
      en: "Fully clad in natural travertine stone, this magnificent private villa presents a synthesis of classical and modern architectural values. A large open pool in the yard, professional landscaping, and custom outdoor pavilions complete this premium design."
    }
  },
  stone_house: {
    title: "Stone House",
    catKey: "nav_interior",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1000&q=90",
    loc: { az: "Şəki, Azərbaycan", ru: "Шеки, Азербайджан", en: "Sheki, Azerbaijan" },
    year: "2023",
    cat: "interior",
    desc: {
      az: "Stone House layihəsində təbii daş və taxta materialların harmoniyası ön plana çıxarılmışdır. Rustik elementlərlə zənginləşdirilmiş bu ev Şəkinin tarixi ab-havasına və zəngin təbiətinə tam uyğun olaraq isti və qonaqpərvər üslubda dizayn edilmişdir.",
      ru: "В проекте Stone House ключевое значение имеет гармония натурального камня и дерева. Этот дом, обогащенный рустик-элементами, спроектирован в теплом и уютном стиле, соответствующем исторической атмосфере и богатой природе Шеки.",
      en: "In the Stone House project, the harmony of natural stone and wood materials takes center stage. Enriched with rustic elements, this house is designed in a warm, welcoming style that perfectly matches Sheki's historical heritage and rich nature."
    }
  },
  compound_sumqayit: {
    title: "Compound Sumqayıt",
    catKey: "nav_construction",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=90",
    loc: { az: "Sumqayıt, Azərbaycan", ru: "Сумгаит, Азербайджан", en: "Sumqayit, Azerbaijan" },
    year: "2023",
    cat: "construction",
    desc: {
      az: "Sumqayıt şəhərində yerləşən bu modern yaşayış kompleksi yüksək keyfiyyətli materiallar və davamlı dəmir-beton monolit konstruksiya ilə inşa edilmişdir. Kompleks sakinlərin rahatlığı üçün geniş yaşıl zonalar, yeraltı parkinq və müasir uşaq meydançaları ilə təchiz olunub.",
      ru: "Этот современный жилой комплекс в Сумгаите построен из высококачественных материалов с прочным железобетонным монолитным каркасом. Комплекс оборудован большими зелеными зонами, подземным паркингом и детскими площадками.",
      en: "This modern residential compound in Sumqayit was constructed using high-quality materials and a durable reinforced concrete monolithic structure. The compound features spacious green zones, underground parking, and modern playgrounds."
    }
  },
  tower_office: {
    title: "Tower Office",
    catKey: "nav_arch",
    img: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=1000&q=90",
    loc: { az: "Bakı, Azərbaycan", ru: "Баку, Азербайджан", en: "Baku, Azerbaijan" },
    year: "2023",
    cat: "arch",
    desc: {
      az: "Tower Office biznes mərkəzi modern eksteryer dizaynı, şüşə fasadı və enerjiyə qənaət edən ağıllı bina idarəetmə sistemləri ilə Bakının işgüzar mərkəzində fərqlənir. Yüksək səviyyəli seysmik davamlılıq və beynəlxalq standartlara uyğun havalandırma sistemi quraşdırılıb.",
      ru: "Бизнес-центр Tower Office выделяется в деловом центре Баку современным дизайном, стеклянным фасадом и энергосберегающими системами управления. Здание построено с высокой сейсмостойкостью и международными стандартами вентиляции.",
      en: "The Tower Office business center stands out in Baku's commercial hub with its modern exterior design, premium glass facade, and energy-efficient building management systems. It is constructed to meet top-tier seismic resistance standards."
    }
  }
};

(function () {
  const modal = $('#portfolioModal');
  const closeBtn = $('#modalClose');
  const orderBtn = $('#modalOrderBtn');
  if (!modal || !closeBtn) return;

  const mImg = $('#modalImg');
  const mCat = $('#modalCat');
  const mTitle = $('#modalTitle');
  const mLoc = $('#modalLoc');
  const mYear = $('#modalYear');
  const mDesc = $('#modalDesc');

  let activeProject = null;

  function openModal(projId) {
    const data = projectData[projId];
    if (!data) return;
    activeProject = projId;

    mImg.src = data.img;
    mTitle.textContent = data.title;
    mYear.textContent = data.year;

    // Set language translations in modal
    const dict = translations[currentLang] || translations.az;
    mCat.textContent = dict[data.catKey] || data.cat;
    mLoc.textContent = data.loc[currentLang] || data.loc.az;
    mDesc.textContent = data.desc[currentLang] || data.desc.az;

    // Open animations
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    activeProject = null;
  }

  // Bind portfolio card clicks
  $$('.pcard').forEach(card => {
    card.addEventListener('click', e => {
      const projId = card.dataset.projectId;
      if (projId) {
        e.preventDefault();
        openModal(projId);
      }
    });
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  // Esc key closes modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  // Modal Order Button integration
  if (orderBtn) {
    orderBtn.addEventListener('click', () => {
      closeModal();
      
      const selectType = $('#ftype');
      if (selectType && activeProject) {
        const proj = projectData[activeProject];
        // Auto-select type
        if (proj.cat === 'arch') {
          selectType.value = selectType.options[1].value; // Villa
        } else if (proj.cat === 'interior') {
          selectType.value = selectType.options[3].value; // Interior design
        } else if (proj.cat === 'construction') {
          selectType.value = selectType.options[2].value; // Commercial building
        }
      }

      // Smooth scroll to contact
      const contactSec = $('#contact');
      if (contactSec) {
        const top = contactSec.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  }

  // Update modal text when language changes dynamically
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('lang') && activeProject) {
      setTimeout(() => {
        const data = projectData[activeProject];
        if (data) {
          const dict = translations[currentLang] || translations.az;
          mCat.textContent = dict[data.catKey] || data.cat;
          mLoc.textContent = data.loc[currentLang] || data.loc.az;
          mDesc.textContent = data.desc[currentLang] || data.desc.az;
        }
      }, 50);
    }
  });
})();

/* ════════════════════════════════════════════════
   REVIEWS MODAL
   ════════════════════════════════════════════════ */
(function () {
  const modal = $('#reviewsModal');
  const openBtn = $('#showAllReviewsBtn');
  const closeBtn = $('#reviewsClose');
  if (!modal || !openBtn || !closeBtn) return;

  function openReviews(e) {
    if (e) e.preventDefault();
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeReviews() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openReviews);
  closeBtn.addEventListener('click', closeReviews);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeReviews();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeReviews();
  });
})();

/* ════════════════════════════════════════════════
   ABOUT COMPANY MODAL
   ════════════════════════════════════════════════ */
(function () {
  const modal = $('#aboutCompanyModal');
  const closeBtn = $('#aboutCompanyClose');
  if (!modal || !closeBtn) return;

  function openAboutModal(activeTabName = 'profile') {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    switchTab(activeTabName);
  }

  function closeAboutModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function switchTab(tabName) {
    $$('.about-tab', modal).forEach(btn => {
      btn.classList.toggle('active', btn.dataset.aboutTab === tabName);
    });
    $$('.about-tab-content', modal).forEach(content => {
      content.classList.toggle('active', content.id === `about-tab-${tabName}`);
    });
  }

  $$('.about-tab', modal).forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.aboutTab);
    });
  });

  const moreBtn = $('#aboutMoreBtn');
  if (moreBtn) {
    moreBtn.addEventListener('click', e => {
      e.preventDefault();
      openAboutModal('profile');
    });
  }
  const targetMap = {
    '#about': 'profile',
    '#partners': 'partners'
  };

  $$('.dropdown-link').forEach(link => {
    const href = link.getAttribute('href');
    if (targetMap[href]) {
      link.addEventListener('click', e => {
        e.preventDefault();
        openAboutModal(targetMap[href]);
      });
    }
  });

  $$('.mob-acc-body .mob-link').forEach(link => {
    const href = link.getAttribute('href');
    if (targetMap[href]) {
      link.addEventListener('click', e => {
        e.preventDefault();
        openAboutModal(targetMap[href]);
      });
    }
  });

  closeBtn.addEventListener('click', closeAboutModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeAboutModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeAboutModal();
  });
})();

/* ════════════════════════════════════════════════
   CONTACT FORM & SUCCESS MODAL
   ════════════════════════════════════════════════ */
(function () {
  const form = $('#contactForm');
  const btn  = $('#submitBtn');
  const txt  = $('#submitTxt');
  const successModal = $('#successModal');
  const successClose = $('#successClose');
  const successOkBtn = $('#successOkBtn');

  if (!form || !successModal) return;

  function openSuccess() {
    successModal.classList.add('open');
    successModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeSuccess() {
    successModal.classList.remove('open');
    successModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }

    const phoneInput = $('#fphone');
    const phoneVal = phoneInput ? phoneInput.value.trim() : '';

    // Validate phone number has at least 7 digits
    const cleanPhone = phoneVal.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 7) {
      alert(currentLang === 'az' ? 'Zəhmət olmasa düzgün telefon nömrəsi daxil edin.' : (currentLang === 'ru' ? 'Пожалуйста, введите корректный номер телефона.' : 'Please enter a valid phone number.'));
      return;
    }

    const dict = translations[currentLang] || translations.az;
    txt.textContent = currentLang === 'az' ? 'Göndərilir...' : (currentLang === 'ru' ? 'Отправка...' : 'Sending...');
    btn.disabled = true;
    btn.style.opacity = '.75';

    // Submit form via FormSubmit.co AJAX
    fetch("https://formsubmit.co/ajax/elcancbrayilli2@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        Ad: $('#fname').value.trim(),
        Telefon: phoneVal,
        Email: $('#femail').value.trim(),
        Layihə_Növü: $('#ftype').value,
        Mesaj: $('#fmsg').value.trim()
      })
    })
    .then(response => response.json())
    .then(data => {
      txt.textContent = dict.form_submit || 'Göndər';
      btn.disabled = false;
      btn.style.opacity = '';
      form.reset();
      openSuccess();
    })
    .catch(error => {
      console.error('Error:', error);
      alert(currentLang === 'az' ? 'Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.' : (currentLang === 'ru' ? 'Произошла ошибка. Пожалуйста, попробуйте еще раз.' : 'An error occurred. Please try again.'));
      txt.textContent = dict.form_submit || 'Göndər';
      btn.disabled = false;
      btn.style.opacity = '';
    });
  });

  if (successClose) successClose.addEventListener('click', closeSuccess);
  if (successOkBtn) successOkBtn.addEventListener('click', closeSuccess);

  successModal.addEventListener('click', e => {
    if (e.target === successModal) closeSuccess();
  });
})();

/* ════════════════════════════════════════════════
   CSS ANIMATIONS INJECTION
   ════════════════════════════════════════════════ */
const styleEl = document.createElement('style');
styleEl.textContent = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(styleEl);
