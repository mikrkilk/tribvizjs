import { useDragLayer } from 'react-dnd';
import { ItemTypes } from '../types/ItemTypes';
import { FrameDragPreview } from './FrameDragPreview';
import { snapToGrid } from '../utils/snapToGrid';
const layerStyles = {
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
};
function getItemStyles(initialOffset, currentOffset, clientOffset) {
    if (!initialOffset || !currentOffset) {
        return {
            display: 'none',
        };
    }
    let { x, y } = clientOffset;
    x -= initialOffset.x;
    y -= initialOffset.y;
    [x, y] = snapToGrid(x, y);
    x += initialOffset.x;
    y += initialOffset.y;

    console.log([initialOffset, currentOffset, clientOffset, x, y]);
    
    const transform = `translate(${x}px, ${y}px)`;
    return {
        transform,
        WebkitTransform: transform,
    };
}
export const CustomDragLayer = () => {
    const { itemType, isDragging, item, initialOffset, currentOffset, clientOffset } = useDragLayer((monitor) => ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialOffset: monitor.getInitialClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        clientOffset: monitor.getClientOffset(),
        isDragging: monitor.isDragging(),
    }));
    console.log(item);
    function renderItem() {
        switch (itemType) {
            case ItemTypes.BOX:
                return <FrameDragPreview plot={item.plot}/>;
            default:
                return null;
        }
    }
    if (!isDragging) {
        return null;
    }
    const offset = getItemStyles(initialOffset, currentOffset, clientOffset)
    console.log(offset);
    return (<div style={layerStyles}>
			<div style={offset}>
				{renderItem()}
			</div>
		</div>);
};
export default CustomDragLayer;