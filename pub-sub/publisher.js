const zeromq = require('zeromq');

const socket = new zeromq.Publisher();

runPublisher();


async function runPublisher() {
    try {
        await socket.bind('tcp://127.0.0.1:9000');
        console.log('Publisher bound to port 9000');

        await socket.send(['ihsanc', 'İhsan Ç.']);
        console.log('Message sent');
    } catch (error) {
        console.log(error);
    }
}