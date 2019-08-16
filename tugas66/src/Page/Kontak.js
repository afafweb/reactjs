import React,{  Component} from "react";
import Header from './Header';
import "../Style/kontak.css";

class Kontak extends Component{
    render(){
        return(
            <div id="kontak_bg">
                <Header/>
                <div className="kontak">
                    <h3>
                        Jl. Swadaya IV, PD Ranggon, Cipayung, Kota Jak, Khusu Ibukota Jakarta 13860{" "}
                    </h3>
                    <p>081321232321</p>
                </div>
            </div>
        )
    }
}

export default Kontak;