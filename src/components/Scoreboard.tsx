import type {Event} from '../types';
import './Scoreboard.css';

interface ScoreboardProps {
    events: Event[];
    teamName: string;
}


export function Scoreboard({events, teamName}: ScoreboardProps) {
    return (
        <div className="scoreboard">
            <h2 className="scoreboard__title">Recent Games - {teamName}</h2>
            <div className="scoreboard__games">
            </div>
        </div>
    )
}