const translations = {
    en: {
        bienvenida: "Hi, I'm Cielo",
        subtitulo: "A student passionate about learning, creating, and improving.",
        perfil: "Profile",
        estudios: "Studies",
        proyectos: "Projects",
        contacto: "Contact",
        proyectoTexto: "I am developing personal and educational projects."
    },
    es: {
        bienvenida: "Hola, soy Cielo",
        subtitulo: "Estudiante apasionada por aprender, crear y mejorar.",
        perfil: "Perfil",
        estudios: "Estudios",
        proyectos: "Proyectos",
        contacto: "Contacto",
        proyectoTexto: "Estoy desarrollando proyectos educativos y personales."
    }
};

let language = "es";

document.getElementById("translateBtn").addEventListener("click", () => {
    language = language === "es" ? "en" : "es";
    updateLanguage();
});

function updateLanguage() {
    document.querySelectorAll("[data-key]").forEach(el => {
        el.textContent = translations[language][el.getAttribute("data-key")];
    });

    document.getElementById("translateBtn").textContent =
        language === "es" ? "EN" : "ES";
}
