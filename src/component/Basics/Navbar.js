import React from "react";

const Navbar = ({ filterItem, menuList, activeLink }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem, id) => {
            return (
              <button
                className={`btn-group__item ${activeLink === id ? "activeLink" : ""}`}
                key={id}
                onClick={() => filterItem(curElem, id)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
