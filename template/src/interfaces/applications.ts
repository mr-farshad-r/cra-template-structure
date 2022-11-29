export type LanguagesType = "EN" | "FA";
export type DirectionsType = "ltr" | "rtl";
export type ApplicationMode = "view" | "edit";

export interface ApplicationsInterface {
    language: LanguagesType;
    direction: DirectionsType;
    mode: ApplicationMode;
}
