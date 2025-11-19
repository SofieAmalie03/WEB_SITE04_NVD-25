const html = document.documentElement;
const btn = document.querySelector("#darkknap");

btn.addEventListener("click", () => {
  html.classList.toggle("dark");
});
