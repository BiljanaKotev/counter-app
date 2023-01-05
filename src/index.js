"use strict";

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  saveEl.innerText += " " + count + " -";
  count = 0;
  countEl.innerHTML = count;
}
