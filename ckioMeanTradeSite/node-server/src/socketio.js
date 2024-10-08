const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const request = require('request');

var latestChart;

//const websocket = require('./websocket');

const WebSocket = require('ws');
const subscribeMsg = 
    {
        "event": "bts:subscribe",
        "data": {
            "channel": "live_trades_btcusd"
        }
    }

const ws = new WebSocket('wss://ws.bitstamp.net', {
  perMessageDeflate: false
});

app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  io.emit('chartUpdate', latestChart);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('my message', (msg) => {
    console.log('message: ' + msg);
    io.emit('my broadcast', `server: ${msg}`);
  });

});
http.listen(8098, () => {
  console.log('listening on *:8098');
});

var lastTick = {};

ws.on('open', function open() {
    ws.send(JSON.stringify(subscribeMsg));
});

ws.on('message', function incoming(data) {
    //console.log(data);
    console.log("Bitstamp New Message")
    lastTick = JSON.parse(data);
    //console.log(lastTick);
    io.emit('btcusd', `${data}`);
    
});



// TODO this needs to be imporoved to GET at every 1ms (for example) after minute close for live tick update

setInterval(() => {
  request("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=BTCUSD&interval=1min&apikey=CKRYKXQLKX8PIKTN", { json: true }, (err, res, body) => {
  if (err) { return console.log(err); } 
  latestChart = JSON.stringify(body);
  console.log(body);
  io.emit('chartUpdate',JSON.stringify(body));
  
})
}, 60000);