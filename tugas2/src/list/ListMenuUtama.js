import React,{ Component } from "react";

class ListMenuUtama extends Component{
    constructor(props) {
        super(props);
        this.state = {
            gbrlink : this.props.linkgambar,
            lebar : this.props.ombo
        };
      }
    render(){
        return(
            <div>
                <h1>
                    <center>Selamat Datang di Warung Nusantara</center>
                </h1>
                <img src={this.state.gbrlink} alt="Masakan Nusantara" width={this.state.lebar}></img>
            </div>
        )
    }
}

export default ListMenuUtama;