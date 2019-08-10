import React from 'react';
import './header.css'
export default /* Just Info that it can be worked on*/ class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      daftar :"Daftar Makanan Nusantara",
      dataList: this.props.dataList,
      renderingStatus: false
    };
    this.handlePesan = this.handlePesan.bind(this);
    this.handleElement = this.handleElement.bind(this);
  }
  handlePesan(value,e ){
    e.preventDefault();
    alert(this.state.daftar)// perlu melakukan this.functionNmae.bind dulu sebelum memanggil this di fingsi ini
    alert(value);
  }
  handleElement(){
    this.setState((state, props)=>{
      return {
        renderingStatus: !state.renderingStatus
      }
    })
  }

  componentDidMount(){
    console.log(" didmount was ruunned after render()")
}
    render() {
        console.log("jalan render")
      return (
        <div>
          {this.state.renderingStatus === true ?(
            <div>
              <h1 style={{color : "blue"}}>Selamat Datang</h1>
              <h2> Silahkan Pilih Makanan</h2>
              </div>
          ):
          (<div>
            <h1 className="judulllll">Selamat Tinggal</h1>
            <h2 id="hadua">Jangan Lupa Kembali</h2>
          </div>)
          }
          <button onClick={this.handleElement}>Change</button>
        </div>
      // <div>
      //   <h1>Makanan Khas Indonesia</h1>
      //   <p>{this.state.daftar}</p>
      //   <p>{this.state.dataList}</p>
      //   {/* Kenapa Memakai This ? Think of it ! */}
      //   <a href="/" onClick={(e)=>this.handlePesan("Pesan Dari Header", e)}>Halaman Header</a>
      //   {/* kenapa menggunakan arrow function = karena kita mengirimkan tidak hanya e tappi juga text "..." jika kita tidak mengirimkan text maka kita bisa melakukan the same as what Main.js did */}
      // </div>
       )
    };
  }


  // export default Header;