const config = {
    Server: { settings: { port: "8000", socket: "8001" } },
    Proxy: { settings: { port: "8002", storage_path: "storage", } }
}

const io = require('socket.io')(config.Server.settings.socket, {
    handlePreflightRequest: (req, res) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": req.headers.origin,
            "Access-Control-Allow-Credentials": true,
            "Socket Powered By:": "Emiga Stream https://github.com/eminmuhammadi/emiga-stream.git"
        };
        res.writeHead(200, headers);
        res.end();
    },
    path: '/',
    serveClient: true,
    origins: '*:*',
    cookie: true,
    pingInterval: 1000,
    pingTimeout: 1000,
    upgradeTimeout: 1000,
    allowUpgrades: true,
    cookie: 'emiga_stream',
    cookiePath: '/',
    cookieHttpOnly: true
});



module.exports = { io }