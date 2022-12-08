import {useState, useRef, useCallback} from 'react'
import useBookSearch from './useBookSearch'

function App() {
  const [query,setQuery] = useState('')
  const [pageNumber,setPageNumber] = useState(1)
  
  const { loading, error, hasMore, books } = useBookSearch(query, pageNumber)

  const observer = useRef()
  const lastBookRef = useCallback(node => {
    if( loading ) return
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries =>{
      if(entries[0].isIntersecting && hasMore){
          console.log(pageNumber)
      }
    })
    if(node) observer.current.observe(node)
  },[loading,hasMore])

 function handleQuery(e){
  setQuery(e.target.value)
  setPageNumber(1)
 }

  return (
    <>
    <input type="text" value={query} onChange={handleQuery}></input>
    <div>Title</div>
    <div>
      {
        books.map((book,index) => {
         if(books.length == (index+1)){
          return <div ref={lastBookRef} key={book}>{book}</div>
         }
         else{
          return <div key={book}>{book}</div>
         }
        })
      }
    </div>
    <button onClick={() => setPageNumber(prevPage=> prevPage+1)}>next</button>
    <div>{loading && 'Loading...'}</div>
    <div>{error && 'Error...'}</div>
    </>
  );
}

export default App;
