const zeromq = require('zeromq');

runWorker();

async function runWorker() {
    const socket = new zeromq.Pull();
    await socket.connect('tcp://127.0.0.1:9000');
    console.log('Worker connected to port 9000');

    for await (const message of socket) {
        console.log(`Message: ${message}`);
    }
}