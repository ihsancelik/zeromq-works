const zeromq = require('zeromq');

const socket = new zeromq.Subscriber();

runSubscriber();


async function runSubscriber() {

    try {
        await socket.connect('tcp://127.0.0.1:9000');
        console.log('Subscriber connected to port 9000');

        await socket.subscribe('ihsanc');
        console.log('Subscribed to ihsanc topic');

        for await (const [] of socket) {
            console.log("Message received");
        }
    } catch (error) {
        console.log(error);
    }
}