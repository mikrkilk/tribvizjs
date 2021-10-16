import {React, memo} from 'react'


export const PlotFrame = memo( function PlotFrame({plot}) {
return (<div className="plot">
  {plot}
</div>);
})

export default PlotFrame;