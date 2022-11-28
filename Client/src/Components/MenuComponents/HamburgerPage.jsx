import React from "react";
import { NavLink } from "react-router-dom";

const Hamburger = () => {

  return (
    <>
      <h1>
        Menú
      </h1>
<<<<<<< HEAD
    <nav className="main-navigation">
        <ul>
            <li><NavLink to="/sesiones">Mis sesiones</NavLink></li>
            <li><NavLink to="/calendar">Calendario</NavLink></li>
=======
      <nav class="main-navigation">
        <ul>
          <li><a href="/sesiones">Mis sesiones</a></li>
          <li><a href="/calendar">Calendario</a></li>
>>>>>>> e4562cbed58be5a29e84be40f1b885d55fa25357
        </ul>
      </nav>
    </>

  )
};

export default Hamburger;