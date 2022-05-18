import './App.css';
import { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import List from './components/List/List';
import Header from './components/Header/Header';
import apiCalls from './apiCalls';

const App = () => {
  const [error, setError] = useState('')
  const [texts, setTexts] = useState(
    JSON.parse(localStorage.getItem('texts')) || [])

  const addPrompt = (newPrompt) => {
    apiCalls.postPrompt(newPrompt)
      .then(textData => {
        setTexts([textData, ...texts])
      })
      .catch(err => {
        setError(`Oops... Something went wrong. Our team is working on fixing the issue`)
      })
  }

  useEffect(() => {
    localStorage.setItem('texts', JSON.stringify(texts))
  }, [texts])

  return (
    <div className="app">
      {error ? <p className='error'>{error}</p> :
      <>
        <Header />
        <Form addPrompt={addPrompt} />
        <List texts={texts} />
      </>
      }
    </div>
  )
}

export default App;
