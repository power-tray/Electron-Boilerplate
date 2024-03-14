const { BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
    title: 'Name Here'
  });
  win.removeMenu();
  win.loadFile('src/index.html');
  return win;
}

module.exports = createWindow;