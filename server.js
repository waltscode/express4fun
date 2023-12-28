const express = require('express')
const app = express()

// telling express to grab everything inside the public folder - in this case index.html
// i'm making another folder within public - it's gonna grab that also. for redirecting - load up the page - GRAB THE PUBLIC FOLDER - tell it to go to host:3000/test - IT WILL THEN REDIRECT TO THE TEST FOLDER
// http://localhost:3000/test/test123.html
app.use(express.static("public"))

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')


// GET RID OF THIS SO WE CAN CREATE STATIC HTML INSTEAD OF THE EJS TEXT WE HAD BEFORE
// app.get('/', (req, res) => {
//     console.log('request sent yo')
// //    res.status(200).send('everything looks good')
// //     res.send('sup fam')
// // res.json({ hockey: "what's poppin"})
// res.render('index', {text: 'This is generated from the server'})

// })

// grabbing our users router
const userRouter = require('./routes/users')

// passes the /users http route onto our userRouter object 
app.use('/users', userRouter)



app.listen(3000)


// this is database notes from the class

// app.get('/', (req, res) => {
//     //HERE IS WHERE WE WOULD CONNECT TO THE DATABASE
//     db.query('SELECT * FROM students', function (err, results) {
//       if (err) {
//         return res.status(500).json({ message: 'Internal Server Error' })
//       }
//       return res.json(results);
//     });
//   })
  
//   app.post('/', (req, res) => {
//     db.query('INSERT INTO students (first_name, last_name, enrolled) VALUES ("JOHN", "WALTERS", true);', function (err, result) {
//       if (err) {
//         return res.status(500).json({ message: 'Internal Server Error', err })
//       }
//       return res.status(200).json({ message: 'Success' })
//     })
//   })


// this is how you can enter in customer info into the database - example a login page 

// app.post('/', (req, res) => {
//     db.query('INSERT INTO students (first_name, last_name, enrolled) VALUES (?, ?, ?);', 
//     [req.body.first_name, req.body.last_name, req.body.enrolled], function (err, result) {
//       if (err) {
//         return res.status(500).json({ message: 'Internal Server Error', err })
//       }
//       return res.status(200).json({ message: 'Success' })
//     })
//   })

console.log("yo fam")