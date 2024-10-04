import React from "react";
import little_lemon_logo from "../../assets/little_lemon_logo.png";

const Nav = () => {
  return (
    <nav>
      <img src={little_lemon_logo} alt="Little Lemon Logo"></img>
      <ul>
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
  );
};

export default Nav;
