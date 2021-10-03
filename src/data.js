const mongoose = require('mongoose')
const express = require('express')
const PORT = process.env.PORT || 8000;
const { default: axios } = require('axios')
const cors = require("cors")
require('dotenv').config()
const app = express()
app.use(cors())
const dbURI=`mongodb+srv://akash:akash@first.k0veb.mongodb.net/Teams?retryWrites=true&w=majority`
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
mongoose.connect(dbURI, options).then(() => {
    console.log('Database Connection done!!!')
})

const playerSchema = new mongoose.Schema({}, { strict: false })
var team = mongoose.model('myteam', playerSchema)

app.delete('/delrcb', async (req, res) => {
    data = await team.deleteMany({})
    res.send(data)
})


let no;
app.get('/rcbget', async (req, res) => {
    var data2 = await team.find()
    console.log(data2.length)
    no = data2.length
    res.send(data2)
})


app.post('/rcbpost', async (req, res) => {
    var data = await team.insertMany([
        {
            name: "Virat Kohli",
            photo: "https://static.iplt20.com/players/210/164.png",
            team: "Royal Challengers Bangalore",
            price: "Rs. 70 Million",
            playingStatus: "Playing",
            Role: "Batsman",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
        },
        {
            name: "Ab de Villers",
            photo: "https://static.iplt20.com/players/210/233.png",
            team: "Royal Challengers Bangalore",
            price: "RS 50 Million",
            playingStatus: "Playing",
            Role: "Batsman",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
        },
        {
            name: "Devdutt Padikkal",
            photo: "https://static.iplt20.com/players/210/5430.png",
            team: "Royal Challengers Bangalore",
            price: "RS 20 Million",
            playingStatus: "Playing",
            Role: "Batsman",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
        },
        {
            name: "Md. Azharuddin",
            photo: "https://static.iplt20.com/players/210/7743.png",
            team: "Royal Challengers Bangalore",
            price: "RS 8 Million",
            playingStatus: "Playing",
            Role: "Batsman",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
        },
        {
            name: "Rajat Patidar",
            photo: "https://static.iplt20.com/players/210/5471.png",
            team: "Royal Challengers Bangalore",
            price: "RS 5 Million",
            playingStatus: "Playing",
            Role: "Batsman",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
        },
        {
            name: "Washington Sundar",
            photo: "https://static.iplt20.com/players/210/2973.png",
            team: "Royal Challengers Bangalore",
            price: "RS 2.5 Million",
            playingStatus: "Playing",
            Role: "All-Rounder",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
        },
        {
            name: "Glenn Maxwell",
            photo: "https://static.iplt20.com/players/210/282.png",
            team: "Royal Challengers Bangalore",
            price: "RS 1.2 Million",
            playingStatus: "Playing",
            Role: "All-Rounder",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
        },
        {
            name: "Dan Christian",
            photo: "https://static.iplt20.com/players/210/181.png",
            team: "Royal Challengers Bangalore",
            price: "RS 1.1 Million",
            playingStatus: "Playing",
            Role: "All-Rounder",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
        },
        {
            name: "Kyle Jamieson",
            photo: "https://static.iplt20.com/players/210/1616.png",
            team: "Royal Challengers Bangalore",
            price: "RS 1 Million",
            playingStatus: "Playing",
            Role: "Bowler",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
        },
        {
            name: "Harshal Patel",
            photo: "https://static.iplt20.com/players/210/157.png",
            team: "Royal Challengers Bangalore",
            price: "RS 0.9 Million",
            playingStatus: "Playing",
            Role: "Bowler",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
        },
        {
            name: "Adam Zampa",
            photo: "https://static.iplt20.com/players/210/958.png",
            team: "Royal Challengers Bangalore",
            price: "RS 0.7 Million",
            playingStatus: "Playing",
            Role: "Bowler",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
        },
        {
            name: "Pavan Deshpande",
            photo: "https://static.iplt20.com/players/210/4957.png",
            team: "Royal Challengers Bangalore",
            price: "RS 0.5 Million",
            playingStatus: "on-bench",
            Role: "Bowler",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
        }
    ])
    res.send(data)
})


  
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}!!!!`)
})

