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
