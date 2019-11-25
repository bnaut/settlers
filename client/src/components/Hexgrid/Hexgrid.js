import React from "react";
import './Hexgrid.scss';

import Hextile from '../Hextile/Hextile';

const Hexgrid = ({ width, height, radius }) => {

  return (
    <div 
      className='hexgrid' 
      style={{
        width, 
        height,
        position: 'relative',
      }}
    >
     
        <Hextile x={0} z={0} grid={{width, height}}/>
        <Hextile x={0} z={-1} grid={{width, height}}/>
        <Hextile x={0} z={1} grid={{width, height}}/>
        <Hextile x={-1} z={1} grid={{width, height}}/>
        <Hextile x={-1} z={0} grid={{width, height}}/>
        <Hextile x={1} z={0} grid={{width, height}}/>
        <Hextile x={1} z={-1} grid={{width, height}}/>

        <Hextile x={0} z={-2} grid={{width, height}}/>
        <Hextile x={1} z={-2} grid={{width, height}}/>
        <Hextile x={2} z={-2} grid={{width, height}}/>
        <Hextile x={2} z={-1} grid={{width, height}}/>
        <Hextile x={2} z={0} grid={{width, height}}/>
        <Hextile x={1} z={1} grid={{width, height}}/>
        <Hextile x={0} z={2} grid={{width, height}}/>
        <Hextile x={-1} z={2} grid={{width, height}}/>
        <Hextile x={-2} z={2} grid={{width, height}}/>
        <Hextile x={-2} z={1} grid={{width, height}}/>
        <Hextile x={-2} z={0} grid={{width, height}}/>
        <Hextile x={-1} z={-1} grid={{width, height}}/>
    </div>
  )
}

export default Hexgrid;
