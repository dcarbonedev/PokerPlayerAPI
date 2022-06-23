const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const players = {
    'justinbonomo':{
        'name': 'Justin Bonomo',
        'rank': 1,
        'earnings': '$59,182,835',
        'age': 36,
        'residence':'Los Angeles, CA' 
    },
    'brynkenney':{
        'name': 'Bryn Kenney',
        'rank': 2,
        'earnings': '$57,450,921',
        'age': 35,
        'residence':'Long Beach, CA' 
    },
    'danielnegreanu':{
        'name': 'Daniel Negreanu',
        'rank': 3,
        'earnings': '$45,267,433',
        'age': 47,
        'residence':'Las Vegas, NV' 
    },
    'stephenchidwick':{
        'name': 'Stephen Chidwick',
        'rank': 4,
        'earnings': '$43,013,530',
        'age': 33,
        'residence':'Las Vegas, NV' 
    },
    'davidpeters':{
        'name': 'David Peters',
        'rank': 5,
        'earnings': '$42,702,188',
        'age': 35,
        'residence':'Toledo, OH' 
    },
    'erikseidel':{
        'name': 'Erik Seidel',
        'rank': 6,
        'earnings': '$39,777,266',
        'age': 62,
        'residence':'Las Vegas, NV' 
    },
    'dansmith':{
        'name': 'Dan Smith',
        'rank': 7,
        'earnings': '$38,840,742',
        'age': 33,
        'residence':'Las Vegas, NV' 
    },
    'jasonkoon':{
        'name': 'Jason Koon',
        'rank': 8,
        'earnings': '$38,251,391',
        'age': 36,
        'residence':'Las Vegas, NV' 
    },
    'philivey':{
        'name': 'Phil Ivey',
        'rank': 9,
        'earnings': '$37,085,801',
        'age': 45,
        'residence':'Absecon, NJ' 
    },
    'mikitabodyakovsky':{
        'name': 'Mikita Bodyakovsky',
        'rank': 10,
        'earnings': '$35,553,765',
        'age': 30,
        'residence':'Belarus' 
    },
    'unknown': 'Player Not Found'
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/name/:playerName', (request,response)=>{
    const playersName = request.params.playerName.split(' ').join('').toLowerCase()
    if(players[playersName]){
        response.json(players[playersName])
    }else{
        response.json(players['unknown'])
    }
})

app.get('/api/rank/:rank', (req, res) => {
    const rank = Number(req.params.rank);
    let target = {};
    for(let player in players) {
        if(players[player].rank === rank) {
            target = players[player];
        }
    }
    if(Object.keys(target).length === 0) { 
        res.json(players['unknown']);
    }
    else {
        res.json(target);
    }
});

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})