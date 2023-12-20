import './footer.css';
import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { FiDribbble } from 'react-icons/fi';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='logo'>
                    <h4>Bagas.</h4>
                    <p>You can download my resume, to look the detail of my experience and achievement as UI/UX Designer. <a target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#2D81FF", fontWeight:700}} href="https://drive.google.com/file/d/1L2vv6lIwgEic-NX91fO4tKFr9xcKVEcD/view?usp=sharing">Click this to see more detail!</a></p>
                </div>
                <div className='informasi'>
                    <div className='portofolio kol3'>
                        <h6>Portofolio</h6>
                        <ul>
                            <a href='#'>
                                <li>Akademika</li>
                            </a>
                            <a href='#'>
                                <li>Diceritain</li>
                            </a>
                            <a href='#'>
                                <li>Unjani</li>
                            </a>
                            <a href='#'>
                                <li>Eazy</li>
                            </a>
                        </ul>
                    </div>
                    <div className='conten kol3'>
                        <h6>content</h6>
                        <ul>
                            <a href='#hero'>
                                <li>Home</li>
                            </a>
                            <a href='#about'>
                                <li>About me</li>
                            </a>
                            <a href='#porto'>
                                <li>Portofolio</li>
                            </a>
                            <a href='#contact'>
                                <li>Contact</li>
                            </a>
                        </ul>
                    </div>
                    <div className='socialmedia kol3'>
                        <h6>Social Media</h6>
                        <ul>
                            <a target="_blank" rel="noopener noreferrer" href="https://wa.me/6289630049636">
                                <li>
                                   <FiPhone size={24}></FiPhone> 
                                   089630049636
                                </li>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/BagasArfiansyah007">
                                <li>
                                    <FiDribbble size={24}></FiDribbble> 
                                    Bagas Arfiansyah 
                                </li>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/baarf1501/?hl=id">
                                <li>
                                    <FiInstagram size={24}></FiInstagram> 
                                    baarf1501
                                </li>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/bagas-arfiansyah-b36301179/">
                                <li>
                                    <FiLinkedin size={24}></FiLinkedin> 
                                    Bagas Arfiansyah
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;