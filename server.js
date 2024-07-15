const express = require('express');
const path = require('path');

const app = express();
// app.use(express.static('/public'))
const port = process.env.PORT || 8001;

// sendFile will go here
app.get('/', function(req, res) {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    res.sendFile(path.join(__dirname, '/index.html'));
  });

  app.get('/cacti.js', function(req, res) {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    res.setHeader("Content-Type", "application/javascript");
    res.sendFile(path.join(__dirname, '/cacti.js'));
  });

  app.get('/cacti.worker.js', function(req, res) {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    res.setHeader("Content-Type", "application/javascript");
    res.sendFile(path.join(__dirname, '/cacti.worker.js'));
  });

  app.get('/cacti.wasm', function(req, res) {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    res.setHeader("Content-Type", "application/wasm");
    res.sendFile(path.join(__dirname, '/cacti.wasm'));
  });

app.listen(port);
console.log('Server started at http://localhost:' + port);