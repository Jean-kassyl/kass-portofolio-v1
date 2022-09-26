import './index.scss';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Card from '../common/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {useRef, useState} from 'react'


const Projects = () => {

    const [selectedOption, setSelectedOption] = useState("All")
    const categories = useRef(null)

    const handleClick = () => {
        categories.current.classList.toggle('show')
    }

    const handleChange = (e) => {
        setSelectedOption(e.target.value)
    }
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
                        <button onClick={handleClick}>{selectedOption}</button>
                        <div className="categories" ref={categories}>
                            <label>
                                <input 
                                    type="radio" 
                                    name="category" 
                                    value="All" 
                                    checked={selectedOption === "All"}
                                    onChange={handleChange}
                                />All
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    name="category" 
                                    value="Frontend"
                                    checked={selectedOption === "Frontend"}
                                    onChange={handleChange}
                                />Frontend
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    name="category" 
                                    value="Backend"
                                    checked={selectedOption === "Backend"}
                                    onChange={handleChange}
                                />Backend
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    name="category" 
                                    value="Fullstack"
                                    checked={selectedOption === "Fullstack"}
                                    onChange={handleChange}
                                />Fullstack
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