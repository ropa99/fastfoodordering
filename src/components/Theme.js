import React, { useState,useEffect } from "react";
import "../css/darkMode.css"

function Theme() {
    const [theme, setTheme] = useState("light");
    const [text, setText] = useState("light");

    const switchTheme =()=>{
        theme === 'light' ? setTheme('dark'):setTheme('light');
        theme === "light" ? setText("Dark") : setText("Light");
    };
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);
  return (
    <div className={"switch ${theme}"}>
      <a href="#" className="btn btn-primary" role="button" data-bs-toggle="button" onClick={switchTheme}>
        {text}
      </a>
    </div>
  );
}

export default Theme