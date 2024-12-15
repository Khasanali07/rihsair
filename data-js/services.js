// Language data
const translations = {
    en: {
        // Contact Button
        contactButton: "Contact",
        // --------- Nav Bar ---------
        navLinkHome: "Home",
        navLinkAbout: "About",
        navLinkServices: "Services",
        // --------- Header ---------
        headerLink: "#1HVAC System Services in UZB",
        headerTitle: "Our Products and Services",
        headerDescription: "Rihs-Air offers a comprehensive range of high-quality HVAC products and services to ensure optimal comfort and performance. Whether you need durable air ducts, expert installation, or reliable maintenance and repair solutions, our team is dedicated to providing efficient, tailored solutions that meet your unique needs.",
        // --------- Products ---------
        productsTitle: "Our Main Products",
        productsDesc: "Our high-quality air ducts and fittings are designed to ensure optimal airflow and efficiency in both residential and commercial HVAC systems. From rectangular and round ducts to elbows and transitions, we offer a variety of products that provide reliable performance and ease of installation, tailored to meet your specific needs.",
        productTitle1: "Rectangular Duct", 
        productDesc1: "Efficient air distribution in large spaces, perfect for commercial and industrial applications.",
        productTitle2: "Round Duct", 
        productDesc2: "Ideal for smooth airflow in tight spaces, offering flexibility and energy efficiency.",
        productTitle3: "Rectangular Elbow", 
        productDesc3: "Enables directional changes in rectangular duct systems while maintaining air quality.",
        productTitle4: "Round Elbow", 
        productDesc4: "Designed to facilitate turns in round ducting without sacrificing airflow efficiency.",
        productTitle5: "Rectangular to Round Transition", 
        productDesc5: "Seamlessly connects rectangular ducts to round systems for optimal air distribution.",
        productTitle6: "Round Transition", 
        productDesc6: "Converts duct sizes smoothly for consistent airflow in complex installations.",
        // --------- Services ---------
        servicesTitle: "Our Services",
        servicesDesc: "At Rihs-Air, we offer a comprehensive range of HVAC services designed to enhance your comfort and ensure the efficiency of your systems. From manufacturing top-quality ventilation ducts to professional installation, maintenance, and indoor air quality testing, our solutions are tailored to meet your specific needs and ensure a healthier, more comfortable environment.",
        serviceTitle1: "HVAC Producing",
        serviceDesc1: "Our company manufactures high-quality air ducts designed to optimize airflow in both residential and commercial buildings. We ensure durable, efficient products that contribute to a comfortable indoor environment.",
        serviceTitle2: "HVAC Installation",
        serviceDesc2: "We handle the complete installation of HVAC systems, integrating heating, cooling, and ventilation units seamlessly into your building's infrastructure for optimal climate control.",
        serviceTitle3: "Maintenance and Repair",
        serviceDesc3: "Regular maintenance and timely repairs are vital to keep your HVAC system operating at peak efficiency. We provide thorough inspections, cleanings, and repairs to extend the life of your system and prevent breakdowns.",
        serviceTitle4: "Indoor Quality Air Testing",
        serviceDesc4: "We offer comprehensive indoor air quality testing to ensure your HVAC system is delivering clean, breathable air. Our service includes evaluating air quality and making adjustments to improve it as necessary.",
        
        // --------- Footer ---------
        footerBrandDescription: "Rihs-Air Conditioning Company is a leading player in the HVAC market of Uzbekistan.",
        footerLocation: "Tashkent Region, Yangiyul District, U. Musayev RCA, «Tashkent-Termiz» Highway.",
    },
    uz: {
        // Contact Button
        contactButton: "Bog‘lanish",
        // --------- Nav Bar ---------
        navLinkHome: "Bosh sahifa",
        navLinkAbout: "Biz haqimizda",
        navLinkServices: "Xizmatlar",
        // --------- Header ---------
        headerLink: "O‘zbekistondagi #1 HVAC tizim xizmatlari",
        headerTitle: "Biz haqimizda",
        headerDescription: "Biz turar-joy va tijorat binolari uchun yuqori sifatli ventilyatsiya tizimlarini taqdim etishga ixtisoslashganmiz. Bizning yechimlarimiz har bir mijozning ehtiyojlarini qondirishga mo'ljallangan qulaylik, samaradorlik va ishonchlilikni ta'minlaydi.",
        // --------- About ---------
        aboutTitle: "Biz uy va ofisingiz uchun qulaylik yaratishda yordam beraddigan ventilyatsiya tizimi kompaniyasimiz",
        aboutDesc: "Sizning uyingiz uchun eng mos yechimni tanlasangiz ham, sizga HVAC texnologiyasining so'nggi yutuqlarini va hayot tarzingizga mos keladigan isitish va sovutish tizimini olishingizga ishonch hosil qilishingiz mumkin.",
        // --------- Products ---------
        productsTitle: "Asosiy Mahsulotlarimiz",
        productsDesc: "Bizning yuqori sifatli havo kanallari va qismlari uy va tijorat HVAC tizimlarida optimal havo oqimi va samaradorligini ta'minlash uchun ishlab chiqilgan. To'rtburchak va dumaloq havo kanallaridan to tirsaklar va o'tish qismlarigacha, biz ishonchli ishlash va oson o'rnatishni ta'minlovchi, o'ziga xos ehtiyojlaringizga mos mahsulotlarni taklif etamiz.",
        productTitle1: "To'rtburchak Kanal", 
        productDesc1: "Katta joylarda samarali havo taqsimoti, tijorat va sanoat ilovalari uchun ideal.",
        productTitle2: "Dumaloq Kanal", 
        productDesc2: "Tor joylarda silliq havo oqimi uchun mos bo'lib, moslashuvchanlik va energiya samaradorligini taklif etadi.",
        productTitle3: "To'rtburchak Tirsak", 
        productDesc3: "To'rtburchak kanal tizimlarida yo'nalishlarni o'zgartirishni ta'minlaydi va havo sifati saqlanadi.",
        productTitle4: "Dumaloq Tirsak", 
        productDesc4: "Havo oqimi samaradorligini yo'qotmasdan, dumaloq kanal tizimlarida burilishlarni amalga oshirish uchun mo'ljallangan.",
        productTitle5: "To'rtburchakdan Dumaloqga O'kazgich", 
        productDesc5: "Optimal havo taqsimoti uchun to'rtburchak kanallarni dumaloq tizimlarga muammosiz ulaydi.",
        productTitle6: "Dumaloq O'tqazgich", 
        productDesc6: "Murakkab o'rnatishlarda doimiy havo oqimini ta'minlash uchun kanal o'lchamlarini silliq tarzda o'zgartiradi.",
        // --------- Services ---------
        servicesTitle: "Xizmatlarimiz",
        servicesDesc: "Rihs-Air kompaniyasida biz HVAC tizimlaringizning qulayligini oshirish va samaradorligini ta'minlash uchun mo'ljallangan keng qamrovli xizmatlarni taklif etamiz. Eng sifatli ventilyatsiya kanallarini ishlab chiqarishdan tortib, professional o‘rnatish, texnik xizmat ko‘rsatish va ichki havo sifatini tekshirishgacha, bizning yechimlarimiz sizning ehtiyojlaringizga moslashtirilgan va sog‘lom, qulayroq muhitni ta'minlaydi.",
        serviceTitle1: "HVAC Ishlab chiqarish",
        serviceDesc1: "Bizning kompaniyamiz uy va tijorat binolarida havo oqimini optimallashtirish uchun yuqori sifatli havo kanallarini ishlab chiqaradi. Biz mustahkam, samarali mahsulotlar bilan qulay ichki muhitga hissa qo'shamiz.",
        serviceTitle2: "HVAC O‘rnatish",
        serviceDesc2: "Biz HVAC tizimlarini to‘liq o‘rnatishni amalga oshiramiz, binolaringizning ichki inshootlariga isitish, sovutish va ventilyatsiya bloklarini muammosiz integratsiya qilamiz.",
        serviceTitle3: "Texnik Xizmat va Ta'mirlash",
        serviceDesc3: "HVAC tizimingizni maksimal samaradorlikda ishlashi uchun muntazam texnik xizmat va o'z vaqtida ta'mirlash muhimdir. Biz tizimingizning umrini uzaytirish va nosozliklarning oldini olish uchun keng qamrovli tekshiruvlar, tozalashlar va ta'mirlash xizmatlarini taqdim etamiz.",
        serviceTitle4: "Ichki Havo Sifatini Tekshirish",
        serviceDesc4: "Bizning ichki havo sifatini tekshirish xizmatimiz HVAC tizimingizning toza, nafas olishga yaroqli havo yetkazib berayotganini ta'minlaydi. Bizning xizmatlarimiz havo sifatini baholash va zarurat tug‘ilganda uni yaxshilash bo‘yicha o‘zgartirishlar kiritishni o'z ichiga oladi.",
        // --------- Footer ---------
        footerBrandDescription: "Rihs-Air Konditsioner Kompaniyasi O‘zbekistonning HVAC bozorida yetakchi o‘rinni egallagan.",
        footerLocation: "Toshkent viloyati, Yangiyo‘l tumani, U. Musayev MFY, «Toshkent-Termiz» avtomobil yo'li."
    },
    ru: {
        // Contact Button
        contactButton: "Контакты",
        // --------- Nav Bar ---------
        navLinkHome: "Главная",
        navLinkAbout: "О нас",
        navLinkServices: "Услуги",
        // --------- Header ---------
        headerLink: "#1Услуги по HVAC системам в Узбекистане",
        headerTitle: "О нас",
        headerDescription: "Мы специализируемся на предоставлении высококачественных систем вентиляции воздуха для жилых и коммерческих помещений. Наши решения обеспечивают комфорт, эффективность и надежность, удовлетворяя потребности каждого клиента.",
        // --------- About ---------
        aboutTitle: "Мы — компания по системам вентиляции, которая помогает создавать комфорт в вашем доме и офисе",
        aboutDesc: "Независимо от того, какое решение лучше всего подходит для вашего дома, вы можете быть уверены, что получите новейшие технологии HVAC и систему отопления и охлаждения, которая соответствует вашему образу жизни.",
        // --------- Продукты ---------
        productsTitle: "Наши Основные Продукты",
        productsDesc: "Наши высококачественные воздуховоды и фитинги разработаны для обеспечения оптимального воздушного потока и эффективности в жилых и коммерческих системах HVAC. От прямоугольных и круглых воздуховодов до колен и переходов, мы предлагаем разнообразные продукты, которые обеспечивают надежную работу и легкость установки, адаптированные под ваши конкретные потребности.",
        productTitle1: "Прямоугольный Воздуховод", 
        productDesc1: "Эффективное распределение воздуха в больших помещениях, идеально подходит для коммерческих и промышленных применений.",
        productTitle2: "Круглый Воздуховод", 
        productDesc2: "Идеально для плавного воздушного потока в узких пространствах, обеспечивая гибкость и энергоэффективность.",
        productTitle3: "Прямоугольный Отвод", 
        productDesc3: "Позволяет изменять направление в прямоугольных воздуховодных системах, сохраняя качество воздуха.",
        productTitle4: "Круглое Отвод", 
        productDesc4: "Разработано для поворотов в круглых воздуховодах без ущерба для эффективности воздушного потока.",
        productTitle5: "Переход с Прямоугольного на Круглый", 
        productDesc5: "Беспрепятственно соединяет прямоугольные воздуховоды с круглыми системами для оптимального распределения воздуха.",
        productTitle6: "Круглый Переход", 
        productDesc6: "Плавно изменяет размеры воздуховодов для равномерного воздушного потока в сложных установках.",
        // --------- Services ---------
        servicesTitle: "Наши Услуги",
        servicesDesc: "В компании Rihs-Air мы предлагаем широкий спектр услуг HVAC, направленных на повышение вашего комфорта и обеспечение эффективности ваших систем. От производства высококачественных вентиляционных воздуховодов до профессиональной установки, обслуживания и проверки качества воздуха в помещениях — наши решения адаптированы под ваши конкретные потребности, чтобы обеспечить более здоровую и комфортную среду.",
        serviceTitle1: "Производство HVAC",
        serviceDesc1: "Наша компания производит высококачественные воздуховоды, разработанные для оптимизации воздушного потока в жилых и коммерческих зданиях. Мы обеспечиваем долговечные и эффективные продукты, способствующие созданию комфортной внутренней среды.",
        serviceTitle2: "Установка HVAC",
        serviceDesc2: "Мы занимаемся полной установкой систем HVAC, бесшовно интегрируя блоки отопления, охлаждения и вентиляции в инфраструктуру вашего здания для оптимального контроля климата.",
        serviceTitle3: "Техническое Обслуживание и Ремонт",
        serviceDesc3: "Регулярное обслуживание и своевременный ремонт важны для поддержания вашей системы HVAC в наилучшей рабочей форме. Мы предоставляем тщательные проверки, чистку и ремонт для продления срока службы вашей системы и предотвращения поломок.",
        serviceTitle4: "Тестирование Качества Воздуха в Помещениях",
        serviceDesc4: "Мы предлагаем комплексное тестирование качества воздуха в помещении, чтобы убедиться, что ваша система HVAC обеспечивает чистый и пригодный для дыхания воздух. Наши услуги включают оценку качества воздуха и внесение необходимых изменений для его улучшения.",
        // --------- Footer ---------
        footerBrandDescription: "Компания Rihs-Air является ведущим игроком на рынке HVAC в Узбекистане.",
        footerLocation: "Ташкентский область, Янгиюлский район, У.Мусаев КФЙ, Автотрасса «Тошкент –Термиз»."
    }    
};

