import { useEffect, useState } from "react"
import { postEntry } from "./EntryProvider"


export const EntryForm = ({refrenceId, render}) => {
    const [object, setObject] = useState({
        hear : "",
        engage : "",
        apply : "",
        respond : "",
        refrence : "",
        date: null
    })
    const changeObject = (domEvent) => {
        const copy = {...object}
        copy[domEvent.target.name] = domEvent.target.value
        setObject(copy)
    }
    useEffect(() => {
        const copy = {...object}
        copy.refrence = refrenceId
        setObject(copy)
    }, [])
    return (<>
    
            <fieldset className="form-group">
                <h1>H<small>ear</small></h1>
                <textarea type="text" name='hear' rows="5"onChange={changeObject}></textarea>
            </fieldset>
            <fieldset className="form-group">
                <h1>E<small>ngage</small></h1>
                <textarea type="text" name='engage' rows="5"onChange={changeObject}></textarea>
            </fieldset>
            <fieldset className="form-group">
                <h1>A<small>pply</small></h1>
                <textarea type="text" name="apply" rows="5"onChange={changeObject}></textarea>
            </fieldset>
            <fieldset className="form-group">
                <h1>R<small>espond</small></h1>
                <textarea type="text" name='respond' rows="5"onChange={changeObject}></textarea>
            </fieldset>
            <label htmlFor="date">Select Date</label>
            <input type='date' name='date' onChange={changeObject}/>
            <button onClick={()=> postEntry(object).then(()=> render())}>Add Entry</button>
    </>)
}