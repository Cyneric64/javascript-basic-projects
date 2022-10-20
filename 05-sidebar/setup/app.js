// Get buttons
const toggleSidebar = document.querySelector('.sidebar-toggle');
const closeSidebar = document.querySelector('.close-btn');

// Get sidebar
const sidebar = document.querySelector('.sidebar');

toggleSidebar.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar');
});

closeSidebar.addEventListener('click', function () {
        sidebar.classList.remove('show-sidebar');
});

