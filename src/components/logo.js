import  React from 'react';
import logo from '../images/logo-projects-react.png';
import './logo.css';

function Logo(){
    return (
        <div className="logo-container">
            <img className="logo" src={logo} alt="logo clicks counter" />
        </div>
    )
};

export default Logo;