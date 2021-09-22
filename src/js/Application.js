import EventEmitter from "eventemitter3";
import Card from "./Card";
import Notification from "./Notification";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    const pizzas = [
      {
        type: Card.types.HAWAIIAN,
        price: 8.99,
      },
      {
        type: Card.types.PEPPERONI,
        price: 9.99,
      },
      {
        type: Card.types.MARGHERITA,
        price: 7.99,
      },
    ];

    pizzas.forEach((pizza) => {
      const card = new Card({ ...pizza });
      card.render();

      card.container.addEventListener('click', () => {
        const currentNotification = this._createNotification(pizza);
        document.querySelector('.notifications').appendChild(currentNotification.container);
      });
      document.querySelector(".main").appendChild(card.container);
    });

    this.emit(Application.events.READY);
  }

  _createNotification(pizza) {
    const notification = new Notification();
    notification.render(pizza);

    notification.container.querySelector('.delete').addEventListener('click', () => {
      document.querySelector('.notifications').removeChild(notification.container);
    });

    return notification;
  }

}
