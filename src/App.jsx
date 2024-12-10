import { useState } from 'react'
import './App.css'
import Header from './components/header/header';
import Body from './components/body/Body';

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <Header/>
      <Body/>
    </>
  )
}

export default App
