document.querySelectorAll(".contact a").forEach(link => {
  link.addEventListener("click", () => {
    alert("Thanks for contacting me!");
  });
});

const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}
