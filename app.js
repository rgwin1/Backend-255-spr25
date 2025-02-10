

//A: 
//set.. this is similar to when we use our default tags in html
const express = require('express'); //name of the express module can be used to do express things
//cors is required in order to host a front end and backend on the same device
var cors = require('cors')
//activate or tell this app variable to be an express server
const app = express(); //an activated express server. can you the express app functionality
app.use(cors({ origin: '*'}))
app.use(express.json());
const router = express.Router();

router.get('/songs', function(req, res){
    const songs = [{
        title: "We Found Love",
        artist: 'Rihanna',
        popularity: 10,
        genre: ['funk', 'boogie']
    },
    {
        title: "Happy",
        artist: "Pharrell Williams",
        popularity: 10,
        genre: ['soul', 'new soul']
    }]

    //send this object to the frond end converting it to JSON
    res.json(songs) //turns song into a json object and sends it
});

//all requests that usually use an api start with /api... so the url would be localhost:3000/api/songs
app.use('/api', router);
app.listen(3000);

//C


//left off at time: 