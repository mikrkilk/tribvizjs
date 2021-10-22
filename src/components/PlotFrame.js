import {React, memo} from 'react'


export const PlotFrame = ({plot}) => {
  return(
  <div className="plot">
    {plot.plot}
  </div>)};


export default memo(PlotFrame);