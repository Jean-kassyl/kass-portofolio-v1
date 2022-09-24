import './index.scss';
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div>
                <p>Inspired by EINWICK</p>
                <p>Let's stay connected</p>
                <div>
                   <Link to="/">
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                   </Link>
                   <Link to="/">
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                   </Link>
                   <Link to="/">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                   </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;