const express = require('express');
const bodyParser = require('body-parser')
const ejs = require('ejs');
const fs = require('fs');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const ipaddress = '192.168.66.13';

//Set Endpoints
app.post('/test', (req, res) => {
  io.emit('msg push', req.body);

  res.send('POST request recieved.\n');
});

app.get('/', (req, res) => {
  var template = fs.readFileSync('./index.ejs', 'utf-8');
  var index = ejs.render(template, {server: ipaddress});

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(index);
  res.end();
});

//Start server
http.listen(port, () => console.log('listening on port ' + port));
