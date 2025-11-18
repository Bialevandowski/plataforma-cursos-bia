class NotificationService {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    notify(message, type = "info") {
        this.observers.forEach(fn => fn({ message, type }));
    }
}

export default new NotificationService();
