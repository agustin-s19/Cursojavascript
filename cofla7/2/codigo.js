let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `URL Completa: : <b>${href}</b><br>`;
html += `Pathname : <b>${pathname}</b><br>`;
html += `Hostname : <b>${hostname}</b><br>`;
html += `Protocolo: <b>${protocol}</b><br>`;

document.write(html);