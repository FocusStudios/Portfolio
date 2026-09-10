const LogoContainer = document.querySelector(".logo-container");

const Header = document.querySelector('.logo-container header');
const Section1 = document.querySelector('.logo-container .section1');
const Section2 = document.querySelector('.logo-container .section2');
const Section3 = document.querySelector('.logo-container .section3');
const Section4 = document.querySelector('.logo-container .section4');
const Section5 = document.querySelector('.logo-container .section5');
const Section6 = document.querySelector('.logo-container .section6');
const Footer = document.querySelector('.logo-container footer');

const logo = document.querySelector(".logo");
const glass = document.querySelector(".glow");
const audio1 = document.querySelector(".audio1");
const audio2 = document.querySelector(".audio2");

const Button = document.querySelector(".logo-container button");

const ProjectContainer = document.querySelector(".project-container");
const Back = document.querySelector(".project-container .back");
const Navbar = document.querySelector("nav .carousel");
const Sections = document.querySelectorAll("nav span");
const Containers = document.querySelectorAll(".project-container .Container");

const services = [
  {img: "Icons/Code.svg", title: "Code", text: "Convert UI/UX designs into HTML, CSS and JS Code"},
  {img: "Icons/Create.svg", title: "Create", text: "Create UI elements such as carousels and nav bars"},
  {img: "Icons/Responsive.svg", title: "Responsive", text: "Fully responsive layouts for all devices"},
  {img: "Icons/Enhance.svg", title: "Enhance", text: "Deliver smooth and accessible user experience"},
  {img: "Icons/Animation.svg", title: "Animation", text: "Eye-catching animations that bring designs to life"},
  {img: "Icons/Maintainace.svg", title: "Maintainace", text: "Code maintainance and performance optimization"}
];

const languages = ["HTML", "CSS", "JavaScript"];

const features = [
  {img: "Icons/Diamond.svg", title: "Code", text: "Unique Design"},
  {img: "Icons/Idea.svg", title: "Create", text: "Creative Ideas"},
  {img: "Icons/Customize.svg", title: "Responsive", text: "Fully Customizable"},
  {img: "Icons/Scalable.svg", title: "Enhance", text: "Scalable Code"},
  {img: "Icons/OnTime.svg", title: "Animation", text: "On Time Delivery"},
  {img: "Icons/ShakeHands.svg", title: "Maintainace", text: "Ongoing Support"}
];

const reviews = [
  {name: "Daniel Carter", text: "Focus delivered clean, responsive code that perfectly matched our designs and worked smoothly across all devices.", img: "Icons/profile1.png"},
  {name: "Ryan Parker", text: "Turning our designs into code was effortless. The result was clean, responsive, well-structured, and ready to use across different devices.", img: "Icons/profile2.png"},
  {name: "Sarah Collins", text: "Focus combines design and development expertise, delivering high-quality code while preserving every detail of our UI/UX concepts.", img: "Icons/profile3.png"},
  {name: "Michael Turner", text: "Our UI designs were transformed into polished, responsive code with excellent attention to detail and a smooth user experience.", img: "Icons/profile4.png"},
  {name: "Emily Johnson", text: "Focus delivered accurate, scalable front-end code with perfect layouts, animations, and interactions. A great design-to-code choice.", img: "Icons/profile5.png"},
  {name: "Jessica Brown", text: "The design-to-code process was incredibly smooth. The final HTML, CSS, and JavaScript perfectly matched our UI designs.", img: "Icons/profile6.png"}
];


// Services
services.forEach((service,index) => {

Section2.querySelector("ul").innerHTML += `

<li style="--i:${index};">

 <div class="box">

  <img class="icon" src="${service.img}">

  <h4>${service.title}</h4>

  <span>${service.text}</span>

 </div>

</li>

`;

});


// Languages
languages.forEach(language => {

Section3.innerHTML += `

<div class="path-container">

 <svg class="circular-path" viewBox="0 0 200 200">

  <circle class="background-path" cx="100" cy="100" r="70"/>

  <circle class="progress" cx="100" cy="100" r="70"/>

 </svg>

 <span class="percentage" x="100" y="100">0%</span>
 <span class="language" x="100" y="100">${language}</span>

</div>

`;

});


//features
features.forEach((feature,index) => {

Section4.querySelector("ul").innerHTML += `

<li style="--i:${index};">

  <img class="icon" src="${feature.img}">

  <span>${feature.text}</span>

</li>

`;

});


