import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='flex w-screen h-screen bg-black text-white justify-center items-center'>
      <div>
        <h1>
          hello
        </h1>
      </div>
      <div>
        <h1>
          world
        </h1>
      </div>
    </main>
  )
}

export default App
