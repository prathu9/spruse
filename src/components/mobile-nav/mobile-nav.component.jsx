import {useState} from 'react';

import './mobile-nav.styles.css';

const MobileNav = () => {
    const [showMobNav, setShowMobNav] = useState(false);

    const toggleMobileNavDisplay = () => {
        setShowMobNav(!showMobNav)
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
        </div>
    )
}

export default MobileNav;