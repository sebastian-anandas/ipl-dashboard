import './App.scss';
import {HashRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {React, useEffect} from "react";
import TeamPage from "./pages/TeamPage";
import MatchPage from "./pages/MatchPage";
import HomePage from "./pages/HomePage";

function App() {
    useEffect(() => {
        document.title = 'IPL Dashboard';
    }, []);

    return (<div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/teams" />} />
            </Routes>
            <Routes>
                <Route path="/teams/:teamName/matches/:year" element={<MatchPage/>}/>
            </Routes>
            <Routes>
                <Route path="/teams/:teamName" element={<TeamPage/>}/>
            </Routes>
            <Routes>
                <Route path="/teams" element={<HomePage/>}/>
            </Routes>
        </Router>
    </div>
    );
}

export default App;
