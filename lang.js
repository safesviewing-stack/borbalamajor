// ================== CONTENIDO DE IDIOMAS ==================
const content = {
  es: {
    heroTitle: "Ingeniería de diseño industrial aplicada al desarrollo de producto",
    heroSub: "Diseño técnico, fabricación y optimización de productos industriales.",

    aboutTitle: "Sobre mí",
    aboutText:
      "Soy Borbála, una joven de 23 años de Hungría, graduada de la Universidad Técnica de Budapest (BME) y actualmente en búsqueda de oportunidades profesionales en España. Aunque mi formación es más técnica, me apasiona combinar lo artístico y lo técnico. Me considero una persona emotiva, lo que me permite comprender mejor a los usuarios y crear soluciones más empáticas y funcionales. Disfruto trabajar en equipo, ya que valoro la colaboración y el intercambio de ideas. Además, soy muy detallista y creo que la atención a los pequeños aspectos del diseño marca la diferencia. Hablo inglés y español con fluidez, además de mi idioma natal, el húngaro, lo que me permite adaptarme fácilmente a entornos internacionales y multiculturales. Siempre busco aprender y adaptarme para seguir creciendo a través de nuevos retos y oportunidades.",

    cvTitle: "Currículum",
    cvEducationTitle: "Formación académica",
    cvDownload: "Descargar CV",

    portfolioTitle: "Portfolio",

    contactTitle: "Contacto",
    contactEmail: "📧 majorbori@gmail.com",
    contactPhone: "📞 +36 30 820 3716"
  },

  en: {
    heroTitle: "Industrial design engineering applied to product development",
    heroSub: "Technical design, manufacturing and optimization of industrial products.",

    aboutTitle: "About me",
    aboutText:
      "I am Borbála, a 23-year-old from Hungary, graduated from the Budapest University of Technology and Economics (BME), and currently seeking professional opportunities in Spain. Although my background is more technical, I am passionate about combining artistic and technical approaches. I consider myself an emotional person, which allows me to better understand users and create more empathetic and functional solutions. I enjoy working in teams, as I value collaboration and the exchange of ideas. I am also very detail-oriented and believe that attention to small aspects of design makes a difference. I speak English and Spanish fluently, in addition to my native language, Hungarian, which allows me to easily adapt to international and multicultural environments. I am always eager to learn and adapt in order to keep growing through new challenges and opportunities.",

    cvTitle: "Curriculum",
    cvEducationTitle: "Academic education",
    cvDownload: "Download CV",

    portfolioTitle: "Portfolio",

    contactTitle: "Contact",
    contactEmail: "📧 majorbori@gmail.com",
    contactPhone: "📞 +36 30 820 3716"
  }
};

// ================== FUNCIÓN DE CAMBIO ==================
function setLang(lang) {
  document.getElementById("hero-title").textContent = content[lang].heroTitle;
  document.getElementById("hero-sub").textContent = content[lang].heroSub;

  document.getElementById("about-title").textContent = content[lang].aboutTitle;
  document.getElementById("about-text").textContent = content[lang].aboutText;

  document.getElementById("cv-title").textContent = content[lang].cvTitle;
  document.getElementById("cv-education-title").textContent =
    content[lang].cvEducationTitle;
  document.getElementById("cv-download").textContent =
    content[lang].cvDownload;

  document.getElementById("portfolio-title").textContent =
    content[lang].portfolioTitle;

  document.getElementById("contact-title").textContent =
    content[lang].contactTitle;
  document.getElementById("contact-email").textContent =
    content[lang].contactEmail;
  document.getElementById("contact-phone").textContent =
    content[lang].contactPhone;

  // Botón activo
  document.getElementById("btn-es").classList.toggle("active", lang === "es");
  document.getElementById("btn-en").classList.toggle("active", lang === "en");

  // Guardar idioma
  localStorage.setItem("lang", lang);
}

// ================== EVENTOS ==================
document.getElementById("btn-es").addEventListener("click", () => setLang("es"));
document.getElementById("btn-en").addEventListener("click", () => setLang("en"));

// ================== IDIOMA INICIAL ==================
const savedLang = localStorage.getItem("lang") || "es";
setLang(savedLang);
