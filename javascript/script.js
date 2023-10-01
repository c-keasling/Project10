const body = document.querySelector("body");
const modeToggle = document.getElementById("mode-toggle");
const modeStatus = document.querySelector(".mode-status");

function toggleMode() {
  body.classList.toggle("dark-mode");
}
modeToggle.addEventListener("click", toggleMode);

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM is loaded"); // Check if DOM is loaded

  const sections = document.querySelectorAll(".Career, .Projects");

  sections.forEach((sec) => {
    console.log("Section:", sec);
  });

  const options = {
    threshold: 0.1,
  };

  function addSlideIn(entries) {
    entries.forEach((entry) => {
      console.log("Observing:", entry.target);
      if (entry.isIntersecting) {
        console.log("Element sliding in:", entry.target);
        entry.target.classList.add("slide-in");
      }
    });
  }

  const observer = new IntersectionObserver(addSlideIn, options);
  sections.forEach((section) => {
    observer.observe(section);
  });

  document.querySelector(".landing").classList.add("slide-in");
});
