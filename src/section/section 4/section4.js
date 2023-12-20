import './section4.css';
import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';


class Section4 extends React.Component {
    
    render() {

        const image = [
            "https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/logo-slidefactory-ls%202.webp",
            "https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/logo_trans%202.webp",
            "https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/Screen%20Shot%202023-02-01%20at%2010.29%202.webp",
            "https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/Logo_Telkom_University_potrait%202.webp"

        ]
        const images = []

        for (let i = 0; i < image.length; i++){
            images.push(
                <img src={image[i]}></img>
            )
        }

    
        return (
            
                
            <div id="experience" className='section4'>
                <div className='text'>
                    <h5>My Experience</h5>
                    <p>I work as a UI/UX Designer for more than 1 year in several companies</p>
                </div>
                <div className='foto'>
                    <ul>
                        <li><img src={image[0]}></img></li>
                        <li><img src={image[1]}></img></li>
                        <li><img style={{width:101}} src={image[2]}></img></li>
                        <li><img style={{width:91}} src={image[3]}></img></li>
                    </ul>
                </div>
                
                <img className='BG' src='https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/BG.webp'></img>
            </div>
        );
    }
}

export default Section4;