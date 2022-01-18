import spruseLogo from '../../asset/spruse-logo.png';

import './footer.styles.css';

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="footer-logo-container">
                <img src={spruseLogo} alt="logo"/>
            </div>
            <div className="footer-slogan-container">
               <span>A clean home starts with U</span>
            </div>
            <div className="footer-nav-container">
               <ul>
                   <li>Home</li>
                   <li>About Us</li>
                   <li>Book Now</li>
                   <li>Manage Booking</li>
                   <li>Office Cleaning</li>
                   <li>Privacy Policy</li>
                   <li>Cancellation Policy</li>
               </ul>
            </div>
            <div className="footer-copyright">
               <span>Ⓒ 2021 - All Rights Are Reserved</span>
            </div>
        </div>
    )
}

export default Footer;