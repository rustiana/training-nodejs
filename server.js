const express = require("express")
const cors = require("cors")

const app = express()

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

const db = require("./app/models")
const Role = db.role

db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync Db');
    initial();
});

//for production: just insert these rows manually and use sync() without parameters to avoid dropping data
//db.sequelize.sync();

app.get("/", (req, res) =>{
    res.json({message: "Wellcome Denrus"})
})

require('./app/routes/auth.route')(app)
require('./app/routes/user.route')(app)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
}