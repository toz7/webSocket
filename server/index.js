const WebSocket = require("ws")

const wss = new WebSocket.Server({port: 8082})

wss.on("connection", ws => {
    console.log("New client has connected!")

    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`)

        ws.send(data)
    })
    ws.on("close", ws => {
        console.log("Client has disconnected!")
    })
})