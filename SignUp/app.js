var fullname = document.getElementById('fullname').value
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;

localStorage.setItem('fullname', fullname);
localStorage.setItem('email', email);
localStorage.setItem('password', password);

let names = localStorage.getItem(fullname);
let emails = localStorage.getItem('email');
let passwords = localStorage.getItem('password');
