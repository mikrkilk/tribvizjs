
const initialState = {
    open:true
}

const setupReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'OPEN_SETUP':
          console.log("Opening setup")
        return {
            open:true
        }
      case 'CLOSE_SETUP':
        return {
            open:false
        }
      default:
      return state
    }
  }

export const openSetup = (plotID) => {
  return {
    type: 'OPEN_SETUP',
    data: {
        open:true,
        id:plotID,
    }
  }
}

export const closeSetup = () => {
  return {
    type: 'CLOSE_SETUP',
    data: {open:false}
  }
}


export default setupReducer