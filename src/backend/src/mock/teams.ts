import { Team } from "@domain/entities/Team";
import { FifaCode } from "@domain/entities/FifaCode";
import { Stadium } from "@domain/entities/Stadium";

export const TeamCanada: Team = new Team("Team Canada", new FifaCode("CAN"));
export const TeamUSA: Team = new Team("Team USA", new FifaCode("USA"));
export const TeamMexique: Team = new Team("Team Mexique", new FifaCode("MEX"));
export const TeamFrance: Team = new Team("Team France", new FifaCode("FRA"));
export const TeamNetherlands: Team = new Team("Team Netherlands", new FifaCode("NLE"));
export const TeamEngland: Team = new Team("Team England", new FifaCode("ENG"))

