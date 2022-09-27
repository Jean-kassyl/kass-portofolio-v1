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
                    <p> who is passionate about using code to build easy and<br /> helpful web solutions <span>!</span></p>
                </div>

                <section className="about">
                    <div className="text">
                        <p className="paragraph1 padd">
                            Hi I am jean kassyl,
                            A highly motivated fullstack developer who is passionate about using code to build 
                            necessary and helpful software.
                        </p>
                        <div className="mobile-back padd">
                            <p className="marg">
                                I have always been concerned about giving back to others through my work and that’s why I volunteered a lot when studying social science. 
                                I participated on project which aims to empower peoples to fight against hunger, illiteracy and deprivation. 
                                With adding values to people’s life as an end goal, I’ve always put my all self into every project I participated in.
                            </p>
                            <p className="marg">
                                today, I am looking for a role that will let me keep working towards making people’s day to day life easier
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
                        {info.map(obj => <Card key={obj.id} info={obj}/>)}
                    </div>
                </section>  
            </main>
            <Footer />
        </div>
    )
    
}

export default Home;