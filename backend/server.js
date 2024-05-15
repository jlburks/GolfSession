// create routes with express
// 1) admin creates game session object (const x = new GameSession([4,5,3,4,4,4,5,4,3,5,4,4,3,5,4,4,3,4],["denji","makima","pochita","asa"]))
// 2) set up game cards (const y = x.createPlayerScoreRow())
// Is work primarly done in frontend or backend? Probaly the backend I think

const express = require('express');
const app = express();

app.use(express.json())


app.post('/login', (req,res) => {
    const {username,password} = req.body
    if(username==="jarenburks" && password==="golf101"){
        res.json({"mission":"successful"})
    }else{
        res.json({"mission":"unsuccessful"})
    }
})

//GameSession([4,5,3,4,4,4,5,4,3,5,4,4,3,5,4,4,3,4],["denji","makima","pochita","asa"])
app.post('/setupGame' ,(req,res) => {
    const {parList, playerList} =  req.body
    console.log(parList,playerList)
})



const PORT = 3000
app.listen(PORT, (err) => {
    if (err) console.log("Error setting up server");
    console.log(`Server running on port ${PORT}`)
})