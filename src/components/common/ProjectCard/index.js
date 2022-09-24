import './index.scss';
import SunnyDesk from '../../../assets/images/sunnyside-desk.png'






const Card = () => {
    return (
        <div className="card">
            <div className="imageBlock">
                <div className="desktop">
                    <img src={SunnyDesk} alt="sunnyside desktop" />
                </div>
                <div className="mobile"></div>
            </div>
            <div className="textBlock">
                <h4>Project title</h4>
                <p className="item">Frontend</p>
                <p>some description of the project.</p>
                <ul>
                    <li>Html</li>
                </ul>
                <div className="links">
                    <span>live view</span>
                    <span>Github repo</span>
                </div>
            </div>
        </div>
    )
}

export default Card;