function csl(elem){
  console.log(elem)
}

import "./index.css"; 
import CardRender from '../src/js/components/CardRender';
import Card from '../src/js/components/Card.js';
import {CARDS_ITEMS} from '../src/js/constants/constants.js';
const template = document.querySelector('#items-container').content;
  // const template = document.querySelector('#items-container').content.querySelector('.items-container__item');
  // csl(template);
  const itemsList = document.querySelector('.items-container');
  // const cardRender = new CardRender(itemsList);

  const initialCards = CARDS_ITEMS.map(({ name, stock, weight }) => {
    return new Card(name, stock, template, weight ).createCard();
  });

  csl(initialCards);
  const listItems = new CardRender(itemsList).render(initialCards);



