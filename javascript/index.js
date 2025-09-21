document.getElementById("top-btn").addEventListener("click", function() {
    document.getElementById("top-games-container").scrollIntoView(
        {
            behavior:"smooth"
        }
    );
});

document.getElementById("rise-btn").addEventListener("click", function() {
    document.getElementById("rise-games-container").scrollIntoView(
        {
            behavior:"smooth"
        }
    );
});










document.getElementById('site-year').textContent = new Date().getFullYear();