document.addEventListener("DOMContentLoaded", function () {
    const backgroundContainer = document.getElementById("theme");
    const imageFolder = "images/";
    const imageList = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg",];

    let currentIndex = 0;

    function changeBackground() {
        const imageUrl = imageFolder + imageList[currentIndex];
        backgroundContainer.style.backgroundImage = `url(${imageUrl})`;
        currentIndex = (currentIndex + 1) % imageList.length;
    }

    function preloadImages() {
        for (const imageName of imageList) {
            const imageUrl = imageFolder + imageName;
            const img = new Image();
            img.src = imageUrl;
        }
    }
    preloadImages();
    setInterval(changeBackground, 5000);
    changeBackground();
});

document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('backgroundAudio');

    // Wait for 2 seconds and then unmute
    setTimeout(function () {
        audio.muted = false;
    }, 2000);
});