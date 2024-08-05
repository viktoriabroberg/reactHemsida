import React from "react";

class Ovrigt extends React.Component {
    render() {
        return (
            <div>
                <h3>Övrigt</h3>       
                <div className="container-row">
                    <table>
                        <thead>
                            <tr>
                                <th>Rubrik 1</th>
                                <th>Rubrik 2</th>
                                <th>Rubrik 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>A</td>
                                <td>B</td>
                                <td>C</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>vänster</td>
                                <td>mitten</td>
                                <td>höger</td>
                            </tr>
                        </tbody>
                    </table>

                    <ul>
                        <li>
                            <p>Rubrik till lista</p>
                        </li>
                        <li>
                            <p>A</p>
                        </li>
                        <li>
                            <p>B</p>
                        </li>
                        <li>
                            <p>C</p>
                        </li>
                    </ul>

                    <form id="form" name="form" method="post" action="https://formspree.io/your@email.com">
                        <label htmlFor="epost">E-postadress:</label><br />
                        <input type="text" name="epost" id="epost" /><br />
                        
                        <label htmlFor="meddelande">Meddelande:</label><br />
                        <textarea name="meddelande" id="meddelande" cols="45" rows="5"></textarea><br />
                        
                        <input type="submit" name="skicka" id="skicka" value="Skicka meddelandet" />
                    </form>

                    <audio controls>
                        <source src="/sunset-vibes-lo-fichillhop-9503.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        );
    }
}

export default Ovrigt;