// Contact Button
const contactButton = document.getElementById("contact-button");

// --------- Nav Bar ---------
const languageSelector = document.getElementById("language-selector");
const navLinkHome = document.getElementById('nav-home');
const navLinkAbout = document.getElementById('nav-about');
const navLinkServices = document.getElementById('nav-services');

// --------- Header Elements ---------
const headerLink = document.getElementById("header-link");
const headerTitle = document.getElementById("header-title");
const headerDescription = document.getElementById("header-description");

// --------- About ---------
const aboutTitle = document.getElementById("about-title");
const aboutDesc = document.getElementById("about-desc");

// --------- Products ---------
const productsTitle = document.getElementById("products-title");
const productsDesc = document.getElementById("products-desc");
const productTitle1 = document.getElementById("product-title1");
const productDesc1 = document.getElementById("product-desc1");
const productTitle2 = document.getElementById("product-title2");
const productDesc2 = document.getElementById("product-desc2");
const productTitle3 = document.getElementById("product-title3");
const productDesc3 = document.getElementById("product-desc3");
const productTitle4 = document.getElementById("product-title4");
const productDesc4 = document.getElementById("product-desc4");
const productTitle5 = document.getElementById("product-title5");
const productDesc5 = document.getElementById("product-desc5");
const productTitle6 = document.getElementById("product-title6");
const productDesc6 = document.getElementById("product-desc6");

