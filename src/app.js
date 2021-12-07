// create an express app
const path  =  require("path")
const express = require("express")
const app = express()
const router = express.Router();

// use the express-static middleware
app.use(express.static("public"))

const staticPath  =path.join(__dirname,'/index.html');
console.log(staticPath);
app.use(express.static('staticPath'))
router.get('/',function(req,res){
    res.send("hi");
});

app.use('/', router);
// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));