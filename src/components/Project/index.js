import './index.scss';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Card from '../common/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Projects = () => {
    return (
        <>
            <Header />
            <main className="main">
                <div className="title">
                    <h2 className="heading2"><span>Projects</span><span>.</span><span>/</span></h2>
                </div>
                <div className="content">
                    <div className="input-block">
                        <input type="text" />
                        <FontAwesomeIcon icon={faSearch} className="search"/>
                        <button>All</button>
                        <div className="categories">
                            <label>
                                <input type="radio" name="category"/>All
                            </label>
                            <label>
                                <input type="radio" name="category"/>Frontend
                            </label>
                            <label>
                                <input type="radio" name="category"/>Backend
                            </label>
                            <label>
                                <input type="radio" name="category"/>Fulstack
                            </label>
                        </div>
                    </div>
                    <div className="cardParent">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Projects;