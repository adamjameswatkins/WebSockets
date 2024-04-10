const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8082 });

wss.on('connection', ws => {
    console.log('Client connected');

    ws.on('message', message => {
        try {
            const data = JSON.parse(message);

            ws.send(`Hello, you sent -> ${data.data}`);
        }
        catch (error) {
            ws.send('Invalid JSON');
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});