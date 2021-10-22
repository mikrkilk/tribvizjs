import React, { forwardRef }from "react";
import { PlotFrame } from './PlotFrame';


export const DraggableFrame =  forwardRef(({style, className, children, frame, ...rest}, ref) => {
    return(
    <div style={style} className={["frame",className].join(' ')} ref={ref} {...rest}>
        
            <PlotFrame plot={frame.plot}/>
            {children}
            <div className="drag-handle"/>
    </div>)})

export default DraggableFrame