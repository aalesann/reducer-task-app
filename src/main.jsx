import React from 'react'
import ReactDOM from 'react-dom/client'
import { Contexto } from './context/TaskContext.jsx'
import { AppRouter } from './routers/AppRouter.jsx'
import { Tasks } from './pages/Tasks.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contexto>
      <AppRouter>
        <Tasks />
      </AppRouter>
    </Contexto>
  </React.StrictMode>,
)
