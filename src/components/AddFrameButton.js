import React from 'react'
import { useDispatch } from 'react-redux'
import { createFrame } from '../reducers/frameReducer'

const AddFrameButton = () => {
    const dispatch = useDispatch()

    const addFrame = (event) => {
        event.preventDefault()
        dispatch(createFrame("Hello"))
    }

    return(
        <button onClick={addFrame}>Add a new plot</button>
    )

}
export default AddFrameButton
