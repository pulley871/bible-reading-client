import { useEffect } from "react"
import { useState } from "react"
import { getBooks, getChapters, getVerse, getVerses } from "./EntryProvider"
import "./Entry.css"
import { EntryList } from "./EntryList"
import { EntryForm } from "./EntryForm"

export const Entry = () => {
    const [books, setBooks] = useState([])
    const [bookId, setBookId] = useState("")
    const [chapters, setChapters] = useState([])
    const [chapterId, setChapterId] = useState("")
    const [verses, setVerses] = useState([])
    const [verseId, setVerseId] = useState("")
    const [verse, setVerse] = useState({})
    useEffect(() => {
        getBooks().then((data) =>setBooks(data.data))
    }, [])
    useEffect(() => {
        if(bookId){

            getChapters(bookId).then((data) => setChapters(data.data))
        }
    },[bookId])
    useEffect(() => {
        if (chapterId){

            getVerses(chapterId).then((data) => setVerses(data.data))
        }
    }, [chapterId])
    useEffect(() => {
        if (verseId){

            getVerse(verseId).then((data) => setVerse(data.data))
        }
    }, [verseId])
    return(<><h1 className="head-h1">Select Your Scripture</h1>
    <select onChange={(event) => {
        setBookId(event.target.value)
    }}>
        <option>Select A Book</option>
    {books?.map((book)=>{
        return(<option value={book.id}>{book.name}</option>)
    })}
    </select>
    {chapters.length > 0 ? 
        <select onChange={(event) => {
            setChapterId(event.target.value)
        }}>
            <option>Select A Chapter</option>
        {chapters?.map((chapter)=>{
            return(<option value={chapter.id}>{chapter.number}</option>)
        })}
        </select>
        :""}
    {verses.length > 0 ? 
        <select onChange={(event) => {
            setVerseId(event.target.value)
        }}>
            <option>Select A Verse</option>
        {verses?.map((verse)=>{
            return(<option value={verse.id}>{verse.reference}</option>)
        })}
        </select>
        :""}
        {console.log(verse)}
        <div className="scirpture">

            <div dangerouslySetInnerHTML={{ __html: verse.content}} />
        </div>
        
        
        <h2>Entries</h2>
        <EntryList verseId={verseId}/>
    </>)
}