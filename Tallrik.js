import React from "react";
import {NavLink} from "react-router-dom";

class Tallrik extends React.Component {
    render() {
        return (
            <div>
 
                <h3>Tallrik</h3>
                <div className="container-row">
                    <nav className="dish-category">
                        <p>KEBABTALLRIK - 115kr</p>
                        <p>KYCKLINGTALLRIK - 115kr</p>
                        <p>FALAFELTALLRIK - 115kr</p>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Tallrik;