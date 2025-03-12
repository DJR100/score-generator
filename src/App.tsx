import { useState } from 'react'
import './App.css'

function App() {
  const [score, setScore] = useState<number>(0)

  const generateRandomScore = () => {
    console.log("Generating random score")
    const randomScore = Math.floor(Math.random() * (1000 - 10 + 1)) + 10
    console.log("Random score:", randomScore)
    setScore(randomScore)
    
    // Make sure ReactNativeWebView exists and send message
    if (window.ReactNativeWebView) {
      // Remove the optional chaining and just use direct call
      window.ReactNativeWebView.postMessage(JSON.stringify({ score: randomScore }))
      console.log("Sending score to React Native:", randomScore)
    } else {
      console.warn("ReactNativeWebView not found - are you running in WebView?")
    }
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