import './index.scss';
import Logo from '../../../assets/images/Logo1.png';
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'


const Header = () => {
    return (
        <header>
            <img src={Logo} alt="logo" className="logo" />
            <ul className="items">
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
            </ul>
        </header>
    )
}

export default Header;