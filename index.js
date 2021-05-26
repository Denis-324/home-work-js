const container = document.querySelector(".container");
let move = 0;
let result = "";
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup-content");

container.addEventListener("click", (evt) => {
  if ((evt.target.querySelector = "box")) {
    if (move % 2 === 0) {
      evt.target.textContent = "X";
    } else {
      evt.target.textContent = "0";
    }
    move++;
    check();
  }
});

const check = () => {
  const boxes = document.querySelectorAll(".box");
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (i = 0; i < arr.length; i++) {
    if (
      boxes[arr[i][0]].textContent == "X" &&
      boxes[arr[i][1]].textContent == "X" &&
      boxes[arr[i][2]].textContent == "X"
    ) {
      result = "крестики";
      prepareResult(result);
    } else if (
      boxes[arr[i][0]].textContent == "0" &&
      boxes[arr[i][1]].textContent == "0" &&
      boxes[arr[i][2]].textContent == "0"
    ) {
      result = "нолики";
      prepareResult(result);
    }
  }
};

const prepareResult = (winner) => {
  popupContent.innerHTML = `<h3>Победили ${winner} !</h3>
                            <a class = 'popup-close' href = '#'>start</a>`;
  popup.classList.add("active");
  popup.addEventListener("click", function () {
    popup.classList.remove("active");
    window.location.reload();
  });
};
