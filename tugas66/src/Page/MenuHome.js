import React,{ Component } from "react";

import Header from './Header';
import "../Style/header.css";

class MenuHome extends Component{
    render(){
        return(
            <div>
                <Header/>
                <br></br>
                <h1>Selamat Datang di Halaman Utama
                </h1>
                    <div className="Image_header">
                        <br></br>
                    </div>
            </div>
        )
    }
}

export default MenuHome;