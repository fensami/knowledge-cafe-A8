import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Newsfeed from './components/newsFeed/Newsfeed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Newsfeed></Newsfeed>

    </div>
  )
}

export default App
