import './Button.css';
import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <a target="_blank" rel="noopener noreferrer" href={this.props.alamat}>
                <div className='button'>
                    <h6>{this.props.nama}</h6>
                </div>
            </a>      
        );
    }
}

export default Button;