import React,{Component  } from "react";

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            title : "Menu Makanan",
            title2: "Menu Minuman",
            inputValue : "",
            inputKota :"",
            menuMakanan: [
                {
                    nama: 'Bakso',
                    harga: 12500
                },
                {
                    nama: 'Mie Ayam',
                    harga: 7000
                },
                {
                    nama: 'Mie Ayam Bakso'
                    ,harga: 17000
                },
                {
                    nama: 'soto',
                    harga: 15000
                }
            ]
        }
        this.rubahData = this.rubahData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    // rubahData(){
    //     this.setState({title : "Pilih Makanan"})
    // }

    rubahData(){
        this.setState((state, props)=>{
            // parameter hanya dipakai utnuk mengambil value dari object this.state pada method constructor
            return {title: "Pilih Menu Makanan",
            title2:"Pilih Menu Minuman"}
        });
    }
    handleChange(value, e){
        // const targetValue = e.target.value;
        // this.setState((state, props)=>{
        //     return {
        //         inputValue : targetValue
        //     }
        // })
        this.setState({[value]: e.target.value})
        console.log(e.target.value)
    }
    
    render(){
        return(
            <div>
                <h3>{this.state.title}</h3>
                <h3>{this.state.title2}</h3>
                <button onClick={this.rubahData}>Rubah data</button>
                <input type="text" value={this.state.inputValue} onChange={e=>this.handleChange('inputValue', e)}  placeholder="name"></input>
                <input type="text" value={this.state.inputKota} onChange={e=>this.handleChange('inputKota', e)}   placeholder="kota"></input>
                <br></br>
                {this.state.menuMakanan.map((value, index)=>{
                    return(
                        <div key={index}>
                            <p>No : {index +1}</p>
                            <p>Nama : {value.nama}</p>
                            <p>Harga : {value.harga}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default Main;