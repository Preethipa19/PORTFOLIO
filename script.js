document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    // sticky navbar on scroll script
    if (window.scrollY > 20) {
      document.querySelector(".navbar").classList.add("sticky");
    } else {
      document.querySelector(".navbar").classList.remove("sticky");
    }

    // scroll-up button show/hide script
    if (window.scrollY > 500) {
      document.querySelector(".scroll-up-btn").classList.add("show");
    } else {
      document.querySelector(".scroll-up-btn").classList.remove("show");
    }
  });

  // slide-up script
  document
    .querySelector(".scroll-up-btn")
    .addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
      // removing smooth scroll on slide-up button click
      document.documentElement.style.scrollBehavior = "auto";
    });

  // applying smooth scroll on menu items click
  document.querySelectorAll(".navbar .menu li a").forEach(function (anchor) {
    anchor.addEventListener("click", function () {
      document.documentElement.style.scrollBehavior = "smooth";
    });
  });

  // toggle menu/navbar script
  document.querySelector(".menu-btn").addEventListener("click", function () {
    document.querySelector(".navbar .menu").classList.toggle("active");
    document.querySelector(".menu-btn i").classList.toggle("active");
  });

  // typing text animation script
  var options = {
    strings: ["Full Stack Developer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  };

  var typed = new typed(".typing", options);
  var typed2 = new typed(".typing-2", options);
});
