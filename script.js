const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();

// GitHub Pages is a static host. This form opens the visitor's email app.
// Replace the address below with the studio's real enquiry email.
const studioEmail = "devkotarejil@gmail.com";
document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Project enquiry from ${form.get("name")}`);
  const body = encodeURIComponent(
    `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nProject: ${form.get("project")}\n\nMessage:\n${form.get("message")}`
  );
  document.getElementById("formNote").textContent =
    "Opening your email app. If it does not open, email us directly at " + studioEmail + ".";
  window.location.href = `mailto:${studioEmail}?subject=${subject}&body=${body}`;
});
