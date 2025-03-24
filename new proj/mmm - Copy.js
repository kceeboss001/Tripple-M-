// Smooth scrolling effect
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

let currentSlideIndex = 0;

// Function to show the current slide
function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (index >= slides.length) {
    currentSlideIndex = 0; // Loop back to the first slide
  }
  if (index < 0) {
    currentSlideIndex = slides.length - 1; // Loop to the last slide
  }

  slides.forEach((slide, i) => {
    slide.style.display = "none"; // Hide all slides
  });

  slides[currentSlideIndex].style.display = "block"; // Show the current slide
}

// Function to go to the next slide
function nextSlide() {
  currentSlideIndex++;
  showSlide(currentSlideIndex);
}

// Function to go to the previous slide
function prevSlide() {
  currentSlideIndex--;
  showSlide(currentSlideIndex);
}

// Initialize the slideshow
showSlide(currentSlideIndex);

// Optional: Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Smooth scrolling effect
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Toggle menu on mobile view
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("active"); // Toggle the "active" class to show/hide the menu
}

let currentSlideIndex = 0;

// Function to show the current slide
function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (index >= slides.length) {
    currentSlideIndex = 0; // Loop back to the first slide
  }
  if (index < 0) {
    currentSlideIndex = slides.length - 1; // Loop to the last slide
  }

  slides.forEach((slide, i) => {
    slide.style.display = "none"; // Hide all slides
  });

  slides[currentSlideIndex].style.display = "block"; // Show the current slide
}

// Function to go to the next slide
function nextSlide() {
  currentSlideIndex++;
  showSlide(currentSlideIndex);
}

// Function to go to the previous slide
function prevSlide() {
  currentSlideIndex--;
  showSlide(currentSlideIndex);
}

// Initialize the slideshow
showSlide(currentSlideIndex);

// Optional: Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
