import React, { useEffect, useState, useContext } from "react";
import H from "./styles/Header.module.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Context from "../context/ThemeContext";

function Header({ color }) {
  const [open, setOpen] = useState(false);
  const { context, setContext } = useContext(Context);
  console.log(context);
  useEffect(() => {
    document.getElementById("header").style.background = color;
  }, []);
  return (
    <>
      <div id="header" className={H.header}>
        <div className={H.header__brand__menu}>
          <Link to="/">
            <img className={H.header__img} src="/images/HP-TT.png" alt="" />
          </Link>
          <button
            onClick={() => {
              const header = document.getElementById("header");
              const headerUl = document.getElementById("headerUl");
              if (open) {
                setOpen(false);
                setContext({ ...context, openMenu: false });
                header.style.height = "80px";
                headerUl.style.transform = "scale(1,0)";
              } else {
                setOpen(true);
                setContext({ ...context, openMenu: true });
                header.style.height = "35vh";
                headerUl.style.transform = "scale(1,1)";
              }
            }}
            className={H.header__menu__btn}
          >
            <MenuIcon />
          </button>
        </div>

        <nav className={H.header__navbar}>
          <ul id="headerUl" className={H.header__navbar__ul}>
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
