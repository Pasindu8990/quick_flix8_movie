// Function to handle button clicks
function handleDownloadButtonClick(event) {
    const button = event.target; // Get the clicked button
    const buttonId = button.id; // Get the button's unique ID

    // Retrieve the click count from localStorage (or default to 0)
    let clickCount = parseInt(localStorage.getItem(buttonId)) || 0;
    clickCount++; // Increment click count

    // Define URLs for each button
    const adsterraLink = "https://www.effectiveratecpm.com/f688abx48?key=6e2e8f87a813babc4bf0a2a886fbce62"; // Adsterra link
    const monetagLink = "https://roubauteezavoak.net/4/9029003"; // Monetag link

    // Define separate movie download links for each button
    const movieLinks = {
        "downloadBtn1": "https://usersdrive.com/hay28pz1iv84.html",
        "downloadBtn2": "https://usersdrive.com/902fxf7x9z09.html",
        "downloadBtn3": "https://usersdrive.com/n51xj700lmm0.html",
        "downloadBtn4": "https://usersdrive.com/l8pcwzf03v1g.html"
    };

    // Redirect based on click count
    if (clickCount === 1) {
        window.location.href = adsterraLink;
    } else if (clickCount === 2) {
        window.location.href = monetagLink;
    } else if (clickCount === 3) {
        window.location.href = movieLinks[buttonId] || "#"; // Default to "#" if no link is found
        clickCount = 0; // Reset to repeat the cycle
    }

    // Save the updated click count in localStorage
    localStorage.setItem(buttonId, clickCount);
}

// Add event listeners to all download buttons
const downloadButtons = document.querySelectorAll(".download-btn");
downloadButtons.forEach(button => {
    button.addEventListener("click", handleDownloadButtonClick);
});