// Reviews
reviews.forEach(review => {

Section5.querySelector("ul").innerHTML += `

<li>

<img class="profile" src="${review.img}">

<div class="details">

<p>${review.text}</p>

<div class="line"></div>

<div class="wrapper">

<span class="gradient">${review.name}</span>

<div class="rate">
<img class="star" src="Icons/star.svg">
<img class="star" src="Icons/star.svg">
<img class="star" src="Icons/star.svg">
<img class="star" src="Icons/star.svg">
<img class="star" src="Icons/star.svg">
</div>

</div>

</div>

</li>

`;

});

const progresss = document.querySelectorAll('.logo-container .progress');
const textPs = document.querySelectorAll('.logo-container .percentage');

// Projects
const Carousel = [

  { link: "https://focusstudios.github.io/Carousel/Basic1.html", demo: "https://focusstudios.github.io/Carousel-Demo/Basic1.html", title: "Basic Carousel - Style 1" },
  { link: "https://focusstudios.github.io/Carousel/Basic2.html", demo: "https://focusstudios.github.io/Carousel-Demo/Basic2.html", title: "Basic Carousel - Style 2" },
  { link: "https://focusstudios.github.io/Carousel/InfiniteSliderH.html", demo: "https://focusstudios.github.io/Carousel-Demo/InfiniteSliderH.html", title: "Infinite Carousel" },
  { link: "https://focusstudios.github.io/Carousel/Slides2.html", demo: "https://focusstudios.github.io/Carousel-Demo/Slides2.html", title: "Slides - Style 1" },
  { link: "https://focusstudios.github.io/Carousel/Slides3.html", demo: "https://focusstudios.github.io/Carousel-Demo/Slides3.html", title: "Slides - Style 2" },
  { link: "https://focusstudios.github.io/Carousel/Slides4.html", demo: "https://focusstudios.github.io/Carousel-Demo/Slides4.html", title: "Slides - Style 3" },
  { link: "https://focusstudios.github.io/Carousel/Circular.html", demo: "https://focusstudios.github.io/Carousel-Demo/Circular.html", title: "Circular Carousel" },
  { link: "https://focusstudios.github.io/Carousel/Rotating.html", demo: "https://focusstudios.github.io/Carousel-Demo/Rotating.html", title: "Rotating Carousel" },
  { link: "https://focusstudios.github.io/Carousel/ImageSlider1.html", demo: "https://focusstudios.github.io/Carousel-Demo/ImageSlider1.html", title: "Image Slider - Style 1" },
  { link: "https://focusstudios.github.io/Carousel/HorizontalSlider.html", demo: "https://focusstudios.github.io/Carousel-Demo/HorizontalSlider.html", title: "Image Slider - Style 2" },
  { link: "https://focusstudios.github.io/Carousel/Offers.html", demo: "https://focusstudios.github.io/Carousel-Demo/Offers.html", title: "3D Slider" },
  { link: "https://focusstudios.github.io/Carousel/Photos.html", demo: "https://focusstudios.github.io/Carousel-Demo/Photos.html", title: "Swiper - Cards" }

]

const BottomNavbar = [

  { link: "https://focusstudios.github.io/BottomNavbar/Dynamic.html", demo: "https://focusstudios.github.io/BottomNavbar-Demo/Dynamic.html", title: "Dynamic" },
  { link: "https://focusstudios.github.io/BottomNavbar/Diamond.html", demo: "https://focusstudios.github.io/BottomNavbar-Demo/Diamond.html", title: "Diamond" },
  { link: "https://focusstudios.github.io/BottomNavbar/Bouncy.html", demo: "https://focusstudios.github.io/BottomNavbar-Demo/Bouncy.html", title: "Bouncy" },
  { link: "https://focusstudios.github.io/BottomNavbar/Shadow.html", demo: "https://focusstudios.github.io/BottomNavbar-Demo/Shadow.html", title: "Shadow" },
  { link: "https://focusstudios.github.io/BottomNavbar/Gentle.html", demo: "https://focusstudios.github.io/BottomNavbar-Demo/Gentle.html", title: "Gentle" },
  { link: "https://focusstudios.github.io/BottomNavbar/Marshmallow.html", demo: "https://focusstudios.github.io/BottomNavbar-Demo/Marshmallow.html", title: "Marshmallow" },
  { link: "https://focusstudios.github.io/BottomNavbar/Lamp.html", demo: "https://focusstudios.github.io/BottomNavbar-Demo/Lamp.html", title: "Lamp" },
  { link: "https://focusstudios.github.io/BottomNavbar/Liquid.html", demo: "https://focusstudios.github.io/BottomNavbar-Demo/Liquid.html", title: "Liquid" }

]

