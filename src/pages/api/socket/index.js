import { Server } from "socket.io"

export default function handler(req, res) {
    if (res.socket.server.io) {
        console.log('Socket is already running')
      } else {
        console.log('Socket is initializing')
        const io = new Server(res.socket.server)
        res.socket.server.io = io
      }
      let sio = res.socket.server.io ;
      sio.on('connection', (socket) => {
        socket.on('chat message', (msg) => {
          sio.emit('chat message', msg);
          console.log('message: ' , msg);
        });
      });
      res.end()
}
  