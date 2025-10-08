// API Response Types
// Estas interfaces estão prontas para usares!

export interface Team {
  idTeam: string;
  strTeam: string;
  strTeamAlternate?: string;
  strTeamShort?: string;
  strTeamBadge?: string;
  strStadium?: string;
  strLocation?: string;
  intStadiumCapacity?: string;
  strLeague?: string;
  intFormedYear?: string;
  strDescriptionEN?: string;
}

export interface TeamSearchResponse {
  teams: Team[] | null;
}

export interface Event {
  idEvent: string;
  strEvent: string;
  strHomeTeam: string;
  strAwayTeam: string;
  intHomeScore: string | null;
  intAwayScore: string | null;
  dateEvent: string;
  strTime?: string;
  strThumb?: string;
  strSeason?: string;
}

export interface EventsResponse {
  results: Event[] | null;
}


