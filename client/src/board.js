import React from 'react';
import PropTypes from 'prop-types';
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
        <div className='hexagon'><span><div></div></span></div>
      </div>
    );
  }
}

export default Board;