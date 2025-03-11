import { useEffect } from 'react'
import './ScoreGame.css'

const ScoreGame = ({ score, onGenerateScore }) => {
  // Listen for keypress events to allow keyboard activation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space' || event.code === 'Enter') {
        onGenerateScore()
      }
    }
    
    window.addEventListener('keydown', handleKeyPress)
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [onGenerateScore])

  return (
    <div className="score-game">
      <div className="score-display">
        {score !== null ? (
          <>
            <h2>Your Score:</h2>
            <div className="score-value">{score}</div>
          </>
        ) : (
          <p>Press the button to generate a score!</p>
        )}
      </div>
      
      <button 
        className="score-button"
        onClick={onGenerateScore}
        aria-label="Generate random score"
      >
        Generate Score!
      </button>
    </div>
  )
}

export default ScoreGame 