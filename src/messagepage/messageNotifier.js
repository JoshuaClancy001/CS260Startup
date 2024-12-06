const messageEvent = {
    System: 'system',
    Message: 'message',
}

class EventMessage {
    constructor(sender, receiver, value) {
        this.sender = sender;
        this.receiver = receiver;
        this.value = value;
    }
}

class MessageEventNotifier {
    events = []
    handlers = []
    sender = sessionStorage.getItem('userName');
    receiver = sessionStorage.getItem('receiver');

    constructor(){
        let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onopen = (event) => {
            this.receiveEvent(new EventMessage(this.sender, this.receiver, 'Connected'));
        };
        this.socket.onclose = (event) => {
            this.receiveEvent(new EventMessage('Jamplan', messageEvent.System, {msg: 'disconnected'}));
        }
        this.socket.onmessage = async (msg) => {
            try {
                const event = JSON.parse(await msg.data.text());
                this.receiveEvent(event);
            } catch {}
        }
    }
    broadcastEvent(sender, receiver, value){
        this.sender = localStorage.getItem('userName');
        this.receiver = localStorage.getItem('receiver');
        const event = new EventMessage(sender, receiver, value);
        this.socket.send(JSON.stringify(event));
    }

    addHandler(handler){
        this.handlers.push(handler);
    }

    removeHandler(handler){
        this.handlers.filter((h) => h !== handler);
    }

    receiveEvent(event) {
        this.events.push(event);
    
        this.events.forEach((e) => {
          this.handlers.forEach((handler) => {
            handler(e);
          });
        });
      }


}
const MessageNotifier = new MessageEventNotifier();
export { messageEvent, MessageNotifier };