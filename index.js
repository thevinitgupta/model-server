const express = require('express');
const path = require('path');

const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;

app.get('/model', function(req,res){
    const dataJsonUrl = process.env.DATA_JSON_URL;
  if (dataJsonUrl) {
    res.redirect(dataJsonUrl);
  } else {
    res.status(500).send('DATA_JSON_URL environment variable not set.');
  }
})

app.get('/', function(req,res){
    res.json({
        message : 'Hello',
        status : 200
    })
});
app.listen(
    port, 
    function(){
        console.log('Model Server Listening on port '+port);
    }
)