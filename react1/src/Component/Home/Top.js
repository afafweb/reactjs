import React from 'react';

const Top = ()=>{
    // Bisa juga menggunakan arrow function on writing
    function handlePesan(value, e){
        e.preventDefault();
        alert("Halaman Top Tampil");
        alert(value)
    }
    return <a href="/" onClick={(e)=>handlePesan("Pesan Dari Top", e)}>Halaman Top</a> // Handle Pesan tidaak menggunakan this karena didalam function class buukan class murni
}

export default Top;