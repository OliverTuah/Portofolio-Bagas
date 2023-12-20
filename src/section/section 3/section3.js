import './section3.css';
import React from 'react';
import Button2 from '../../Komponen/Button 2/Button2';
import { Link } from "react-router-dom";


class Section3 extends React.Component {
    
    render() {
        const Portofolio = [
            {
                "judul": "Exploration Akademika",
                "subjudul": "Exploration UI @League.dji",
                "kategori": "UI Exploration",
                "deksripsi":  <p>Create UI Design Challenge from League.dji by designjam. Akademika  is an application that helps students to manage their assignments so students don't forget to do their assignments and get highest grade review from mas Ravi Mahfuda CO-Founder Design Jam Indonesia. <a href='https://www.instagram.com/p/CoOKPYhhD2D/?hl=id' target="_blank" rel="noopener noreferrer">Click Here to see!</a></p>,
                "gambar": "https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/Leaguedji.webp",
                "link": "https://www.instagram.com/p/CoATPvkhUKe/?hl=id"
            },
            {
                "judul": "Study Case Diceritain",
                "subjudul": "Exploration UX @Diceritain",
                "kategori": "Study case",
                "deksripsi": "Create UI/UX From Study Case of Diceritain Application for Optimization of Process Flow & Interface Convenience in the Peer Counselor Application Ordering & Chatting Feature",
                "gambar": "https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/diceritain.webp",
                "link": "https://medium.com/@bagasarfiansyah007/ux-studi-kasus-pengoptimalan-alur-proses-kenyamanan-interface-di-fitur-pemesanan-chating-3c6eb117cb19"
            },
            {
                "judul": "awokaokaodkawdkawodkawok",
                "subjudul": "Exploration UX @Diceritain",
                "kategori": "Study case",
                "deksripsi": "Create UI Design Challenge from League.dji by designjam. Akademika  is an application that helps students to manage their assignments so students don't forget to do their assignments",
                "gambar": "https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/Leaguedji.webp",
                "link": "https://medium.com/@bagasarfiansyah007/ux-studi-kasus-pengoptimalan-alur-proses-kenyamanan-interface-di-fitur-pemesanan-chating-3c6eb117cb19"
            }
        ]

        const rows = [];
        let i = 0;
        let kondisi = true
        while (i < Portofolio.length && kondisi == true) {
            if (i < 2 ) {
                rows.push(
                    <div className='akademika'>
                        <div className='header'>
                            <div className='text'>
                                <h6>{Portofolio[i].subjudul}</h6>
                                <h2>{Portofolio[i].judul}</h2>
                                <p>{Portofolio[i].deksripsi}</p>
                            </div>
                            <div className='buttoncol'>
                                <Button2 alamat={Portofolio[i].link} nama="View Detail"/>
                            </div>
                        </div>
                        <div className='image'>
                            <img src={Portofolio[i].gambar}></img>
                        </div>
                    </div>
                );
            } else {
                rows.push(
                    <Link to="/porto">
                        <Button2 warnaFont="#2D81FF" border="1px solid #2D81FF" warna="white" nama="Read More"/>
                    </Link> 
                );
                kondisi = false;
            }
            i++;
        }

        return (
            <div id="porto" className='section3'>
                {rows}
            </div>
        );
    }
}

export default Section3;