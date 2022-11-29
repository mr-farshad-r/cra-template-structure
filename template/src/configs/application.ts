import {
    ApplicationMode,
    DirectionsType,
    LanguagesType,
} from "../interfaces/applications";

interface ApplicationConfigInterface {
    INITIAL_LANGUAGE: LanguagesType;
    AVAILABLE_LANGUAGE: LanguagesType[];
    DIRECTION_MAP: { [lang in LanguagesType]: DirectionsType };
    AVAILABLE_MODES: ApplicationMode[];
    INITIAL_MODE: ApplicationMode;
    DEVELOPMENT_HOSTNAMES: string[];
}

export const ApplicationConfigs: ApplicationConfigInterface = {
    INITIAL_LANGUAGE: "EN",
    AVAILABLE_LANGUAGE: ["EN", "FA"],
    DIRECTION_MAP: {
        EN: "ltr",
        FA: "rtl",
    },
    AVAILABLE_MODES: ["view", "edit"],
    INITIAL_MODE: "view",
    DEVELOPMENT_HOSTNAMES: ["localhost"],
};
