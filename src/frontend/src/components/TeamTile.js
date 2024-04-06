import {React} from "react";

import "./TeamTile.scss"
import {Link} from "react-router-dom";

export const TeamTile = ({teamName}) => {

    const words = teamName.split(' ');
    const getInitails = words.map((word) => word.charAt(0)).join('');

    return (
        <div className="TeamTile">
            <Link to={`/teams/${teamName}`}>
                <img className="team-logo" src={`/team_logos/${getInitails}.png`}/>
                <h3 className="team-name">{teamName}</h3>
            </Link>
        </div>
    )
}