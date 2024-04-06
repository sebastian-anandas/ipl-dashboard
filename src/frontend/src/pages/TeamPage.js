import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
import {MatchDetailCard} from "../components/MatchDetailCard";
import {MatchSmallCard} from "../components/MatchSmallCard";
import './TeamPage.scss'
import { PieChart } from 'react-minimal-pie-chart';

export const TeamPage = () => {
    const [team, setTeam] = useState("");
    const {teamName} = useParams();

    // useEffect(() => {
    //     const fetchMatches = async () => {
    //             const response = await fetch(`http://localhost:8080/team/${teamName}`);
    //             const data = await response.json();
    //             console.log(data);
    //             setTeam(data);
    //     };
    //     fetchMatches();
    // }, [teamName]);

    async function fetchTeam() {
        const response = await fetch(`http://localhost:8080/team/${teamName}`);
        const data = await response.json();
        console.log(data);
        setTeam(data);
    }

    useEffect(function () {
        fetchTeam();
    }, [teamName]);

    if (!team || !teamName) {
        return <h1>Team not found!</h1>; // Return the JSX element in the if condition
    }
    const words = team.teamName.split(' ');
    const getInitails = words.map((word) => word.charAt(0)).join('');
    // console.log(getInitails);

    return (
        <div className="TeamPage">
            <div className="team-name-section">
                <img src={`/team_logos/${getInitails}.png`}/>
                <h1 className="team-name">{team.teamName}</h1>
                <h3>Latest Matches</h3>
            </div>
            <div className="win-loss-section">
                <h3>WINS / LOSSES</h3>
                <PieChart
                    data={[
                        { title: 'Losses', value: team.totalMatches - team.totalWins, color: 'orangered' },
                        { title: 'Wins', value: team.totalWins, color: 'limegreen' },
                    ]}
                />
            </div>

            <div className="match-detail-section">
                <MatchDetailCard teamName={teamName} match={team.matches[0]}/>
            </div>
            {team.matches.slice(1).map((match) => (
                <MatchSmallCard teamName={teamName} match={match} key={match.id}/>
            ))}
            <div className="more-link">
                <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More >></Link>
            </div>

        </div>
    );
};

export default TeamPage;
