// JavaScript for Interactive Portfolio

// ScrollReveal Animation
ScrollReveal().reveal(".section-title", {
    origin: "top",
    distance: "50px",
    duration: 1000,
    reset: true,
  });
  
  ScrollReveal().reveal(".about__subtitle, .about__text", {
    origin: "left",
    distance: "50px",
    duration: 1000,
    delay: 200,
    reset: true,
  });
  
  ScrollReveal().reveal(".skills ul li", {
    origin: "right",
    distance: "50px",
    duration: 1000,
    interval: 200,
    reset: true,
  });
  
  ScrollReveal().reveal(".portfolio p, .contact__form", {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    delay: 300,
    reset: true,
  });
  
  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Dynamic Navbar Toggle
  const checkbox = document.getElementById("check");
  const navContent = document.querySelector(".nav__content ul");
  
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      navContent.style.transform = "translateX(0)";
    } else {
      navContent.style.transform = "translateX(-100%)";
    }
  });
  
  // Contact Form Validation
  const contactForm = document.querySelector(".contact__form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector(".contact__form input[type='text']").value;
    const email = document.querySelector(".contact__form input[type='email']").value;
    const message = document.querySelector(".contact__form textarea").value;
  
    if (name && email && message) {
      alert("Thank you for reaching out, " + name + "! Your message has been sent successfully.");
      contactForm.reset();
    } else {
      alert("Please fill in all fields before submitting.");
    }
  });
  
  // Highlight Active Section in Navbar
  const sections = document.querySelectorAll("section");
  const options = { threshold: 0.6 };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const navItem = document.querySelector(
        `nav ul li a[href="#${entry.target.id}"]`
      );
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));
        if (navItem) navItem.classList.add("active");
      }
    });
  }, options);
  
  sections.forEach((section) => {
    observer.observe(section);
  });
  
  // Dark Mode Toggle (Optional Feature)
  const footerTitle = document.querySelector(".footer__title");
  footerTitle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    alert("Dark mode toggled!");
  });
  
  // Add a Smooth Fade-In Effect to Images
  const images = document.querySelectorAll("img");
  images.forEach((image) => {
    image.style.opacity = 0;
    image.onload = () => {
      image.style.transition = "opacity 1s";
      image.style.opacity = 1;
    };
  });
  