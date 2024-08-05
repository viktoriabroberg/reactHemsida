import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header'; 

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/> 
                <div className="grid-container">
                    <nav className="left-menu">
                        <NavLink className="left-menu-hitta" to="/Hitta">Hitta hit</NavLink>
                        <NavLink className="left-menu-meny" to="/Meny">Meny</NavLink>
                        <NavLink className="left-menu-bestall" to="/Bestall">Beställ här</NavLink>
                    </nav>
                    <section className="container-oppet">
                        <h1>Öppet alla dagar</h1>
                    </section>
                    <section className="container-tider">
                        <h2>12 - 20</h2>
                
                    </section>
                    
                </div>
        
            </div>
        
        );
    }
}

export default Home;