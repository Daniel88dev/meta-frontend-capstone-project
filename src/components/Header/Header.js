import React from "react";
import little_lemon_logo from "../../assets/little_lemon_logo.png";

const Header = () => {
  return (
    <header
      className={"flex w-full justify-between items-center py-4 px-8 top-0"}
    >
      <img
        src={little_lemon_logo}
        width={400}
        height={100}
        alt="Little Lemon Logo"
      />
      <nav className={"flex"}>
        <ul className={"flex flex-row ml-16"}>
          <li>
            <a href={"/home"}>Home</a>
          </li>
          <li>
            <a href={"/about"}>About</a>
          </li>
          <li>
            <a href={"/menu"}>Menu</a>
          </li>
          <li>
            <a href={"/reservation"}>Reservations</a>
          </li>
          <li>
            <a href={"/order"}>Order Online</a>
          </li>
          <li>
            <a href={"/login"}>Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