// --------- Services ---------
const servicesTitle = document.getElementById("services-title");
const servicesDesc = document.getElementById("services-desc");
const serviceTitle1 = document.getElementById("service-title1");
const serviceDesc1 = document.getElementById("service-desc1");
const serviceTitle2 = document.getElementById("service-title2");
const serviceDesc2 = document.getElementById("service-desc2");
const serviceTitle3 = document.getElementById("service-title3");
const serviceDesc3 = document.getElementById("service-desc3");
const serviceTitle4 = document.getElementById("service-title4");
const serviceDesc4 = document.getElementById("service-desc4");

// --------- Footer ---------
const footerBrandDescription = document.getElementById('footer-brand-description');
const footerLocation = document.getElementById('footer-location');

// Function to switch language
function switchLanguage(language) {
    const translation = translations[language];

    // Contact Button
    contactButton.textContent = translation.contactButton;

    // --------- Nav Bar ---------
    navLinkHome.textContent = translation.navLinkHome;
    navLinkAbout.textContent = translation.navLinkAbout;
    navLinkServices.textContent = translation.navLinkServices;

    // --------- Header ---------
    headerLink.textContent = translation.headerLink;
    headerTitle.textContent = translation.headerTitle;
    headerDescription.textContent = translation.headerDescription;

    // --------- Products ---------
    productsTitle.textContent = translation.productsTitle;
    productsDesc.textContent = translation.productsDesc;
    productTitle1.textContent = translation.productTitle1;
    productDesc1.textContent = translation.productDesc1;
    productTitle2.textContent = translation.productTitle2;
    productDesc2.textContent = translation.productDesc2;
    productTitle3.textContent = translation.productTitle3;
    productDesc3.textContent = translation.productDesc3;
    productTitle4.textContent = translation.productTitle4;
    productDesc4.textContent = translation.productDesc4;
    productTitle5.textContent = translation.productTitle5;
    productDesc5.textContent = translation.productDesc5;
    productTitle6.textContent = translation.productTitle6;
    productDesc6.textContent = translation.productDesc6;
    
    // --------- Services ---------
    servicesTitle.textContent = translation.servicesTitle;
    servicesDesc.textContent = translation.servicesDesc;
    serviceTitle1.textContent = translation.serviceTitle1;
    serviceDesc1.textContent = translation.serviceDesc1;
    serviceTitle2.textContent = translation.serviceTitle2;
    serviceDesc2.textContent = translation.serviceDesc2;
    serviceTitle3.textContent = translation.serviceTitle3;
    serviceDesc3.textContent = translation.serviceDesc3;
    serviceTitle4.textContent = translation.serviceTitle4;
    serviceDesc4.textContent = translation.serviceDesc4;
    
    // --------- Footer ---------
    footerBrandDescription.textContent = translation.footerBrandDescription;
    const iconHTML = footerLocation.querySelector("i").outerHTML;  // Get the icon's HTML
    footerLocation.innerHTML = `${iconHTML} ${translation.footerLocation}`; // Update the text and keep the icon

    // Store the selected language in localStorage
    localStorage.setItem('selectedLanguage', language);
}

// Event listener for language selection
languageSelector.addEventListener("change", function () {
    const selectedLanguage = this.value;
    switchLanguage(selectedLanguage);
});

// Function to get the saved language from localStorage
function getSavedLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    return savedLanguage ? savedLanguage : 'uz';  // Default to English if nothing is saved
}

// Initialize the language based on localStorage or default to English
const initialLanguage = getSavedLanguage();
languageSelector.value = initialLanguage;  // Set the dropdown value to match the selected language
switchLanguage(initialLanguage);
