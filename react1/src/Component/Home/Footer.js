import React from 'react';

const Footer = props =>{
    return (
      <div>
        <p>Halaman Footer {props.name}</p>
        <h4>@{props.tahun}</h4>
      </div>
    )
};


// ini juga bisa tapi tidak bisa untuk menuliskan variabel
// function Footer(){
//     return (
//       <div>
//         <p>Halaman Footer</p>
//         <h4>@2018</h4>
//       </div>
//     )
// };



export default Footer;

