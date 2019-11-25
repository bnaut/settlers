import React from 'react';
import { render } from 'react-dom';
import { Client } from 'boardgame.io/react';

import Settlers from '@settlers/game';
import Board from './components/Board/Board';

import './index.scss';

const SettlersClient = Client({
  game: Settlers,
  board: Board,
  multiplayer: { server: 'localhost:8000' },
});

const App = () => (
  <div id='app'>
    <SettlersClient playerID="0" />
    <SettlersClient playerID="1" />
  </div>
);

render(<App/>, document.getElementById('root'));
