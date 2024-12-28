import { useState, useEffect } from "react";
import axios from "axios";
import work1 from "../assets/work1.jpeg";
import work2 from "../assets/work2.jpeg";
import work3 from "../assets/work3.jpeg";
import work4 from "../assets/work4.jpeg";
import work5 from "../assets/work5.jpeg";
import work6 from "../assets/work6.jpeg";

export const Services = () => {
  const [services, setServices] = useState([]);

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

    fetchServices();
  }, []);
  return (
    <div className="container services">
      <h1>Наши услуги</h1>
      <div className="services-list">
        {services.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </div>
      <h1 className="ourWorksTitle">Наши работы</h1>
      <div className="works">
        <div className="work-image">
          <img src={work1} alt="Дом" />
        </div>
        <div className="work-image">
          <img src={work2} alt="Дом" />
        </div>
        <div className="work-image">
          <img src={work3} alt="Дом" />
        </div>
        <div className="work-image">
          <img src={work4} alt="Дом" />
        </div>
        <div className="work-image">
          <img src={work5} alt="Дом" />
        </div>
        <div className="work-image">
          <img src={work6} alt="Дом" />
        </div>
      </div>
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
