import React,{ Component } from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component{
    constructor(props){
        super(props);
        this.state = {
            jumlah : this.props.jumlah,
            inputValue : ""

        }
        this.rubahPesanan = this.rubahPesanan.bind(this);
        this.pesanan = this.pesanan.bind(this);
    }
    rubahPesanan(){
        this.setState((state, props)=>{
            return{
                pesan : this.state.jumlah,
                
            }
        })
    }
    pesanan(e){
        console.log(e.target.value)
    }

    render(){
        return(
            <div>
                <h3>Daftar Makanan Yang kami Sediakan</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <ListMakanan linK="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                                <center>
                                    <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linK="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
                                <center>
                                    <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linK="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
                                <center>
                                    <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linK="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
                                <center>
                                    <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linK="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg"/>
                                <center>
                                    <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <input type="text" value={this.state.inputValue} onChange={this.pesanan}></input>
                <h3>Pesanan Anda : {this.state.jumlah}</h3>
            </div>
        )
    }
}


export default MenuMakanan;