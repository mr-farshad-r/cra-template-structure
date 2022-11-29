import { createSlice } from "@reduxjs/toolkit";
import {
    ApplicationsInterface,
    LanguagesType,
} from "../../interfaces/applications";
import { getInitialLanguage } from "../../helpers/language";
import { ApplicationConfigs } from "../../configs/application";

const INITIAL_LANGUAGE = getInitialLanguage();

const initialState: ApplicationsInterface = {
    language: INITIAL_LANGUAGE,
    direction: ApplicationConfigs.DIRECTION_MAP[INITIAL_LANGUAGE],
    mode: ApplicationConfigs.INITIAL_MODE,
};

export const applicationSlice = createSlice({
    name: "application",
    initialState,
    reducers: {
        SET_LANGUAGE_ACTION: (state, action) => {
            const LANG: LanguagesType = action.payload;
            localStorage.setItem("language", LANG);
            state.language = LANG;
            state.direction = ApplicationConfigs.DIRECTION_MAP[LANG];
        },
        SET_MODE_ACTION: (state, action) => {
            state.mode = action.payload;
        },
    },
});

export const { SET_LANGUAGE_ACTION, SET_MODE_ACTION } =
    applicationSlice.actions;

export default applicationSlice.reducer;
