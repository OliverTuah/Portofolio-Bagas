import './Button2.css';
import React from 'react';

class Button2 extends React.Component {
    render() {
        const divStyle = {
            backgroundColor: this.props.warna,
            border: this.props.border,
        }

        const warnafont = {
            color: this.props.warnaFont
        }
        return (
            <a target="_blank" rel="noopener noreferrer" href={this.props.alamat}>
                <div style={divStyle} className='button2'>
                    <h6 style={warnafont}>{this.props.nama}</h6>
                </div>
            </a>      
        );
    }
}

export default Button2;