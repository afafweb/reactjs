import React from 'react';

import ListMakanan from '../list/ListMakanan';

class MenuMakanan extends React.Component{
    render(){
        return(
            <div>
                <h3>Daftar Makanan Yang Kami sediakan : </h3>
                <center>

                <td>
                    <ListMakanan gbrlink2="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                </td>
                <td>
                    <ListMakanan gbrlink2="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
                </td>
                <td>
                    <ListMakanan gbrlink2="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
                </td>
                <td>
                    <ListMakanan gbrlink2="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
                </td>
                <td>
                    <ListMakanan gbrlink2="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg" />
                </td>
                </center>
            </div>
        )
    }
}

export default MenuMakanan;