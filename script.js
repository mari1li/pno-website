var image = document.getElementById("image");

var images = ["./assets/desbebe.jpg", "./assets/lematin.png", "./assets/azipowder.png"];

var index = 0;

function updateImage() {
  image.style.opacity = 0.1; // Set opacity to 0 before changing the image

  setTimeout(function () {
     image.src = images[index];
       image.style.opacity = 1; // Set opacity to 1 after changing the image
       index = (index + 1) % images.length;
     }, 500); // Adjust the timeout duration as needed
}

 setInterval(updateImage, 5000);

// var imgs = document.querySelectorAll('.slider img');
// var dots = document.querySelectorAll('.dot');
// var currentImg = 0; // index of the first image 
// const interval = 3000; // duration(speed) of the slide

// function changeSlide(n) {
//   for (var i = 0; i < imgs.length; i++) { // reset
//     imgs[i].style.opacity = 0;
//     dots[i].className = dots[i].className.replace(' active', '');
//   }

//   currentImg = n;

//   imgs[currentImg].style.opacity = 1;
//   dots[currentImg].className += ' active';
// }

// var timer = setInterval(changeSlide, interval);

// currentImg = (currentImg + 1) % imgs.length; // update the index number

// if (n != undefined) {
//     clearInterval(timer);
//     timer = setInterval(changeSlide, interval);
//     currentImg = n;
// }