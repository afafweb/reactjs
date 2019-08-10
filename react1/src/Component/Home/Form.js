import React,{ Component } from "react";

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({value : e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        alert(" Nilai input text : "+ this.state.value)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        )
    }
}

export default Form;