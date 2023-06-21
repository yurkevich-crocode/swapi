import { useState } from "react";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import "./Header.css";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const classNameMenu = activeMenu ? "header__items active" : "header__items";

  const handleMenu = () => {
    setActiveMenu(!activeMenu);
    if (activeMenu) {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <Logo />
          <nav className={classNameMenu}>
            <a href="#" className="header__item">
              People
            </a>
            <a href="#" className="header__item">
              Planets
            </a>
            <a href="#" className="header__item">
              Starships
            </a>
          </nav>
          <span
            className="header__menu-bg"
            onClick={() => {
              handleMenu();
            }}
          ></span>
          <span
            className="header__btn-menu"
            onClick={() => {
              handleMenu();
            }}
          >
            <span className="header__btn-menu-area"></span>
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
