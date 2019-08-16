import React, { Component } from "react";
import DaftarMakanan from "../Lib/DaftarMakanan";
import Header from "./Header";

class MenuMakanan extends Component{
    constructor(props){
        super(props);
        this.state = {
            title1: "Menu Makanan"
        }

    }
    render(){
        return(
            <div>
                <Header/>
                <h2>{this.state.title1}</h2>
                <h3>Daftara Makanan Favorite</h3>
                <table style={{width: "100%"}}>
                    <tbody>
                        <tr>
                            {DaftarMakanan.map((data, index)=>{
                                return(
                                    <td key={index}>
                                        <center>
                                            <img src={data.img} alt="Product makanan" width="150" height="100"></img>
                                            <p>{data.namaMakanan}</p>
                                            <p>harga : Rp. {data.harga}</p>
                                        </center>
                                    </td>
                                )
                            })};
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


export default MenuMakanan;