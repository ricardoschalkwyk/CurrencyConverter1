import React from "react";
import { Dropdown } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

function Menu() {
  const { pathname } = useLocation();
  return (
    <Dropdown style={{ marginTop: "18px" }}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        What would you like to do
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {pathname !== "/wingame" && (
          <Dropdown.Item to="/wingame" as={NavLink}>
            Win!!
          </Dropdown.Item>
        )}
        {pathname !== "/CurrencyConverter" && (
          <Dropdown.Item to="/CurrencyConverter" as={NavLink}>
            CurrencyConverter
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Menu;
