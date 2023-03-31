import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Newsfeed from './components/newsFeed/Newsfeed'
import QuestionAndAnswer from './components/Q&A/QuestionAndAnswer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Newsfeed></Newsfeed>
      <QuestionAndAnswer></QuestionAndAnswer>

    </div>
  )
}

export default App
