// navbar JS

const navbar = document.querySelector('#navbar');

window.onscroll = () => {
    if (window.scrollY > 300) {
        console.log("nzjbjbjbczjbczjbjbbj");
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
};;
