const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow () {

  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    minWidth: 938,
    minHeight: 500,
    frame: false,
    resizable: true,
    backgroundColor: '#36393e',
  });

  mainWindow.loadURL(`file://${__dirname}/index/index.html`);

  mainWindow.setMenu(null);

  mainWindow.on('closed', () => {
    mainWindow = null;
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
