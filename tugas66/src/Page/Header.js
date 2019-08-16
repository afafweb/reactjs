import React, {  Component} from "react";
import "../Style/header.css";
import {Link} from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <div id="head">
                <table style={{width: "100%"}}>
                    <tr>
                        <center>
                            <td>
                                <h2><Link to="/" className="Home">Home</Link>|</h2>
                            </td>
                            <td>
                                <h2><Link to="/menu_makanan" className="Makanan">Makanan</Link>|</h2>
                            </td>
                            <td>
                                <h2><Link to="/menu_minuman" className="Minuman">Minuman</Link>|</h2>
                            </td>
                            <td>
                                <h2><Link to="/kontak" className="Kontak">Kontak</Link>|</h2>
                            </td>
                        </center>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Header;