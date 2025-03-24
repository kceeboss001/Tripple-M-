// Toggle the hamburger menu visibility
function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("show");
}

// Smooth scrolling effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
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
