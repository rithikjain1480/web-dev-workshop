function DarkModeToggle(props) {
    return (
        <div id="darkModeToggle">
            <button onClick={props.toggleDarkMode}>Toggle Dark Mode</button>
        </div>
    );
}
  
  export default DarkModeToggle;
  