const SideNavbar = [

  { link: "https://focusstudios.github.io/SideNavbar/GlowEffect.html", demo: "https://focusstudios.github.io/SideNavbar-Demo/GlowEffect.html", title: "Glow Effect" },
  { link: "https://focusstudios.github.io/SideNavbar/ShadowEffect.html", demo: "https://focusstudios.github.io/SideNavbar-Demo/ShadowEffect.html", title: "Shadow Effect" },
  { link: "https://focusstudios.github.io/SideNavbar/Glassmorphism.html", demo: "https://focusstudios.github.io/SideNavbar-Demo/Glassmorphism.html", title: "Glassmorphism Effect" },
  { link: "https://focusstudios.github.io/SideNavbar/OnlineTrade.html", demo: "https://focusstudios.github.io/SideNavbar-Demo/OnlineTrade.html", title: "Light & Dark Mode" },
  { link: "https://focusstudios.github.io/SideNavbar/SmartHome.html", demo: "https://focusstudios.github.io/SideNavbar-Demo/SmartHome.html", title: "Smart Home App" },
  { link: "https://focusstudios.github.io/SideNavbar/Neumorphism.html", demo: "https://focusstudios.github.io/SideNavbar-Demo/Neumorphism.html", title: "Neumorphism Effect" }

]

const LandingPage = [

  { link: "https://focusstudios.github.io/LandingPage/Skincare.html", demo: "https://focusstudios.github.io/LandingPage-Demo/Skincare.html", title: "Skincare Landing Page" },
  { link: "https://focusstudios.github.io/LandingPage/Burger.html", demo: "https://focusstudios.github.io/LandingPage-Demo/Burger.html", title: "Fast Food Landing Page" },

]

const lists = [
  
  { data: Carousel, element: Containers[0] },
  { data: BottomNavbar, element: Containers[1] },
  { data: SideNavbar, element: Containers[2] },
  { data: LandingPage, element: Containers[3] }

];

lists.forEach(list => {

  list.data.forEach(item => {

    list.element.innerHTML += `

    <li>
   
     <a href="${item.link}" target="_blank">
      <iframe src="${item.demo}" loading="lazy"></iframe>
     </a>

     <span>${item.title}</span>
   
    </li>

    `;
  });

});

const radius = 70;
const circumference = 2 * Math.PI * radius;
const target1 = 90;
const target2 = 85;
const target3 = 80;
let current1 = 0;
let current2 = 0;
let current3 = 0;
let Y;
let rect;
let triggered = false;
let MaxScrollLeft = Section5.querySelector(".carousel-container").scrollWidth - Section5.querySelector(".carousel-container").clientWidth;


function onScroll() {

if (triggered) return;

if (LogoContainer.scrollTop >= Header.offsetHeight + Section1.offsetHeight + 0.4 * Section2.offsetHeight) {

triggered = true;

// start animation
setInterval(() => {animate();},10);
      
}

}

function animate() {

if (current1 <= target1) {
const offset = circumference - (current1 / 100) * circumference;
progresss[0].style.strokeDashoffset = offset;
textPs[0].textContent = current1 + '%';
current1++;
    
}

if (current2 <= target2) {
const offset = circumference - (current2 / 100) * circumference;
progresss[1].style.strokeDashoffset = offset;
textPs[1].textContent = current2 + '%';
current2++;
    
}

if (current3 <= target3) {
const offset = circumference - (current3 / 100) * circumference;
progresss[2].style.strokeDashoffset = offset;
textPs[2].textContent = current3 + '%';
current3++;
    
}

}

