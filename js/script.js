const toggle = document.getElementById("toggle");
const nav = document.querySelector('#menu')
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  nav.classList.toggle('active');
});
