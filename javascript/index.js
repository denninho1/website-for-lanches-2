let header = document.querySelector('.header');
let navHeader = document.querySelector('.nav-header');
let searchBtn = document.querySelector('#search');
let searchBar = document.querySelector('.pesquisa');
let closeSearch = document.querySelector('#close-search')
let loginBtn = document.querySelector('#login-btn')
let loginBar = document.querySelector('.login')
let closeLogin = document.querySelector('#close-login')
let carBtn = document.querySelector('#carrinho');
let carBar = document.querySelector('.carrinho');
let closeCar = document.querySelector('#close-carrinho');
let menuBtn = document.querySelector('#menu-mobile');
let menuBar = document.querySelector('.nav-menu')
let closeMenu = document.querySelector('#close-menu');

window.addEventListener('scroll', function(){
    let scrollHeader = this.window.scrollY
    if (scrollHeader > 3) {
        header.style.backgroundColor = "#133B5C"
        header.style.boxShadow = "0 0 1rem rgba(0,0,0,0.8)"
    }else {
        header.style.background = "transparent"
        header.style.boxShadow = "none"
    }
});

loginBtn.addEventListener('click', () => {
    loginBar.classList.add('active');
    searchBar.classList.remove('active');
    carBar.classList.remove('active');
});

closeLogin.addEventListener('click', () => {
    loginBar.classList.remove('active');
});

carBtn.addEventListener('click', () => {
    carBar.classList.toggle('active');
    searchBar.classList.remove('active');
    loginBar.classList.remove('active');
});

closeCar.addEventListener('click', () => {
    carBar.classList.remove('active');

});

searchBtn.addEventListener('click', () => {
    searchBar.classList.toggle('active');
    loginBar.classList.remove('active');
    carBar.classList.remove('active');
});

closeSearch.addEventListener('click', () => {
    searchBar.classList.remove('active');
}); 

menuBtn.addEventListener('click', () => {
    menuBar.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    menuBar.classList.remove('active');
});

// Mostrar Senha / Esconder Senha
const inputPassword = document.getElementById("senha");
const eye = document.querySelector(".toggle");

function mostrarSenha() {
    if (inputPassword.type === 'password') {
        inputPassword.setAttribute('type', 'text');
        eye.classList.add('hide')
    } else {
        inputPassword.setAttribute('type', 'password');
        eye.classList.remove('hide')
    }
}






