const {app, BrowserWindow} = require("electron");

let appWindow = null;

function createWindow () {
  appWindow = new BrowserWindow({ width: 800, height: 600 });

  appWindow.loadURL(`file://${__dirname}/index.html`);
  appWindow.on("closed", () => {
    appWindow = null;
  });
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (appWindow === null) {
    createWindow();
  }
});
