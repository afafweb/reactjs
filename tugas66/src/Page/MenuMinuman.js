import React, { Component } from "react";
import DaftarMinuman from "../Lib/DaftarMinuman";
import Header from "./Header";

class MenuMinuman extends Component{
    constructor(props){
        super(props);
        this.state = {
            title1: "Menu Minuman"
        }

    }
    render(){
        return(
            <div>
                <Header/>
                <h2>{this.state.title1}</h2>
                <h3>Daftara Minuman Favorite</h3>
                <table style={{width: "100%"}}>
                    <tbody>
                        <tr>
                            {DaftarMinuman.map((data, index)=>{
                                return(
                                    <td key={index}>
                                        <center>
                                            <img src={data.img} alt="Product makanan" width="150" height="100"></img>
                                            <p>{data.namaMinuman}</p>
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


export default MenuMinuman;