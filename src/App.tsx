import { submitData } from './config/firebaseFunctions'
import './App.css'

function App() {

  const input = async (e) => {
    await submitData(e.target.value)
  }
  return (
    <>
      <label>
        Fill in the database: <input
    onKeyDown={(e) => {
        if (e.key === "Enter")
            input(e);
        }}
/>
      </label>
    </>
  )
}

export default App
