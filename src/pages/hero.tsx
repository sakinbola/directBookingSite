import { useState } from "react";

import "./hero.css"

import img1 from "./../images/img_1.jpg";
import img2 from "./../images/img_2.jpg";
import img3 from "./../images/img_3.jpg";
import img4 from "./../images/img_4.jpg";
import img5 from "./../images/img_5.jpg";
import img6 from "./../images/img_6.jpg";
import img7 from "./../images/img_7.jpg";
import img8 from "./../images/img_8.jpg";
import img9 from "./../images/img_9.jpg";
import img10 from "./../images/img_10.jpg";
import img11 from "./../images/img_11.jpg";
import img12 from "./../images/img_12.jpg";
import img13 from "./../images/img_13.jpg";
import img14 from "./../images/img_14.jpg";
import img15 from "./../images/img_15.jpg";
import img16 from "./../images/img_16.jpg";
import img17 from "./../images/img_17.jpg";
import img18 from "./../images/img_18.jpg";

const heroData = {
    options: [ 
        { title: "Front Hall", source: img1 },
        { title: "First Floor Bedroom", source: img2 },
        { title: "Living Room", source: img3 },
        { title: "Living Room 2", source: img4 },
        { title: "Living Room 3", source: img5 },
        { title: "Kitchen 1", source: img6 },
        { title: "Kitchen 2", source: img7 },
        { title: "Staircase 1", source: img8 },
        { title: "Upstairs", source: img9 },
        { title: "Laundry Room", source: img10 },
        { title: "Upstairs Bathroom", source: img11 },
        { title: "Upstairs Bedroom", source: img12 },
        { title: "Upstaris Bedroom 2", source: img13 },
        { title: "Staircase 2", source: img14 },
        { title: "Master Bedroom", source: img15 },
        { title: "Master Washroom", source: img16 },
        { title: "Master Bath Tub", source: img17 },
        { title: "Front Door", source: img18 },
    ]
}

function Hero () {

    // use state react for currentindex 

    const [currentIndex,setCurrentIndex] = useState(1) 
    const maxIndex = heroData.options.length;
    const visibleCount = 3

    const handleRightClick = () => {

        if ((currentIndex+1) > maxIndex-visibleCount){
            setCurrentIndex(0)
        }
        else {
            setCurrentIndex(currentIndex + 1)
        }



    
    }

    const handleLeftClick = () => {

        if ((currentIndex - 1) === 0) {

        } 
        else {
            setCurrentIndex(currentIndex - 1)     
        }

    }


    return (
        <div className="hero-section">

            <div className="slideshow-container">


            <button className="arrow-button-right" onClick={handleRightClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="arrow">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>

                <div className="property-slideshow">
                    
                    {/* splice in future  */}
                    {heroData.options.map(({ title, source},index) => (
                        <PropertyPictures 
                        key={`Image ${index+1}`} 
                        title={title} 
                        source={source}
                        currentIndex={currentIndex}
                        index={index}
                        isVisible = {index>=currentIndex && index < currentIndex+visibleCount}
                        />
                    ))}
                </div>

            <button className="arrow-button-left" onClick={handleLeftClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="arrow">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>
            </div>



            <div className="title">
                <h1> Elegant Mississuaga Home </h1>   
            </div>  
            <div className="property-description">  
                <p>
                    
                </p>
            </div>
            <div className="property-details"> 
                <h2> Property Details</h2>
                <div className="details-container">
                    <h3> X </h3>
                    <p> x</p>
                </div>
                <div className="details-container">
                    <h3> X </h3>
                    <p> x</p>
                </div>
                <div className="details-container">
                    <h3> X </h3>
                    <p> x</p>
                </div>
            </div>
        </div>
    )
}

export default Hero 

// bug catching tsx only 
type PropertyCard = {
    title:string;
    source:string;
    currentIndex:number;
    index:number;
    isVisible:boolean;
    // handleLeftClick:() => void;
};

const PropertyPictures = ({title,source,isVisible}:PropertyCard) => {

    // css transition instead of display none later 
        return (
        <div className= {`slide ${isVisible ? "visible" : "hidden"}`} style={{ position: "relative" }}>
            <img src={source} alt={title} id={title} />
        </div>

        )

    }
