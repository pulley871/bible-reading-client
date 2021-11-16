const api_key = '7547bb6e2754c7e9a64b52af8a8bcebb'
const bible_id = '06125adad2d5898a-01'
const api = "https://api.scripture.api.bible/v1/bibles/06125adad2d5898a-01"

//06125adad2d5898a-01

// select a book
// select a chaper
// select a verse

//example https://api.scripture.api.bible/685d1470fe4d5c3b-01
//          https://api.scripture.api.bible/v1/bibles/685d1470fe4d5c3b-01/books/
//          https://api.scripture.api.bible/v1/bibles/685d1470fe4d5c3b-01/chapters/{chapter_id}/verses
//          https://api.scripture.api.bible/v1/bibles/685d1470fe4d5c3b-01/verses/ROM.1.4          

export const getBooks = () =>{
    return fetch(`${api}/books`,{
        headers:{
            "api-key": api_key
        }
    }).then(res => res.json())
}
export const getChapters = (bookId) => {
    return fetch(`${api}/books/${bookId}/chapters`,{
        headers:{
            "api-key": api_key
        }
    }).then(res => res.json())
}
export const getVerses = (chapterId) => {
    return fetch(`${api}/chapters/${chapterId}/verses`,{
        headers:{
            "api-key": api_key
        }
    }).then(res => res.json())
}

export const getVerse = (verseId) => {
    return fetch(`${api}/verses/${verseId}`,{
        headers:{
            "api-key": api_key
        }
    }).then(res => res.json())
}
export const getEntries = () => {
    return fetch(`http://localhost:8000/entries`,{
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    }).then(res => res.json())
}
export const postEntry = (object) => {
    return fetch(`http://localhost:8000/entries`, {
        method: "POST",
        headers:{
            "Authorization":  `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
    })
}