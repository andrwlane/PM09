import map from "../assets/map.png";
import axios from "axios";

export const Contacts = () => {
  const onFeedbackSubmit = (event) => {
    event.preventDefault();
    // TODO: send feedback to server
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    if (!name || !email || !message || email.indexOf("@") === -1) {
      return alert("Заполните все поля! Проверьте email.");
    }
    axios
      .post("http://localhost:3001/feedback", { name, email, message })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container contacts-page">
      <div className="info">
        <div className="contacts-text">
          <div>
            <h1>Контакты</h1>
            <p>Адрес: г. Москва, ул. Примерная д. 10</p>
            <p>
              Телефон: <a href="tel:89991771717">8 (999) 177-17-17</a>
            </p>
          </div>
          <div>
            <h2>Часы работы</h2>
            <p>Пн - Пт: 10:00 - 19:00</p>
            <p>Сб: 10:00 - 16:00</p>
            <p>Вс: выходной</p>
          </div>
        </div>
        <div className="map-image">
          <img src={map} alt="map" />
        </div>
      </div>

      <div className="feedback-form">
        <h2>Обратная связь</h2>
        <form onSubmit={onFeedbackSubmit}>
          <input name="name" type="text" placeholder="Имя" />
          <input name="email" type="email" placeholder="Email" />
          <textarea name="message" placeholder="Сообщение"></textarea>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};
