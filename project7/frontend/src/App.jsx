import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setjokes] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3001/jokes")
    .then((res)=>{
setjokes(res.data)
console.log(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
  <>
  <h1>chai aur code</h1>
  <p>{jokes.length}</p>
  {
jokes.map((joke,index)=>{
<div key={joke.id}>
  <h3>{joke.title}</h3>
  <p>{joke.content}</p>
</div>
})
  }
  </>
  )
}

export default App
