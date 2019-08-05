import React,{Component  } from "react";


class ListMakanan extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataList : this.props.a,
            ural : this.props.linK
        }
    }

    render(){
        return(
            <div>
                <img src={this.state.ural} alt="Produk Makanan" width="100"></img>
            </div>

        )
    }
}

export default ListMakanan;