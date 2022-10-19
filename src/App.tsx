import './App.css'

import { Navigate, Route } from 'react-router-dom'

import { SentryRoutes } from './sentry'
import { Monitor } from './Monitor'

function App() {
  return (
    <SentryRoutes>
      <Route path="monitor/*" element={<Monitor />} />

      <Route path="*" element={<Navigate replace to="/monitor" />} />
    </SentryRoutes>
  )
}

export default App
