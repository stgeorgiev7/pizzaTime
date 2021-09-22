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

  render({type, price}) {
    let template =''

    if (type === 'hawaiian') {
      template = `
      <div class="notification type-${classNames('hawaiian', 'is-danger')}">
        <button class="delete"></button>
        🍕 <span class="type">${type}</span> (<span class="price">${formatCurrency(price)}</span>) has been added to your order.
      </div>
          `;
    } else {
      template = `
      <div class="notification type-${type}">
        <button class="delete"></button>
        🍕 <span class="type">${type}</span> (<span class="price">${formatCurrency(price)}</span>) has been added to your order.
      </div>
          `;
    }


    this.container.innerHTML = template;
  }

  empty() {
    document.querySelector('.notifications').innerHTML = '';
  }
}
