import './Beranda.css';
import React from 'react';
import Header2 from '../../Komponen/Header 2/Header2';
import SosmedNav from '../../Komponen/navigationSosmed/sosmednav';
import Section1 from '../../section/section 1/section1';
import Section2 from '../../section/section 2/section2';
import Section3 from '../../section/section 3/section3';
import Section4 from '../../section/section 4/section4';
import Section5 from '../../section/Section 5/section5';
import {Scrollbar} from 'smooth-scrollbar-react';
import Footer from '../../Komponen/footer/footer';
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";

function Beranda(){
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
              <div className="load-screen" ref={(el) => (screen = el)}>
              </div>
            </div>
            <div data-barba="container" className="Home">
                <Header2 ref={(el) => (body = el)} homeAlamat="#hero" aboutAlamat="#about" portoAlamat="/porto" contactAlamat="#contact"/>
                  <Section1/>
                  <Section2/>
                  <Section3/>
                  <Section4/>
                  <Section5/>
                  <Footer/>
                  <SosmedNav/>
            </div>
            
          </React.StrictMode>
      );
}

  
export default Beranda;