import {useState} from 'react';

import './mobile-nav.styles.css';

const MobileNav = () => {
    const [showMobNav, setShowMobNav] = useState(false);

    const toggleMobileNavDisplay = () => {
        setShowMobNav(!showMobNav)
    }

    const toggleDropDown = (e) => {
        console.log(e.target.classList.toggle("show-drop-down"));
    }

    return(
        <div className="mobile-nav-container">
            <div className={`hamburger-menu ${showMobNav?
                             'active-hamburger-menu':""}`}
                 onClick={toggleMobileNavDisplay}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
           {    showMobNav?
                <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                    <li onClick={toggleDropDown}>
                        Services
                    </li>
                    <span>Electrostatic Sanitation</span>
                    <li onClick={toggleDropDown}>
                        Contact
                    </li>
                    <span>Careers</span>
                    <li>My Account</li>
                    <li>RSVP</li>
                    <li>Gift Card</li>
                </ul>
                </nav>:null
            }
        </div>
    )
}

export default MobileNav;