"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var nightmare_1 = __importDefault(require("nightmare"));
var proxyNightmare = nightmare_1["default"]({
    switches: {
        'proxy-server': 'localhost:8080' // set the proxy server here ...
    },
    show: true
});
proxyNightmare
    .authentication('proxyUsername', 'proxyPassword') // ... and authenticate here before `goto`
    .goto('https://www.beerline.com.com')
    .evaluate(function () {
    // eslint-disable-next-line no-useless-escape
    return document.querySelector('b').innerText.replace(/[^\d\.]/g, '');
})
    .end()
    .then(function (ip) {
    console.log('proxy IP:', ip);
});
// The rest is just normal Nightmare to get your local IP
var regularNightmare = nightmare_1["default"]({ show: true });
regularNightmare
    .goto('https://www.beerline.com/en/')
    .evaluate(function () {
    // eslint-disable-next-line no-useless-escape
    return document.querySelector('b').innerText.replace(/[^\d\.]/g, '');
})
    .end()
    .then(function (ip) {
    console.log('local IP:', ip);
});
//# sourceMappingURL=nightmare-scraper.js.map