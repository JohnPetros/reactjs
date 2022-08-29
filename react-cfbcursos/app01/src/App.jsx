import React from 'react'
import Logo from './components/imgs/logo.jpg'
import Fessor from './components/imgs/fessor.jpg'

function App() {
  const Canal = () => {
    return 'Canal ' + canal
  }
  const canal = "CFB Cursos"
  const curso = "CFB Cursos"
  return (
    <div>
      <p>Canal: {'Canal ' + canal}</p>
      <p>{canal}</p>
      <p>{Canal()}</p>
      <img src={Logo} />
      <img src={Fessor} />
    </div>
  )
}

export default App
