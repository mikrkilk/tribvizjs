import { Responsive, WidthProvider } from 'react-grid-layout';
import React, { useRef }from "react";
import { DraggableFrame } from './DraggableFrame';
const ResponsiveGridLayout = WidthProvider(Responsive);

//{childFrames}

export const PlotCanvas = ({frames}) => {

  var layout = [] // TODO: make utils function to construct layout or use states
  layout = [ 
  {i: 'a', x: 0, y: 0, w: 10, h: 20},
  {i: 'b', x: 1, y: 0, w: 30, h: 20, minW: 2, maxW: 4},]
  const childFrames = frames.map(oneframe => <DraggableFrame ref={React.createRef()} frame={oneframe} key={oneframe.id} />);
  return(<div className="canvas">
    <ResponsiveGridLayout className="layout" layout={layout} draggableHandle=".drag-handle"
      breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
      cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
        {childFrames}
    </ResponsiveGridLayout>
  </div>)

}

export default PlotCanvas