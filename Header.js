import React from "react";
import LoggaNy from './LoggaNy.png'; 

class Header extends React.Component {
    render() {
        return (
            <div className="grid-container">
                <header className="image-content" id="fadetest">
                    <nav className="loggo-image">
                        <img src={LoggaNy} alt="Logga med text Älvans Pizzeria" /> 
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;