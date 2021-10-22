import { v4 as uuidv4 } from 'uuid';

const frameReducer = (state = [], action) => {
    switch(action.type) {
      case 'NEW_FRAME':
        return [...state, action.data]
      default:
      return state
    }
  }

export const createFrame = (plot=[]) => {
  const id = uuidv4()
  return {
    type: 'NEW_FRAME',
    data: {
      id:id,
      layout: {
        x:0,
        y:0,
        w:30,
        h:30,
      },
      plot:{plot}
    }
  }
}


export default frameReducer