import { Match } from "@domain/entities/Match";
import { VancouverBCPlace, MercedesBenzStadium, EstadioAzteca } from "./stadiums";
import { TeamCanada, TeamEngland, TeamFrance, TeamMexique, TeamNetherlands, TeamUSA } from "./teams";
import { MatchStage } from "@domain/entities/enums/MatchStage";
import { MatchStatus } from "@domain/entities/enums/MatchStatus";

export const Matchs: Match[] = [
    new Match(1, TeamCanada, TeamEngland, 0, 0, null, null, null, null, VancouverBCPlace, MatchStatus.SCHEDULED, MatchStage.GROUP, new Date("2026-12-12")),
    new Match(2, TeamFrance, TeamNetherlands, 0, 0, null, null, null, null, MercedesBenzStadium, MatchStatus.SCHEDULED, MatchStage.GROUP, new Date("2026-12-12")),
    new Match(3, TeamUSA, TeamMexique, 0, 0, null, null, null, null, EstadioAzteca, MatchStatus.SCHEDULED, MatchStage.GROUP, new Date("2026-12-12")),
];

