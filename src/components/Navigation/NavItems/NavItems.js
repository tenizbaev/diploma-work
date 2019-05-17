import React from 'react';
import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

function NavItems(props) {
  return (
    <ul className={classes.NavItems}>
      <NavItem url="/">Home</NavItem>
      <NavItem url="/Rooms">Rooms</NavItem>
      <NavItem url="/Book">Book</NavItem>
      <NavItem url="/Book">Map</NavItem>
      <NavItem url="/Book">Contact</NavItem>

    </ul>
  );
}

export default NavItems;