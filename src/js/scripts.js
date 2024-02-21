// This file is intentionally blank
// Use this file to add JavaScript to your project
const scrollToTopBtn = document.querySelector("#btnScrollToTop");

window.addEventListener("scroll", () => {
    const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
    const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;

    if (window.innerWidth > 768) {
        if (scrolledPercentage > 50) {
            scrollToTopBtn.classList.add("showBtn");
        } else {
            scrollToTopBtn.classList.remove("showBtn");
        }
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

    // Disable pointer events to remove ::hover state
    scrollToTopBtn.style.pointerEvents = "none";
    // Reset the button's state after it's clicked
    scrollToTopBtn.classList.remove("showBtn");
    // Enable pointer events after a short delay to restore ::hover state
    setTimeout(() => {
        scrollToTopBtn.style.pointerEvents = "auto";
    }, 2000);
});

window.addEventListener("scroll", () => {
    // retrieve the total scrollable height of the page
    const scrollHeight = document.documentElement.scrollHeight;
    // amount of pixels the user has scrolled (current scroll position)
    const scrollTop = document.documentElement.scrollTop;
    // height of the browser window
    const windowHeight = window.innerHeight;

    // select the elements
    const progressDiv = document.getElementById("progress-div");
    const progressBarElement = document.getElementById("progress-bar");

    // calculate the percentage scrolled
    const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;
    // set the width of the progress bar
    progressBarElement.style.width = `${scrollPercentage}%`;

    // Hide the progress bar if not scrolled yet otherwise show it
    if (scrollPercentage < 1) {
        progressDiv.style.display = "none";
    } else {
        progressDiv.style.display = "block";
    }
});
