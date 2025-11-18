// BOTÓN SUBIR
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) scrollBtn.style.display = "block";
  else scrollBtn.style.display = "none";
});
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// MENÚ DESAPARECE ABAJO / APARECE ARRIBA
const header = document.getElementById("siteHeader");
let lastY = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastY) header.classList.add("hide");
  else header.classList.remove("hide");
  lastY = window.scrollY;
});

// TEMA OSCURO
document.getElementById("btnTheme").onclick = () => {
  document.body.classList.toggle("dark");
};
