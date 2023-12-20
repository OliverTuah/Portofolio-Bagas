import './section1.css';
import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { FiDribbble } from 'react-icons/fi';
import Button from '../../Komponen/Button/Button';

class Section1 extends React.Component {

    render() {
        
        return (
            <div id="hero" className='section1'>
              <div className='container'>
                <div className='row'>
                  <div className='col-sm-12'>
                    <div className='text'>
                        <h1>Hello, I am <br></br>Bagas Arfiansyah</h1>
                        <h6 className='subtitle'>UI/UX Designer</h6>
                        
                        <ul className='sosmed'>
                        <a target="_blank" rel="noopener noreferrer" href="https://wa.me/6289630049636">
                            <span className="changeColor">
                                <li><FiPhone className='icon' size={24}/>089630049636</li>
                            </span>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="mailto:bagasarfiansyah007@gmail.com">
                            <span className="changeColor">
                                <li><FiMail className='icon' size={24}/>bagasarfiansyah007@gmail.com</li>
                            </span>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/BagasArfiansyah007">
                            <span className="changeColor">
                                <li><FiDribbble className='icon' size={24}/>bagasarfiansyah007</li>
                            </span>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/baarf1501/?hl=id">
                            <span className="changeColor">
                                <li><FiInstagram className='icon' size={24}/>baarf1501</li>
                            </span>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/bagas-arfiansyah-b36301179/">
                            <span className="changeColor">
                                <li><FiLinkedin className='icon' size={24}/>bagasarfiansyah</li>
                            </span>
                        </a>
                        </ul>
                        
                        <p>Welcome to my portfolio gallery. Here I will explain my strengths and show all the experiences I have had. 
                        <span> Hope you like it!</span>
                        </p>

                        <Button className='button' nama="Download Resume" alamat="https://drive.google.com/file/d/1L2vv6lIwgEic-NX91fO4tKFr9xcKVEcD/view?usp=sharing"></Button>
                    </div>

                    <img src='https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/foto%20muka.webp'></img>
                    <img className='helix' src='https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/Helix.webp'></img>
                    <img className='thorus' src='https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/Thorus%201.webp'></img>
                    <img className='cone' src='https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/Cone.webp'></img>
                    <img className='cube' src='https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/Cube%203.webp'></img>

                  </div>
                </div>
              </div>
            </div>
        );

        function onevent(){
            var parent = document.getSelection()
        }
    }
}

export default Section1;