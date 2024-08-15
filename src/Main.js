import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";

function Main() {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState();

  const handleClick = (e) => {
    setBgColor("#1b1b1b");

    if (e.target.className === "section") {
      setShowInput(false);
      setBgColor("#fff");
    }
  };

  return (
    <>
      <div
        className="section"
        style={{ backgroundColor: bgColor }}
        onClick={handleClick}
      >
        {showInput ? (
          <input type="text" placeholder="Search..." />
        ) : (
          <FaSearch onClick={() => setShowInput(true)} />
        )}
      </div>
    </>
  );
}

export default Main;
