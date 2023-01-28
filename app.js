const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let title = "The Exotic Laskshadweep Island";

app.get('/', (req,res)=>{
    res.sendFile('C:\Users\Harsh\Desktop\Agumentik Task\index.html');
  })
app.get('/changetitle', (req,res)=>{
    res.render('change')
  })

app.listen(3000, function() {
    console.log("Server started at Port 3000");
    console.log(`http://localhost:3000`);
  });
  