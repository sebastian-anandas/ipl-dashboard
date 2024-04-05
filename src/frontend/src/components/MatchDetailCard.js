import {React} from "react";
import {Link} from "react-router-dom";

export const MatchDetailCard = ({teamName, match}) => {
    if(!match) return null;
    const otherTeam =  match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;
    return (
        <div className="MatchDetailCard">
            <h3>Latest Matches</h3>
            <h1>vs <Link to={otherTeamRoute}>{otherTeam}</Link></h1>
            <h3>{match.date}</h3>
            <h3>{match.venue}</h3>
            <h3>
                {match.winner}{' '}
                {match.winByRuns !== 0
                    ? `won by ${match.winByRuns} runs`
                    : match.winByWickets !== 0
                        ? `won by ${match.winByWickets} wickets`
                        : 'Match Drawn'}
            </h3>
        </div>
    );
}
