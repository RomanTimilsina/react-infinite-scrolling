import React, { useEffect } from 'react'
import axios from 'axios'

export default function useBookSearch(query, pageNumber) {
  useEffect(()=>{
    axios({
      method: 'GET',
      url:'http://openlibrary.org/search.json',
      params : {q:query,p: pageNumber}
    }).then(res => console(res.data))
  },[query,pageNumber])

  return (
    <div>
      
    </div>
  )
}
