let form = document.querySelector(".form");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");
let li = document.querySelector("li");
let listText = document.querySelector(".list-text");
let listCrosse = document.querySelector(".list-crosse");

let clickBtn = function () {
  let liClone = li.cloneNode(true);
  liClone.querySelector(".list-text").textContent = input.value;
  list.append(liClone);
  input.value = "";
};

btn.addEventListener("click", clickBtn);
