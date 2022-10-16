//Importing Express Library.
const express = require("express")
//Saving an express obj. in a var.
const app = express()
//A var. to hold the port num.
const port  = 3000

app.set('view engine', 'ejs')

//setting the listening on port 3000
app.listen(3000, () => {
    console.log("Ibtsam!!! What are you doing?!")
})