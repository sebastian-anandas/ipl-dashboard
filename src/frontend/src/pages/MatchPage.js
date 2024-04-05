import {React, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {MatchSmallCard} from "../components/MatchSmallCard";
import {MatchDetailCard} from "../components/MatchDetailCard";

export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const {teamName, year} = useParams();

    async function fetchMatches() {
        const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
        const data = await response.json();
        console.log(data);
        setMatches(data);
    }

    useEffect(function () {
        fetchMatches();
    }, []);

    return (
        <div>
            <h1>Match Page</h1>
            {
                matches.map((match) => (
                    <MatchDetailCard teamName={teamName} match={match} key={match.id} />
                ))
            }
        </div>

    );
}
export default MatchPage;