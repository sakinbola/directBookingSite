import logo_image from "./../images/Logo.png"
import "./header.css"

function Header () {
    return (
        <header className="header-section">
            <nav className="nav-links">
                <div className="logo"> 
                    <a href="#home"> <img src={logo_image} alt="logo" /></a>
                </div>


                <div className="nav-items"> 
                    <a href="#property">Property Details</a>
                    <a href="#book">Book Today</a>
                    <a href="#contact">Contact</a>
                </div>


                <div className="signUpButton"> 
                    <a href="#book" className="btn"> Book Now</a>
                </div>
                
                
                
            
            </nav> 


        </header>
    )
}

export default Header 
