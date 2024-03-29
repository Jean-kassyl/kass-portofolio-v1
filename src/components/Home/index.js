import './index.scss'
import Header from '../common/Header'
import Card from '../common/ProjectCard'
import Footer from '../common/Footer'

const Home = ({info}) => {
    
    return (
        <div>
            <Header />
            <main>
                <div className="padd">
                    <h1>Hi, I am Kassyl, A Software Developer</h1>
                    <p className="hero-desc"> who is passionate about using code to build simple and helpful web solutions <span>!</span></p>
                </div>

                <section className="about">
                    <div className="text">
                        <p className="paragraph1 padd">
                            I am a 
                            A highly motivated fullstack developer who likes to build human centered softwares
                        </p>
                        <div className="mobile-back padd">
                            <p className="marg">
                                I have always been concerned about giving back to others through my work. That got me into social science once in college and into 
                                internships and voluntering afterwards. During my experiences, I participated on project which aims to empower peoples to fight against hunger, illiteracy and deprivation. 
                                Today with my passion for the Tech world and my skills, I am ready to take up a new challenge which will allow me to continue working towards people's well being.
                                I am as much passionate for the front end as for the back end and my ultimate goal at the moment is to grow very big as a developer by working and learning on great projects.
                            </p>
                            <p className="marg">
                                Let's be useful and careful for the humanity!
                            </p>
                        </div>
                        <p className="marg padd">
                            Some of the tools I work with:
                        </p>
                        <div className="skills padd">
                            <ul>
                                <li>Python</li>
                                <li>Javascript</li>
                                <li>Postgres</li>
                                <li>ORM</li>
                                <li>Git</li>
                                <li>Github</li>
                                <li>AWS</li>
                            </ul>
                            <ul>
                                <li>Flask</li>
                                <li>Node</li>
                                <li>React</li>
                                <li>VueJS</li>
                                <li>Tailwind</li>
                                <li>Sass</li>
                                <li>GraphQL</li>
                            </ul>
                        </div>     
                    </div>
                    <div>
                        <h2 className="heading2 padd"><span>About</span><span>.</span><span>/</span></h2>
                    </div>
                </section>

                <section className="latest-projects">
                    <h2>Latest Projects</h2>
                    <div className="projects">
                        <Card info={info.reverse()[0]} />
                        <Card info={info.reverse()[1]} />
                    </div>
                </section>  
            </main>
            <Footer />
        </div>
    )
    
}

export default Home;