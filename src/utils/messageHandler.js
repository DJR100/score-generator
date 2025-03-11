/**
 * Sets up communication between the web game and the React Native WebView
 */
export const setupMessageHandler = () => {
  // Listen for messages from React Native
  window.addEventListener('message', handleMessage)
  
  // Signal to React Native that the web app is ready
  sendReadySignal()
}

/**
 * Handles incoming messages from React Native
 */
const handleMessage = (event) => {
  try {
    const message = JSON.parse(event.data)
    
    switch (message.type) {
      case 'PING':
        // Respond to ping from React Native
        if (window.ReactNativeWebView) {
          window.ReactNativeWebView.postMessage(JSON.stringify({
            type: 'PONG',
            payload: { timestamp: new Date().toISOString() }
          }))
        }
        break
        
      // Add more message handlers as needed
      
      default:
        console.log('Unknown message type:', message.type)
    }
  } catch (error) {
    console.error('Error handling message:', error)
  }
}

/**
 * Sends a ready signal to the React Native app
 */
const sendReadySignal = () => {
  // Short delay to ensure React Native WebView is ready
  setTimeout(() => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'WEB_APP_READY',
        payload: { timestamp: new Date().toISOString() }
      }))
    }
  }, 500)
} 