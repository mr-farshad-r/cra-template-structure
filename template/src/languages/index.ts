import { LanguagesType } from "../interfaces/applications";

export const Languages: {
    [entity: string]: {
        [element: string]: { [lang in LanguagesType]: string };
    };
} = {
    GLOBAL: {
        save: {
            EN: "Save",
            FA: "ذخیره",
        },
    },
    PAGES: {
        home: {
            EN: "Home",
            FA: "خانه",
        },
    },
};
