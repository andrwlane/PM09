import { useEffect, useState } from "react";
import house1 from "../assets/house1.jpeg";
import axios from "axios";

export const Home = () => {
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:3001/services");
        setServices(response.data);
        console.log(services);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:3001/reviews");
        setReviews(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchServices();
    fetchReviews();
  }, []);

  return (
    <div>
      <main>
        <div className="container hero">
          <div className="hero-text">
            <h1>Строительство домов</h1>
            <p>
              Архитектура Комфорта — это надежный партнер в сфере строительства
              домов, который предлагает полный спектр услуг по проектированию и
              возведению жилых и коммерческих объектов. Наша команда состоит из
              опытных специалистов, которые обладают глубокими знаниями и
              навыками в области строительства, архитектуры и дизайна. Мы
              стремимся к высокому качеству работы и индивидуальному подходу к
              каждому клиенту, что позволяет нам успешно реализовывать проекты
              любой сложности.
            </p>
          </div>
          <div className="hero-image">
            <img src={house1} alt="дом" />
          </div>
        </div>

        <div className="container services">
          <h2>Наши услуги</h2>
          <div className="services-list">
            {services.map((service) => (
              <Service key={service.id} {...service} />
            ))}
          </div>
        </div>

        <div className="container reviews">
          <h2>Отзывы</h2>
          <div className="reviews-list">
            {reviews.map((review) => (
              <Review key={review.id} {...review} />
            ))}
          </div>
        </div>

        <div className="divider"></div>

        <div className="container contacts">
          <div>
            <h2>Контакты</h2>
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
      </main>
    </div>
  );
};

const Service = (service) => {
  return (
    <div className="service">
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
};

const Review = (review) => {
  return (
    <div className="review">
      <h3>{review.name}</h3>
      <p>{review.content}</p>
    </div>
  );
};
