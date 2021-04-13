import React from 'react';


class Para extends React.Component{

    constructor(props){
        super(props);
        this.text = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
    }
    render(){
        return (
            <p id="para">{this.text}</p>
        )
    }
}

export default Para;