// jwt downlod 
//  npm i jsonwebtoken bcrypt


// jo ham is tutorial mein sikhenge
// 1: cookie ko kaise set krte hai or kaise use krte hai 
// 2: bcrypt kasie use karte hai for password encrytption and desocryption
// 3: jwt kya hai and jwt mein data ksie store karein and baahr nikaalein



// //         1: create cookie and read
// const cookieParser = require("cookie-parser")
// const express = require("express")
// const app = express()
// app.use(cookieParser())

// app.get("/", (req, res) => {
//     res.cookie("name", "harsh")
//     res.send("done")
// })

// app.get("/read", (req, res) => {
//    console.log(req.cookies)
//     res.send("read page is done")
// })

// app.listen(3000)




// //           2: bcrypt password encryptian
// const express = require("express")
// const app = express()
// const bcrypt = require('bcrypt')

// app.get("/", function(req, res) {
//     bcrypt.genSalt(10, function(err, salt) {
//       bcrypt.hash("pololololoo", salt, function(err, hash){
//         console.log(hash)
//       })
//     });
// });

// app.listen(3000)



//           bcrypt.compare() se password verify karna hai.
// const express = require("express")
// const app = express()
// const bcrypt = require('bcrypt')

// app.get("/", function(req, res){
//     bcrypt.compare("pololololoo", " $2b$10$vnZZFWzjk.H2uhbcAmgy5Or2TmscMgielW93goz/W4qgf8SfGo9W6", function(err, result) {
//     console.log(result)
// res.send("result: " + result)
// });
// })


// app.listen(3000)



// JWT
// jwt.sign() → Token banata hai
// res.cookie() → Token store karta hai
// jwt.verify() → Token check karta hai

const express = require("express")
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require("cookie-parser")

app.use(cookieParser())

app.get("/", function(req, res){
    let token = jwt.sign({email: "harsh@example.com"}, "secret")
    res.cookie("token", token)
    res.send("done")
})

app.get("/read", function(req, res){
    let data = jwt.verify(req.cookies.token, "secret")
    console.log(data)
})

app.listen(3000)