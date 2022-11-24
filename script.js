var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var div = document.createElement("div");
  var deBut = document.createElement("button");

  deBut.innerHTML = "Delete";
  deBut.classList.add("delete");
  div.classList.add("wrapper");
  div.append(li, deBut);
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(div);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function checkDone(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
}

function deleteListElement(e) {
  if (e.target.className === "delete") {
    e.target.parentElement.remove();
  }
}

button.addEventListener("click", addListAfterClick);
ul.addEventListener("click", checkDone);
ul.addEventListener("click", deleteListElement);
input.addEventListener("keypress", addListAfterKeypress);
