document.addEventListener("DOMContentLoaded", function () {
    const topnav = document.querySelector(".topnav");

    // Only activate slideshow if screen is at least 1100px wide
    if (window.innerWidth >= 1100) {
        const imageCount = 8;
        const imageFolder = "Images/topnav/";
        let current = 1;

        function changeBackground() {
            topnav.style.opacity = 0;

            setTimeout(() => {
                topnav.style.backgroundImage = `url('${imageFolder}${current}.jpg')`;
                topnav.style.opacity = 1;
                current = current >= imageCount ? 1 : current + 1;
            }, 500); // fade out time

            setTimeout(changeBackground, 4000); // change every 4 seconds
        }

        // Set initial background and start loop
        topnav.style.transition = "opacity 1s ease-in-out";
        topnav.style.backgroundImage = `url('${imageFolder}1.jpg')`;
        setTimeout(changeBackground, 4000);
    }
});

