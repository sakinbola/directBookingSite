import "./hero.css"

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

            <div className="image-container1">

                <img src="" alt="Image1" />

                <div className="design-container" ></div>

                <img src="" alt="Image2" />


            </div>


            <div className="property details"> 


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










        </div>
    )
}

export default Hero 


// type PropertyCard = {
//     title:string;
//     link:string;
// };

// // {footerData.options.map( ({title,link}) => (
// // <OptionLinks key={title} title={title} link={link} />
// // ))}

// const PropertyPictures = ({title,link}:PropertyCard) => {

//     return (
//         <div>
//             Picture 
//         </div>
//     )
// }