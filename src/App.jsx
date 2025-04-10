
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/BookMarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookMarks, setBookMarks] = useState([])
  const handleBookMark = (blog) => {
    console.log("New blog is coming", blog);
    const newBookMarks = [...bookMarks, blog]
    setBookMarks(newBookMarks)

  }
  const [markAsRead, setMarkAsRead] = useState(0);
  const handleMarkAsRead = (time) => {
    const newReadingTime = markAsRead + time;
    setMarkAsRead(newReadingTime)
  }


  return (
    <>

      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <div className='md:flex'>
          <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks bookMarks={bookMarks} markAsRead={markAsRead} ></Bookmarks>
        </div>
      </div>


    </>
  )
}

export default App
