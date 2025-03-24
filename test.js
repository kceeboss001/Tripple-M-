// Variables to store modal and image data
let modal = document.getElementById("imageModal");
let modalImage = document.getElementById("modalImage");
let currentImageIndex = 0;
let images = [];

// Open modal when an image is clicked
document.querySelectorAll(".album-image").forEach((image, index) => {
  image.addEventListener("click", () => {
    currentImageIndex = index;
    images = Array.from(image.closest(".images").getElementsByTagName("img"));
    modal.style.display = "flex";
    showImage(currentImageIndex);
  });
});

// Close modal when 'X' is clicked
document.querySelector(".close-btn").addEventListener("click", () => {
  modal.style.display = "none";
});

// Function to show the image in the modal
function showImage(index) {
  modalImage.src = images[index].src;
}

// Function to change image (next or previous)
function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  showImage(currentImageIndex);
}

// Close modal if clicked outside of the modal content
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
