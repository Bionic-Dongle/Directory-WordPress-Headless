import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Simple test component first
function SimpleTest() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ color: 'blue' }}>🎉 IT WORKS!</h1>
      <p>Your WordPress Headless Directory is running!</p>
      <div style={{ background: '#f0f0f0', padding: '10px', margin: '10px 0' }}>
        <h2>Next Steps:</h2>
        <ul>
          <li>✅ Frontend successfully copied from V0 template</li>
          <li>✅ React app running locally</li>
          <li>✅ Ready for WordPress integration</li>
        </ul>
      </div>
    </div>
  )
}

// Full app (we'll switch back to this once we confirm basic rendering works)
function FullApp() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">Melbourne Directory</h1>
        <p className="text-lg text-gray-600">Loading components...</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<SimpleTest />} />
          <Route path="/full" element={<FullApp />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App