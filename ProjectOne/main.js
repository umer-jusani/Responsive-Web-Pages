const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const primaryHeader = document.querySelector(".primary-header");

navToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

const slider = new A11YSlider(document.querySelector(".slider"), {
  // adaptiveHeight: true,
  dots: false,
  responsive: {
    320: {
      slidesToShow: 1,
      arrows: false,
    },
    640: {
      slidesToShow: 2,
      arrows: false,
    },
    1024: {
      slidesToShow: 2,
      dots: false, // dots enabled 1280px and up
    },
    1200: {
      slidesToShow: 3,
      dots: false, // dots enabled 1280px and up
      // disable: true
    },
  },
});

function updateClassBasedOnScreenSize() {
  const box = document.getElementById("desktop-flow");

  if (window.innerWidth >= 800) {
    // box.classList.remove("small-box");
    box.style.setProperty("--flow-spacer", "3rem");
    box.classList.add("flow");
  } else {
    box.style.setProperty("--flow-spacer", "0.8rem"); // Set custom CSS variable
    box.classList.add("flow");
    // box.classList.add("small-box");
  }
}

// Run on page load
updateClassBasedOnScreenSize();

window.addEventListener("resize", updateClassBasedOnScreenSize);
