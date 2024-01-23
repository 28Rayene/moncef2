const express=require('express')
const app=express()
const port=5000

app.listen(port,(err)=>{
    err? console.log('error')
    :console.log('server is running')


})
// connection DB
const ConnectDB=require('./connect/ConnectDB')
ConnectDB()
app.use(express.json());

app.use('/api/products',require('./routes/route'))
