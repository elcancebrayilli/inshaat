/* ═══════════════════════════════════════════════
   INSHAAT v4 — Clean Commercial Site JS
   ═══════════════════════════════════════════════ */
'use strict';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const easeOut = t => 1 - Math.pow(1 - t, 4);

/* ════════════════════════════════════════════════
   DARK MODE CONTROLLER
   ════════════════════════════════════════════════ */
(function () {
  const toggles = $$('.theme-toggle');
  if (!toggles.length) return;

  function updateThemeBadges() {
    const isDark = document.documentElement.classList.contains('dark-theme');
    const dict = translations[currentLang] || translations.az;
    $$('.mob-theme-badge').forEach(badge => {
      badge.textContent = isDark 
        ? (dict.mob_theme_light || 'İşıqlı') 
        : (dict.mob_theme_dark || 'Qaranlıq');
    });
  }

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeBadges();
    });
  });

  window.updateThemeBadgeText = updateThemeBadges;
  setTimeout(updateThemeBadges, 50);
})();

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
    project_baku_bay_info: "Lüks Rezidensiya · Ağ Şəhər, Bakı · 2024",
    project_skyline_loft_info: "Müasir Loft · Port Baku · 2024",
    project_caspian_panorama_info: "Fərdi Villa & Hovuz · Mərdəkan · 2024",
    project_sea_breeze_info: "Dəniz Kənarı Penthaus · Nardaran · 2023",
    project_green_garden_info: "Eko-Rezidensiya · Qəbələ · 2023",
    project_emerald_plaza_info: "Biznes & Ofis Mərkəzi · Gəncə · 2023",
    btn_all_projects_view: "Bütün layihələrə bax",
    btn_show_less: "Daha az göstər",
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
    meta_desc: "Elcan İnşaat — Arxitektura, tikinti və interyer dizaynı şirkəti. Bakı, Azərbaycan.",
    nav_calculator: "Kalkulyator",
    nav_warranty: "Zəmanət",
    nav_faq: "FAQ",
    nav_blog: "Bloq və Məqalələr",
    nav_locations: "Layihə Coğrafiyası",
    calc_badge: "Büdcə Planlaşdırması",
    calc_title: "İnteraktiv Tikinti & Təmir Kalkulyatoru",
    calc_subtitle: "Sahəni, xidmət növünü və paketi seçərək layihənizin ilkin büdcəsini dərhal hesablayın.",
    calc_area_label: "Obyektin sahəsi (m²)",
    calc_service_label: "Xidmət növü",
    srv_turnkey_title: "Açar təslimi tikinti",
    srv_renovation_title: "Əsaslı təmir",
    srv_arch_title: "Memarlıq & Layihə",
    srv_interior_title: "İnteryer dizayn",
    calc_package_label: "Material və İşçilik Paketi",
    pkg_standard: "Standart",
    pkg_premium: "Premium",
    pkg_luxury: "Lüks (VIP)",
    calc_est_total: "Təxmini Layihə Dəyəri",
    calc_est_time: "Təxmini icra müddəti:",
    calc_feat1: "Rəsmi müqavilə və zəmanət",
    calc_feat2: "Materiallara 100% keyfiyyət nəzarəti",
    calc_feat3: "Mərhələli video & foto hesabat",
    calc_btn_order: "Bu Hesablamanı Sifariş Et",
    calc_btn_wa: "WhatsApp ilə göndər",
    locations_badge: "Fəaliyyət Coğrafiyamız",
    locations_title: "Azərbaycanın Müxtəlif Şəhərlərində Layihələrimiz",
    locations_subtitle: "Paytaxt Bakı ilə yanaşı, regionlarda da fərdi villalar, kommersiya və turizm obyektləri inşa edirik.",
    city_baku: "Bakı & Abşeron",
    city_baku_stats: "85+ Tamamlanmış Layihə",
    city_ganja: "Gəncə",
    city_ganja_stats: "22+ Tamamlanmış Layihə",
    city_sheki: "Şəki & Qəbələ",
    city_sheki_stats: "18+ Tamamlanmış Layihə",
    city_sumqayit: "Sumqayıt",
    city_sumqayit_stats: "15+ Tamamlanmış Layihə",
    warranty_badge: "Təhlükəsizlik və Etibarlılıq",
    warranty_title: "Rəsmi Lisenziyalar və Zəmanət Öhdəliklərimiz",
    warranty_subtitle: "Bütün inşaat işlərimiz dövlət lisenziyası və beynəlxalq standartlara tam uyğun olaraq həyata keçirilir.",
    war1_title: "25 İllik Monolit Zəmanəti",
    war1_desc: "Dəmir-beton və karkas monolit konstruksiyalara rəsmi müqavilə əsasında 25 illik zəlzələ və çökməyə qarşı davamlılıq zəmanəti verilir.",
    war2_title: "Dövlət Tikinti Lisenziyası",
    war2_desc: "Fövqəladə Hallar Nazirliyi və Dövlət Şəhərsalma Komitəsinin rəsmi lisenziyaları əsasında 1-ci dərəcəli məsuliyyətli binaların inşası hüququ.",
    war3_title: "5 İllik Fasad & Təmir Zəmanəti",
    war3_desc: "İstifadə olunan fasad örtüklərinə, izolyasiya sistemlərinə və daxili mühəndislik-kommunikasiya xətlərinə tam 5 illik texniki servis zəmanəti.",
    faq_badge: "Suallar və Cavablar",
    faq_title: "Tez-tez Verilən Suallar",
    faq_subtitle: "Tikinti və memarlıq xidmətlərimizlə bağlı müştərilərimizin ən çox maraqlandığı sualların cavabları.",
    faq_q1: "Tikintiyə icazə sənədlərinin alınmasında köməklik göstərirsinizmi?",
    faq_a1: "Bəli, memarlıq layihəsinin hazırlanmasından tutmuş, Dövlət Şəhərsalma və Arxitektura Komitəsindən və müvafiq icra hakimiyyəti orqanlarından tikintiyə icazənin (çıxarış/sərəncam) rəsmi qaydada alınmasına qədər bütün sənədləşmə prosesini həyata keçiririk.",
    faq_q2: "Tikinti zamanı ödəniş mərhələləri necə bölünür?",
    faq_a2: "Ödənişlər birbaşa iş qrafikinə uyğun olaraq mərhələlərə bölünür: İlkin ödəniş (təməl işləri), monolit karkasın tamamlanması, hörgü və fasad, və yekun daxili təmir təhvili. Hər mərhələ video və foto aktla təsdiqləndikdən sonra növbəti mərhələnin ödənişi edilir.",
    faq_q3: "Tikinti materiallarının keyfiyyətinə necə nəzarət olunur?",
    faq_a3: "İnşaat prosesində yalnız beynəlxalq və dövlət standartlarına (AZS/İSO) uyğun sertifikatlaşdırılmış brendlərin (Knauf, Mapei, Sika, BASF, Reynaers) materiallarından istifadə olunur. Betonun möhkəmliyi hər tökümdə laboratoriya testindən keçirilir.",
    faq_q4: "Eskiz və 3D vizualizasiya layihəsi nə qədər vaxta hazırlanır?",
    faq_a4: "Obyektin ölçüsündən asılı olaraq ilkin memarlıq konsepti və planlaşdırma 7-10 iş günü, fotorealistik 3D eksteryer və interyer vizualizasiyaları isə 15-25 iş günü ərzində tam hazır şəkildə təqdim olunur.",
    faq_q5: "Müqavilə və rəsmi zəmanət şərtləri necədir?",
    faq_a5: "İşlərə başlamazdan əvvəl tərəflər arasında hüquqi qüvvəyə malik rəsmi müqavilə və smeta təsdiq olunur. Konstruktiv hissəyə 25 il, təmir-bəzək və mühəndislik sistemlərinə isə 5 il rəsmi yazılı zəmanət verilir.",
    blog_badge: "Bloq & Faydalı Məqalələr",
    blog_title: "Memarlıq və İnşaat Məsləhətləri",
    blog_subtitle: "Ev tikintisi, interyer dizaynı və düzgün material seçimi haqqında ekspert yazıları.",
    blog_tag_construct: "Tikinti",
    blog_tag_arch: "Arxitektura",
    blog_tag_manage: "İdarəetmə",
    btn_read_more: "Davamını oxu",
    blog1_title: "Müasir Villalarda Düzgün Təməl və Monolit Seçimi",
    blog1_desc: "Geoloji kəşfiyyatın əhəmiyyəti, torpaq xüsusiyyətlərinə uyğun monolit plitə və lentvari təməl seçimlərinin incəlikləri.",
    blog2_title: "2025-ci İlin Memarlıq və Premium Fasad Trendləri",
    blog2_desc: "Təbii travertin daşı, panoramik şüşələnmə və enerjiyə qənaət edən ventilyasiyalı fasad sistemlərinin harmoniyası.",
    blog3_title: "Açar Təslimi Tikintidə Büdcəyə Qənaət Yolları",
    blog3_desc: "Keyfiyyətdən güzəştə getmədən layihə mərhələsində düzgün planlaşdırma ilə xərclərin 20%-ə qədər azaldılması yolları.",
    mob_lang_label: "Dil seçimi / Language:",
    mob_theme_label: "Qaranlıq Rejim",
    mob_theme_dark: "Qaranlıq",
    mob_theme_light: "İşıqlı",
    mob_theme_action: "Dəyiş"
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
    nav_photos: "Фото галерея",
    nav_video: "Видео",
    nav_contact: "Контакты",
    slide1_tag: "Архитектурная студия · Баку, Азербайджан",
    slide1_title: "Вы мечтаете —<br>мы воплощаем<br><span class=\"red\">в реальность</span>",
    slide1_sub: "Мы всегда к вашим услугам с нашим профессиональным опытом. Вы мечтаете, мы строим.",
    btn_about_company: "О компании",
    slide2_tag: "Дизайн интерьера · 18 лет опыта",
    slide2_title: "Успешно реализовано<br>более 140<br><span class=\"red\">проектов</span>",
    slide2_sub: "Внимание к каждому проекту, профессиональный подход и качественные материалы.",
    btn_view_portfolio: "Посмотреть портфолио",
    slide3_tag: "Строительство · Полный цикл услуг",
    slide3_title: "От первого эскиза<br>до сдачи<br><span class=\"red\">ключей</span>",
    slide3_sub: "Архитектура, дизайн и строительство — все под одной крышей. Удобное решение для вас.",
    btn_submit_request: "Оставить заявку",
    services_title: "Что мы предлагаем?",
    filter_all: "Все",
    srv_arch_desc: "От концепции до завершения строительства — профессиональное проектирование зданий.",
    btn_details: "Подробнее",
    srv_interior_desc: "Интерьеры, в которых дышится легко. Материалы, свет, эксклюзивная мебель.",
    srv_construction_desc: "Полное управление строительством — контроль материалов, соблюдение сроков.",
    srv_landscape_desc: "Окружение здания имеет значение. Проектирование сада и ландшафта в гармонии с природой.",
    experience_years: "Лет опыта",
    about_title: "Качество и профессиональный подход",
    about_text1: "ELCAN INSHAAT — архитектурная студия в Баку. Мы предоставляем комплексные услуги по архитектуре, строительству и дизайну интерьера.",
    about_text2: "Мы работаем с ограниченным числом клиентов одновременно, что позволяет уделять максимум внимания каждому проекту.",
    projects_label: "Проекты",
    awards_label: "Награды",
    btn_about_company_more: "Подробнее о компании",
    portfolio_title: "Последние проекты",
    project_casa_azur_info: "Частная резиденция · Баку · 2024",
    project_meridian_info: "Элитные апартаменты · Баку · 2024",
    project_travertine_info: "Частная вилла · Гянджа · 2024",
    project_stone_house_info: "Частный дом · Шеки · 2023",
    project_compound_info: "Жилой комплекс · Сумгаит · 2023",
    project_tower_office_info: "Бизнес-центр · Баку · 2023",
    project_baku_bay_info: "Люкс Резиденция · Белый Город, Баку · 2024",
    project_skyline_loft_info: "Современный Лофт · Port Baku · 2024",
    project_caspian_panorama_info: "Частная Вилла · Мардакян · 2024",
    project_sea_breeze_info: "Пентхаус у Моря · Нардаран · 2023",
    project_green_garden_info: "Эко-Резиденция · Габала · 2023",
    project_emerald_plaza_info: "Бизнес Центр · Гянджа · 2023",
    btn_all_projects_view: "Смотреть все проекты",
    btn_show_less: "Показать меньше",
    num_completed: "Завершенные проекты",
    num_awards: "Архитектурные награды",
    num_cities: "Городов работы",
    process_label: "Рабочий процесс",
    process_title: "Как мы работаем?",
    step1_title: "Консультация",
    step1_desc: "Понимание ваших потребностей. Обсуждаем ваши пожелания, бюджет и сроки.",
    step2_title: "Проектирование",
    step2_desc: "Сильная архитектурная идея разрабатывается через эскизы, модели и материалы.",
    step3_title: "Строительство",
    step3_desc: "Проект реализуется под полным контролем. Качество и сроки строго соблюдаются.",
    step4_title: "Сдача объекта",
    step4_desc: "Мы с вами до передачи ключей. Готовая работа полностью соответствует проекту.",
    testi_quote: "\"Работа с ELCAN INSHAAT была невероятным опытом. Они поняли не только то, что мы хотели визуально, но и как мы хотели жить — и воплотили эти мечты в реальность.\"",
    testi_cite: "Casa Azur, Баку · 2024",
    testi_all_reviews: "Все отзывы",
    review2_text: "Обратились за дизайном интерьера дома. Работу сдали вовремя и профессионально. Выбор материалов и освещение великолепны.",
    review2_cite: "Meridian Penthouse, Баку · 2024",
    review3_text: "Монолитно-бетонные работы и строительство велись строго по проекту. На каждом этапе предоставляли отчеты. Спасибо за качество!",
    review3_cite: "Compound Сумгаит · 2023",
    review4_text: "Ландшафтный дизайн нашего сада получился великолепным. Гармония виллы с природой идеальна.",
    review4_cite: "Villa Travertine, Гянджа · 2024",
    about_mission_title: "Наша миссия",
    about_mission_desc: "Превращать жилые и коммерческие пространства клиентов в реальность по высшим стандартам качества.",
    about_history_title: "Наша история",
    about_history_desc: "Как ELCAN INSHAAT, с более чем 18-летним опытом, мы успешно завершили более 140 проектов в Азербайджане и за рубежом.",
    role_founder: "Основатель и Главный архитектор",
    role_designer: "Ведущий дизайнер интерьера",
    role_engineer: "Главный инженер",
    award1_title: "Архитектурная компания года",
    award1_desc: "Премия архитектуры и строительства Азербайджана",
    award2_title: "Лучший проект жилого комплекса",
    award2_desc: "Baku Architectural Expo 2021",
    award3_title: "Профессионализм в дизайне интерьера",
    award3_desc: "Диплом Международной Ассоциации Дизайна",
    contact_title: "Начнем<br><span class=\"red\">ваш проект!</span>",
    contact_sub: "Мы принимаем ограниченное количество проектов в год. Если у вас есть идеи — мы готовы выслушать.",
    contact_phone_label: "Телефон",
    contact_address_label: "Адрес",
    contact_address_val: "Баку, Азербайджан",
    form_name: "Ваше имя *",
    form_name_placeholder: "Полное имя",
    form_phone: "Телефон *",
    form_phone_placeholder: "+994 __ ___ __ __",
    form_email: "Email",
    form_email_placeholder: "email@example.com",
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
    footer_desc: "Студия архитектуры, строительства и дизайна интерьеров.<br>Баку, Азербайджан",
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
    meta_desc: "Elcan İnşaat — Компания по архитектуре, строительству и дизайну интерьеров. Баку, Азербайджан.",
    nav_calculator: "Калькулятор",
    nav_warranty: "Гарантия",
    nav_faq: "FAQ",
    nav_blog: "Блог и Статьи",
    nav_locations: "География Проектов",
    calc_badge: "Планирование Бюджета",
    calc_title: "Интерактивный Калькулятор Строительства",
    calc_subtitle: "Рассчитайте предварительный бюджет, выбрав площадь, тип услуги и пакет материалов.",
    calc_area_label: "Площадь объекта (м²)",
    calc_service_label: "Тип услуги",
    srv_turnkey_title: "Строительство под ключ",
    srv_renovation_title: "Капитальный ремонт",
    srv_arch_title: "Архитектура и Проект",
    srv_interior_title: "Дизайн интерьера",
    calc_package_label: "Пакет материалов и работ",
    pkg_standard: "Стандарт",
    pkg_premium: "Премиум",
    pkg_luxury: "Люкс (VIP)",
    calc_est_total: "Ориентировочная стоимость",
    calc_est_time: "Ориентировочный срок:",
    calc_feat1: "Официальный договор и гарантия",
    calc_feat2: "100% контроль качества материалов",
    calc_feat3: "Поэтапный фото и видео отчет",
    calc_btn_order: "Заказать этот расчет",
    calc_btn_wa: "Отправить в WhatsApp",
    locations_badge: "География Деятельности",
    locations_title: "Наши Проекты в Разных Городах",
    locations_subtitle: "Помимо Баку, мы строим частные виллы и коммерческие объекты в регионах.",
    city_baku: "Баку и Апшерон",
    city_baku_stats: "85+ Завершенных Проектов",
    city_ganja: "Гянджа",
    city_ganja_stats: "22+ Завершенных Проектов",
    city_sheki: "Шеки и Габала",
    city_sheki_stats: "18+ Завершенных Проектов",
    city_sumqayit: "Сумгаит",
    city_sumqayit_stats: "15+ Завершенных Проектов",
    warranty_badge: "Безопасность и Надежность",
    warranty_title: "Официальные Лицензии и Гарантия",
    warranty_subtitle: "Все строительные работы ведутся по государственной лицензии и международным стандартам.",
    war1_title: "25 Лет Гарантии на Монолит",
    war1_desc: "На железобетонные монолитные конструкции по договору предоставляется гарантия 25 лет.",
    war2_title: "Государственная Лицензия",
    war2_desc: "Право на строительство зданий 1-й категории ответственности на основе государственных лицензий.",
    war3_title: "5 Лет Гарантии на Фасад и Ремонт",
    war3_desc: "Полная 5-летняя сервисная гарантия на фасадные покрытия, изоляцию и инженерные коммуникации.",
    faq_badge: "Вопросы и Ответы",
    faq_title: "Часто Задаваемые Вопросы",
    faq_subtitle: "Ответы на самые популярные вопросы о строительстве и архитектуре.",
    faq_q1: "Помогаете ли вы в получении разрешений на строительство?",
    faq_a1: "Да, мы осуществляем весь процесс согласования от разработки проекта до получения официального разрешения.",
    faq_q2: "Как разделяются этапы оплаты при строительстве?",
    faq_a2: "Оплата делится на этапы: фундамент, монолитный каркас, кладка и фасад, внутренняя отделка.",
    faq_q3: "Как контролируется качество строительных материалов?",
    faq_a3: "Мы используем только сертифицированные бренды (Knauf, Mapei, Sika, BASF). Бетон тестируется в лаборатории.",
    faq_q4: "Сколько времени занимает разработка 3D проекта?",
    faq_a4: "Эскизный концепт занимает 7-10 дней, полная 3D визуализация экстерьера и интерьера — 15-25 рабочих дней.",
    faq_q5: "Каковы условия официального договора и гарантии?",
    faq_a5: "Заключается официальный договор со сметой: 25 лет гарантии на конструктив, 5 лет на отделку и коммуникации.",
    blog_badge: "Блог и Статьи",
    blog_title: "Архитектурные и Строительные Советы",
    blog_subtitle: "Экспертные статьи о строительстве домов, дизайне и выборе материалов.",
    blog_tag_construct: "Строительство",
    blog_tag_arch: "Архитектура",
    blog_tag_manage: "Управление",
    btn_read_more: "Читать далее",
    blog1_title: "Правильный Выбор Фундамента и Монолита",
    blog1_desc: "Значение геологических изысканий и тонкости выбора плитного или ленточного фундамента.",
    blog2_title: "Архитектурные и Фасадные Тренды 2025 Года",
    blog2_desc: "Натуральный травертин, панорамное остекление и вентилируемые фасадные системы.",
    blog3_title: "Способы Экономии Бюджета при Строительстве под Ключ",
    blog3_desc: "Как сэкономить до 20% бюджета за счет грамотного проектирования без потери качества.",
    mob_lang_label: "Выбор языка / Language:",
    mob_theme_label: "Темная тема",
    mob_theme_dark: "Темная",
    mob_theme_light: "Светлая",
    mob_theme_action: "Сменить"
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
    project_baku_bay_info: "Luxury Residence · White City, Baku · 2024",
    project_skyline_loft_info: "Modern Loft · Port Baku · 2024",
    project_caspian_panorama_info: "Private Villa · Mardakan · 2024",
    project_sea_breeze_info: "Seaside Penthouse · Nardaran · 2023",
    project_green_garden_info: "Eco-Residence · Gabala · 2023",
    project_emerald_plaza_info: "Business Center · Ganja · 2023",
    btn_all_projects_view: "View all projects",
    btn_show_less: "Show less",
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
    meta_desc: "Elcan İnşaat — Architectural, construction and interior design company. Baku, Azerbaijan.",
    nav_calculator: "Calculator",
    nav_warranty: "Warranty",
    nav_faq: "FAQ",
    nav_blog: "Blog & Articles",
    nav_locations: "Project Geography",
    calc_badge: "Budget Planning",
    calc_title: "Interactive Construction & Renovation Calculator",
    calc_subtitle: "Calculate your preliminary project budget by selecting area, service type, and quality package.",
    calc_area_label: "Object Area (sq.m)",
    calc_service_label: "Service Type",
    srv_turnkey_title: "Turnkey Construction",
    srv_renovation_title: "Full Renovation",
    srv_arch_title: "Architecture & Planning",
    srv_interior_title: "Interior Design",
    calc_package_label: "Materials & Workmanship Package",
    pkg_standard: "Standard",
    pkg_premium: "Premium",
    pkg_luxury: "Luxury (VIP)",
    calc_est_total: "Estimated Project Cost",
    calc_est_time: "Estimated Timeline:",
    calc_feat1: "Official contract and warranty",
    calc_feat2: "100% material quality control",
    calc_feat3: "Step-by-step video & photo reporting",
    calc_btn_order: "Order with this Estimate",
    calc_btn_wa: "Send via WhatsApp",
    locations_badge: "Our Activity Geography",
    locations_title: "Our Projects Across Azerbaijan",
    locations_subtitle: "Along with Baku, we construct private villas and commercial properties in regions.",
    city_baku: "Baku & Absheron",
    city_baku_stats: "85+ Completed Projects",
    city_ganja: "Ganja",
    city_ganja_stats: "22+ Completed Projects",
    city_sheki: "Sheki & Gabala",
    city_sheki_stats: "18+ Completed Projects",
    city_sumqayit: "Sumqayit",
    city_sumqayit_stats: "15+ Completed Projects",
    warranty_badge: "Safety & Reliability",
    warranty_title: "Official Licenses & Warranty Obligations",
    warranty_subtitle: "All construction works comply with state licensing and international standards.",
    war1_title: "25 Years Monolith Warranty",
    war1_desc: "Reinforced concrete monolithic structures receive a 25-year official earthquake and structural stability guarantee.",
    war2_title: "State Construction License",
    war2_desc: "Official licensing from State Committee for Urban Planning to construct 1st category buildings.",
    war3_title: "5 Years Facade & Renovation Warranty",
    war3_desc: "Full 5-year technical warranty on facade cladding, insulation, and MEP systems.",
    faq_badge: "Questions & Answers",
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Answers to the most common questions regarding construction and architecture.",
    faq_q1: "Do you assist in obtaining construction permits?",
    faq_a1: "Yes, we manage the complete permit process from architectural drafting to official state committee approvals.",
    faq_q2: "How are payment stages structured during construction?",
    faq_a2: "Payments are divided into milestone stages: foundation, monolithic framing, facade, and final interior handover.",
    faq_q3: "How is construction material quality inspected?",
    faq_a3: "We strictly utilize certified materials (Knauf, Mapei, Sika, BASF, Reynaers). Concrete strength is laboratory tested.",
    faq_q4: "How long does a 3D visualization and design project take?",
    faq_a4: "Preliminary conceptual plans take 7-10 days, while photorealistic 3D renders take 15-25 business days.",
    faq_q5: "What are the terms of official contracts and warranties?",
    faq_a5: "A legally binding contract with detailed itemized estimates is signed: 25 years for structural, 5 years for finishes.",
    blog_badge: "Blog & Insights",
    blog_title: "Architectural & Construction Insights",
    blog_subtitle: "Expert articles on home building, interior design, and material selection.",
    blog_tag_construct: "Construction",
    blog_tag_arch: "Architecture",
    blog_tag_manage: "Management",
    btn_read_more: "Read more",
    blog1_title: "Choosing the Right Foundation and Monolith for Modern Villas",
    blog1_desc: "The importance of geological survey and nuances of slab vs strip foundations for different soil types.",
    blog2_title: "2025 Architectural and Premium Facade Trends",
    blog2_desc: "The synergy of natural travertine stone, panoramic glazing, and energy-efficient ventilated facade systems.",
    blog3_title: "Ways to Optimize Your Budget in Turnkey Construction",
    blog3_desc: "How proper architectural planning can reduce overall project expenditures by up to 20% without sacrificing quality.",
    mob_lang_label: "Choose Language:",
    mob_theme_label: "Dark Mode",
    mob_theme_dark: "Dark",
    mob_theme_light: "Light",
    mob_theme_action: "Switch"
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

  if (typeof window.updatePortfolioBtnText === 'function') {
    window.updatePortfolioBtnText();
  }

  if (typeof window.updateThemeBadgeText === 'function') {
    window.updateThemeBadgeText();
  }
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

  $$('.mob-acc-body a', overlay).forEach(a => {
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
   PORTFOLIO FILTER & EXPANSION CONTROLLER
   ════════════════════════════════════════════════ */
(function () {
  const tabs = $$('.tab');
  const grid = $('#portfolioGrid');
  const viewAllBtn = $('#viewAllProjectsBtn');
  if (!tabs.length || !grid) return;

  let isExpanded = false;

  function updateViewAllButtonText() {
    if (!viewAllBtn) return;
    const btnSpan = viewAllBtn.querySelector('span');
    const svgIcon = viewAllBtn.querySelector('svg');
    const dict = translations[currentLang] || translations.az;

    if (btnSpan) {
      btnSpan.textContent = isExpanded 
        ? (dict.btn_show_less || 'Daha az göstər') 
        : (dict.btn_all_projects_view || 'Bütün layihələrə bax');
    }
    if (svgIcon) {
      svgIcon.style.transition = 'transform 0.3s ease';
      svgIcon.style.transform = isExpanded ? 'rotate(180deg)' : 'none';
    }
  }

  function filterCards(activeFilter) {
    const cards = $$('.pcard', grid);
    cards.forEach(card => {
      const match = activeFilter === 'all' || card.dataset.cat === activeFilter;
      card.classList.toggle('hidden', !match);
      if (match && (!card.classList.contains('pcard-extra') || isExpanded)) {
        card.style.animation = 'none';
        requestAnimationFrame(() => {
          card.style.animation = 'fadeUp .4s ease forwards';
        });
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      filterCards(filter);
    });
  });

  // Handle "Bütün layihələrə bax" / "Daha az göstər" click
  if (viewAllBtn) {
    viewAllBtn.addEventListener('click', e => {
      e.preventDefault();
      isExpanded = !isExpanded;

      grid.classList.toggle('expanded', isExpanded);
      updateViewAllButtonText();

      const activeTab = $('.tab.active') || $('.tab[data-filter="all"]');
      const activeFilter = activeTab ? activeTab.dataset.filter : 'all';
      filterCards(activeFilter);

      if (isExpanded) {
        // Smoothly scroll down so newly revealed extra projects enter viewport
        const extraCards = $$('.pcard-extra:not(.hidden)', grid);
        if (extraCards.length > 0) {
          const firstExtra = extraCards[0];
          const top = firstExtra.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      } else {
        // Scroll back to top of portfolio section
        const target = $('#portfolio');
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 72;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  }

  // Hook into translatePage to keep button label translated on language switch
  window.updatePortfolioBtnText = updateViewAllButtonText;
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
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = $(href);
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
  },
  baku_bay: {
    title: "Baku Bay Residence",
    catKey: "nav_arch",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&q=90",
    loc: { az: "Ağ Şəhər, Bakı", ru: "Белый Город, Баку", en: "White City, Baku" },
    year: "2024",
    cat: "arch",
    desc: {
      az: "Ağ Şəhər ərazisində inşa edilmiş bu müasir rezidensiya dənizə açılan geniş terrasları, aerodinamik memarlıq xətləri və ekoloji təmiz izolyasiya sistemləri ilə seçilir. Layihədə panoramik pəncərələr və təbii fasad daşları harmonik şəkildə birləşdirilmişdir.",
      ru: "Эта современная резиденция в Белом Городе выделяется просторными террасами с видом на море, аэродинамическими линиями и экологичной изоляцией. В проекте гармонично сочетаются панорамные окна и натуральный камень.",
      en: "Built in White City, this modern residence features expansive terraces with sea views, aerodynamic architectural lines, and eco-friendly insulation systems. Panoramic glazing and natural facade stone merge seamlessly in this development."
    }
  },
  skyline_loft: {
    title: "Skyline Loft",
    catKey: "nav_interior",
    img: "https://images.unsplash.com/photo-1502005229762-ee1b2da97ba4?w=1000&q=90",
    loc: { az: "Port Baku, Bakı", ru: "Port Baku, Баку", en: "Port Baku, Baku" },
    year: "2024",
    cat: "interior",
    desc: {
      az: "Port Baku kompleksində yerləşən bu loft layihəsi sənaye estetikası ilə yüksək komfortu birləşdirir. Açıq tavan konstruksiyaları, qara metal vurğuları və premium dəri mebellər unikal bir şəhər mühiti formalaşdırır.",
      ru: "Этот лофт в комплексе Port Baku сочетает индустриальную эстетику с высоким комфортом. Открытые потолочные конструкции, акценты из черного металла и кожаная мебель создают уникальную городскую атмосферу.",
      en: "Located in Port Baku, this loft design unites industrial aesthetics with utmost comfort. Open ceiling elements, black metal accents, and premium leather furnishing compose a distinctive metropolitan living space."
    }
  },
  caspian_villa: {
    title: "Caspian Panorama Villa",
    catKey: "nav_arch",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1000&q=90",
    loc: { az: "Mərdəkan, Bakı", ru: "Мардакян, Баку", en: "Mardakan, Baku" },
    year: "2024",
    cat: "arch",
    desc: {
      az: "Mərdəkanda inşa edilmiş bu fərdi villa geniş həyətyanı sahəsi, kaskad tipli açıq hovuzu və müasir istirahət zonaları ilə unikal istirahət şəraiti yaradır. Bütün bina seysmik dayanıqlı monolit karkas əsasında ucaldılmışdır.",
      ru: "Эта вилла в Мардакяне с большим двором, каскадным бассейном и современными зонами отдыха создает непревзойденные условия для комфортной жизни. Здание возведено на основе сейсмостойкого монолита.",
      en: "Constructed in Mardakan, this private villa features an expansive garden, cascading outdoor pool, and contemporary relaxation decks. The entire structure is erected on earthquake-resistant reinforced monolithic frames."
    }
  },
  sea_breeze: {
    title: "Sea Breeze Penthouse",
    catKey: "nav_interior",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&q=90",
    loc: { az: "Nardaran, Bakı", ru: "Нардаран, Баку", en: "Nardaran, Baku" },
    year: "2023",
    cat: "interior",
    desc: {
      az: "Xəzər dənizinin sahilində yerləşən bu penthausda ağ və qum tonlarının üstünlük təşkil etdiyi Aralıq dənizi minimalizmi tətbiq olunmuşdur. Geniş günəş vannası terrası və xüsusi akustik dizayn layihənin diqqət çəkən xüsusiyyətlərindəndir.",
      ru: "В этом пентхаусе на берегу Каспийского моря применен средиземноморский минимализм в светлых песчаных тонах. Просторная терраса и акустический комфорт являются главными достоинствами проекта.",
      en: "Overlooking the Caspian Sea, this penthouse embodies Mediterranean minimalism in soothing sand tones. A sunbathing terrace and acoustic comfort optimization define this exclusive seaside living experience."
    }
  },
  green_garden: {
    title: "Green Garden Estate",
    catKey: "nav_construction",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&q=90",
    loc: { az: "Qəbələ, Azərbaycan", ru: "Габала, Азербайджан", en: "Gabala, Azerbaijan" },
    year: "2023",
    cat: "construction",
    desc: {
      az: "Qəbələnin dağlıq meşə zolağında inşa edilən bu eko-rezidensiya təbii ağac və yerli daş örtüklərlə ətraf mühitə tam inteqrasiya edilib. Yüksək səviyyəli istilik izolyasiyası sərt qış aylarında belə enerji xərclərini minimumda saxlayır.",
      ru: "Эта эко-резиденция в горном лесу Габалы полностью интегрирована в окружающую природу с использованием дерева и камня. Высокоэффективная теплоизоляция минимизирует энергозатраты зимой.",
      en: "Nestled in Gabala's mountain forests, this eco-residence integrates natural timber and local stone cladding into the terrain. Top-tier thermal insulation keeps energy demands to a minimum throughout cold winters."
    }
  },
  emerald_plaza: {
    title: "Emerald Business Plaza",
    catKey: "nav_construction",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=90",
    loc: { az: "Gəncə, Azərbaycan", ru: "Гянджа, Азербайджан", en: "Ganja, Azerbaijan" },
    year: "2023",
    cat: "construction",
    desc: {
      az: "Gəncə şəhərində inşa edilmiş müasir 7 mərtəbəli biznes mərkəzi ən müasir yanğın təhlükəsizliyi, sürətli liftlər və avtomatlaşdırılmış mühəndislik sistemləri ilə təmin olunmuşdur.",
      ru: "Современный 7-этажный бизнес-центр в Гяндже оснащен передовыми системами пожарной безопасности, скоростными лифтами и автоматизированными инженерными системами.",
      en: "This modern 7-story business plaza constructed in Ganja is equipped with cutting-edge fire suppression systems, high-speed elevators, and automated building management networks."
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

  // ── LIGHTBOX GALLERY FOR DETAILS MODAL IMAGES ──
  const lightboxOverlay = $('#lightboxOverlay');
  const lightboxImg = $('#lightboxImg');
  const lightboxClose = $('#lightboxClose');
  const lightboxPrev = $('#lightboxPrev');
  const lightboxNext = $('#lightboxNext');

  let currentImages = [];
  let currentIndex = 0;

  function openLightbox(images, index) {
    currentImages = images || [];
    currentIndex = index || 0;
    if (!currentImages.length) return;
    lightboxImg.src = currentImages[currentIndex];
    lightboxOverlay.classList.add('open');
    lightboxOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    lightboxOverlay.classList.remove('open');
    lightboxOverlay.setAttribute('aria-hidden', 'true');
  }

  function showPrev() {
    if (!currentImages.length) return;
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    lightboxImg.src = currentImages[currentIndex];
  }

  function showNext() {
    if (!currentImages.length) return;
    currentIndex = (currentIndex + 1) % currentImages.length;
    lightboxImg.src = currentImages[currentIndex];
  }

  if (mImg && lightboxOverlay) {
    mImg.style.cursor = 'pointer';
    mImg.addEventListener('click', () => {
      if (activeProject && projectData[activeProject]) {
        const proj = projectData[activeProject];
        const images = proj.images || [proj.img];
        const currentSrc = mImg.src;
        let index = images.indexOf(currentSrc);
        if (index === -1) {
          index = images.findIndex(src => src.includes(currentSrc) || currentSrc.includes(src));
        }
        if (index === -1) index = 0;
        openLightbox(images, index);
      }
    });
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrev);
  if (lightboxNext) lightboxNext.addEventListener('click', showNext);

  if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', e => {
      if (e.target === lightboxOverlay || e.target.classList.contains('lightbox-img-wrap')) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', e => {
    if (lightboxOverlay && lightboxOverlay.classList.contains('open')) {
      if (e.key === 'Escape') {
        closeLightbox();
        e.stopImmediatePropagation();
      } else if (e.key === 'ArrowLeft') {
        showPrev();
      } else if (e.key === 'ArrowRight') {
        showNext();
      }
    }
  });
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
   INTERACTIVE COST CALCULATOR
   ════════════════════════════════════════════════ */
(function () {
  const areaRange = $('#calcAreaRange');
  const areaVal = $('#calcAreaVal');
  const servicePills = $$('#calcServicePills .calc-pill');
  const packagePills = $$('#calcPackagePills .calc-pill');
  const priceDisplay = $('#calcPriceDisplay');
  const durationDisplay = $('#calcDurationDisplay');
  const orderBtn = $('#calcOrderBtn');
  const waBtn = $('#calcWhatsAppBtn');

  if (!areaRange || !priceDisplay) return;

  let currentArea = parseInt(areaRange.value, 10) || 150;
  let currentRate = 650;
  let currentDuration = "4-7 ay";
  let currentMultiplier = 1.0;
  let currentServiceName = "Açar təslimi tikinti";
  let currentPackageName = "Premium";

  function updateCalculation() {
    currentArea = parseInt(areaRange.value, 10);
    areaVal.textContent = `${currentArea} m²`;

    const activeService = $('#calcServicePills .calc-pill.active');
    if (activeService) {
      currentRate = parseFloat(activeService.dataset.rate) || 650;
      currentDuration = activeService.dataset.duration || "3-6 ay";
      currentServiceName = activeService.textContent.trim();
    }

    const activePkg = $('#calcPackagePills .calc-pill.active');
    if (activePkg) {
      currentMultiplier = parseFloat(activePkg.dataset.multiplier) || 1.0;
      currentPackageName = activePkg.textContent.trim();
    }

    const total = Math.round(currentArea * currentRate * currentMultiplier);
    const formattedTotal = total.toLocaleString('az-AZ');

    priceDisplay.innerHTML = `${formattedTotal} <span>AZN</span>`;
    if (durationDisplay) {
      durationDisplay.textContent = currentDuration;
    }

    // Update WhatsApp link
    if (waBtn) {
      const waText = encodeURIComponent(
        `Salam, Elcan İnşaat! Saytınızdakı kalkulyator vasitəsilə layihə hesabladım:\n` +
        `• Xidmət: ${currentServiceName}\n` +
        `• Sahə: ${currentArea} m²\n` +
        `• Paket: ${currentPackageName}\n` +
        `• Təxmini dəyər: ${formattedTotal} AZN\n` +
        `• Müddət: ${currentDuration}\n\n` +
        `Bu layihə ilə bağlı məsləhət almaq istərdim.`
      );
      waBtn.href = `https://wa.me/994703052005?text=${waText}`;
    }
  }

  areaRange.addEventListener('input', updateCalculation);

  servicePills.forEach(pill => {
    pill.addEventListener('click', () => {
      servicePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      updateCalculation();
    });
  });

  packagePills.forEach(pill => {
    pill.addEventListener('click', () => {
      packagePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      updateCalculation();
    });
  });

  // Transfer calculation directly to contact form
  if (orderBtn) {
    orderBtn.addEventListener('click', () => {
      const total = Math.round(currentArea * currentRate * currentMultiplier).toLocaleString('az-AZ');
      const contactSection = $('#contact');
      const msgField = $('#fmsg');
      const typeSelect = $('#ftype');
      const nameField = $('#fname');

      if (typeSelect) {
        const activeService = $('#calcServicePills .calc-pill.active');
        const sType = activeService ? activeService.dataset.service : '';
        if (sType === 'turnkey') typeSelect.value = "Xüsusi Ev / Villa";
        else if (sType === 'interior') typeSelect.value = "Yalnız İnteryer Dizaynı";
        else if (sType === 'arch') typeSelect.value = "Kommersiya Binası";
      }

      if (msgField) {
        msgField.value = `[Kalkulyator Hesablaması]: ${currentServiceName} | Sahə: ${currentArea} m² | Paket: ${currentPackageName} | Təxmini büdcə: ${total} AZN (${currentDuration}). Ətraflı müzakirə etmək istəyirəm.`;
      }

      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          if (nameField) nameField.focus();
        }, 600);
      }
    });
  }

  // Initial calculation run
  updateCalculation();
})();

/* ════════════════════════════════════════════════
   FAQ ACCORDION CONTROLLER
   ════════════════════════════════════════════════ */
(function () {
  const faqItems = $$('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other accordion items
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      // Toggle current
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
})();

/* ════════════════════════════════════════════════
   BLOG ARTICLE MODAL CONTROLLER
   ════════════════════════════════════════════════ */
(function () {
  const blogModal = $('#blogModal');
  const blogClose = $('#blogModalClose');
  const blogCards = $$('.blog-card');
  const modalTag = $('#blogModalTag');
  const modalDate = $('#blogModalDate');
  const modalTitle = $('#blogModalTitle');
  const modalImg = $('#blogModalImg');
  const modalContent = $('#blogModalContent');

  if (!blogModal || !blogCards.length) return;

  const blogArticles = {
    foundation: {
      az: {
        tag: "Tikinti",
        date: "15 Fevral 2025",
        title: "Müasir Villalarda Düzgün Təməl və Monolit Seçimi",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&q=85&auto=format&fit=crop",
        body: `<p>Müasir villa tikintisində ən həlledici və geri dönüşü olmayan mərhələ bünövrə və monolit karkas işləridir. Ərazinin hidrogeoloji xüsusiyyətləri düzgün qiymətləndirilmədikdə, gələcəkdə bünövrə çökmələri, fasadda çatlar və rütubət kimi ciddi fəsadlar meydana çıxır.</p>
        <p style="margin-top:14px;"><strong>Geoloji qazıntı və torpaq analizi:</strong> Tikintidən öncə mütləq torpaq qatının qrunt suları səviyyəsi və daşıyıcı qabiliyyəti yoxlanılmalıdır. Bakı və Abşeron yarımadasının qumlu-əhəngdaşı torpaqlarında əsasən bütöv monolit plitə (radye təməl) ən təhlükəsiz həll hesab olunur.</p>
        <p style="margin-top:14px;"><strong>Beton markası və armatur karkası:</strong> Minimum M300-M350 markalı hidroizolyasiya qatqılı sertifikatlı beton və A500C markalı armatur konstruksiyalar zəlzələyə 9 bal gücündə tam dayanıqlılıq zəmanəti təmin edir.</p>`
      },
      ru: {
        tag: "Строительство",
        date: "15 Февраля 2025",
        title: "Правильный Выбор Фундамента и Монолита для Современных Вилл",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&q=85&auto=format&fit=crop",
        body: `<p>При строительстве современных вилл фундамент и монолитный каркас являются наиболее ответственными этапами, от которых зависит безопасность всего строения.</p>
        <p style="margin-top:14px;"><strong>Геологические изыскания:</strong> Перед началом работ обязательно проводится исследование грунта. Для песчано-известняковых почв Апшерона сплошная монолитная плита является самым надежным решением.</p>
        <p style="margin-top:14px;"><strong>Качество бетона и арматуры:</strong> Использование бетона марки не ниже М350 с гидроизоляционными добавками и арматуры А500С обеспечивает сейсмостойкость до 9 баллов.</p>`
      },
      en: {
        tag: "Construction",
        date: "February 15, 2025",
        title: "Choosing the Right Foundation and Monolith for Modern Villas",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&q=85&auto=format&fit=crop",
        body: `<p>In modern villa construction, the foundation and reinforced monolithic frame are the most crucial non-reversible phases determining structural longevity.</p>
        <p style="margin-top:14px;"><strong>Soil Investigation:</strong> Comprehensive geological analysis prevents moisture ingress and differential settlement. Monolithic raft slabs offer the optimal stability across Absheron soils.</p>
        <p style="margin-top:14px;"><strong>High-Grade Concrete:</strong> Utilizing M350 hydro-insulated concrete and A500C rebar guarantees seismic resilience up to magnitude 9.</p>`
      }
    },
    facade: {
      az: {
        tag: "Arxitektura",
        date: "28 Yanvar 2025",
        title: "2025-ci İlin Memarlıq və Premium Fasad Trendləri",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=85",
        body: `<p>2025-ci ildə premium memarlıqda təbiilik, minimalizm və yüksək enerji səmərəliliyi ön plana çıxır. Ağır klassik elementlərin yerini geniş vitraj panoramik pəncərələr və təbii teksturalı ventilyasiyalı fasadlar tutur.</p>
        <p style="margin-top:14px;"><strong>Təbii Daş və Ağac Kompozit:</strong> İran travertini, qranit və termo-ağac örtüklər fasada həm zərif estetika qatır, həm də onilliklər boyu rəngini və davamlılığını qoruyub saxlayır.</p>
        <p style="margin-top:14px;"><strong>Reynaers Panoramik Şüşələnmə:</strong> Enerji qənaətli multi-funksional şüşə paketləri yayda istini, qışda isə soyuğu dəf edərək daxili iqlimi tənzimləyir.</p>`
      },
      ru: {
        tag: "Архитектура",
        date: "28 Января 2025",
        title: "Архитектурные и Фасадные Тренды 2025 Года",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=85",
        body: `<p>В 2025 году премиальная архитектура делает акцент на минимализм, натуральные материалы и высокую энергоэффективность.</p>
        <p style="margin-top:14px;"><strong>Натуральный камень:</strong> Травертин, гранит и термодерево создают благородный внешний вид и служат десятилетиями.</p>
        <p style="margin-top:14px;"><strong>Панорамное остекление:</strong> Мультифункциональные стеклопакеты Reynaers защищают от перегрева летом и сохраняют тепло зимой.</p>`
      },
      en: {
        tag: "Architecture",
        date: "January 28, 2025",
        title: "2025 Architectural and Premium Facade Trends",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=85",
        body: `<p>Contemporary luxury architecture in 2025 is dominated by minimalism, tactile natural materials, and smart energy conservation.</p>
        <p style="margin-top:14px;"><strong>Natural Stone & Thermo-Wood:</strong> Travertine and composite cladding provide timeless elegance requiring zero maintenance.</p>
        <p style="margin-top:14px;"><strong>Panoramic Glazing:</strong> Low-E Reynaers glass systems ensure optimal thermal insulation in all seasons.</p>`
      }
    },
    budget: {
      az: {
        tag: "İdarəetmə",
        date: "10 Yanvar 2025",
        title: "Açar Təslimi Tikintidə Büdcəyə Qənaət Yolları",
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=85",
        body: `<p>Tikinti prosesində lazımsız xərclərin 80%-i layihələndirmə və planlaşdırma mərhələsində yol verilən boşluqlardan qaynaqlanır. Dəqiq smeta və peşəkar nəzarət büdcənizə 15-20% qənaət etməyə imkan verir.</p>
        <p style="margin-top:14px;"><strong>Ətraflı İşçi Layihə (Рабочий проект):</strong> Bütün mühəndislik (elektrik, santexnika, isitmə-soyutma) xətləri əvvəlcədən 3D modelləşdirildikdə təmir vaxtı divarların yenidən dağıdılması riskləri sıfıra enir.</p>
        <p style="margin-top:14px;"><strong>Topdan Material Tədarükü:</strong> Şirkətimizin rəsmi tərəfdaş distributor şəbəkəsi vasitəsilə tikinti materialları birbaşa zavod qiymətinə əldə edilir.</p>`
      },
      ru: {
        tag: "Управление",
        date: "10 Января 2025",
        title: "Способы Экономии Бюджета при Строительстве под Ключ",
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=85",
        body: `<p>Более 80% непредвиденных расходов возникают из-за отсутствия детального проекта и сметы.</p>
        <p style="margin-top:14px;"><strong>Рабочий проект:</strong> Точное 3D проектирование всех инженерных сетей исключает переделки в ходе строительства.</p>
        <p style="margin-top:14px;"><strong>Прямые поставки:</strong> Мы закупаем строительные материалы напрямую у производителей по оптовым ценам.</p>`
      },
      en: {
        tag: "Management",
        date: "January 10, 2025",
        title: "Ways to Optimize Your Budget in Turnkey Construction",
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=85",
        body: `<p>Most budget overruns stem from incomplete engineering documentation and ad-hoc changes during construction.</p>
        <p style="margin-top:14px;"><strong>Comprehensive Working Drawings:</strong> 3D BIM coordination of all MEP systems prevents costly on-site demolition and alterations.</p>
        <p style="margin-top:14px;"><strong>Direct Manufacturer Procurement:</strong> Our contractor wholesale agreements save up to 20% on premium building materials.</p>`
      }
    }
  };

  function openBlogModal(articleId) {
    const data = blogArticles[articleId];
    if (!data) return;

    const langData = data[currentLang] || data.az;
    modalTag.textContent = langData.tag;
    modalDate.textContent = langData.date;
    modalTitle.textContent = langData.title;
    modalImg.src = langData.img;
    modalContent.innerHTML = langData.body;

    blogModal.classList.add('open');
    blogModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeBlogModal() {
    blogModal.classList.remove('open');
    blogModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  blogCards.forEach(card => {
    card.addEventListener('click', () => {
      const articleId = card.dataset.blogId;
      openBlogModal(articleId);
    });
  });

  if (blogClose) blogClose.addEventListener('click', closeBlogModal);

  blogModal.addEventListener('click', e => {
    if (e.target === blogModal) closeBlogModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && blogModal.classList.contains('open')) {
      closeBlogModal();
    }
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
