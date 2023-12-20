import './Header2.css';
import React from 'react';
import Button from '../Button/Button';
import Button2 from '../../Komponen/Button 2/Button2';
import Footer from '../footer/footer';
import { FiInstagram } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { FiDribbble } from 'react-icons/fi';
import { Link } from "react-router-dom";

class Header2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          active: true,
        };
      }
    
      toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
      };

    render() {

        let btn_class = this.state.active ? "btn-nav" : "btn-nav active";
        let menu = this.state.active ? "menuMobile" : "menuMobile active";
        return (
            <div className="navbar">
                <div className='container-nav'>
                    <div className='row1'>
                        <div className='col4 brand'>
                            <h5>Bagas.</h5>
                        </div>
                        <div className='col4 navlink'>
                            <ul>
                                <li id='list'><a href={this.props.homeAlamat}>Home</a></li>
                                <li id='list'><a href={this.props.aboutAlamat}>About</a></li>
                                <li id='list'><Link to="/porto">Portofolio</Link></li>
                                <li id='list'><a href={this.props.contactAlamat}>Contact</a></li>
                            </ul>
                        </div>
                        <div onClick={this.toggleClass.bind(this)} className={btn_class}>         
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className='col4'>
                            <Button nama="Download Resume" alamat="https://drive.google.com/file/d/1L2vv6lIwgEic-NX91fO4tKFr9xcKVEcD/view?usp=sharing"></Button>
                        </div>
                    </div>
                </div>
                <div className={menu}>
                    
                    <div className='navlinkMobile'>
                        <ul>
                            <li onClick={this.toggleClass.bind(this)} id='list'><a href={this.props.homeAlamat}>Home</a></li>
                            <li onClick={this.toggleClass.bind(this)} id='list'><a href={this.props.aboutAlamat}>About</a></li>
                            <li onClick={this.toggleClass.bind(this)} id='list'><Link to="/porto">Portofolio</Link></li>
                            <li onClick={this.toggleClass.bind(this)} id='list'><a href={this.props.contactAlamat}>Contact</a></li>
                        </ul>
                    </div>

                    
                    <div className='footer'>
                        <div className='logo'>
                            <h4>Bagas.</h4>
                            <p>You can download my resume, to look the detail of my experience and achievement as UI/UX Designer.<a target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/1L2vv6lIwgEic-NX91fO4tKFr9xcKVEcD/view?usp=sharing'> Click this to see more detail! </a></p>
                        </div>
                        <div className='informasi'>
                            <div className='socialmedia kol3'>
                                <ul>
                                    <a target="_blank" rel="noopener noreferrer" href="https://wa.me/6289630049636">
                                        <li>
                                        <FiPhone size={35}></FiPhone> 
                                        </li>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="mailto:bagasarfiansyah007@gmail.com">
                                        <li>
                                        <FiMail size={35}></FiMail> 
                                        </li>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/BagasArfiansyah007">
                                        <li>
                                            <FiDribbble size={35}></FiDribbble> 
                                        </li>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/baarf1501/?hl=id">
                                        <li>
                                            <FiInstagram size={35}></FiInstagram> 
                                        </li>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/bagas-arfiansyah-b36301179/">
                                        <li>
                                            <FiLinkedin size={35}></FiLinkedin> 
                                        </li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        );
    }
}

export default Header2;