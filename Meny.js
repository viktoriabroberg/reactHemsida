import React from "react";
import {NavLink} from "react-router-dom";

class Meny extends React.Component {
    render() {
        return (
            <div className="container">

                <h3> Välj kategori </h3>
    
                <div className="menu-container">
    
                    <div className="menu-item-tallrik">
                        <NavLink to="/Tallrik">Tallrik</NavLink>
                    </div>
                    <div className="menu-item-sallad">
                        <NavLink to="/Sallad">Sallad</NavLink>
                    </div>
                    <div className="menu-item-pizza">   
                        <NavLink to="/Pizza">Pizza</NavLink>
                    </div>
                    <div className="menu-item-tillbehor">
                        <NavLink to="/Tillbehor">Tillbehör</NavLink>
                    </div>
                    <div className="menu-item-rulle">
                        <NavLink to="/Rulle">Rulle</NavLink>
                    </div>
                    <div className="menu-item-ovrigt">
                        <NavLink to="/Ovrigt">Övrigt</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Meny;