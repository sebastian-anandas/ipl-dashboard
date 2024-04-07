import {React} from "react";
import {Link} from "react-router-dom";

import "./MatchDetailCard.scss"

export const MatchDetailCard = ({teamName, match}) => {
    if (!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;
    const isMatchWon = teamName === match.winner;
    return (
        <div className={isMatchWon ? 'MatchDetailCard won-card' : 'MatchDetailCard lost-card'}>
            <div className="match-details">
                <span className="vs">vs</span>
                <h1><Link to={otherTeamRoute}>{otherTeam}</Link></h1>
                <h3 className="match-date">{match.date}</h3>
                <h3 className="match-venue">{match.venue}</h3>
                <h3 className="match-toss-decision">{match.tossWinner} won the toss and decided
                    to {match.tossDecision}</h3>
            </div>
            <div className="additional-detail-section">
                <h3 className="match-result">
                    {match.winner ? `${match.winner} won by ${match.resultMargin}` : "Match Drawn"}
                </h3>
                <h3>Man of the Match</h3>
                <p>{match.playerOfMatch}</p>
                <h3>Umpire</h3>
                <p>{match.umpire1}, {match.umpire2}</p>
            </div>
        </div>
    );
}
