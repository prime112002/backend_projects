import express from express;

const app=express()

app.use(JSON.parse())

app.get("/",(req,res)=>{
    res.send({message:"hello"})

})

app.post("/data",(req,rse)=>{
    res.json({message:"hii"})
})
app.get("/dashboard",(req,res)=>{
    res.send("welcome")
})
app.listen(3000,()=>{
    console.log('app is listening')
})