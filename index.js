let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");

let clickBtn = function (evt) {
  evt.preventDefault();

  let listDiv = document.createElement("div");
  listDiv.classList.add("list-div");

  let btnCheck = document.createElement("button");
  btnCheck.classList.add("btn-check");
  btnCheck.textContent = "V";

  let listItem = document.createElement("li");
  listItem.classList.add("list-item");
  listItem.textContent = input.value;

  listDivBlock = document.createElement("div");
  listDivBlock.classList.add("list-div-blok");
  listDiv.append(listDivBlock);
  listDivBlock.append(btnCheck);
  listDivBlock.append(listItem);

  let btnClose = document.createElement("button");
  btnClose.classList.add("btn-close");
  btnClose.textContent = "X";
  listDiv.appendChild(btnClose);

  list.appendChild(listDiv);

  input.value = "";
};

btn.addEventListener("click", clickBtn);

let deliteList = function (evt) {
  const item = evt.target;
  if (item.classList[0] === "btn-close") {
    let todo = item.parentElement;
    todo.remove();
  }

  if (item.classList[0] === "btn-check") {
    let todo = item.parentElement;
    todo.classList.toggle("active");
  }
};

list.addEventListener("click", deliteList);
