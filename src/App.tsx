import './App.css'
import { AuthContextProvider } from './Router/AuthContext'
import Router from './Router/Router'

function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  )
}

export default App
