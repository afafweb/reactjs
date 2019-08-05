import React from 'react';
import Footer from './Pages/Footer';
import MenuMakanan from './Pages/MenuMakanan';
import Header from './Pages/Header';
import MenuTentangKami from './Pages/MenuTentangKami';

function App() {
  return (
    <div>
      <Header/>
       <MenuMakanan jumlah="5" />
       <MenuTentangKami kami="Warung Nusantara Adalah Restoran yang Bernuansa Nusantara, Kami Ada Untuk Membuat Anda Menikmati Makanan Khas dari Nusantara" />
       <Footer/>
    </div>
  );
}

export default App;
