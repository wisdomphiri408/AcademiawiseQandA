const homeIcon = document.getElementById('home-icon');
const mainSection = document.querySelector('.main-content');
const filesIcon = document.getElementById('files-icon');
const savedQAIcon = document.getElementById('saved-QAIcon');


function details(h3,p1){
  mainSection.innerHTML = '';
  mainSection.innerHTML = `${h3} ${p1}`;
}

homeIcon.addEventListener('click',function(){
  details(`<h3>Welcome to Q and A website</h3>`,`  <p>This website will solve almost every school problem you have all you need is to ask</p>`);
});

filesIcon.addEventListener('click',function(){
  details(`<h3>You can download documents here for free</h3>`,`  <p>all you need is scroll through the available books, but life is easier with a search bar, so search the document</p>`);
});


savedQAIcon.addEventListener('click',function(){
  details(`<h3>You will find all your saved questions and answers here</h3>`,`<p>
  Why search for a question and answer you saw instead of just saving it for quick overview
  </p>`);
});


