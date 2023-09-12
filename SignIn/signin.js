var email = document.getElementById('email').value;
var password = document.getElementById('password').value;

localStorage.setItem('email', email);
localStorage.setItem('password', password);


var emailAdd = localStorage.getItem('email');
var passWord = localStorage.getItem('password');
