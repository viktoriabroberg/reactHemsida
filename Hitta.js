import React from "react";
import {Link } from "react-router-dom";
/**import {Helmet} from "react-helmet";
import Config from '../Config.json';

/*const TITLE = "H | " + Config.SITE_TILTE;
const DESC = "Create a React App  from an HTML Website";
const CANONICAL = Config.SITE_DOMAIN + "/";*/

class Hitta extends React.Component {
    render() {
        return (
            <div>
                <h3>Hitta hit</h3>
                <div className="container-row">
                    <div className="adress">
                        <nav>
                            <h2>Adress</h2>
                            <p>Älvans väg 246</p>
                            <p>907 50 Umeå</p>
                        </nav>
                    </div>
                    <div className="fard2">
                        <nav>
                            <h2>Färdbeskrivning</h2>
                            <p>Det går att ta sig hit på flera sätt.</p>
                            <Link to="https://www.google.com/maps/@63.8098853,20.3394578,17z?entry=ttu">
                                <div className="google">Gå till google maps</div>
                            </Link>
                        </nav>
                    </div>

                </div>
            </div>
        );
    }
}

export default Hitta;