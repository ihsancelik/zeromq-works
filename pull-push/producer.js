const zeromq = require('zeromq');

const socket = new zeromq.Push();

runProducer();


async function runProducer() {
    await socket.bind('tcp://127.0.0.1:9000');
    console.log('Producer ready to send messages');

    process.stdin.once('data', async () => {
        for (let index = 0; index < 10000000; index++) {
            await socket.send(`The producer message! ${index + 1}`);
            await new Promise((resolve) => setTimeout(resolve, 200));
        }

    });
}