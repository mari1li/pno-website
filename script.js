var image = document.getElementById("image");

var images = ["./assets/desbebe.jpg", "./assets/lematin.png", "./assets/azipowder.png"];

var index = 0;

function updateImage() {
    image.style.opacity = 0; // Set opacity to 0 before changing the image

    setTimeout(function () {
      image.src = images[index];
      image.style.opacity = 1; // Set opacity to 1 after changing the image
      index = (index + 1) % images.length;
    }, 500); // Adjust the timeout duration as needed
}

setInterval(updateImage, 5000);