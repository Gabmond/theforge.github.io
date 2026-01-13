const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navButton");
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.my-navbar-list');
const navbar = document.querySelector('.my-navbar');

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - 150) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

navToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

document.querySelectorAll('.navButton').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});


/* Close menu when a nav link is clicked */
document.querySelectorAll('.navButton').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});
