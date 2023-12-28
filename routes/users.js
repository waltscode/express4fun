const express = require('express')
const router = express.Router()

// this is just a function that is logging what the URL being requested is into the console
router.use(logger)

// we KNOW THAT /USERS = router - SO we erase /users and make '/' because it is router NOT APP
router.get('/', (req, res) => {
    res.send("User List")
})
// same thing here - /users is implied - /new = /users/new
router.get('/new', (req, res) => {
  res.render("users/new")
})

// directing the browser to http://localhost:3000/users/new ina GET request will res.render'users/new.ejs
router.post('/', (req, res) => {

    console.log(req.body.firstName)
    res.send(`created new user` )
})


// this is just a function that is logging what the URL being requested is into the console
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

// the .route is a way of chaining all the different request methods together for the :id parameter - get,post,put,delete,etc
router.route('/:id')
.get((req, res) => {
    // localhost:3000/users/1 = Get User With ID 1 - localhost:3000/users/heywood = Get User With ID heywood
    res.send(`Get User With ID ${req.params.id}`)
})
.put((req, res) => {
    // localhost:3000/users/1 = Update User With ID 1 - localhost:3000/users/heywood = Update User With ID heywood
    res.send(`Update User With ID ${req.params.id}`)
})
.delete((req, res) => {
    // localhost:3000/users/1 = Delete User With ID 1 - localhost:3000/users/heywood = Delete User With ID heywood
    res.send(`Delete User With ID ${req.params.id}`)
})

// router.get('/:id', (req, res) => {
//     // localhost:3000/users/1 = Get User With ID 1 - localhost:3000/users/heywood = Get User With ID heywood
//     res.send(`Get User With ID ${req.params.id}`)
// })

// router.put('/:id', (req, res) => {
//     // localhost:3000/users/1 = Update User With ID 1 - localhost:3000/users/heywood = Update User With ID heywood
//     res.send(`Update User With ID ${req.params.id}`)
// })

// router.delete('/:id', (req, res) => {
//     // localhost:3000/users/1 = Delete User With ID 1 - localhost:3000/users/heywood = Delete User With ID heywood
//     res.send(`Delete User With ID ${req.params.id}`)
// })


const users = [{ name: "darth"}, { name: "spongebob"}]

router.param("id", (req, res, next, id) => {
   console.log(id) 
   req.user = users[id]
   next()
})

module.exports = router