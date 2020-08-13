import React from 'react';

import burgerLogo from '../../assests/images/burger-logo.png';
import Classes from './Logo.module.css';

const logo = (props) => (
  <div className={Classes.Logo} sytle={{height: props.height}}>
    <img src={burgerLogo} alt='MyBurger' />
  </div>

);

export default logo;
