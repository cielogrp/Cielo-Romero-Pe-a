// App JS: theme, i18n, nav active, small interactions
const root = document.documentElement;
const btnTheme = document.getElementById('btnTheme');
const btnLang = document.getElementById('btnLang');
const navLinks = document.querySelectorAll('.nav-link');
const downloadBtn = document.getElementById('downloadBtn');

// i18n dictionary
const i18n = {
  es: {
    "brand.subtitle":"Estudiante de Administración",
    "nav.home":"Inicio","nav.profile":"Perfil","nav.education":"Educación","nav.contact":"Contacto",
    "download":"Descargar información","contact.me":"Contactar",
    "greeting":"¡Hola! Soy Cielo Geraldine Romero Peña",
    "intro":"Tengo 18 años y soy de Cusco. Estudio Administración en la Universidad Católica San Pablo. Soy creativa, adaptable y empática. Me apasionan el arte, el teatro, el marketing y la gastronomía.",
    "quote":"“El proceso que hoy te pesa, mañana será tu mayor recompensa.”",
    "sections.profile":"Perfil","sections.education":"Educación","sections.contact":"Contacto",
    "profile.long":"¡Hola! Mi nombre es Cielo Geraldine Romero Peña, tengo 18 años y soy de Cusco. Actualmente estudio Administración en la Universidad Católica San Pablo. Soy una persona creativa, adaptable y empática, cualidades que me permiten relacionarme bien con los demás y afrontar los retos con una actitud positiva. Valoro profundamente la responsabilidad, el respeto y la puntualidad. Me apasionan el arte, especialmente el teatro, y el aprendizaje constante. Los cursos que más disfruto son los de Marketing. He desarrollado habilidades en trabajo en equipo, comunicación efectiva y pensamiento crítico. También he participado en voluntariados apoyando a niños en albergues y en cursos para mujeres adultas.",
    "edu.current.title":"Formación Académica actual","edu.current.school":"Administración de negocios — Universidad Católica San Pablo","edu.current.link":"https://ucsp.edu.pe/","edu.current.years":"2024 – Presente",
    "edu.past.title":"Formación hasta 2023","edu.past.school":"Colegio Monteverde — Cusco","edu.past.link":"https://colegiomonteverde.org/","edu.past.years":"— 2023",
    "languages.title":"Idiomas","languages.list":"Inglés intermedio · Alemán básico","courses.title":"Cursos adicionales","courses.list":"Teatro, Inglés, Marketing",
    "teachers.title":"Profesores","contact.email":"Correo","contact.linkedin":"LinkedIn","contact.github":"GitHub",
    "contact.more":"Más enlaces","contact.university":"Universidad Católica San Pablo","contact.school":"Colegio Monteverde",
    "footer":"Hecho con ♥ · Diseño personal · Actualizado 2024","role":"Estudiante de Administración — Marketing","roleShort":"Estudiante de Administración — Marketing"
  },
  en: {
    "brand.subtitle":"Business Administration Student",
    "nav.home":"Home","nav.profile":"Profile","nav.education":"Education","nav.contact":"Contact",
    "download":"Download information","contact.me":"Contact",
    "greeting":"Hi! I'm Cielo Geraldine Romero Peña",
    "intro":"I am 18 years old from Cusco. I study Business Administration at Universidad Católica San Pablo. I'm creative, adaptable and empathetic. I love art, theatre, marketing and gastronomy.",
    "quote":"“The process that weighs on you today will be your greatest reward tomorrow.”",
    "sections.profile":"Profile","sections.education":"Education","sections.contact":"Contact",
    "profile.long":"Hello! My name is Cielo Geraldine Romero Peña, I am 18 years old and from Cusco. I currently study Business Administration at Universidad Católica San Pablo. I am creative, adaptable and empathetic, qualities that allow me to relate well to others and face challenges with a positive attitude. I highly value responsibility, respect and punctuality. I am passionate about art, especially theatre, and continuous learning. I enjoy Marketing courses the most. I have developed teamwork, effective communication and critical thinking skills. I have also participated in volunteer work supporting children in shelters and assisting in digital skills courses for adult women.",
    "edu.current.title":"Current education","edu.current.school":"Business Administration — Universidad Católica San Pablo","edu.current.link":"https://ucsp.edu.pe/","edu.current.years":"2024 – Present",
    "edu.past.title":"Education up to 2023","edu.past.school":"Colegio Monteverde — Cusco","edu.past.link":"https://colegiomonteverde.org/","edu.past.years":"— 2023",
    "languages.title":"Languages","languages.list":"Intermediate English · Basic German","courses.title":"Additional courses","courses.list":"Theatre, English, Marketing",
    "teachers.title":"Professors","contact.email":"Email","contact.linkedin":"LinkedIn","contact.github":"GitHub",
    "contact.more":"More links","contact.university":"Universidad Católica San Pablo","contact.school":"Colegio Monteverde",
    "footer":"Made with ♥ · Personal design · Updated 2024","role":"Business Administration Student — Marketing","roleShort":"Business Administration — Marketing Student"
  }
};

// initial language from localStorage
let lang = localStorage.getItem('site_lang') || 'es';
applyLang(lang);
btnLang.textContent = lang === 'es' ? 'EN' : 'ES';

function applyLang(l){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(i18n[l] && i18n[l][key]) el.innerText = i18n[l][key];
  });
  document.title = l === 'es' ? 'Cielo Romero — Portafolio' : 'Cielo Romero — Portfolio';
  localStorage.setItem('site_lang', l);
}

// toggle language
btnLang.addEventListener('click', ()=>{
  lang = lang === 'es' ? 'en' : 'es';
  applyLang(lang);
  btnLang.textContent = lang === 'es' ? 'EN' : 'ES';
});

// theme: read saved or prefer-color-scheme
const savedTheme = localStorage.getItem('site_theme');
if(savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.setAttribute('data-theme','dark');

btnTheme.addEventListener('click', ()=>{
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('site_theme', next);
  btnTheme.textContent = next === 'dark' ? '☀️' : '🌙';
});

// active nav on scroll
const sections = document.querySelectorAll('main section, main article');
const obs = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const id = entry.target.id;
      document.querySelectorAll('.nav-link').forEach(a=>a.classList.remove('active'));
      const link = document.querySelector('.nav-link[href="#'+id+'"]');
      if(link) link.classList.add('active');
    }
  });
}, {root:null, rootMargin:'-40% 0px -40% 0px', threshold:0});

sections.forEach(s=>obs.observe(s));

// animate cards on load
window.addEventListener('load', ()=>{
  document.querySelectorAll('.card').forEach((c,i)=>{
    setTimeout(()=> c.classList.add('show'), i*80);
  });
});

// contact form: show success message on submit (Formspree handles actual send)
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', (e)=>{
    // optimistic UI: let form submit normally, show message
    setTimeout(()=>{
      alert(lang === 'es' ? 'Gracias — tu mensaje fue enviado.' : 'Thanks — your message was sent.');
      contactForm.reset();
    }, 500);
  });
}
