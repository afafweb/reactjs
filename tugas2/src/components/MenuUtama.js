import React,{ Component } from "react";
import ListMenuUtama from "../list/ListMenuUtama";

class MenuUtama extends Component{
    render(){
        return(
            <div>
                <center>

                <ListMenuUtama linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" ombo="600"/>
                </center>
            </div>
        )
    }
}

export default MenuUtama;