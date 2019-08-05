import React,{  Component} from "react";

class MenuTentangKami extends Component{
    constructor(props){
        super(props);
        this.state = {
            kami : this.props.kami,
            alamat : "JL. Swadaya IV, PD.Ranggon. Cipayung, Jakarta Timur, Daerah Khusus Ibu Kota Jakarta 13860",
            kontak : "082228814041"
        }
    }
    render(){
        return(
            <div>
                <center>
                    <p>Tentang Kami</p> {this.state.kami}
                    <h3>{this.state.alamat}</h3>
                    <h4>Kontak Kami : {this.state.kontak}</h4>
                </center>
            </div>
        )
    }
}

export default MenuTentangKami;