import x from "../../images/x.svg";
import menu from "../../images/menu.svg";
import logo from "../../images/image 3.svg";
import oneMonth from "../../images/One Month.svg";
import frame from "../../images/Frame 33.svg";
import operation from "../../images/Operation Overdraft.svg";
import personal from "../../images/personal.svg";
import infrastructure from "../../images/Infrastructure.svg";
import pawn from "../../images/Pawn.svg";
import working from "../../images/Working Capital Overdraft.svg";
import tt from "../../images/T&T.svg";

export const Main = ({ navOpen, setNavOpen, setHamburgerClicked }) => {
  let services = [
    {
      img: oneMonth,
      title: "One Month Loan",
      body: "Access funds for personal upkeep for 30 days only",
    },
    {
      img: frame,
      title: "FX line",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      img: operation,
      title: "Operation Overdraft",
      body: "Financing for your business operations",
    },
    {
      img: personal,
      title: "Personal Loan",
      body: "Instant funds for your personal expenses.",
    },
    {
      img: infrastructure,
      title: "Infrastrusture Loan",
      body: "Facility for your business to purchase vehicles, assets, and building upgrades.",
    },
    {
      img: pawn,
      title: "Pawn Loan",
      body: "Get cash value on temporary sale of your items within 72hours.",
    },
    {
      img: working,
      title: "Working Capital Overdraft",
      body: "Access continuous funds to grow your business stocks and inventory",
    },
    {
      img: tt,
      title: "T and T Spread Loan",
      body: " Purchase phones, generators and vehicles on a reasonable payment plan from T and T Deals Market",
    },
  ];

  const handleClick = () => {
    setHamburgerClicked(true);
    setNavOpen(!navOpen);
  };

  return (
    <section className="wrapper">
      <header className="header">
        <div className="header__top">
          <span onClick={handleClick} className="header__top__menu" href="/">
            {navOpen ? (
              <img className="header__top__menu__icon" src={x} alt="close" />
            ) : (
              <img className="header__top__menu__icon" src={menu} alt="menu" />
            )}
          </span>
          <img className="header__top__logo" src={logo} alt="logo" />
        </div>

        <div className="header__bottom">
          <h1 className="header__bottom__header">Loans</h1>
          <h3 className="header__bottom__body">
            <span className="header__bottom__body--accent">Monday</span>, 21st
            February, 2021
          </h3>
        </div>
      </header>

      <main className="main">
        {services.map((service) => (
          <div className="main__service">
            <img
              className="main__service__img"
              src={service.img}
              alt="service"
            />
            <h2 className="main__service__title">{service.title}</h2>
            <p className="main__service__body">{service.body}</p>
          </div>
        ))}
      </main>
    </section>
  );
};
