const express = require('express');
const path = require('path');

const app = express();
require('dotenv').config()
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

app.get('/model', function(req,res){
    const filePath = path.join(__dirname, 'asset/model.json');
    return res.sendFile(filePath);
})
app.listen(
    port, 
    function(){
        console.log('Model Server Listening on port '+port);
    }
)