import {useState} from 'react'
import {useBookSearch} from './useBookSearch'

function App() {
  const [query,setQuery] = useState('')
  const [pageNumber,setPageNumber] = useState(1)
  useBookSearch(query, pageNumber)

  function handleQuery(e){
    setQuery(e.target.value)
    setPageNumber(1)
  }

  return (
    <>
    <input type="text" onChange={handleQuery}></input>
    <div>Title</div>
    <div>Title</div>
    <div>Title</div>
    <div>Title</div>
    <div>Title</div>
    <div>Loading...</div>
    <div>Error</div>
    </>
  );
}

export default App;
