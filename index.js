//============================================= class 1-3 =======================================================
// const express = require('express');
// const app = express()
// const port = 5000;

// const users = [
//     {id : 0,name:"bipul chandro roy",age:26},
//     {id : 1,name:"sagar chandro roy",age:23},
//     {id : 2,name:"sujon chandro roy",age:25},
//     {id : 3,name:"mithun chandro roy",age:23},
//     {id : 4,name:"uttam chandro roy",age:25}
// ]

// app.get('/users',(req,res)=>{
//     res.send(users)
// })

// // dynamically showing object by id 
// app.get('/users/:id',(req,res)=>{
//     const id = req.params.id;
//     const user = users[id]
//     res.send(user)
// })

// app.listen(port,()=>{
//     console.log('listening the port',port)
// })

//============================================= class 1-3 =======================================================











//=================================================== class 4 =========================================================
// const express = require('express');
// const app = express()
// const port = 5000;

// const users = [
//     {id : 0,name:"bipul chandro roy",age:26},
//     {id : 1,name:"sagar chandro roy",age:23},
//     {id : 2,name:"sujon chandro roy",age:25},
//     {id : 3,name:"mithun chandro roy",age:23},
//     {id : 4,name:"uttam chandro roy",age:25}
// ]

// app.get('/users',(req,res)=>{
//     res.send(users)
// })


// // dynamically showing object by id 
// app.get('/users/:id',(req,res)=>{
//     const id = req.params.id;
//     const user = users[id]
//     res.send(user)
// })

// // another dynamic route 
// app.get('/fruits/mangoes/gopal',(req,res)=>{
//     res.send('joss am mama')
// })


// app.listen(port,()=>{
//     console.log('listening the port',port)
// })
//=================================================== class 4 =========================================================







//=================================================== class 5 =========================================================
// const express = require('express');
// const app = express()
// const port = 5000;

// const users = [
//     {id : 0,name:"bipul chandro roy",age:26},
//     {id : 1,name:"sagar chandro roy",age:23},
//     {id : 2,name:"sujon chandro roy",age:25},
//     {id : 3,name:"mithun chandro roy",age:23},
//     {id : 4,name:"uttam chandro roy",age:25}
// ]


// query parameter 
// app.get('/users',(req,res)=>{
//     const search = req.query.search
//     if (search) {
//         const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
//         res.send(searchResult)
//     }else{
//         console.log(search)
//         res.send(users)
//     }
// })


// // dynamically API showing object by id 
// app.get('/users/:id',(req,res)=>{
//     const id = req.params.id;
//     const user = users[id]
//     res.send(user)
// })

// // another dynamic route 
// app.get('/fruits/mangoes/gopal',(req,res)=>{
//     res.send('joss am mama')
// })


// app.listen(port,()=>{
//     console.log('listening the port',port)
// })
//=================================================== class 5 =========================================================







//=================================================== class 6 =========================================================
// const express = require('express');
// const cors = require('cors')
// const app = express()
// app.use(cors())

// const port = 5000;

// const users = [
//     {id : 0,name:"bipul chandro roy",age:26},
//     {id : 1,name:"sagar chandro roy",age:23},
//     {id : 2,name:"sujon chandro roy",age:25},
//     {id : 3,name:"mithun chandro roy",age:23},
//     {id : 4,name:"uttam chandro roy",age:25}
// ]


// // query parameter 
// app.get('/users',(req,res)=>{
//     const search = req.query.search
//     if (search) {
//         const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
//         res.send(searchResult)
//     }else{
//         console.log(search)
//         res.send(users)
//     }
// })


// // dynamically API showing object by id 
// app.get('/users/:id',(req,res)=>{
//     const id = req.params.id;
//     const user = users[id]
//     res.send(user)
// })

// // another dynamic route 
// app.get('/fruits/mangoes/gopal',(req,res)=>{
//     res.send('joss am mama')
// })


// app.listen(port,()=>{
//     console.log('listening the port',port)
// })
//=================================================== class 6 =========================================================








//=================================================== class 7 =========================================================
const express = require('express');
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const port = 5000;

const users = [
    {id : 0,name:"bipul chandro roy",age:26},
    {id : 1,name:"sagar chandro roy",age:23},
    {id : 2,name:"sujon chandro roy",age:25},
    {id : 3,name:"mithun chandro roy",age:23},
    {id : 4,name:"uttam chandro roy",age:25}
]


// query parameter 
app.get('/users',(req,res)=>{
    const search = req.query.search
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }else{
        console.log(search)
        res.send(users)
    }
})

// post data 
app.post('/users',(req,res)=>{
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)
    res.json(newUser)
    console.log('hitting the post',req.body)
    // res.send('post hitted')
})

// dynamically API showing object by id 
app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

// another dynamic route 
app.get('/fruits/mangoes/gopal',(req,res)=>{
    res.send('joss am mama')
})


app.listen(port,()=>{
    console.log('listening the port',port)
})
//=================================================== class 7 =========================================================