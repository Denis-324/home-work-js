let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");

let clickBtn = function (evt) {
  evt.preventDefault();

  let listDiv = document.createElement("div");
  listDiv.classList.add("list-div");

  let listItem = document.createElement("li");
  listItem.classList.add("list-item");
  listItem.textContent = "Дела";
  listDiv.appendChild(listItem);

  let btnClose = document.createElement("button");
  btnClose.classList.add("btn-close");
  btnClose.textContent = "X";
  listDiv.appendChild(btnClose);

  let btnCheck = document.createElement("button");
  btnCheck.classList.add("btn-check");
  btnCheck.textContent = "V";
  listDiv.prepend(btnCheck);

  list.appendChild(listDiv);
};

btn.addEventListener("click", clickBtn);
