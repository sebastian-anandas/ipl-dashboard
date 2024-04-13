import {React, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {MatchDetailCard} from "../components/MatchDetailCard";
import "./MatchPage.scss"
import {YearSelector} from "../components/YearSelector";

export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const {teamName, year} = useParams();

    useEffect(function () {

        async function fetchMatches() {
            const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`);
            const data = await response.json();
            console.log(data);
            setMatches(data);
        }

        fetchMatches();
    }, [teamName, year]);

    return (
        <>
        <div className="nav-link"><Link to={'/teams'}>&lt;&lt; Back to HomePage</Link></div>
        <div className="MatchPage">
            <div className="year-selector">
                <h3>Seasons</h3>
                <YearSelector teamName={teamName}/>
            </div>
            <div>
                <h2 className="page-heading">{teamName} matches in {year}</h2>
                {matches.length === 0 ? (
                    <p style={{color: "red"}}><i>{teamName} team did not participate in the matches this season.</i></p>
                ) : (
                    matches.map((match) => (
                        <MatchDetailCard teamName={teamName} match={match} key={match.id}/>
                    ))
                )}
            </div>
        </div>
        </>
    );
}
export default MatchPage;