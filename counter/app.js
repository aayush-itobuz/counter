const counter = document.getElementById("number");
let count = 0;

function increase() {
  count++;
  counter.innerHTML = count;
  counter.style.color = (count > 0) ? "green" : (count == 0) ? "black" : "red";
}

function decrease() {
  count--;
  counter.innerHTML = count;
  counter.style.color = (count < 0) ? "red" : (count == 0) ? "black" : "green";
}

function reset() {
  count = 0;
  counter.innerHTML = count;
  counter.style.color = "black";
}