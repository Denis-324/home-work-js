let container = document.querySelector(".container");
let form = document.querySelector(".form");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");
let li = document.querySelector("li");
let listText = document.querySelector(".list-text");
let listCrosse = document.querySelector(".list-crosse");

let clickBtn = function () {
  let liClone = li.cloneNode(true);
  liClone.querySelector(".list-text").innerHTML = input.value;
  list.append(liClone);
  input.value = "";
  listText.classList.remove("actives");
  listCrosse.classList.remove("actives");
};

btn.addEventListener("click", clickBtn);

let clicklistCrosse = function () {
  listText.classList.add("actives");
  listCrosse.classList.add("actives");
};

listCrosse.addEventListener("click", clicklistCrosse);

// let clicklistText = function () {
//   listText.classList.toggle("active");
// };

// li.addEventListener("click", clicklistText);
