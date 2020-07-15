// original source: An Intro To Electron - Desktop apps with Javascript https://www.youtube.com/watch?v=mr9Mtm_TRpw
import { app, BrowserWindow } from 'electron';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import path from 'path';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import url from 'url';

// Initialize global reference to the window object
let win; 

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function createWindow() {
    // Create browser window
    win = new BrowserWindow({width: 800, height: 600}); // icon

    // Load index.html
    win.openDevTools;
    win.loadURL(`https://www.beerline.com/en/`);

    // Open devtools
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

// Quit wne all windows are closed
app.on('window-all-closed', () => {
    // Mac
    if(process.platform !== 'darwin') {
        app.quit();
    }
});
