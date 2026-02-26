import express from express;

const app=express()

app.use(JSON.parse())

app.get("/",(req,res)=>{
    res.send({message:"hello"})
})

app.listen(3000,()=>{
    console.log('app is listening')
})