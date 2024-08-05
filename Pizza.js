import React from "react";
import {NavLink} from "react-router-dom";

class Pizza extends React.Component {
    render() {
        return (
            <div>

                <h3>Pizza</h3>
                <div className="extra">
                    <nav>
                        <h2>Tilllägg</h2>
                        <p>Ostkant - 30kr</p>
                        <p>Extra sås - 10kr</p>
                        <p>Extra ost - 20kr</p>
                    </nav>
                </div>
                <div className="container-row">
                    <div className="adress">
                        <nav>
                            <h2>Populära pizzor</h2>
                            <p>MARGERITA - 90kr</p>
                            <p>VESUVIO - 95kr</p>
                            <p>CAPRICCIOSA - 100 kr</p>
                            <p>HAWAII - 100 kr</p>
                            <p>BUSSOLA - 100kr</p>
                            <p>MILANO - 115 kr</p>
                            <p>FRUTTI DI MARE - 115kr</p>
                        </nav>
                    </div>
                    <div className="fard">
                        <nav>
                            <h2>Panpizzor</h2>
                            <p>MARGERITA - 90kr</p>
                            <p>VESUVIO - 95kr</p>
                            <p>CAPRICCIOSA - 100 kr</p>
                            <p>HAWAII - 100 kr</p>
                            <p>BUSSOLA - 100kr</p>
                            <p>MILANO - 115 kr</p>
                            <p>FRUTTI DI MARE - 115kr</p>
                        </nav>
                    </div>
                    <div className="fard">
                        <nav>
                            <h2>Specialpizzor</h2>
                            <p>Special - 90kr</p>
                            <p>ID special - 95kr</p>
                            <p>Viktoria Special - 100 kr</p>
                            <p>Älvans special 1</p>
                            <p>Älvans special 2</p>
                            <p>Älvans special 3</p>
                            <p>Älvans special 4</p>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pizza;