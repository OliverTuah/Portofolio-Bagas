import './card.css';
import React from 'react';

class Card extends React.Component {

    render() {
        
        return (
            <div className='col-sm-4 card'>
                <div className='img'>
                    <img width={this.props.ukuran} src={this.props.gambar}></img>
                </div>
                <div className='text'>
                    <h5>{this.props.judul}</h5>
                    <p>{this.props.teks}</p>
                </div>    
            </div>     
        );
    }
}

export default Card;