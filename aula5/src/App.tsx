import { useEffect, useState } from "react"
import "./style/style.css"

function App() {
  const [counter, setCounter] = useState<number>(0)
  const [active, setActive] = useState<boolean>(false)

  useEffect(() => {
    if (active) {
      const interval = setTimeout(() => {
        setCounter(oldCounter => oldCounter + 1)
      }, 1000);

      return () => clearTimeout(interval)
    }
  }, [active, counter])

  return (
    <>
      <div className="contador">
        <h1>
          {counter}
        </h1>
      </div>

      <div className="btns">
        <button onClick={() => setActive(true)}>
          play
        </button>
        <button onClick={() => setActive(false)}>
          pause
        </button>
        <button onClick={() => setCounter(0)}>
          reset
        </button>
      </div>
    </>
  )
}

export default App
