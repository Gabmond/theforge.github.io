const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navButton");
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.my-navbar-list');

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


const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
      });
    }, {})
  const animationElements = document.querySelectorAll(".animation");
  animationElements.forEach((el) => {
  observer.observe(el);
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
