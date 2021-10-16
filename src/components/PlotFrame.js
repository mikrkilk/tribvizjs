import {React, memo} from 'react'


export const PlotFrame = ({plot}) => (
  <div className="plot">
    {plot}
  </div>);


export default memo(PlotFrame);