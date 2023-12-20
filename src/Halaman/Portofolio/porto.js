import './porto.css';
import React from 'react';
import Footer from '../../Komponen/footer/footer';
import SosmedNav from '../../Komponen/navigationSosmed/sosmednav';
import CardPorto from '../../Komponen/Cardporto/cardporto';
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import Header2link from '../../Komponen/Header 2 uselink/Header2link';


function Portofolio(){
    const Portofolio = [
        {
            "judul": "Exploration Akademika",
            "bulan": "Februari 2023",
            "kategori": "UI Exploration",
            "deksripsi": <p>Create UI Design Challenge from League.dji by designjam. Akademika  is an application that helps students to manage their assignments so students don't forget to do their assignments and get highest grade review from mas Ravi Mahfuda CO-Founder Design Jam Indonesia. <a href='https://www.instagram.com/p/CoOKPYhhD2D/?hl=id' target="_blank" rel="noopener noreferrer">Click Here to see!</a></p>,
            "gambar": "https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/Illus%20gambar/Group%20642.png",
            "warna": ["#FEB974","#2D81FF","#EC4040","#282828"],
            "tools": "Figma",
            "font": "Montserrat",
            "width": 1300,
            "heightContainer": "100%",
            "bgContainer": "#E0F4FF"
        },
        {
            "judul": "UX Study Case Diceritain",
            "bulan": "Juli 2022",
            "kategori": "UX Exploration",
            "deksripsi": <p>Create UI/UX From Study Case of Diceritain Application for Optimization of Process Flow & Interface Convenience in the Peer Counselor Application Ordering & Chatting Feature. Here for the detail explanation.  
                         <a target="_blank" rel="noopener noreferrer" href='https://medium.com/@bagasarfiansyah007/ux-studi-kasus-pengoptimalan-alur-proses-kenyamanan-interface-di-fitur-pemesanan-chating-3c6eb117cb19'>Click here!</a></p>, 
            "gambar": "https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/Illus%20gambar/diceritain.png",
            "warna": ["#33AFFF","#F14A4A","#FFCE49","#282828"],
            "tools": "Figma",
            "font": "Montserrat",
            "bgContainer": "#E0F4FF"
        },
        {
            "judul": "Dashboard for E-course & Event",
            "bulan": "Desember 2021",
            "kategori": "UI Exploration",
            "deksripsi": <p>The Dashboard for E-courses & Events was created with the user's anxiety in mind to find ongoing events and courses that can be studied online. Users also want courses that can be tracked so that users don't forget to do their assignments.</p>, 
            "gambar": "https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/Illus%20gambar/E-course%20%26%20E-vent.png",
            "warna": ["#6457DF","#E8E6FF","#FFBB0B","#223D5D"],
            "tools": "Figma",
            "font": "Montserrat",
            "width": 1225.77,
            "heightContainer": 1301,
            "bgContainer": "#E9E7FF"
        },
        {
            "judul": "Eazy Landing Page",
            "bulan": "November 2022",
            "kategori": "Real Project",
            "deksripsi":  <p> Eazy is a Higher Education academic and non-academic management application, which is integrated with each other and in accordance with DIKTI regulations. So that universities are facilitated in managing higher education institutions. The Eazy application is a real project made by me, not only a landing page, I also made the appearance of the application dashboard according to user requirements
            <a target="_blank" rel="noopener noreferrer" href='https://www.eazy.id/'>. Click here! for see the website</a></p>, 
            "gambar": "https://github.com/Bagasarfiansyah007/Portofolio-asset/blob/main/Illus%20gambar/eazy.png?raw=true",
            "warna": ["#356CFF","#FF6363","#4659FE","#282828"],
            "tools": "Figma",
            "font": "Montserrat",
            "width": 952,
            "heightContainer": 1700,
            "bgContainer": "#E9F3FF"
        },
        {
            "judul": "Finance Management",
            "bulan": "Februari 2021",
            "kategori": "UI Exploration",
            "deksripsi":  <p>In this design finance management, i only do creative UI exploration to train my taste in design, layout, color, and typhography to make it look eye catchy so purely on this design I only do creative design.</p>, 
            "gambar": "https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/Illus%20gambar/Finance.png",
            "warna": ["#F77896","#A7AEF9","#B4F2E1","#282828"],
            "tools": "Figma",
            "font": "Montserrat",
            "width": 1233.97,
            "heightContainer": 883,
            "bgContainer": "#FFE9EE"
        },
        {
            "judul": "Diceritain Design System",
            "bulan": "Juli 2022",
            "kategori": "UX Exploration",
            "deksripsi":  <p>Same as in the explanation of the case study. Here I also made a Design System from Diceritain. The design system is used so that component management is easier and maintenance is not difficult, making it easier for designers to implement aspects of consistency and make efficient designs.</p>, 
            "gambar": "https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/Illus%20gambar/Diceritain%20ds.png",
            "warna": ["#33AFFF","#FFCE49","#F14A4A","#282828"],
            "tools": "Figma",
            "font": "Montserrat",
            "width": 1121,
            "heightContainer": 1318,
            "bgContainer": "#E0F4FF"
        },
        {
            "judul": "Unjani Design System",
            "bulan": "Maret 2022",
            "kategori": "Real Project",
            "deksripsi":  <p>Unjani design system is a real project that I worked on when I was still working at the previous company. Unjani has 7 various applications, so appropriate components are needed so that consistent aspects can be fulfilled. So a design system was created for the development of the Unjani information system application.</p>, 
            "gambar": "https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/Illus%20gambar/Cover.png",
            "warna": ["#267B18","#FFD600","#EC4040","#282828"],
            "tools": "Figma",
            "font": "Montserrat",
            "bgContainer": "#E0FFE3"
        },
        {
            "judul": "Balai Uji Terap Teknik dan Metode Karantina Pertanian (BUTTMKP)",
            "bulan": "November 2022",
            "kategori": "Real Project",
            "deksripsi":  <p>Balai Uji Terap Teknik dan Metode Karantina Pertanian (BUTTMKP) is an agricultural quarantine agency that will increase its role in mitigating disturbances to food security through the protection of the preservation of biological natural resources of animals and plants from quarantine animal pests and diseases (HPHK). BUTTMKP is a real project, in this design I made an application display design and conducted research regarding architectural information and design components needed.</p>, 
            "gambar": "https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/Illus%20gambar/BUTTMKP.png",
            "warna": ["#0A743E","#F8C301","#B1E1F7","#282828"],
            "tools": "Figma",
            "font": "Montserrat",
            "width": 1220,
            "heightContainer": 1950,
            "bgContainer": "#E0FFE3"
        },

        
    ]
    const porto = []
    
    for (let i=0; i<Portofolio.length; i++){
        porto.push(
            <CardPorto 
                judul={Portofolio[i].judul} 
                bulan={Portofolio[i].bulan}
                desk={Portofolio[i].deksripsi}
                tools={Portofolio[i].tools}
                font={Portofolio[i].font}
                warna={Portofolio[i].warna}
                gambar={Portofolio[i].gambar}
                width={Portofolio[i].width}
                bgContainer={Portofolio[i].bgContainer}
                heightContainer={Portofolio[i].heightContainer}
            />
        );
    }

    let screen = useRef(null);
      let body = useRef(null);
      useEffect(() => {
        var tl = new TimelineMax();
        tl.to(screen, {
          duration:  0.6,
          width: "100%",
          left: "0%",
          ease: Power3.easeInOut,
        });
        tl.to(screen, {
          duration: 1.8,
          left: "100%",
          ease: Power3.easeInOut,
          delay: 0.3,
        });
        tl.set(screen, { left: "-100%" });
        TweenMax.to(body, .3, {css: {
          opacity: "1",
          pointerEvents: "auto",
          ease: Power4.easeInOut
        }}).delay(2);
        return () => {
          TweenMax.to(body, 1, {css: {
            opacity: "0",
            pointerEvents: 'none'
          }});
      }
      });
        
  return (
      
      <React.StrictMode>
        <div style={{position: "fixed", zIndex:9999999999}} className="load-container">
            <div className="load-screen" ref={(el) => (screen = el)}></div>
        </div>
        <div data-barba="container" className="Contact">
            <Header2link ref={(el) => (body = el)} homeAlamat="/" aboutAlamat="/#about"/>
            <div className="hero">
                <div className='row1'>
                    <h6>Bagas Arfiansyah</h6>
                    <h1>I Love to Create Something Simple and Clean</h1>
                    <p>I'm Bagas Arfiansyah and I'm interested in a visual that's simple and clean but still looks pleasing to the eye. So I am very interested in something minimalist. I also apply this to some of my portfolios. Here, I will describe my portfolio</p>
                </div>
            </div>
            {porto}
            <Footer/>
            <SosmedNav/>
        </div>
      </React.StrictMode>
  );
}

  
  export default Portofolio;