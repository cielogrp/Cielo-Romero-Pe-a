const darkBtn = document.getElementById("darkModeBtn");
const translateBtn = document.getElementById("translateBtn");

darkBtn.onclick = () => {
  document.body.classList.toggle("dark");
};

translateBtn.onclick = () => {
  if (translateBtn.innerText === "EN") {
    translateBtn.innerText = "ES";
  } else {
    translateBtn.innerText = "EN";
  }
};
