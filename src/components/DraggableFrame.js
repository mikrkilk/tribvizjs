import React, { forwardRef }from "react";
import { PlotFrame } from './PlotFrame';
import RemoveFrameX from "./RemoveFrameX";


export const DraggableFrame =  forwardRef(({style, className, children, frame, ...rest}, ref) => {
    return(
    <div style={style} className={["frame",className].join(' ')} ref={ref} {...rest}>
        
            <PlotFrame plot={frame.plot}/>
            {children}
            <div className="drag-handle"> 
                <RemoveFrameX id={frame.id} />
            </div>
    </div>)})

export default DraggableFrame