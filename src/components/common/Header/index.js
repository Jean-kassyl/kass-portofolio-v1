import './index.scss';
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useRef} from 'react';


const Header = () => {
    
    const toggleMenu = () => {
        ulRef.current.classList.toggle('toggling')
    }

   const ulRef = useRef(null)
   
    return (
        <header>
            <img src='/images/Logo1.png' alt="logo" className="logo" />
    
            <ul  ref={ulRef} className="items mobile" >
                <Link to='/'>
                    <li> Home</li>
                </Link>
                <Link to='/projects'>
                    <li> Projects</li>
                </Link>
            </ul>

            <ul className="items">
                <Link to='/'>
                    <li><FontAwesomeIcon icon={faGithub} className="socialIcon" /> </li>
                </Link>
                <Link to='/'>
                    <li><FontAwesomeIcon icon={faLinkedin} className="socialIcon" /> </li>
                </Link>
                <FontAwesomeIcon icon={faBars} className="mobileMenu" onClick={toggleMenu}/>
            </ul>
            
        </header>
    )
}

export default Header;