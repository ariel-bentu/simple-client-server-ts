import { ServerAPI } from '../common/api';

export const Server: ServerAPI = {
    upper: (arg: string) => {
        return Promise.resolve(arg.toUpperCase());
    },

    echo: (arg: string) => {
        return Promise.resolve(arg);
    }
}