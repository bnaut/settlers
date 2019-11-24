const Server = require('boardgame.io/server').Server;
const Settlers = require('@settlers/game');
const server = Server({ games: [Settlers] });

server.run(8000);