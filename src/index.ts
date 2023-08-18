import { connectDB } from "./dbs";
import app from "./app";
import http from 'http'
import socket from "./scoket/socket";
import { Server } from "socket.io";

connectDB()

const httpServer = http.createServer(app)
const expressHttpServer = httpServer.listen(3000)
console.log('Server is running on port 3000')

const io = new Server(expressHttpServer)
socket(io)
