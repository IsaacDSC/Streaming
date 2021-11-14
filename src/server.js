const { app, services } = require("./app/app");

const port = 3333

const messages = {
    //http://patorjk.com/software/taag/#p=display&h=1&v=1&c=bash&f=Calvin%20S&t=IsaacDSC
    title: `
    #  ╦┌─┐┌─┐┌─┐┌─┐╔╦╗╔═╗╔═╗
    #  ║└─┐├─┤├─┤│   ║║╚═╗║
    #  ╩└─┘┴ ┴┴ ┴└─┘═╩╝╚═╝╚═╝
    #
    #  Server listen in port: ${port}
    #  http://localhost:${port}
    `,
}

app.listen(port, () => {
    console.log(messages.title)
})