import React, {useEffect, useState} from "react";
import './TeamPage.scss'
import {TeamTile} from "../components/TeamTile";

import "./HomePage.scss"

export const HomePage = () => {
    const [teams, setTeams] = useState([]);

    async function fetchAllTeams() {
        const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/`);
        const data = await response.json();
        // console.log(data);
        setTeams(data);
    }

    useEffect(function () {
        fetchAllTeams();
    }, []);

    return (
        <div className="HomePage" style={{ backgroundImage: 'url("/images/teams-new-landing-bg.jpg")' }}>
            <div className="header-section">
                <img className="app-logo" src="/images/IPL_LOGO_CORPORATE_2024.png" alt="app-logo"/>
                <h1 className="app-name">IPL Dashboard</h1>
            </div>
            <div className="team-grid">
                {teams.map(team => <TeamTile key={team.id} teamName={team.teamName} />)}
            </div>
        </div>
    );
};

export default HomePage;
