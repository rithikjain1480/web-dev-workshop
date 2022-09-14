import DarkModeToggle from './DarkModeToggle';

function NavBar(props) {
    return (
        <div id="navbar">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <DarkModeToggle toggleDarkMode={props.toggleDarkMode} />
        </div>
    );
}
  
  export default NavBar;
  