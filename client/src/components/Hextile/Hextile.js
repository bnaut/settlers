import React from "react";
import './Hextile.scss';

const width = 300;
const height = 173.21;

const scale_factor = 0.3;

const Hextile = ({ x, z, grid }) => {

  console.log(grid)

  return (
    <div 
      className='hextile'
      style={{
        position: 'absolute',
        top: grid.height / 2 - height * scale_factor / 2,
        left: grid.width / 2 - width * scale_factor / 2,
        width: width * scale_factor,
        height: height * scale_factor
      }}  
    >
      <span>
        <div></div>
      </span>
    </div>
  )
}

export default Hextile;
