let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector.apply('.navbar')

menuIcon.oneclick =() => {
menuIcon.classList.toggle('bx-x')
navbar.classList.toggle('active')
}