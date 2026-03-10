import { Team } from "./Team";
import { Stadium } from "./Stadium";
import { MatchStatus } from "./enums/MatchStatus";
import { MatchStage } from "./enums/MatchStage";

export class Match {
    //constructor 
    public constructor(public id: number, public homeTeam: Team, public awayTeam: Team, public homeScore: number = 0, public awayScore: number = 0, public homeScoreExtraTime: number | null, public awayScoreExtraTime: number | null, public homeScoreShootOut: number | null, public awayScoreShootOut: number | null, public stadium: Stadium, public status: MatchStatus, public stage: MatchStage, public date: Date) {
        if (id < 0) throw new Error("id > 0");
        if (homeTeam == awayTeam) throw new Error("homeTeam.name ≠ awayTeam.name");
        if (homeScore < 0) throw new Error("homeScore >= 0");
        if (awayScore < 0) throw new Error("awayScore >= 0");
    }

    //method
    public isDraw(): boolean { return this.homeScore == this.awayScore; }

    public winner(): Team | null {
        if (this.isDraw()) return null;
        if (this.homeScore > this.awayScore) { return this.homeTeam; }
        if (this.homeScore < this.awayScore) { return this.awayTeam; }
        return null;
    }

}