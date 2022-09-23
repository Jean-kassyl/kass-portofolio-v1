import './index.scss'
import Header from '../common/Header'

const Home = () => {
    const titleColor = {"color": "hsl(228, 33%, 22%)"}
    return (
        <div>
            <Header />
            <main>
                <div>
                    <h1>Hi, I am <span style={titleColor}>KASSYL</span></h1>
                    <h2><span style={titleColor}> A SOFTWARE</span> developer </h2>
                    <p style={titleColor}>passionate about using code to build easy and<br /> helpful web solutions <span>!</span></p>
                </div>

                <section className="about">
                    <div className="text">
                        <p>
                            Hi I am jean kassyl,
                            A highly motivated fullstack developer who is passionate about using code to build 
                            necessary and helpful software.
                        </p>
                        <p>
                            I have always been concerned about giving back to others through my work and that’s why I volunteered a lot when studying social science. 
                            I participated on project which aims to empower peoples to fight against hunger, illiteracy and deprivation. 
                            With adding values to people’s life as an end goal, I’ve always put my all self into every project I participated in.
                        </p>
                        <p>
                            today, I am looking for a role that will let me keep working towards making people’s day to day life easier
                        </p>
                    </div>
                    <div>
                        <h2 className="about-title"><span>About</span><span>.</span><span>/</span></h2>
                    </div>
                </section>
                
            </main>
        </div>
    )
    
}

export default Home;