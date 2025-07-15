import "./hero.css"
import image1 from "./../images/DSC_9768.jpg"
import image2 from "./../images/DSC_9774.jpg"

const heroData = {
    options: [ 
        {
            title: "", 
            source: ""
        }, 

        [

        ]
    ]
}




function Hero () {
    return (
        <div className="hero-section">


            <div className="title">
                <h1> Elegant Mississuaga Home </h1>   
            </div>  



            <div className="image-container">

                <img src={image1} alt="Image1" className="image-child" />

                <div className="design-container" >
                    <p> Your Property </p>
                </div>

                <img src={image2} alt="Image2" className="image-child" />


            </div>


            <div className="property-details"> 


                <h2> Property Details</h2>

                <div className="details-container">
                    <h3> X </h3>

                    <p></p>
                </div>

                <div className="details-container">
                    <h3> X </h3>

                    <p></p>
                </div>


                <div className="details-container">
                    <h3> X </h3>

                    <p></p>
                </div>


            </div>


            <div className="property-slideshow">
                {heroData.options.map(( {title,link} , index)  => (
                    <PropertyPictures key={`Image ${index+1}`} title={title} link={link}/>

                ))}
            </div>










        </div>
    )
}

export default Hero 


type PropertyCard = {
    title:string;
    link:string;
};

// // {footerData.options.map( ({title,link}) => (
// // <OptionLinks key={title} title={title} link={link} />
// // ))}

const PropertyPictures = ({title,link}:PropertyCard) => {
    
    return (
        <div>
            <img src={link} alt={title} />
        </div>
    )
}