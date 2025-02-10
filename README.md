# EventEmitter

A lightweight implementation of an event-driven system in JavaScript. This `EventEmitter` class allows you to register, remove, and emit events, making it useful for decoupling components and managing asynchronous workflows.

## Features

- Add and remove event listeners
- Emit events with arguments
- Support for one-time event listeners
- Retrieve listeners and listener counts
- Simple and dependency-free

## Installation

Clone the repository and require the module in your Node.js project:

## Usage

### Importing the EventEmitter

```js
const EventEmitter = require("./EventEmitter");

const emitter = new EventEmitter();
```

### Adding Event Listeners

```js
const greet = (name) => console.log(`Hello, ${name}!`);
emitter.on("greet", greet);
```

### Emitting Events

```js
emitter.emit("greet", "Alice"); // Output: Hello, Alice!
```

### Removing Event Listeners

```js
emitter.off("greet", greet);
```

### One-Time Event Listeners

```js
emitter.once("welcome", () => console.log("Welcome user!"));
emitter.emit("welcome"); // Output: Welcome user!
emitter.emit("welcome"); // No output
```

### Getting Listeners

```js
console.log(emitter.rawListeners("greet")); // [Function: greet]
```

### Getting Listener Count

```js
console.log(emitter.listenerCount("greet")); // 1
```

## API Reference

### `addListener(eventName, fn)`

Adds a listener function for the specified event.

### `on(eventName, fn)`

Alias for `addListener(eventName, fn)`.

### `removeListener(eventName, fn)`

Removes a specific listener for the given event.

### `off(eventName, fn)`

Alias for `removeListener(eventName, fn)`.

### `once(eventName, fn)`

Adds a one-time listener that is removed after execution.

### `emit(eventName, ...args)`

Triggers an event, calling all associated listeners with the provided arguments.

### `listenerCount(eventName)`

Returns the number of listeners for a given event.

### `rawListeners(eventName)`

Returns an array of registered listener functions for an event.
