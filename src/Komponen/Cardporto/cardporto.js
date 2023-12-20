import './cardporto.css';
import React from 'react';




class CardPorto extends React.Component {
  
    render() {
      const warna = this.props.warna
      const listWarna = []
      for (let i =0; i < 4;i++) {
        listWarna.push(
          <li><span style={{backgroundColor: warna[i]}}></span></li>
        );
      }
      
      return (
        <div className='containerporto'>
            <div className='row1'>
              <div className='teks'>
                <h4>{this.props.bulan}</h4>
                <h1>{this.props.judul}</h1>
                <p>{this.props.desk}</p>
              </div>
              <div className='tools'>
                <div className='tool1'>
                  <div className='designtool'>
                    <h6>Design Tools</h6>
                    <p>{this.props.tools}</p>
                  </div>
                  <div className='font'>
                    <h6>Font</h6>
                    <p>{this.props.font}</p>
                  </div>
                </div>
                <div className='tool2'>
                  <h6>Color</h6>
                  <ul>
                    {listWarna}
                  </ul>
                </div>
              </div>
            </div>
            <div style={{backgroundColor:this.props.bgContainer, height: this.props.heightContainer}} className='row2'>
              <img style={{width: this.props.width, backgroundColor: this.props.backgroundwarna}} src={this.props.gambar}></img>
            </div>
        </div>
      );
    }
  }
  
  export default CardPorto;