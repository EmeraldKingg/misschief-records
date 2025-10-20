// script.js
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName, event) {
    // Remove active classes
    for (let tablink of tabLinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabContents) {
        tabcontent.classList.remove("active-tab");
    }

    // Add active class to clicked tab
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}
