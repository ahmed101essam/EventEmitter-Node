class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  addListener(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
    return this;
  }

  removeListener(eventName, fn) {
    let lis = this.listeners[eventName];

    if (!lis) {
      return this;
    }

    for (let i = 0; i < lis.length; i++) {
      if (lis[i] === fn) {
        lis.splice(i, 1);
        break;
      }
    }
    return this;
  }

  on(eventName, fn) {
    return this.addListener(eventName, fn);
  }

  once(eventName, fn) {
    const onceWrapper = () => {
      fn();
      this.off(eventName, onceWrapper);
    };
    this.addListener(eventName, onceWrapper);
    return this;
  }

  off(eventName, fn) {
    return this.removeListener(eventName, fn);
  }

  emit(eventName, ...args) {
    let fns = this.listeners[eventName];
    if (!fns) {
      return false;
    }
    fns.forEach((fn) => {
      fn(...args);
    });
    return true;
  }

  listenerCount() {
    let fns = this.listeners[eventName] || [];

    return fns.length;
  }

  rawListeners(eventName) {
    return this.listeners[eventName];
  }
}

module.exports = EventEmitter;
