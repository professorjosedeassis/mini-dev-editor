const { app, BrowserWindow, nativeTheme } = require('electron/main')
const path = require('node:path')

// janela principal
let win
function createWindow() {
    nativeTheme.themeSource = 'dark'
    win = new BrowserWindow({
        width: 1010,
        height: 720,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('./src/views/index.html')
}

// janela sobre
function aboutWindow() {
    nativeTheme.themeSource = 'dark'
    const win = new BrowserWindow({
        width: 320,
        height: 160,
        autoHideMenuBar: true,
        resizable: false,
        minimizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('./src/views/sobre.html')
}

app.whenReady().then(() => {
    createWindow()
    
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})