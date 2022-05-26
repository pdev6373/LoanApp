import React, { useState, useEffect } from "react";
import useWindowDimension from "../../hooks/useWindowDimensions";

import logo from "../../images/cloudbank 1.svg";
import dashboard from "../../images/dashboard.svg";
import send from "../../images/send.svg";
import investment from "../../images/investment line 1.svg";
import loan from "../../images/loan fill 1.svg";
import card from "../../images/card with hand line 1.svg";
import bill from "../../images/bill line.svg";
import market from "../../images/3885905 1.svg";
import settings from "../../images/settings line (1).svg";
import logout from "../../images/Logout.svg";

export const Nav = ({
  setNavOpen,
  navOpen,
  hamburgerClicked,
  setHamburgerClicked,
}) => {
  let [asideClass, setAsideClass] = useState("aside");
  let { width } = useWindowDimension();

  useEffect(() => {
    if (width >= 1000) {
      setAsideClass("aside");
      setHamburgerClicked(false);
    } else {
      if (hamburgerClicked) {
        if (navOpen) setAsideClass("aside--view");
        else setAsideClass("aside--hide");
      } else {
        if (navOpen) setAsideClass("aside--view");
        else setAsideClass("aside");
      }
    }
  }, [width, hamburgerClicked, navOpen, setHamburgerClicked]);

  let navs = [
    {
      img: dashboard,
      text: "Home",
    },
    {
      img: send,
      text: "Send Money",
    },
    {
      img: investment,
      text: "Investment",
    },
    {
      img: loan,
      text: "Loan",
    },
    {
      img: card,
      text: "Cards",
    },
    {
      img: bill,
      text: "Transactions",
    },
    {
      img: market,
      text: "Marketplace",
    },
    {
      img: settings,
      text: "Settings",
    },
  ];

  return (
    <aside className={asideClass}>
      <img className="aside__logo" src={logo} alt="logo" />

      <nav className="aside__nav">
        <ul className="aside__nav__list">
          {navs.map((nav) => (
            <li
              key={nav.text}
              className="aside__nav__list__item"
              onClick={() => setNavOpen(false)}
            >
              <img
                className="aside__nav__list__item__icon"
                src={nav.img}
                alt="nav icon"
              />
              <span className="aside__nav__list__item__text">{nav.text}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="aside__logout">
        <img className="aside__logout__image" src={logout} alt="logout" />
      </div>
    </aside>
  );
};
