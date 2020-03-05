import React from 'react'
import '../styles/ButtonCompon.css';
class ButtonComponent extends React.Component{
    constructor()
    {
        super();
    }
    render(){
        return(
            <input type={this.props.type}  value={this.props.value} className={this.props.className} disabled={this.props.disabled} id={this.props.id} onClick={this.props.onClick} />
        );
    }
}

export default ButtonComponent;