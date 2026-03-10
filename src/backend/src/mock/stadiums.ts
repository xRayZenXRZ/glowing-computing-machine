import { Stadium } from "@domain/entities/Stadium";
import { Vancouver, Atlanta, MexicoCity } from "./cities";

export const VancouverBCPlace: Stadium = new Stadium("Vancouver BC Place ", Vancouver, 54000);
export const MercedesBenzStadium: Stadium = new Stadium("Mercedes-Benz Stadium", Atlanta, 67382);
export const EstadioAzteca: Stadium = new Stadium("Estadio Azteca", MexicoCity, 72766);

