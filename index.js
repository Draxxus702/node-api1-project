const express = require('express')
const shortid = require('shortid')
const server = express()
const PORT = 5005
server.listen(PORT, ()=>{
    console.log(`\n ** API is running on http://localhost:${PORT} ** \n`)
})
server.use(express.json())




let users =[]


server.get('/api/users', (req, res)=>{
    res.status(200).json(users)
})


server.post('/api/users', (req,res)=>{
    const usersInfo=req.body
    usersInfo.id=shortid.generate()
    users.push(usersInfo)
    res.status(201).json(usersInfo)
})