// Show Sections
LogoContainer.addEventListener("scroll",() => {

if(LogoContainer.scrollTop >= 0.5 * Header.offsetHeight){Section1.style.opacity="1";}

if(LogoContainer.scrollTop >= Header.offsetHeight + 0.3 * Section1.offsetHeight){

Section2.style.opacity="1";

Section2.querySelectorAll("li").forEach((Item,index) => {
Item.style.animation = "Show5 0.5s ease forwards";
Section2.querySelectorAll("li")[index].style.animationDelay = `${index * 0.2}s`;
});

}

onScroll();

if(LogoContainer.scrollTop >= Header.offsetHeight + Section1.offsetHeight + Section2.offsetHeight + 0.2 * Section3.offsetHeight){

Section4.querySelectorAll("li").forEach((Item,index) => {
Item.style.animation = "Show5 0.5s ease forwards";
Section4.querySelectorAll("li")[index].style.animationDelay = `${index * 0.2}s`;
});

}

});

rect = glass.getBoundingClientRect();

function updateDimensions() {

MaxScrollLeft = Section5.querySelector(".carousel-container").scrollWidth - Section5.querySelector(".carousel-container").clientWidth;

// Touch or mouse setup
if ("ontouchstart" in document.documentElement) {

ProjectContainer.classList.replace("mouse","touch");

} else {

ProjectContainer.classList.replace("touch","mouse");

}

// Clip path position
if(window.innerWidth > window.innerHeight){Y = window.innerWidth;}else{Y = window.innerHeight;}

if(ProjectContainer.classList.contains("active")){
    
ProjectContainer.style.clipPath=`circle(${Y}px at 50vw 50vh)`;

}else{

rect = glass.getBoundingClientRect();

ProjectContainer.style.clipPath=`circle(9.5px at ${rect.x + 5}px ${rect.y + 11}px)`;

}

}

// Initial call
updateDimensions();

// Update on resize and scroll change
window.addEventListener("resize", updateDimensions);
LogoContainer.addEventListener("scroll", updateDimensions);

Button.addEventListener("click",() => {
  
  logo.classList.add("active");
  ProjectContainer.querySelector(".wrapper").classList.add("active");

  setTimeout(() => {
    
   ProjectContainer.classList.add("active");
   updateDimensions();

  },800);
  
  audio1.play();

});

Back.addEventListener("click",() => {

  ProjectContainer.classList.remove("active");
  updateDimensions();

  setTimeout(() => {
    
   logo.classList.remove("active");
   ProjectContainer.querySelector(".wrapper").classList.remov("active");
  
  },600);

  audio2.play();

});


// Carousel
Section5.querySelector(".carousel-container").addEventListener("scroll",() => {

if(Section5.querySelector(".carousel-container").scrollLeft <= 20){Section5.querySelector(".carousel-wrapper .left").classList.remove("active");}else{Section5.querySelector(".carousel-wrapper .left").classList.add("active");}
if(Section5.querySelector(".carousel-container").scrollLeft >= MaxScrollLeft - 20){Section5.querySelector(".carousel-wrapper .right").classList.remove("active");}else{Section5.querySelector(".carousel-wrapper .right").classList.add("active");}

});

Section5.querySelector(".carousel-wrapper .left").addEventListener("click",() => {

Section5.querySelector(".carousel-container").scrollLeft -= 310;

});


Section5.querySelector(".carousel-wrapper .right").addEventListener("click",() => {

Section5.querySelector(".carousel-container").scrollLeft += 310;

});


// Dragging Navbar
if(ProjectContainer.classList.contains("mouse")){

let isDragging = false, startX, startScrollLeft;

const dragStart = (e) => {
  isDragging = true;
  Navbar.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = Navbar.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  e.preventDefault(); // Prevent text/image selection
  Navbar.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  Navbar.classList.remove("dragging");
};

Navbar.addEventListener("mousedown", dragStart);
Navbar.addEventListener("mousemove", dragging);
Navbar.addEventListener("mouseup", dragStop);
Navbar.addEventListener("mouseleave", dragStop);

}


// Clicking on Navbar sections
Sections.forEach((Section,index) => {

Section.addEventListener("click", () => {

Sections.forEach(Section => Section.classList.remove("active"));

Containers.forEach((Container,i) => {
  
  Container.classList.remove("active");

  if(i !== index){

    setTimeout(() => {
      
      Container.querySelectorAll("li").forEach(element => {element.style.display = "none";});
    
    },600);

  }

});

Section.classList.add("active");

Containers[index].querySelectorAll("li").forEach(element => {element.style.display = "flex";});
Containers[index].classList.add("active");

});

});