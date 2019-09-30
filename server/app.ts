import express = require('express');
import fos = require('fos');

import { Server } from './ServerImpl';

const app: express.Application = express();

fos.fosify(app, Server, { allow: "*", name: "Server" });

app.use("/static", express.static(__dirname + "/../static/"));

app.listen(3000, function () {
  console.log('Server is up, port 3000!');
});