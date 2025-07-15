import "./hero.css"

const heroData = {
    options: [ 
        {
            title: "Front Hall", 
            source: "./../images/img_1.jpg"
        }, 

                {
            title: "First Floor Bedroom", 
            source: "./../images/img_2.jpg"
        },
                {
            title: "Living Room", 
            source: "./../images/img_3.jpg"
        },
                {
            title: "Living Room 2", 
            source: "./../images/img_4.jpg"
        },
                {
            title: "Living Room 3", 
            source: "./../images/img_5.jpg"
        },
                {
            title: "Kitchen 1", 
            source: "./../images/img_6.jpg"
        },
                {
            title: "Kitchen 2", 
            source: "./../images/img_7.jpg"
        },
                {
            title: "Staircase 1", 
            source: "./../images/img_8.jpg"
        },
                {
            title: "Upstairs", 
            source: "./../images/img_9.jpg"
        },
                {
            title: "Laundry Room", 
            source: "./../images/img_10.jpg"
        },
                {
            title: "Upstairs Bathroom", 
            source: "./../images/img_11.jpg"
        },
                {
            title: "Upstairs Bedroom", 
            source: "./../images/img_12.jpg"
        },
                {
            title: "Upstaris Bedroom 2", 
            source: "./../images/img_13.jpg"
        },
                {
            title: "Staircase 2", 
            source: "./../images/img_14.jpg"
        },
                {
            title: "Master Bedroom", 
            source: "./../images/img_15.jpg"
        },
                        {
            title: "Master Washroom", 
            source: "./../images/img_16.jpg"
        },
                        {
            title: "Master Bath Tub", 
            source: "./../images/img_17.jpg"
        },
                        {
            title: "Front Door", 
            source: "./../images/img_18.jpg"
        },


    ]
}




function Hero () {
    return (
        <div className="hero-section">



            <div className="property-slideshow">
                {heroData.options.map(( {title,source} , index)  => (
                    <PropertyPictures key={`Image ${index+1}`} title={title} source={source}/>

                ))}
            </div>

            <div className="title">
                <h1> Elegant Mississuaga Home </h1>   
            </div>  
            
            {/* <div className="image-container">

                <img src={image1} alt="Image1" className="image-child" />

                {/* <div className="design-container" >
                    <p> Your Property </p>
                </div> 

                <img src={image2} alt="Image2" className="image-child" />


            </div> */}

            
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
};

// // {footerData.options.map( ({title,link}) => (
// // <OptionLinks key={title} title={title} link={link} />
// // ))}

const PropertyPictures = ({title,source}:PropertyCard) => {
    
    return (
        <div className="slide" >
            <img src={source} alt={title} />
        </div>
    )
}