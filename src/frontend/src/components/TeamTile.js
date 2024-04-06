import {React} from "react";
import {useState} from "react";

import "./TeamTile.scss"
import {Link} from "react-router-dom";

export const TeamTile = ({teamName}) => {

    const [isHovered, setIsHovered] = useState(false);

    const words = teamName.split(' ');
    const getInitails = words.map((word) => word.charAt(0)).join('');

    const winYear = {
        "Rajasthan Royals": '2008',
        "Sunrisers Hyderabad": '2009 | 2016',
        "Chennai Super Kings": '2010 | 2011 | 2018 | 2021 | 2023',
        "Kolkata Knight Riders": '2012 | 2014',
        "Mumbai Indians": '2013 | 2015 | 2017 | 2019 | 2020',
        "Gujarat Titans": '2022'
    };

    const handleTileClick = () => {
        window.location.href = `/teams/${teamName}`;
    };


    return (

        <div
            className={`TeamTile ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleTileClick}
        >
            {isHovered && winYear.hasOwnProperty(teamName) ? (
                <TeamTileHover teamName={teamName} winYear={winYear}/>
            ) : (
                <Link to={`/teams/${teamName}`}>
                    <img className="team-logo" src={`/team_logos/${getInitails}.png`}/>
                    <h3 className="team-name">{teamName}</h3>
                </Link>
            )}
        </div>
    );
}
const TeamTileHover = ({ teamName, winYear }) => {
    const teamWinYear = winYear && winYear[teamName];
    return (
        <div className="TeamTileHover">
            <img className="trophy" src="/images/teams-trophy.png" alt="trophy"/>
            {teamWinYear && <p className="win-year">{teamWinYear}</p>}
            <h3 className="team-name">{teamName}</h3>
        </div>
    );
};