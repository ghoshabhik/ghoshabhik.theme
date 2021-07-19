window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      //button.style = "display: none ";
      status.innerHTML = "Thanks!";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    if(form){
      form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
      });
    }
    

  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }


// Logic for Dark mode switch
window.addEventListener('DOMContentLoaded', (event) => {
  // console.log('DOM fully loaded and parsed');
  var body = document.getElementsByTagName("BODY")[0];
  const lightButton = document.getElementById('light-button');
  const darkButton = document.getElementById('dark-button');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');


  if(!localStorage.mode){
      localStorage.mode = 'light';
      darkButton.classList.remove('hidden');
  } else {
      if(localStorage.mode === 'light'){
          darkButton.classList.remove('hidden');
          lightButton.classList.add('hidden');
          // body.classList.toggle('dark');
          // console.log('found light')
      }
      if(localStorage.mode === 'dark'){
          lightButton.classList.remove('hidden');
          darkButton.classList.add('hidden');
          body.classList.toggle('dark');
          // console.log('found dark')
      }
  }
  
  lightButton.addEventListener('click', (e) => {
      localStorage.mode = 'light';
      darkButton.classList.remove('hidden');
      lightButton.classList.add('hidden');
      body.classList.toggle('dark');
  })

  darkButton.addEventListener('click', (e) => {
      localStorage.mode = 'dark';
      lightButton.classList.remove('hidden');
      darkButton.classList.add('hidden');
      body.classList.toggle('dark');
  })

  mobileMenuButton.addEventListener('click', (e) => {
      mobileMenu.classList.toggle('hidden');
  })

  var currentPath = window.location.pathname
  currentPath = currentPath.substr(1,currentPath.length)
  //console.log(currentPath)
  if(currentPath.length === 0){
    document.getElementById('home').classList.add('font-semibold')
    document.getElementById('home').classList.add('bg-gradient-to-r')
    document.getElementById('home').classList.add('from-purple-500')
    document.getElementById('home').classList.add('to-green-500')
    document.getElementById('home').classList.add('text-transparent')
    document.getElementById('home').classList.add('bg-clip-text')
  }
  if(currentPath.includes('posts')){
    document.getElementById('blog').classList.add('font-semibold')
    document.getElementById('blog').classList.add('bg-gradient-to-r')
    document.getElementById('blog').classList.add('from-purple-500')
    document.getElementById('blog').classList.add('to-green-500')
    document.getElementById('blog').classList.add('text-transparent')
    document.getElementById('blog').classList.add('bg-clip-text')
  }
  if(currentPath.includes('projects')){
    document.getElementById('project').classList.add('font-semibold')
    document.getElementById('project').classList.add('bg-gradient-to-r')
    document.getElementById('project').classList.add('from-purple-500')
    document.getElementById('project').classList.add('to-green-500')
    document.getElementById('project').classList.add('text-transparent')
    document.getElementById('project').classList.add('bg-clip-text')
  }
  if(currentPath.includes('about')){
    document.getElementById('bio').classList.add('font-semibold')
    document.getElementById('bio').classList.add('bg-gradient-to-r')
    document.getElementById('bio').classList.add('from-purple-500')
    document.getElementById('bio').classList.add('to-green-500')
    document.getElementById('bio').classList.add('text-transparent')
    document.getElementById('bio').classList.add('bg-clip-text')
  }

});

// Add Back Button Dynamically
const backButton = document.getElementById('back-button')
const backButtonText = document.getElementById('back-button-text')
var currentPath = window.location.pathname
currentPath = currentPath.substr(1,currentPath.length)
if(backButton){
  console.log('backbutton found')
  if(currentPath.includes('posts')){
    backButton.href = '/posts'
    backButtonText.innerText = 'All Posts'
  }
  if(currentPath.includes('projects')){
    backButton.href = '/projects'
    backButtonText.innerText = 'All Projects'
  }
}
