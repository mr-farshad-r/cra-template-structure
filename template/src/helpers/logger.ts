import {isProduction} from "./application-mode";

type LogColor = 'normal' | 'info' | 'danger' | 'warning' | 'success';
type LogSize = 'sm' | 'md' | 'lg';
export const logger = (text: string, color: LogColor = 'normal', size: LogSize = 'sm', force: boolean = false) => {
    if(isProduction() && !force) return;
    const MAP_COLOR: {[key in LogColor]: string} = {
        normal: 'white',
        info: 'blue',
        danger: 'red',
        warning: 'yellow',
        success: 'green'
    };
    const MAP_SIZE: {[key in LogSize]: number} = {
        sm: 15,
        md: 25,
        lg: 45
    };
    console.log(`%c${text}`, `font-size: ${MAP_SIZE[size]}px;color: ${MAP_COLOR[color]};background-color: black;padding: 10px;`);
}