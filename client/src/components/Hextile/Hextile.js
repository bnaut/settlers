import React from "react";
import './Hextile.scss';

const WIDTH = 300;
const HEIGHT = 173.21;
const SCALE_FACTOR = 0.3;
const PADDING = 10;
const hexCSS = {
  position: 'absolute',
  width: 212.13 * SCALE_FACTOR,
  height: 212.13 * SCALE_FACTOR,
  'WebkitTransform': 'scaleY(0.5774) rotate(-45deg)',
  'msTransform': 'scaleY(0.5774) rotate(-45deg)',
  transform: 'scaleY(0.5774) rotate(-45deg)',
  left: 43.9340 * SCALE_FACTOR,
  'zIndex': 1,
}

//const getY = (x, z) => -(x+z);

const Hextile = ({ x, z, grid, onClick }) => {

  const top = (WIDTH * SCALE_FACTOR + PADDING) * Math.sin(Math.PI/3) * z;
  const left = (WIDTH * SCALE_FACTOR * Math.cos(Math.PI/3) + PADDING/2) * z + 
    (WIDTH * SCALE_FACTOR + PADDING) * x;

  return (
    <div 
      onClick={() => onClick(0)}
      className='hextile'
      style={{
        position: 'absolute',
        top: grid.height / 2 - HEIGHT * SCALE_FACTOR / 2 + top,
        left: grid.width / 2 - WIDTH * SCALE_FACTOR / 2 + left,
        width: WIDTH * SCALE_FACTOR,
        height: HEIGHT * SCALE_FACTOR
      }}  
    >
      <div 
        className='before'
        style={{
          ...hexCSS,
          top: -106.0660 * SCALE_FACTOR,
        }}
      />
      <div 
        className='after'
        style={{
          ...hexCSS,
          bottom: -106.0660 * SCALE_FACTOR,
        }}
      />
      <span 
        style={{
          display: 'grid',
          position: 'absolute',
          top: 0, 
          left: 0,
          width: WIDTH * SCALE_FACTOR,
          height: HEIGHT * SCALE_FACTOR,
          'zIndex': 2,
        }}
      >
        <div 
          style={{
            position: 'absolute',
            width: WIDTH * 0.3,
            height: WIDTH * 0.3,
            'zIndex': 100,
            'borderRadius': WIDTH * 0.3,
          }} 
        />

      </span>
    </div>
  )
}

export default Hextile;
