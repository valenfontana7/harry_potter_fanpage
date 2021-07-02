import React, { useEffect } from "react";
import H from "./styles/Header.module.css";
import { Link } from "react-router-dom";

function Header({ color }) {
  useEffect(() => {
    document.getElementById("header").style.background = color;
  }, []);
  return (
    <>
      <div id="header" className={H.header}>
        <Link to="/">
          <img className={H.header__img} src="/images/HP-TT.png" alt="" />
        </Link>
        <nav className={H.header__navbar}>
          <ul className={H.header__navbar__ul}>
            <li className={H.navbar__ul__li}>
              <a href="/characters">Characters</a>
            </li>
            <li className={H.navbar__ul__li}>
              <a>🚧 Staff </a>
            </li>
            <li className={H.navbar__ul__li}>
              <a>🚧 Students</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
