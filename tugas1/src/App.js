import React,{Component} from 'react';
import MenuKontak from './page/MenuKontak';
import MenuTentangKami from './page/MenuTentangKami';
import MenuProduct from './page/MenuProduct';
import MenuUtama from './page/MenuUtama';

const Header = ()=> {
  return (
    <div>
      <h1>Halman Header</h1>
    </div>
  )
}
const Footer = ()=>{
  return(
    <div>
      <h1>Halaman Footer</h1>
    </div>
  )
  }

class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <MenuUtama/>
        <MenuTentangKami/>
        <MenuProduct/>
        <MenuKontak/>
        <Footer/>
      </div>
    )
  }
}

export default App;
