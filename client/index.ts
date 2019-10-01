import { ServerAPI } from '../common/api';

declare var Server: ServerAPI;

export function bind() {
    let txt = document.getElementById("theText")
    if (txt) {
        txt.onchange = (ev) => {
            let txtElem = txt as HTMLInputElement;
            if (txtElem) {
                Server.upper(txtElem.value).then(val =>
                    txtElem.value = val);
            }
        }
    }
}


