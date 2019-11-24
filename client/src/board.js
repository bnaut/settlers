import React from 'react';
import PropTypes from 'prop-types';

//import Hextile from './components/Hextile/Hextile';
import Hexgrid from './components/Hexgrid/Hexgrid';

import './board.scss';

class Board extends React.Component {
  static propTypes = {
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
    moves: PropTypes.any.isRequired,
    playerID: PropTypes.string,
    isActive: PropTypes.bool,
    isMultiplayer: PropTypes.bool,
  };

  onClick = id => {
  };

  render() {
    return (
      <div id='board'>
        <Hexgrid width={800} height={600} />
      </div>
    );
  }
}

export default Board;