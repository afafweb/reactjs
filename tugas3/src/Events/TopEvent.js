import React from 'react';
class TopEvent extends React.Component{
    constructor(){
        super();
        this.handleFooter = this.handleFooter.bind(this);
    }
    handleFooter(value, e){
        e.preventDefault();
        alert(value);
        // karena mengirimkan text maka menggunakan arrow function
    }
    render(){
    return ( <a href="/" onClick={(e)=>this.handleFooter("Back to Home",e )}>Back to Home</a>
    )}
}

export default TopEvent;