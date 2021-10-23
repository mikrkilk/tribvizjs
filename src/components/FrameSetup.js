import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeSetup } from '../reducers/setupReducer'

const FrameSetup = () => {
    const dispatch = useDispatch()
    const setup = useSelector(state =>state.setup)

    const cSetup = (event) => {
        event.preventDefault()
        dispatch(closeSetup())
    }
    var classname = "setup"
    if(!setup.open) {
        classname = "setup closedSetup"
    }
    return(
        <div className={classname}>
            {setup.open?<button onClick={cSetup}>Close setup</button>:null}
        </div>
    )

}
export default FrameSetup