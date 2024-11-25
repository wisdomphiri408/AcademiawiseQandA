const searchBar = document.getElementById("searchBar");
const closeIcon = document.querySelector(".close-icon");
const logo = document.getElementById('logo');
const searchIcon = document.getElementById("search-icon");
const mainWrapper = document.querySelector('.main-wrapper');
const profile = document.querySelector(".profile-icon");
// Adding event listener to the search icon
searchIcon.addEventListener('click', function() {
  if (window.innerWidth < 768) { // Only apply this behavior on small screens
    searchBar.style.display = 'block';
    logo.style.display = 'none';
    closeIcon.style.display = 'block';
    profile.style.display = 'none';
  }
});

// Adding event listener to the close icon
closeIcon.addEventListener('click', function() {
  if (window.innerWidth < 768) { // Only apply this behavior on small screens
    searchBar.style.display = 'none';
    logo.style.display = 'block';
    closeIcon.style.display = 'none';
    profile.style.display = 'block';
  }
});


const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function () {
   // Toggle sidebar visibility
   sidebar.style.transform = sidebar.style.transform === 'translateX(0%)'
      ? 'translateX(-100%)'
      : 'translateX(0%)';
});

mainWrapper.addEventListener('click', function () {
  // Check if the sidebar is visible (in the viewport)
  if (window.innerWidth < 768 && sidebar.style.transform === 'translateX(0%)') {
    // Hide the sidebar by moving it out of the viewport
    sidebar.style.transform = 'translateX(-100%)';
  }
});
