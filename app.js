let coffeeList = document.querySelectorAll(".coffee")

let circle = document.getElementById("circle")
let title = document.querySelector("span");
let btn = document.querySelector("button");

coffeeList.forEach(coffee => {
  coffee.addEventListener("click", getCoffeeColor);

  function getCoffeeColor() {
    let color = coffee.classList;
    let CoffeeImage = document.querySelector(".starbucks");

    if (color.contains("green")) {
      CoffeeImage.src = "img/img1.png";
      colors('#017143');

    } else if (color.contains("purple")) {
      CoffeeImage.src = "img/img3.png";
      colors('#df29b7');

    } else {
      CoffeeImage.src = "img/img2.png";
      colors('#e77cd5')
    }
  }

  function colors(color) {
    circle.style.backgroundColor = color;
    btn.style.backgroundColor = color;
    title.style.color = color;
  }
});

let hamb = document.querySelector("#hamb")
let hambImage = document.getElementById("hamb-image")
let list = document.getElementById("list")


hamb.addEventListener("click", () => {
  hamb.classList.toggle("active")
  list.classList.toggle("active")

  if (hamb.classList.contains("active")) {
    hambImage.src = "img/x-mark.svg"
  } else {
    hambImage.src = "img/bar-mark.svg"
  }
})