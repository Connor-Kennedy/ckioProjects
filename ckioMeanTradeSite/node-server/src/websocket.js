const subscribeMsg = 
    {
        "event": "bts:subscribe",
        "data": {
            "channel": "live_trades_btcusd"
        }
    }

const WebSocket = require('ws');

var lastTick = {};

function updateLastTick() {
    return lastTick;
}

const ws = new WebSocket('wss://ws.bitstamp.net', {
  perMessageDeflate: false
});

ws.on('open', function open() {
    ws.send(JSON.stringify(subscribeMsg));
});

ws.on('message', function incoming(data) {
    console.log(data);
    lastTick = JSON.parse(data);
    console.log(lastTick);
});


exports.updateLastTick = updateLastTick;


