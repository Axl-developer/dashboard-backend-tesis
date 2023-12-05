import { Server } from 'socket.io'
import { serverEvents } from './events.types'

export default (io: Server) => {
  io.on('connection', (socket) => {
    socket.emit(serverEvents.welcom, 'welcome to my socket app')
  })
}
