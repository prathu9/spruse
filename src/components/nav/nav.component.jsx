import './nav.styles.css';


const Nav = () => {
    return(
        <nav className="desktop-nav">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>FAQ</li>
                <li>Blog</li>
                <li>
                    Services
                    <span>Electrostatic Sanitation</span>
                </li>
                <li>
                    Contact
                    <span>Careers</span>
                </li>
                <li>My Account</li>
                <li>RSVP</li>
                <li>Gift Card</li>
            </ul>
        </nav>
    )
}


export default Nav;