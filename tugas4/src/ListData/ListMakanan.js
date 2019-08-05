import React,{Component} from 'react';

class ListMakanan extends Component{
    constructor(props) {
        super(props);
        this.state= {
            gambar: this.props.gbr2
        }
    }
    render(){
        return(
            <div>
                <img src={this.state.gambar} width="150" alt="Produk Makanan"></img>
            </div>
        )
    }
}

export default ListMakanan;