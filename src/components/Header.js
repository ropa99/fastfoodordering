import React, { useState, useEffect } from "react";
import "../css/darkMode.css";

function Header() {
  const menuText = "Fast Food Menu";
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <nav className="navbar bg-body-tertiary " data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onClick={switchTheme}>
            Light
          </a>
        </div>
      </nav>
      <header className="container-fluid bg-dark text-white px-5">
        <div className="row text-center">
          <div className="col-sm"></div>
          <div className="col-sm-8">
            <h1>{menuText}</h1>
          </div>
          <div className="col-sm"></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
