import { ServerAPI } from '../common/api';

export const Server: ServerAPI = {
    upper: (arg: string) => {
        return arg.toUpperCase();
    },

    echo: (arg: string) => {
        return arg;
    }
}