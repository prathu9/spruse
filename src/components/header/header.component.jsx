import {useEffect} from 'react';
import Nav from '../nav/nav.component';
import MobileNav from '../mobile-nav/mobile-nav.component';

import spruseLogo from '../../asset/spruse-logo.png';

import './header.styles.css';

const Header = () => {

    useEffect(() => {
        const handleStickyNav = () => {
            const headerElement = document.querySelector('header');
            if(headerElement.offsetTop < window.pageYOffset){
                headerElement.style.position = 'fixed';
                headerElement.style.boxShadow = '0px 2px 4px rgba(0 0 0/20%)'
            }
            else{
                headerElement.style.position = 'initial';
                headerElement.style.boxShadow = 'none';
            }
        }

        window.addEventListener("scroll", handleStickyNav);

        return () => window.removeEventListener("scroll", handleStickyNav); 
    }, [])

    return(
        <header>
            <div className="logo-container">
                <img src={spruseLogo} alt="logo"/>
            </div>
            <Nav/>
            <MobileNav/>
        </header>
    )
}

export default Header;