const content = {
  es: {
    /* NAV */
    navHome: "Inicio",
    navAbout: "Sobre mí",
    navCv: "Currículum",
    navPortfolio: "Portfolio",
    navContact: "Contacto",

    /* HERO */
    heroTitle: "Ingeniería de diseño industrial aplicada al desarrollo de producto",
    heroSub: "Diseño técnico, fabricación y optimización de productos industriales.",
    heroBtnCv: "Ver CV",
    heroBtnContact: "Contactar",

    /* ABOUT */
    aboutTitle: "Sobre mí",
    aboutText:
      "Soy Borbála, una joven de 23 años de Hungría, graduada de la Universidad Técnica de Budapest (BME) y actualmente en búsqueda de oportunidades profesionales en España. Aunque mi formación es más técnica, me apasiona combinar lo artístico y lo técnico. Me considero una persona emotiva, lo que me permite comprender mejor a los usuarios y crear soluciones más empáticas y funcionales. Disfruto trabajar en equipo, ya que valoro la colaboración y el intercambio de ideas. Además, soy muy detallista y creo que la atención a los pequeños aspectos del diseño marca la diferencia. Hablo inglés y español con fluidez, además de mi idioma natal, el húngaro, lo que me permite adaptarme fácilmente a entornos internacionales y multiculturales. Siempre busco aprender y adaptarme para seguir creciendo a través de nuevos retos y oportunidades.",

    /* CV */
    cvMainTitle: "Currículum",
    cvEducationTitle: "Formación académica",

    cvEdu1Title:
      "Grado en Ingeniería de Diseño Industrial y desarrollo de productos 2022–2026",
    cvEdu1Text:
      "Graduada en Diseño Industrial por la Universidad de Tecnología y Economía de Budapest (BME), con una formación interdisciplinar en diseño de producto, procesos de fabricación y desarrollo técnico.",

    cvEdu2Title:
      "Grado en Ingeniería de Diseño Industrial y desarrollo de productos (Erasmus) 2025–2026",
    cvEdu2Text:
      "Formación académica en Diseño Industrial cursada durante un año en la Universitat Politècnica de València (UPV), mediante un programa Erasmus en la Universidad de Tecnología y Economía de Budapest (BME).",

    cvExperienceTitle: "Experiencia en diseño",

    cvExpTitle:
      "Experiencia profesional en empresa Sixay 2025–2026",
    cvExpText:
      "Experiencia profesional de un año en la empresa Sixay, enfocada al diseño de mobiliario, con participación activa en el desarrollo de productos, diseño técnico, optimización de componentes y trabajo colaborativo multidisciplinar.",

    cvDownload: "Descargar CV",

    /* PORTFOLIO */
    portfolioTitle: "Portfolio",
    portfolioBaori: "Espacio de uso colectivo",
    portfolioLumora: "Iluminación",
    portfolioEliptria: "Grifería",
    portfolioSixay: "Mobiliario",
    portfolioNode: "Mobiliario",
    portfolioSyncro: "Smartwatch",
    portfolioKate: "Diseño gráfico",

    /* CONTACT */
    contactTitle: "Contacto",

    /* FOOTER */
    footer:
      "© 2026 · Borbala Major · Industrial Design Engineer"
  },

  en: {
    /* NAV */
    navHome: "Home",
    navAbout: "About",
    navCv: "Curriculum",
    navPortfolio: "Portfolio",
    navContact: "Contact",

    /* HERO */
    heroTitle:
      "Industrial design engineering applied to product development",
    heroSub:
      "Technical design, manufacturing and optimization of industrial products.",
    heroBtnCv: "View CV",
    heroBtnContact: "Contact",

    /* ABOUT */
    aboutTitle: "About me",
    aboutText:
      "I’m Borbála, a 23-year-old from Hungary, graduated from the Budapest University of Technology and Economics (BME), and currently seeking professional opportunities in Spain. Although my background is more technical, I’m passionate about combining art and technology. I consider myself an emotional person, which allows me to better understand users and create more empathetic and functional solutions. I enjoy working in teams, as I value collaboration and the exchange of ideas. I’m very detail-oriented and believe that attention to small aspects of design makes a real difference. I speak English and Spanish fluently, in addition to my native language, Hungarian, which allows me to adapt easily to international and multicultural environments. I am always eager to learn, adapt, and grow through new challenges and opportunities.",

    /* CV */
    cvMainTitle: "Curriculum Vitae",
    cvEducationTitle: "Academic background",

    cvEdu1Title:
      "Bachelor’s Degree in Industrial Design Engineering and Product Development 2022–2026",
    cvEdu1Text:
      "Graduated in Industrial Design from the Budapest University of Technology and Economics (BME), with interdisciplinary training in product design, manufacturing processes, and technical development.",

    cvEdu2Title:
      "Bachelor’s Degree in Industrial Design Engineering and Product Development (Erasmus) 2025–2026",
    cvEdu2Text:
      "Academic training in Industrial Design completed during one year at the Universitat Politècnica de València (UPV) through an Erasmus exchange program with the Budapest University of Technology and Economics (BME).",

    cvExperienceTitle: "Design experience",

    cvExpTitle:
      "Professional experience at Sixay company 2025–2026",
    cvExpText:
      "One year of professional experience at Sixay, focused on furniture design, with active participation in product development, technical design, component optimization, and multidisciplinary collaborative work.",

    cvDownload: "Download CV",

    /* PORTFOLIO */
    portfolioTitle: "Portfolio",
    portfolioBaori: "Collective use space",
    portfolioLumora: "Lighting",
    portfolioEliptria: "Faucets",
    portfolioSixay: "Furniture",
    portfolioNode: "Furniture",
    portfolioSyncro: "Smartwatch",
    portfolioKate: "Graphic design",

    /* CONTACT */
    contactTitle: "Contact",

    /* FOOTER */
    footer:
      "© 2026 · Borbala Major · Industrial Design Engineer"
  }
};




// Navegación entre secciones
document.querySelectorAll(".tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll("section")
      .forEach(s => s.classList.remove("active"));

    document.getElementById(tab.dataset.tab)
      .classList.add("active");

    document.querySelectorAll("nav li")
      .forEach(l => l.classList.remove("active"));

    tab.classList.add("active");
  };
});
