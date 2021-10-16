import { memo } from 'react';
import { PlotFrame } from './PlotFrame';
const styles = {
    display: 'inline-block',
    border: '1px dashed gray',
    padding: '0rem 0rem 0.5rem 0rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    width: '300px',
    transform: 'rotate(-3deg)',
    WebkitTransform: 'rotate(-3deg)',
};
const handleStyle = {
    backgroundColor: 'green',
    width: '100%',
    height: '1rem',
    display: 'flex',
    cursor: 'move',
  };

export const FrameDragPreview = memo(function FrameDragPreview({ plot }) {
    return (<div style={styles}>
                <div style={handleStyle}/>
				<PlotFrame plot={plot} preview/>
			</div>);
});