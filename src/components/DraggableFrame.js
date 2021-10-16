import { Rnd } from "react-rnd";
import { PlotFrame } from './PlotFrame';


  
export const DraggableFrame = ({frame}) => {
    return (
			<Rnd className="frame"
                 default={{x: frame.top, y: frame.left, width:300,height:300}}
                 dragGrid={[20, 20]} 
                 bounds={"parent"}
                 style={{display:"flex", flexWrap:"wrap"}}
                 dragHandleClassName={'handle'}>
                <div className="handle"
                    style={{
                    backgroundColor: 'gray',
                    padding: '1rem',
                    zIndex: '10',
                    width: '100%',
                    margin: '-1px'}}/>
                <PlotFrame plot={frame.plot} />
            </Rnd>);
}

export default DraggableFrame