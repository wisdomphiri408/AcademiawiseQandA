const searchBar = document.getElementById("searchBar");
const closeIcon = document.querySelector(".close-icon");
const logo = document.getElementById('logo');
const searchIcon = document.getElementById("search-icon");

searchBar.style.display = 'none';
//adding event listener to the search icon

searchIcon.addEventListener('click',function(){
  if(searchBar.style.display === 'none'){
    searchBar.style.display = 'block';
    logo.style.display = 'none';
    closeIcon.style.display =  'block';
  }
});
//adding event listener to closeIcon
closeIcon.addEventListener('click',function(){
  if(searchBar.style.display === 'block'){
    searchBar.style.display = 'none';
    logo.style.display = 'block';
    closeIcon.style.display = 'none';
  }
});
