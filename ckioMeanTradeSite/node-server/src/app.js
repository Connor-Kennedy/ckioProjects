const express = require('express');
const app = express();
const websocket = require('./websocket')


var test = websocket.lastTick;
console.log(test);

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
  });

app.get('/api/btcusd', (req, res, next) => {
    var last = websocket.updateLastTick();
    res.status(200).send(last);
});

app.use('/api/tickers', (req, res, next) => {
    var lt = websocket.updateLastTick();
    const tickers = [
        { id: 'awefwef', ticker: 'BTCUSD', lastPrice: lt.data.price },
        { id: 'tyiolf', ticker: 'XRPUSD', lastPrice: "0.22245" },
        { id: 'e56uu56eu', ticker: 'LTCUSD', lastPrice: "47.36" },
        { id: 'jmhgjl', ticker: 'ETHUSD', lastPrice: "212.28" },
        { id: 'awefoliio', ticker: 'BCHUSD', lastPrice: "254.59" }
        
    ];
    res.status(200).json({
        message: 'Tickers fetched successfully',
        tickers: tickers
    });
    
})

app.use((req, res, next) => {
    res.status(200).json(websocket.updateLastTick())
});



module.exports = app;

