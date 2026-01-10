const sidebar = document.getElementById("nav-ul");

function showSidebar() {
    sidebar.style.display = "flex";
}

function hideSidebar() {
    sidebar.style.display = "none";
}

/* VERY IMPORTANT: force it hidden on page load */
document.addEventListener("DOMContentLoaded", () => {
    sidebar.style.display = "none";
});
