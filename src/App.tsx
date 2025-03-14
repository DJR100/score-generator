// Add type declaration for ReactNativeWebView
declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage(message: string): void;
    };
  }
}

import { useState } from 'react'
import './App.css'

function App() {
  const [score, setScore] = useState<number>(0)

  const generateRandomScore = () => {
    console.log("Generating random score")
    const randomScore = Math.floor(Math.random() * (1000 - 10 + 1)) + 10
    console.log("Random score:", randomScore)
    setScore(randomScore)
    
    // Send score to React Native app and log the action
    console.log("Sending score to React Native:", randomScore)
    window.ReactNativeWebView?.postMessage(JSON.stringify({ score: randomScore }))
  }

  return (
    <div className="app-container">
      <h1>Score Generator</h1>
      <div className="card">
        <button onClick={generateRandomScore}>
          Generate Random Score
        </button>
        {score > 0 && <p className="score-display">Your score: {score}</p>}
      </div>
    </div>
  )
}

export default App 