import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { useContext } from 'react'
import { Contexto } from './context/TaskContext.jsx'
import { AppRouter } from './routers/AppRouter.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contexto>
      <AppRouter>
        <App />
      </AppRouter>
    </Contexto>
  </React.StrictMode>,
)
