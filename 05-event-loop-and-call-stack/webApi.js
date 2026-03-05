// JavaScript itself cannot handle timers or DOM events.

// The browser provides Web APIs like:

// setTimeout
// setInterval
// fetch
// DOM events

// These are handled outside the JavaScript engine.

setTimeout(()=>{
    console.log('hi i am in set timeout function')
},3000)

// setTimeout(2000) means:

// Wait AT LEAST 2 seconds

// not

// Execute exactly after 2 seconds

// Because it must wait for the Call Stack to be free.