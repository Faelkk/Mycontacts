import { typeMessageListener } from "../types/type";

export default class EventManager {
  private listeners: { [event: string]: typeMessageListener[] } = {};

  constructor() {}

  on(event: string, listener: typeMessageListener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  emit(event: string, payload: any) {
    if (!this.listeners[event]) {
      return;
    }
    this.listeners[event].forEach((listener) => {
      listener(payload);
    });
  }

  removeListener(event: string, listenerToRemove: typeMessageListener) {
    const listeners = this.listeners[event];
    if (!listeners) {
      return;
    }
    const filteredListeners = listeners.filter(
      (listener) => listener !== listenerToRemove
    );
    this.listeners[event] = filteredListeners;
  }
}
