import React from 'react';
import classes from './Toolbar.module.css';
import NavItems from '../../Navigation/NavItems/NavItems';
import DrawerToggle from '../Drawer/DrawerToggle/DrawerToggle';

function Toolbar(props) {
  return (
    <div className={classes.Toolbar}>
      <div className={classes.Logo}>

      </div>
      <DrawerToggle
        toggleHandler={props.toggleDrawerHandler} />
      <div className={classes.NavItems}>
        <NavItems />
      </div>
    </div>
  );
}

export default Toolbar;