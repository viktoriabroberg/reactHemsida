import React from "react";
import {NavLink} from "react-router-dom";

class Rulle extends React.Component {
    render() {
        return (
            <div>

                <h3>Rulle</h3>
                <div className="container-row">
                    <nav className="dish-category">
                        <p>KEBABRULLE - 115kr</p>
                        <p>KYCKLINGRULLE - 115kr</p>
                        <p>FALAFELRULLE - 115kr</p>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Rulle;