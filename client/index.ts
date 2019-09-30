import { ServerAPI } from '../common/api';

declare var Server: ServerAPI;

export function clientOnlyFunction(arg: string): string {
    return Server.upper(arg)
}


