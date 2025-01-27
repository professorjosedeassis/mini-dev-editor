const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    setColor: (color) => ipcRenderer.on('set-color', color),
    setFile: (file) => ipcRenderer.on('set-file', file)
})