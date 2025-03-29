document.addEventListener("DOMContentLoaded", function() {
    // Get the footer elements
    var footer = document.querySelector("footer");
    var copyrightYear = footer.querySelector("#copyright");
    var lastModified = footer.querySelector("#lastModified");

    // Set current year for copyright
    var currentYear = new Date().getFullYear();
    copyrightYear.textContent = "© " + currentYear + " Nathan Harris";

    // Get the last modified date of the document
    var lastModifiedDate = new Date(document.lastModified);
    var options = { year: "numeric", month: "long", day: "numeric" };
    var formattedDate = lastModifiedDate.toLocaleDateString("en-US", options);

    // Set the last modified date in the footer
    lastModified.textContent = "Last Modified: " + formattedDate;
});