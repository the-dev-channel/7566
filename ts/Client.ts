class Client {
    id: string
    cl: any;
    type: string;

    constructor(id: string, cl: any, type: string) {
        this.id = id;
        this.cl = cl;
        this.type = type;
    }

    start: () => void;
    sendChat: (message: string) => void;
}

export {
    Client
}
