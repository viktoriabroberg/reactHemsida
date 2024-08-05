import React from "react";

class Sallad extends React.Component {
    render() {
        return (
            <div>
                <h3>Sallad</h3> 
                <div className="container-row">
                    <div className="dish-category">
                        <nav>
                            <p>SKALDJURSSALLAD - 115kr</p>
                            <p>KEBABSALLAD - 115kr</p>
                            <p>KYCKLINGSALLAD - 115kr</p>
                            <p>FALAFELSALLAD - 115kr</p>
                            <p>SKINKSALLAD - 115kr</p>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sallad;