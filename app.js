
document.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    console.log('Abriendo:', a.href);
  });
});
