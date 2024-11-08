const homeIcon = document.getElementById('home-icon');
const mainSection = document.querySelector('.main-content');
const filesIcon = document.getElementById('files-icon');
const savedQAIcon = document.getElementById('saved-QAIcon');

homeIcon.addEventListener('click',function(){
  mainSection.innerHTML = '';
  mainSection.innerHTML=`<h3>Welcome to Q and A website</h3>
  <p>This website will solve almost every school problem you have all you need is to ask</p>
  `;
});


filesIcon.addEventListener('click',function(){
  mainSection.innerHTML = '';
  mainSection.innerHTML=`<h3>You can download documents here for free</h3>
  <p>all you need is scroll through the available books, but life is easier with a search bar, so search the document</p>
  `;
});

savedQAIcon.addEventListener('click',function(){
  mainSection.innerHTML = '';
  mainSection.innerHTML=`<h3>You will find all your saved questions and answers here</h3>
  <p>
  Why search for a question and answer you saw instead of just saving it for quick overview
  </p>
  `;
});

