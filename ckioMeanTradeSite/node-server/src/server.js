const app = require('express')();
const http = require('http').createServer(app);
const socketServer = require('./socketio');


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://trade.c-k.io");
    res.header('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
  });

  

// app.get('/api/btcusd', (req, res, next) => {
//     var last = websocket.updateLastTick();
//     res.status(200).send(last);
// });

app.use('/api/tickers', (req, res, next) => {
    const tickers = [
        { id: 'awefwef', ticker: 'BTCUSD', lastPrice: "NULL" },
        { id: 'tyiolf', ticker: 'XRPUSD', lastPrice: "NULL" },
        { id: 'e56uu56eu', ticker: 'LTCUSD', lastPrice: "NULL" },
        { id: 'jmhgjl', ticker: 'ETHUSD', lastPrice: "NULL" },
        { id: 'awefoliio', ticker: 'BCHUSD', lastPrice: "NULL" }
        
    ];
    res.status(200).json({
        message: 'Tickers fetched successfully',
        tickers: tickers
    });
    
})
// PORT 3000 IS REST API
http.listen(8097, () => {
  console.log('listening on *:8097');
});