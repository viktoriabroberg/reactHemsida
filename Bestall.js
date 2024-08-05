import React from "react";
import {NavLink} from "react-router-dom";

class Bestall extends React.Component {
    render() {
        return (
            <div>
                <h3>Beställ här</h3>
                <div className="container-row">
                    <div className="order">
                        <h2>Kom till restaurangen</h2>
                        <p>Det går alltid att komma till restaurangen och beställa av oss.</p>
                        <p>Där kan du ta med dig maten hem eller avnjuta den i vår servering.</p>
                        <div className="box2">
                            <nav>
                                <NavLink to="/Hitta">Hitta hit</NavLink>
                            </nav>
                        </div>
                    </div>

                    <div className="order">
                        <h2>Beställ utkörning</h2>
                        <p>Vill du beställa utkörning så går det utmärkt att göra via Foodora.</p>
                        <p>Klicka nedan för att komma dit</p>
                        <nav className="box2">
                            <NavLink to="https://www.foodora.se/restaurant/kbu8/alvans-pizzeria">Foodora</NavLink>
                        </nav>
                    </div>

                    <div className="order">
                        <h2>Ring till restaurangen</h2>
                        <p>Vill du beställa och sedan hämta upp maten själv.</p>
                        <p>Går det jättebra att ringa till restaurangen och beställa.</p>
                        <nav className="box2">
                            <NavLink to="tel:090196965">090-19-69-65</NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bestall;