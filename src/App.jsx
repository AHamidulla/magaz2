import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Gallery from './components/Gallery/Gallery'
import Nike from './components/Nike/Nike'
import Esp from './components/Nike/Esp/Esp'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Body/>
      <Gallery/>
      <Nike/>
      <Esp/>
      <Footer/>
    </>
  )
}

export default App
