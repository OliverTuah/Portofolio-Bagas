import './section5.css';
import React from 'react';
import Button from '../../Komponen/Button/Button';
import { FiMail } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { FiMapPin } from 'react-icons/fi';

class Section5 extends React.Component {
    
    render() {
        
        return (
            <div id="contact" className='section5'>
                <div className='text'>
                    <h5><span>Interest?</span> Let's Get In Touch!</h5>
                    <p>want to know more? contact me via email or fill in the following email form for business needs or other things!
                        <br></br><span style={{color:"#2D81FF", fontWeight:700}}>The function send email, is not ready yet!</span>
                    </p>
                </div>
                <form className='formEmail'>
                    <div className='form-group'>
                        <input type="email" class="form-control" id="email" placeholder='Email'></input>
                    </div>
                    <div className='form-group'>
                        <input type="name" class="form-control" id="name" placeholder='Name'></input>
                    </div>
                    <div className='form-group form-group-button'>
                        <input type="pesan" class="form-control" id="pesan" placeholder='Message'></input>
                        <a target="_blank" rel="noopener noreferrer" href='mailto:bagasarfiansyah007@gmail.com'>
                            <button class="btn btn-primary">
                                <FiMail className='icon' size={24}/>
                            </button>
                        </a>
                    </div>
                </form>

                <div className='maps'>
                    <div className='maplayout'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3074993476007!2d107.62949671441652!3d-6.973001670215196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9adf177bf8d%3A0x437398556f9fa03!2sUniversitas%20Telkom!5e0!3m2!1sid!2sid!4v1675500632779!5m2!1sid!2sid"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='information'>
                        <div className='kol3 Lokasi'>
                            <div className='Icon'>
                                <FiMapPin style={{color:"white"}} size={30}></FiMapPin>
                            </div>
                            <h6>Location</h6>
                            <p>Jl. Telekomunikasi, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257</p>
                        </div>
                        <div className='kol3 handphone'>
                            <div className='Icon'>
                                <FiPhone style={{color:"white"}} size={30}></FiPhone>
                            </div>
                            <h6>Phone Number</h6>
                            <p>+62 811-2233-9963</p>
                        </div>
                        <div className='kol3 email'>
                            <div className='Icon'>
                                <FiMail style={{color:"white"}} size={30}></FiMail>
                            </div>
                            <h6>Email</h6>
                            <p>bagasarfiansyah007@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section5;