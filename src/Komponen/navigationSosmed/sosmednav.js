import './sosmednav.css';
import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { FiDribbble } from 'react-icons/fi';

class SosmedNav extends React.Component {
   
    render() {
        
        return (
            <div className='navigasicontainer'>
                <div className='NavigasiSosmed'>
                    <ul>
                        <a target="_blank" rel="noopener noreferrer" href="https://wa.me/6289630049636">
                            <span className="changeColor">
                                <li><FiPhone className='icon' size={24}/></li>
                            </span>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="mailto:bagasarfiansyah007@gmail.com">
                            <span className="changeColor">
                                <li><FiMail className='icon' size={24}/></li>
                            </span>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/BagasArfiansyah007">
                            <span className="changeColor">
                                <li><FiDribbble className='icon' size={24}/></li>
                            </span>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/baarf1501/?hl=id">
                            <span className="changeColor">
                                <li><FiInstagram className='icon' size={24}/></li>
                            </span>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/bagas-arfiansyah-b36301179/">
                            <span className="changeColor">
                                <li><FiLinkedin className='icon' size={24}/></li>
                            </span>
                        </a>
                    </ul>
                </div>
            </div>
                  
        );
    }
}

export default SosmedNav;