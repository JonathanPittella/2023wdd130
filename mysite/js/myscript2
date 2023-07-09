    var images = ["images/yougot.jpg", "images/open.jpg"];
    var currentIndex = 0;
    var gifImage = document.getElementById("gifImage");

    function changeImage() {
        gifImage.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeImage, 1000);