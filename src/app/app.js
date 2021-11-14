const express = require('express')
const router = require('../routes/routes')
const { io } = require('../config/socketIO')
const path = require('path')


class App {
    constructor() {
        this.express = express()
        this.routes()
        this.http()
        this.middleware()
    }

    middleware() {
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: true }))
        this.express.use(express.static(path.join(__dirname, '../', 'public')))
    }


    http() {
        return require('http').Server(this.express)
    }

    routes() {
        this.express.use(router)
    }

    socket() {

        io.on('connection', function (socket) {
            socket.on('stream', function (image) {
                socket.broadcast.emit('stream', image);
            });
        });

        io.of('/stream').clients((error, clients) => {
            if (error) throw error;
            console.log(clients);
        });
    }

}


module.exports = { app: new App().express, services: new App() }