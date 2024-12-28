import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <div className="links">
            <Link to={"/cost-calculator"}>Рассчитать стоимость</Link>
            <Link to={"/services"}>Наши услуги</Link>
            <Link to={"/about"}>О нас</Link>
            <Link to={"/contacts"}>Контакты</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
