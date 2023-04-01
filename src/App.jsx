import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Header from './components/header/Header'
import Newsfeed from './components/newsFeed/Newsfeed'
import QuestionAndAnswer from './components/Q&A/QuestionAndAnswer'

function App() {
  

  return (
    <div className="App">
      <Header></Header>
      <Newsfeed></Newsfeed>
      <QuestionAndAnswer></QuestionAndAnswer>

    </div>
  )
}

export default App
