let electron = require('electron');
let path = require('path');

let {app,BrowserWindow,Menu} = electron;
let icon = path.join(__dirname,'./src/assets/iconTemplate.ico');
let mainWindow;
let menuTemplate;

app.on('ready',()=>{
    let options = {
        minWidth: 600,
        icon:icon,
        webPreferences: {
        },
        frame: true,
    };
    mainWindow = new BrowserWindow(options);
    console.log(process.env.NODE_ENV);
    /*if(process.env.NODE_ENV === 'development'){
        options.frame=true;
    }*/
    mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});

menuTemplate=[{
    label:'dev',
    submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
    ]
}];
let menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);

