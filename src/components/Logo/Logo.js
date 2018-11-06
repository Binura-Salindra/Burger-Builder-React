import React from 'react';
import burgerLogo from '../../assests/images/26.1 burger-logo.png.png';
import classes from './Logo.css';

const logo = (props) =>(
    <div className={classes.Logo}>
        <img src={burgerLogo} alt={"burgerIcon"}/>
    </div>
);

export default logo;