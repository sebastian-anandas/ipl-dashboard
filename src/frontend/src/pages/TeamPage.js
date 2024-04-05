import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const TeamPage = () => {
    const [team, setTeam] = useState("");
    const { teamName } = useParams();

    // useEffect(() => {
    //     const fetchMatches = async () => {
    //             const response = await fetch(`http://localhost:8080/team/${teamName}`);
    //             const data = await response.json();
    //             console.log(data);
    //             setTeam(data);
    //     };
    //     fetchMatches();
    // }, [teamName]);

    async function fetchMatches() {
        const response = await fetch(`http://localhost:8080/team/${teamName}`);
        const data = await response.json();
        console.log(data);
        setTeam(data);
    }

    useEffect(function () {
        fetchMatches();
    }, [teamName]);

    if (!team || !teamName) {
        return <h1>Team not found!</h1>; // Return the JSX element in the if condition
    }

    return (
        <div className="TeamPage">
            <h1>{team.teamName}</h1>
            <MatchDetailCard teamName={teamName} match={team.matches[0]} />
            {team.matches.slice(1).map((match) => (
                <MatchSmallCard teamName={teamName} match={match} key={match.id} />
            ))}
        </div>
    );
};

export default TeamPage;
