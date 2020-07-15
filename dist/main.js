"use strict";
exports.__esModule = true;
// original source: An Intro To Electron - Desktop apps with Javascript https://www.youtube.com/watch?v=mr9Mtm_TRpw
var electron_1 = require("electron");
// Initialize global reference to the window object
var win;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function createWindow() {
    // Create browser window
    win = new electron_1.BrowserWindow({ width: 800, height: 600 }); // icon
    // Load index.html
    win.openDevTools;
    win.loadURL("https://www.beerline.com/en/");
    // Open devtools
    win.webContents.openDevTools();
    win.on('closed', function () {
        win = null;
    });
}
electron_1.app.on('ready', createWindow);
// Quit wne all windows are closed
electron_1.app.on('window-all-closed', function () {
    // Mac
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
//# sourceMappingURL=main.js.map