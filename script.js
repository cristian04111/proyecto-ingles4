/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web
   ============================================================ */

/* ------------------------------------------------------------
   1. SPANISH TEXTS
   ------------------------------------------------------------ */
const ES = {
  "nav.home":      "INICIO",
  "nav.about":     "SOBRE MÍ",
  "nav.skills":    "HABILIDADES",
  "nav.resume":    "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact":   "CONTACTO",

  "hero.role": "Desarrollador Web · Soporte Técnico",

  "about.title":          "Sobre Mí",
  "about.text":           "Soy estudiante de la carrera Técnica Profesional en Programación Web en UniEspinal. Me apasiona el desarrollo frontend, la creación de interfaces modernas y la solución de problemas técnicos tanto en software como en hardware.",
  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "El Espinal, Colombia",
  "about.labelEmail":     "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (Básico)",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Abierto a prácticas",
  "about.interestsTitle": "Intereses",

  "interest.1": "CÓDIGO",
  "interest.2": "SOPORTE",
  "interest.3": "LECTURA",
  "interest.4": "JUEGOS",

  "skills.title":        "Habilidades",
  "skills.technical":    "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support":       "Soporte al usuario",
  "skill.teamwork":      "Trabajo en equipo",
  "skill.problem":       "Resolución de problemas",
  "skill.english":       "Inglés técnico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.text":  "Formación enfocada en el diseño web adaptable, desarrollo frontend estructurado con HTML/CSS, interactividad con JavaScript y gestión de bases de datos.",
  "edu.2.title": "Inglés Técnico I y II",
  "edu.2.text":  "Comprensión de lectura de documentación técnica, manejo de repositorios en inglés y presentación técnica de proyectos.",

  "exp.1.title": "Desarrollador Frontend (Proyecto Integrador)",
  "exp.1.text":  "Diseñé e implementé una plataforma web personal bilingüe (ES/EN) con animaciones CSS y lógica conmutadora en JavaScript.",
  "exp.2.title": "Soporte Técnico y Mantenimiento",
  "exp.2.text":  "Diagnóstico de errores del sistema, configuración de entornos de programación e instalación y optimización de componentes de hardware.",

  "portfolio.title": "Proyectos",
  "project.1.title": "Perfil Web Bilingüe",
  "project.1.text":  "HTML, CSS, JavaScript",
  "project.2.title": "Formulario Interactivo",
  "project.2.text":  "HTML5, JavaScript",
  "project.3.title": "Lógica con MySQL",
  "project.3.text":  "SQL, Base de Datos",

  "contact.title":         "Contacto",
  "contact.intro":         "¿Tienes un proyecto en mente o buscas un perfil con mis habilidades? ¡Escríbeme y trabajemos juntos!",
  "contact.emailLabel":    "Correo",
  "contact.linkedinValue": "github.com/cristian04111",

  "footer.note": "Cristian Fernando Aguirre Rodriguez · Técnico Profesional en Programación Web · UniEspinal"
};

/* ------------------------------------------------------------
   2. ENGLISH TEXTS
   ------------------------------------------------------------ */
const EN = {
  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Developer · Technical Support",

  "about.title":          "About Me",
  "about.text":           "I am a Web Programming student at UniEspinal. Passionate about frontend development, modern UI creation, and troubleshooting both software and hardware issues.",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "El Espinal, Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (Basic)",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Open to internships",
  "about.interestsTitle": "Interests",

  "interest.1": "CODE",
  "interest.2": "SUPPORT",
  "interest.3": "READING",
  "interest.4": "GAMING",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text":  "Training focused on responsive web design, structured frontend development with HTML/CSS, JavaScript interactivity, and database management.",
  "edu.2.title": "Technical English I & II",
  "edu.2.text":  "Reading comprehension of technical documentation, managing English repositories, and technical presentation of projects.",

  "exp.1.title": "Frontend Developer (Capstone Project)",
  "exp.1.text":  "Designed and built a personal bilingual web platform (ES/EN) featuring CSS animations and JavaScript toggle logic.",
  "exp.2.title": "Technical Support & Maintenance",
  "exp.2.text":  "System error troubleshooting, development environment configuration, and hardware component setup and optimization.",

  "portfolio.title": "Projects",
  "project.1.title": "Bilingual Web Profile",
  "project.1.text":  "HTML, CSS, JavaScript",
  "project.2.title": "Interactive Form",
  "project.2.text":  "HTML5, JavaScript",
  "project.3.title": "MySQL Logic",
  "project.3.text":  "SQL, Database",

  "contact.title":         "Contact",
  "contact.intro":         "Do you have a project in mind or are you looking for someone with my skills? Send me a message and let's work together!",
  "contact.emailLabel":    "Email",
  "contact.linkedinValue": "github.com/cristian04111",

  "footer.note": "Cristian Fernando Aguirre Rodriguez · Professional Technician in Web Programming · UniEspinal"
};

/* ============================================================
   3. LANGUAGE SWITCHER
   ============================================================ */

const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");
    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    } else {
      console.warn("Missing translation key:", clave);
    }
  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");
  if (boton) {
    const otro = idioma === "es" ? "en" : "es";
    boton.innerHTML =
      '<span class="idioma-activo">'   + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase()   + '</span>';
    boton.setAttribute("aria-label",
      idioma === "es" ? "Switch to English" : "Cambiar a español");
  }

  idiomaActual = idioma;
}

function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}

/* ============================================================
   4. RESPONSIVE MENU
   ============================================================ */

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}

/* ============================================================
   5. SKILL BARS
   ============================================================ */

function animarHabilidades() {
  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {
    const porcentaje = barra.getAttribute("data-percent") || "0";
    barra.style.width = porcentaje + "%";
    const etiqueta = barra.querySelector("span");
    if (etiqueta) etiqueta.textContent = porcentaje + "%";
  };

  if (!("IntersectionObserver" in window)) {
    barras.forEach(mostrar);
    return;
  }

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        mostrar(entrada.target);
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.4 });

  barras.forEach(barra => observador.observe(barra));
}

/* ============================================================
   6. START
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
});
