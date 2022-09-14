import NavBar from './NavBar';
import Heading from './Heading';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';

function Content(props) {
    return (
        <div id="content">
            <NavBar toggleDarkMode={props.toggleDarkMode} />
            <Heading />
            <About />
            <Projects />
            <Footer />
        </div>
    );
}

export default Content;
