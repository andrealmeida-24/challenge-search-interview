import type {Team} from '../types';
import './TeamCard.css';

interface TeamCardProps {
    team: Team;
    onClick: () => void;
}

export function TeamCard({team, onClick}: TeamCardProps) {
    return (
        <div
            className="team-card"
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onClick();
                }
            }}
        >
            <div className="team-card__content">
                {team.strTeamBadge && (
                    <img
                        src={team.strTeamBadge}
                        alt={`${team.strTeam} badge`}
                        className="team-card__badge"
                    />
                )}
                <div className="team-card__info">
                    <h2 className="team-card__name">{team.strTeam}</h2>
                    <div className="team-card__details">
                        {team.strStadium && (
                            <p className="team-card__detail">
                                <span className="team-card__label">🏟️ Stadium:</span> {team.strStadium}
                            </p>
                        )}
                        {team.strLeague && (
                            <p className="team-card__detail">
                                <span className="team-card__label">🏆 League:</span> {team.strLeague}
                            </p>
                        )}
                        {team.intFormedYear && (
                            <p className="team-card__detail">
                                <span className="team-card__label">📅 Founded:</span> {team.intFormedYear}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="team-card__action">
                <span>View Recent Games →</span>
            </div>
        </div>
    );
}


