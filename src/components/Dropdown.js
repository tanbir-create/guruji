import React, { useState } from "react";
import { catogaryDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = (props) => {
  console.log(props);
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <ul
        id="catogary-submenu"
        className={dropdown ? "catogary-submenu clicked" : "catogary-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {catogaryDropdown.map((item) => {
          return (
            <li key={item.id} onClick={() => props.onFilterItem(item.title)}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
