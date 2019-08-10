import React, {
  Component
} from 'react';
import  Header from "./Header";
import Footer from "./Footer";
// import List from './List';
import Top from './Top';
import Form from './Form';
import CustomInput from './CustomInput';
// import Main from './Main';


class App extends Component {
  render() {
    return ( < div >
    <Header dataList="Terbaik 3" />
    <Top/>
    <Form/>
    <CustomInput/>
    {/* <Main/>
    <List/> */}
    <Footer name="Makanan Nusantara" tahun="1990"/>
     </div>
    );
  }
}

export default App;