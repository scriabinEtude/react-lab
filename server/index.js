const express = require('express')
const app = express()
const port = 3030
const bodyParser = require("body-parser")
const cors = require('cors')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//CORS
const whiteList = ['http://localhost:3000',]
app.use(
  cors({
    origin : function (origin, callback){
      if (whiteList.indexOf(origin) !== -1){
        callback(null, true)
      }else{
        callback(new Error("Not allowed by CORS"))
      }
    }
  }),
);
app.options('*', cors())

//동작 확인
app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/exit', () => {
    process.exit() 
})

//auth
app.post('/auth/login', (req, res) => {
    const { name } = req.body
    res.send(
        makeResponse({data: {name}})
    )
})

app.listen(port, ()=> console.log(`port: ${port}`))

function makeResponse({data, resultCode, resultMessage}){
    return {
        data,
        resultCode: resultCode || 0,
        resultMessage : resultMessage || '',
    }
}