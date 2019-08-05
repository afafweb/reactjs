import React,{  Component} from "react";

class ListMakanan extends Component{
    constructor(props){
        super(props);
        this.state = {
            datalist : this.props.gbrlink2
        }
    }
    render(){
        return(
            <div>
               <img src={this.state.datalist} width="150" height="80" alt="Product Makanan"></img>
            </div>
        )
    }
}

export default ListMakanan;