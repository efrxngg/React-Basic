import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './core/App'
import { TaskContextProvider } from './core/TaskContext'
import '../src/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
)
