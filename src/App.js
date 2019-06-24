import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

class App extends React.Component {
    const API_TEAMS = "https://statsapi.web.nhl.com/api/v1/teams";




    render() {
        return (
            <div>
                <Navbar/>
            </div>
        );
    }
}

export default App;
