import React, {
  Component
} from 'react';
import  Header from "./Header";
import Footer from './Footer';
import MenuUtama from './MenuUtama';
import MenuTentangKami from './MenuTentangkami';
import MenuKontak from './MenuKontak';
import MenuMakanan from './MenuMakanan';

class App extends Component {
  render() {
    return ( < div >
    <Header/>
      <MenuKontak/>
    <MenuUtama/>
      <MenuMakanan/>
    <MenuTentangKami kami="Warung Nusantara Adalah Restoran yang Bernuansa Nusantara, Kami Ada Untuk Membuat Anda Menikmati Makanan Khas dari Nusantara" />
    <Footer/>
     </div>
    );
  }
}

export default App;