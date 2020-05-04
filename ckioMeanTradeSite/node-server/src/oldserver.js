const app = require("./app");
const debug = require("debug")("node-angular");
const http = require("http");
var io = require('socket.io')(http);


const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);


//websocket testing
io.on('connection', (socket) => {
  console.log('a user connected');
  sendData(socket);
});

function sendData(socket) {
  if(x){
    socket.emit('data1',1234);
    x = !x;
  } else {
    socket.emit('data1',5678);
    x = !x;
  }
  console.log('data emitted');
  setTimeout(() => {
    sendData(socket);
  }, 4200);
  
}

io.set('origins', '*:*');