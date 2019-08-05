import React,{  Component} from "react";

class MenuTentangKami extends Component{
    constructor(props){
        super(props);
        this.state = {
            kami : this.props.kami
        }
    }
    render(){
        return(
            <div>
                <center>
                    <p>Tentang Kami</p> {this.state.kami}
                </center>
            </div>
        )
    }
}

export default MenuTentangKami;