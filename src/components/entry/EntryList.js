import { useEffect, useState } from "react"
import { getEntries } from "./EntryProvider"
import { EntryForm } from "./EntryForm"

export const EntryList = ({verseId}) =>{
    const [entries, setEntries] = useState([])
    const render = () =>{
        getEntries().then(data => setEntries(data))
    }
    useEffect(() => {
        render()
    },[])
    return(<>{verseId ? <EntryForm refrenceId={verseId} render={render}/>:""}
        <h2>Entries</h2>
        {entries?.map((entry)=>{
            return(<div className="entry-container">
                <h3 className="entry-date">Date: {entry.date}</h3>
                <div className="hear">

                    <h3>Hear</h3>
                    <p>{entry.refrence}</p>
                    <p>{entry.hear}</p>
                </div>
                <div className="hear">
                    <h3>Engage</h3>
                    <p>{entry.engage}</p>
                </div>
                <div className="hear"> 
                    <h3>Apply</h3>
                    <p>{entry.apply}</p>
                </div>
                <div className="hear">
                    <h3>Respond</h3>
                    <p>{entry.respond}</p>
                </div>
            </div>)
        })}
    </>)
}