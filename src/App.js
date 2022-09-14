import { useState, useEffect } from 'react';
import './App.css';
import Content from './components/Content';

function App() {
    const [dark, setDark] = useState(false);

    const toggleDarkMode = () => {
        setDark(!dark);
    }

    useEffect(() => {
        console.log("toggled dark mode!");
    }, [dark]);

    return (
        <div className={dark ? "app-dark" : "app"}>
            <Content toggleDarkMode={toggleDarkMode} />
        </div>
    );
}

export default App;
