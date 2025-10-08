import type {Event} from "../types.ts";

interface EventCardProps {
    event: Event
    result: "win" | "loss" | "draw" | "pending"
    homeScore: string
    awayScore: string
    isHomeTeam: boolean
    isAwayTeam: boolean
}

export function EventCard({event, result, homeScore, awayScore, isHomeTeam, isAwayTeam}: EventCardProps) {
    return (
        <div key={event.idEvent} className={`game-card game-card--${result}`}>
            <div className="game-card__date">
                {new Date(event.dateEvent).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                })}
            </div>

            <div className="game-card__match">
                <div className={`game-card__team ${isHomeTeam ? 'game-card__team--highlight' : ''}`}>
                    <span className="game-card__team-name">{event.strHomeTeam}</span>
                    <span className="game-card__score">{homeScore}</span>
                </div>

                <div className="game-card__vs">VS</div>

                <div className={`game-card__team ${isAwayTeam ? 'game-card__team--highlight' : ''}`}>
                    <span className="game-card__score">{awayScore}</span>
                    <span className="game-card__team-name">{event.strAwayTeam}</span>
                </div>
            </div>

            {result !== 'pending' && (
                <div className={`game-card__result game-card__result--${result}`}>
                    {result === 'win' ? '✓' : result === 'loss' ? '✗' : '='}
                </div>
            )}
        </div>
    )
}
