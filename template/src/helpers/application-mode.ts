import {ApplicationConfigs} from "../configs/application";

const hostname = window.location.hostname;

export const isDevelopment = (): boolean => ApplicationConfigs.DEVELOPMENT_HOSTNAMES.includes(hostname);
export const isProduction = (): boolean => !ApplicationConfigs.DEVELOPMENT_HOSTNAMES.includes(hostname);