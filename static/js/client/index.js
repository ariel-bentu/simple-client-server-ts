export function bind() {
    var txt = document.getElementById("theText");
    if (txt) {
        txt.onchange = function (ev) {
            var txtElem = txt;
            if (txtElem) {
                Server.upper(txtElem.value).then(function (val) {
                    return txtElem.value = val;
                });
            }
        };
    }
}
