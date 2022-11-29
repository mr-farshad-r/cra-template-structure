import {LanguagesType} from "../interfaces/applications";
import {ApplicationConfigs} from "../configs/application";
import {Languages} from "../languages";

export const getInitialLanguage = () => {
    let STORED_LANGUAGE: (string | null) = localStorage.getItem('language');
    if(!STORED_LANGUAGE){
        STORED_LANGUAGE = ApplicationConfigs.INITIAL_LANGUAGE;
        localStorage.setItem('language', STORED_LANGUAGE);
    }
    let language: LanguagesType;
    // @ts-ignore
    if(ApplicationConfigs.AVAILABLE_LANGUAGE.includes(STORED_LANGUAGE))
        { // @ts-ignore
            language = STORED_LANGUAGE;
        }
    else language =  ApplicationConfigs.INITIAL_LANGUAGE;
    return language
};

export const translate = (lang: LanguagesType) => {
    return (entity: string, key: string) => {
        if(!Languages[entity]){
            console.error(`Entity (${entity}) not found in language file!`);
            return ':-(';
        }
        if(!Languages[entity][key]){
            console.error(`Key (${key}) not found in language file!`);
            return ':-(';
        }
        return Languages[entity][key][lang]
    }
}