const searchBar = document.getElementById("searchBar");
const closeIcon = document.querySelector(".close-icon");
const logo = document.getElementById('logo');
const searchIcon = document.getElementById("search-icon");
const mainWrapper = document.querySelector('.main-wrapper');
// Function to reset visibility based on screen size
function handleResize() {
  if (window.innerWidth >= 768) {
    searchBar.style.display = 'block'; // Ensure search bar is visible on larger screens
    logo.style.display = 'block'; // Ensure logo is visible on larger screens
    closeIcon.style.display = 'none'; // Hide close icon on larger screens
  } else {
    searchBar.style.display = 'none'; // Hide search bar on smaller screens initially
    logo.style.display = 'block'; // Show logo on smaller screens
    closeIcon.style.display = 'none'; // Ensure close icon is hidden initially
  }
}

// Adding event listener to the search icon
searchIcon.addEventListener('click', function() {
  if (window.innerWidth < 768) { // Only apply this behavior on small screens
    searchBar.style.display = 'block';
    logo.style.display = 'none';
    closeIcon.style.display = 'block';
  }
});

// Adding event listener to the close icon
closeIcon.addEventListener('click', function() {
  if (window.innerWidth < 768) { // Only apply this behavior on small screens
    searchBar.style.display = 'none';
    logo.style.display = 'block';
    closeIcon.style.display = 'none';
  }
});

// Listen for window resize to adjust the layout
window.addEventListener('resize', handleResize);

// Call the function once to set the correct display state on load
handleResize();


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
