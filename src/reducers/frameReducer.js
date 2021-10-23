import { v4 as uuidv4 } from 'uuid';


const frameReducer = (state = [], action) => {
    switch(action.type) {
      case 'NEW_FRAME':
        return [...state, action.data]
      case 'REMOVE_FRAME':
        const id = action.data.id
        return state.filter(frame => frame.id !== id)
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
      plot:{
        plot:plot,
        id:id
      }
    }
  }
}

export const removeFrame = (id) => {
  return {
    type: 'REMOVE_FRAME',
    data: {id}
  }
}


export default frameReducer