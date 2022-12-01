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

function openPage(){
    var x = document.getElementById("search").value;

    if(x === "greece"){
        window.open("/greece")
    }
    if(x === "india"){
        window.open("/india")
    }
    if(x === "korea"){
        window.open("/korea")
    }
    if(x === "travel"){
        window.open("/travel")
    }
    if(x === "budget"){
        window.open("/budget")
    }
}
