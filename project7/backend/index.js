import express from "express";


const app=express()
const Port=process.env.PORT || 3001
app.use(cros())
const jokes = [
  {
    id: 1,
    title: "Programmers Diet",
    content: "Why do programmers prefer dark mode? Because light attracts bugs."
  },
  {
    id: 2,
    title: "Array Problem",
    content: "Why did the JavaScript developer leave the restaurant? Because the menu had no arrays."
  },
  {
    id: 3,
    title: "Debugging Life",
    content: "Debugging: Being the detective in a crime movie where you are also the murderer."
  },
  {
    id: 4,
    title: "Hardware vs Software",
    content: "Hardware: The part of a computer you can kick. Software: The part you can only swear at."
  },
  {
    id: 5,
    title: "JavaScript Joke",
    content: "Why was the JavaScript developer sad? Because he didnt Node how to Express himself."
  }
];

app.get("/jokes",(req,res)=>{
    res.send(jokes)
})

app.listen(Port,()=>{
    console.log(`http://localhost:${Port}`)
})