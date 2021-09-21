import {formatCurrency} from './utils.js';
import classNames from 'classnames';
export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
  }

  render(pizza) {
    const template = `
<div class="notification type-${pizza.type}">
  <button class="delete"></button>
  🍕 <span class="type">${pizza.type}</span> (<span class="price">${formatCurrency(pizza.price)}</span>) has been added to your order.
</div>
    `;

    this.container.innerHTML = template;
  }
}
