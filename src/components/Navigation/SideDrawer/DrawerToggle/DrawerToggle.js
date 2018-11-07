import React from 'react';
import classes from './DrawerToggle.css';

const drawerToggle = (props) =>(
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div className={classes.DrawerToggleDiv}/>
        <div className={classes.DrawerToggleDiv}/>
        <div className={classes.DrawerToggleDiv}/>
    </div>
);

export default drawerToggle;