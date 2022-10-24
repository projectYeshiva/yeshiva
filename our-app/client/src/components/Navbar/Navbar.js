import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const links = [
  {
    path: "/שיחות",
    title: "שיחות",
  },
  {
    path: "/יצירת יומן",
    title: "יצירת יומן",
  },
  {
    path: "/ציונים",
    title: "ציונים",
  },
  {
    path: "/שאלות לחזרה",
    title: "שאלות לחזרה",
  },
  {
    path: "/מבחנים",
    title: "מבחנים",
  },
];

const Navbar = () => {
  return (
    <header>
      <nav>
        {links.map((link, index) => (
          <Link to={link.path} key={`${link.path}-${index}`}>
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
