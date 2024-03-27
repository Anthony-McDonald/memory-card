import { useState } from 'react'
import ScoreDisplayer from './components/ScoreDisplayer'
import MemoryBoxSelector from './components/MemoryBoxSelector'

export default function App() {
  const [clickedDivs, setClickedDivs] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);
  console.log(clickedDivs);

  const handleClickedDiv = (divClicked) => {
    let newDivsClicked = clickedDivs;
    newDivsClicked.push(divClicked);

    if (checkIfDuplicatePresent(newDivsClicked)) {
      if (bestScore < newDivsClicked.length - 1) {
        setBestScore(newDivsClicked.length - 1);
      }
      newDivsClicked = [];
      setScore(0);
    } else {
      setScore(score + 1);
    }
    setClickedDivs(newDivsClicked);

  }

  return (
    <>
    <div className="main-holder">
    <div className="header">
      <img className="poke-logo" src="/poke-logo.webp" alt="pokeball" />
      <h1 className="title creepster-regular">Ghostly Memorisation</h1>
      <div className="header-right">
      <ScoreDisplayer score={score} bestScore={bestScore}></ScoreDisplayer>
      <img className="poke-logo" src="/poke-logo.webp" alt="pokeball" />
      </div>

    </div>
    <div className="main-area">
      <MemoryBoxSelector handleClick={handleClickedDiv} ></MemoryBoxSelector>
    </div>

    </div>
    </>
  )
}

function checkIfDuplicatePresent(arr) {
  return new Set(arr).size !== arr.length;
}
