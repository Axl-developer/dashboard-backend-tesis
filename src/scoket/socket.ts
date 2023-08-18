import { Server, Socket } from 'socket.io'
import { server } from './events.types'

export default (io: Server) => {
  io.on('connection', (socket) => {
    socket.emit(server.welcom, 'welcome')
  })
}
