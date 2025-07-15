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

    const currentIndex = 0 

    return (
        <div className="hero-section">

            <div className="slideshow-container">
                <div className="property-slideshow">
                    {heroData.options.map(({ title, source},index) => (
                        <PropertyPictures 
                        key={`Image ${index+1}`} 
                        title={title} 
                        source={source}
                        currentIndex={currentIndex}
                        index={index}
                        />
                    ))}
                </div>
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

type PropertyCard = {
    title:string;
    source:string;
    currentIndex:number;
    index:number;
};

const PropertyPictures = ({title,source,currentIndex,index}:PropertyCard) => {

    // css transition instead of display none later 
    if (index >= currentIndex && index < currentIndex+3) {
        return (
        <div className="slide">
            <img src={source} alt={title} id={title}/>
        </div>
    )
    }

    else {
        return (
        <div style={{display:"none"}} className="slide">
            <img src={source} alt={title} id={title}/>
        </div>
    )
    }


}