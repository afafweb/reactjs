import React, {Component} from 'react';

class CustomInput extends Component{
    constructor(props){
        super(props);
        this.state={
            value : "Input pertama"
        }
        this.hadleInput = this.hadleInput.bind(this);
        this.textInput = React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }
    hadleInput(){
        this.textInput.current.focus();
        this.setState({value : ""})
    }
    handleChange(e){
        this.setState({value : e.target.value})
        console.log(this.state.value)
    }
    render(){
        return(
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.value} ref={this.textInput}></input>
                <button onClick={this.hadleInput}>Kirim</button>
            </div>
        )
    }
}

export default CustomInput;