import  '../styles/ScoreDisplayer.css'

export default function ScoreDisplayer({score, bestScore}) {
    return (
        <>
        <div className="score-box">
        <h5 className="score-element">Score: {score}</h5>

        <h5 className="score-element">Best Score: {bestScore}</h5>

        </div>

        
        </>
    )
}