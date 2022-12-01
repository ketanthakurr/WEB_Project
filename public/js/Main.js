// navbar JS
const navbar = document.querySelector('#navbar');

window.onscroll = () => {
    if (window.scrollY > 230) {
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

let movies = [
    {
        name: 'Mount Fuji',
        des: 'Without a doubt Japans most recognizable landmark, majestic Mount Fuji (Fuji-san) is also the countrys highest mountain peak.',
        image:'/static/images/mountfuji.jpg'
    },
    {
        name: 'The Matterhorn',
        des: 'he Matterhorn, Switzerlands iconic pointed peak is one of the highest mountains in the Alps. On the border with Italy, this legendary peak rises to 4,478 meters,',
        image:'/static/images/metter.jpg'
    },
    {
        name: "Bali, Indonesia",
        des: "Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems.",
        image:"/static/images/bali.jpg"
    },
    {
        name: 'New Orleans:',
        des: 'Raya, a warrior, sets out to track down Sisu, a dragon, who transferred all her powers into a magical gem which is now scattered all over the kingdom of Kumandra, dividing its people.',
        image: '/static/images/orlens.jpg'
    },
    {
        name: 'Kerry, Ireland',
        des: 'Set in a beautiful seaside town on the Italian Riviera, the original animated feature is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply held secret: he is a sea monster from another world just below the water surface.',
        image: '/static/images/kerry.jpg'
    }
]

const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }

    // creating DOM element
    let slide = document.createElement('div')
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attaching all elemets
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    slide.appendChild(content);
    carousel.appendChild(slide);

    //setting up images
    imgElement.src=movies[slideIndex].image;
    slideIndex++;
 
    //setting elements classnames
    slide.className= 'slider';
    content.className= 'slide-content';
    h1.className= 'movie-title';
    p.className= 'movie-des';
    imgElement.className = 'slider-img'

    sliders.push(slide);

    if(sliders.length)
    {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}%  - ${30* (sliders.length - 2 )}px)`;
    }
}

for (let i=0; i<3; i++){
    createSlide();
}

setInterval(()=>{
    createSlide();
}, 3000);
