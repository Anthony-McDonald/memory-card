import { useState } from 'react'
import ScoreDisplayer from './components/ScoreDisplayer'
import MemoryBox from './components/MemoryBox'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="main-holder">
    <div className="header">
      <img className="poke-logo" src="src/assets/poke-logo.webp" alt="pokeball" />
      <h1 className="title creepster-regular">Ghostly Memorisation</h1>
      <div className="header-right">
      <ScoreDisplayer></ScoreDisplayer>
      <img className="poke-logo" src="src/assets/poke-logo.webp" alt="pokeball" />
      </div>

    </div>
    <div className="main-area">
      <MemoryBox></MemoryBox>
      mainareadiv
    </div>

    </div>

    </>
  )
}

export default App
