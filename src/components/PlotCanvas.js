import { DraggableFrame } from './DraggableFrame';

export const PlotCanvas = ({frames}) => {
  console.log(frames)
  return(<div className="canvas">
    {frames.map(frame =><DraggableFrame frame={frame} key={frame.id} />)}
  </div>)

}

export default PlotCanvas