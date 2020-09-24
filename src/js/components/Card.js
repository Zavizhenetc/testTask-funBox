export default class Card {
  constructor(name, stock, template, weight)
  {
    this.name = name;
    this.stock = stock;
    this.template = template;
    this.weight = weight;
     
}
createCard() {
  this.container = this.template.cloneNode(true);
  this.container.querySelector(".items-container__content-subtitle").textContent = this.name;
  this.container.querySelector(".items-container__content-stock").textContent = this.stock;
  this.container.querySelector(".items-container__content-weight").textContent = this.weight;
  return this.container;
}

}