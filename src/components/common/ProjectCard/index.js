import './index.scss';







const Card = ({info}) => {
    
    return (
        <div className="card">
            <div className="imageBlock">
                <div className="desktop">
                    <img src={info.desktop} alt="sunnyside desktop" />
                </div>
                <div className="mobile">
                    <img src={info.mobile} alt="sunnyside mobile" />
                </div>
            </div>
            <div className="textBlock">
                <h4>{info.projectTitle}</h4>
                <p className="item">{info.category}</p>
                <p>{info.description}</p>
                <ul>
                    <li>{info.tools.join(' ')}</li>
                </ul>
                <div className="links">
                    <a href={info.live} target='_blank' rel="noreferrer"><span>live view</span></a>
                    <a href={info.github} target='_blank' rel="noreferrer"><span>Github repo</span></a>
                </div>
            </div>
        </div>
    )
}

export default Card;