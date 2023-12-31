// ----------------------------- Dark / Light Theme Toggle ----------------------------- 

let val = true
function toggleLightTheme() {
    if(val){
        document.body.classList.toggle('light');
        document.querySelector("#themeToggle").innerHTML = "Dark Theme"
        val = false
    }
    else{
        document.body.classList.remove('light');
        document.querySelector("#themeToggle").innerHTML = "Light Theme"
        val = true
    }
}







// ----------------------------- Smooth Scroll Effect ----------------------------- 

function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
            behavior: 'smooth'
        });
    }
}

// Add event listener
document.addEventListener('DOMContentLoaded', function () {
    // Get references to elements
    const themeToggle = document.getElementById('themeToggle');
    const navItems = document.querySelectorAll('.nav-items .item a');

    // Add event listener for theme toggle button
    themeToggle.addEventListener('click', function () {
        toggleLightTheme();
    });

    // Add event listeners for navigation items
    navItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScroll(targetId);
        });
    });
});







// ----------------------------- Resume Download Function ----------------------------- 

document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    var downloadButton = document.getElementById('downloadButton');

    // Add a click event listener to the button
    downloadButton.addEventListener('click', function() {
        // Replace the URL below with the actual link to your portfolio file
        var portfolioUrl = 'Images/Yash Chavan - Portfolio.pdf';

        // Create a temporary link element
        var link = document.createElement('a');

        // Set the href attribute of the link to the portfolio URL
        link.href = portfolioUrl;

        // Set the download attribute to prompt the user to download the file
        link.download = 'YourPortfolio.pdf';

        // Append the link to the document
        document.body.appendChild(link);

        // Trigger a click event on the link to initiate the download
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
    });
});








// ----------------------------- About Buttons Functionality ----------------------------- 

function showInfo(buttonId) {
    // Get all info content elements
    var allInfoContents = document.querySelectorAll('.info-content');
    
    // Iterate through each info content
    allInfoContents.forEach(function(infoContent) {
        // Check if the current info content matches the clicked button
        if (infoContent.id === "info-" + buttonId) {
            if (infoContent.style.maxHeight) {
                // Toggle visibility by setting max height to null
                infoContent.style.maxHeight = null;
            } else {
                // Expand the info content by setting max height to its scroll height
                infoContent.style.maxHeight = infoContent.scrollHeight + "px";
            }
        } else {
            // Collapse other info contents
            infoContent.style.maxHeight = null;
        }
    });
}
