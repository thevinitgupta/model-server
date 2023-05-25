const express = require('express');
const path = require('path');

const app = express();
require('dotenv').config()
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

app.get('/model', function(req,res){
    return res.sendFile('https://raw.githubusercontent.com/thevinitgupta/model-server/main/asset/model.json');
})
app.listen(
    port, 
    function(){
        console.log('Model Server Listening on port '+port);
    }
)