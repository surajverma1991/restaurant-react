import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList] = useState(uniqueList);
  const [activeLink, setActiveLink] = useState(0)

  const filterItem = (category, id) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);

    setActiveLink(id);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} activeLink={activeLink}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
