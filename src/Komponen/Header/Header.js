import './Header.css';
import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { FiDribbble } from 'react-icons/fi';

const divStyle = {
    color: '#2a2a2a',
    marginRight: '20px'
};


class Header extends React.Component {
    buttonNavKlik() {
      document.getElementById("navbar").style.top = "0";
    }
    render() {
      return (
        <div className='Header'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-6 navigasi'>
                            <ul>
                                <li><h1>Home</h1></li>
                                <li><h1>About</h1></li>
                                <li><h1>Portofolio</h1></li>
                                <li><h1>Contact</h1></li>
                                <li className='sosial'>
                                    <FiInstagram href='#' size={30} style={divStyle}/>
                                    <FiLinkedin href='#' size={30} style={divStyle}/>
                                    <FiGithub href='#' size={30} style={divStyle}/>
                                    <FiDribbble href='#' size={30} style={divStyle}/>
                                </li>
                                <li className='footer'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    tempor incididunt ut labore et dolore magna aliqua.</p></li>
                            </ul>
                            <img className='img1' src='https://user-images.githubusercontent.com/55185733/115379968-4405e680-a1fc-11eb-8db2-eee7178149c6.png'></img>
                            <img className='img2' src='https://user-images.githubusercontent.com/55185733/115379474-c215bd80-a1fb-11eb-9695-35e70493341b.png'></img>
                            <img className='img3' src='https://user-images.githubusercontent.com/55185733/115379584-dce83200-a1fb-11eb-9cb4-7457e309ce74.png'></img>
                            <img className='img4' src='https://user-images.githubusercontent.com/55185733/115379387-af02ed80-a1fb-11eb-9007-ad8625b694ef.png'></img>
                            <img className='img5' src='https://user-images.githubusercontent.com/55185733/115379303-98f52d00-a1fb-11eb-9ff5-b1bd05fc347b.png'></img>

                        </div>

                        <div className='col-sm-6 button' onClick={this.buttonNavKlik}>
                            <div className='container-fluid'>
                                <div className='icon'>
                                    <span></span>
                                    <span></span>
                                </div>        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      );
    }
  }
  
export default Header;