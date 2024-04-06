import React, {useEffect, useState} from "react";
import './TeamPage.scss'
import {TeamTile} from "../components/TeamTile";

import "./HomePage.scss"

export const HomePage = () => {
    const [teams, setTeams] = useState([]);

    async function fetchAllTeams() {
        const response = await fetch(`http://localhost:8080/team/`);
        const data = await response.json();
        console.log(data);
        setTeams(data);
    }

    useEffect(function () {
        fetchAllTeams();
    }, []);

    return (
        <div className="HomePage" /*style={{marginLeft: "0px !important"}}*/>
            <div className="header-section">
                <img className="app-logo" src="/images/IPL_LOGO_CORPORATE_2024.png" alt="app-logo"/>
                <h1 className="app-name">IPL Dashboard</h1>
            </div>
            <div className="team-grid">
                {teams.map(team => <TeamTile teamName={team.teamName} />)}
            </div>
        </div>
    );
};

export default HomePage;
