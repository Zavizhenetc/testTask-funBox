function csl(elem) {
  console.log(elem);
}

import "./index.css";
import CardRender from "../src/js/components/CardRender";
import Card from "../src/js/components/Card.js";
import { CARDS_ITEMS } from "../src/js/constants/constants.js";
const template = document
  .querySelector("#items-container")
  .content.querySelector(".items-container__item");
const itemsList = document.querySelector(".items-container");

const initialCards = CARDS_ITEMS.map(({ name, stock, weight }) => {
  return new Card(name, stock, template, weight).createCard();
});

const listItems = new CardRender(itemsList).render(initialCards);

// =====================
const items = document.querySelector(".items-container");
const tmpl = document.querySelector(".item-container");
const cardItem = document.querySelector(".items-container__item");
const card = document.querySelector(".items-container__cover");





function cardSelected(evt) {
  const target = evt.target.closest(".items-container__cover");
  const corner = target.closest(".items-container__item").querySelector('.items-container__corner-clip');
  target.classList.toggle("selected");
  corner.classList.toggle("selected");
}



items.addEventListener("click", cardSelected)
items.addEventListener("mouseover", cardSelected)
items.addEventListener("mouseout", cardSelected)

