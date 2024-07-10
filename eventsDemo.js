import {EventEmitter} from 'events';

const myEmmiter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello, '+name)
}

function goodbyeHandler(name) {
    console.log('Goodbye '+name); 
}

//Register event listeners
myEmmiter.on('greet', greetHandler);
myEmmiter.on('goodbye', goodbyeHandler);

// Emit events
myEmmiter.emit('greet', 'john');
myEmmiter.emit('goodbye', 'john');

// Error handling
myEmmiter.on('error', (err)=> {
    console.log(`An error occured ${err}`)
})

// Simulating error
myEmmiter.emit('error', new Error('Somethign went wrong'));