// console.log("hello world!");

// let mainHeading = document.querySelector(".main-heading");

// let myName = "Bilal Ahmed";
// console.log(mainHeading);

// mainHeading.addEventListener("click", function () {
//   mainHeading.textContent = myName;
//   mainHeading.style.backgroundColor = "red";
//   mainHeading.style.color = "whitesmoke";
//   mainHeading.style.textAlign = "center";
// });
// javascript practice

let yearElement = document.querySelector(".year");
const currYear = new Date().getFullYear();

// console.log(currYear);

yearElement.textContent = currYear;

// yearElement.textContent = "this";

// navigation open
const btnNavEle = document.querySelector(".nav-btn");
const navEle = document.querySelector(".main-nav");

console.log(btnNavEle);
console.log(navEle);

btnNavEle.addEventListener("click", function () {
  navEle.classList.toggle("open-nav");
});

//  for smooth scrolling maslo in safari incase

// const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//   });
// });

// sticky navigation

const sectionHeroEl = document.querySelector(".hero-section");

const nav = document.querySelector("body");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
  },
  {
    // in the viewport
    //  root means the viwport
    root: null,
    // this nav will observe when the hero section will move out of the view port
    threshold: 0,
    // unit must be in pixels means -70 pixels pehrya nav open thi wende
    rootMargin: "-70px",
  }
);
observer.observe(sectionHeroEl);
