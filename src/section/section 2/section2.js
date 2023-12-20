import './section2.css';
import React from 'react';
import Card from '../../Komponen/Cards/card';

class Section2 extends React.Component {

    render() {
        const divStyle= {
            padding: 0,
            width: '100%',
            margin: 0, 
          }
    
          const teks = [
            <p>
              I really like designing User Interface based on user needs from the results 
              of <span>Research</span> on users. In practice, I am very expert in using <span>Figma </span> 
              and designing <span>Design Systems</span> for future interface design needs
            </p>,
            <p>
              I learned many things in web development, but my focus is only on <span>Front-end Development</span>, 
              using <span>React.js</span> by implementing <span>Responsive Design</span> and using an ecosystem design system so 
              that components can be used repeatedly
            </p>,
            <p>
              I also like to implement my own design to code using <span>Flutter</span> for programming framework in 
              mobile development. I learning about <span>Firebase</span> for database no sql and implement code using 
              principe <span>Design Pattern MVC and OOP</span>
            </p>,
          ]
        return (
            <div id="about" onScroll={this.props.fungsi} className='section2'>
              <div className='container'>
                <div style={divStyle} className='row'>
                  <div style={divStyle} className='col-sm-12 col1 text-center'>
                    <div className='text1'>
                      <h2>About me</h2>
                      <p>I am a Software engineering student who is interested to UI/UX Design, 
                        Front-end Developer, and Mobile Developer. I also do a lot of internships 
                        and work as a full-time UI/UX Designer who is engaged in the Software 
                        Engineering process. <span>Here’s the skill that I have:</span></p>
                    </div>
                    <div className='cards'>
                      <div className='container-fluid'>
                        <div className='row'>
                            <Card 
                              gambar="https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/Message.webp"
                              judul="UI/UX"
                              teks={teks[0]}
                              ukuran = "321"
                            />
                            <Card
                              gambar="https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/Computer.webp"
                              judul="Web Development"
                              teks={teks[1]}
                              ukuran = "321"
                            />
                            <Card
                             gambar="https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/Phone.webp"
                             judul="Mobile Development"
                             teks={teks[2]}
                             ukuran = "260"
                            />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img className='bg' src='https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/BG.webp'></img>
            </div>
        );

        
    }
}

export default Section2;