const socket = io()

const init = () => {
    socket.on('server:welcom',(msg) => {
        console.log(msg)
    })
}
init()