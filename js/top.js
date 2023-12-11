// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // For smooth scrolling (if supported by the browser)
    });
}

// Show/hide the "Top" button based on the user's scroll position
window.onscroll = function() {
    const topButton = document.getElementById("upButton");
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}