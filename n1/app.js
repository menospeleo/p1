console.log('sever is running');
const express = require('express')

const bodyParser = require('body-parser')

const app = express();
app.use(express.static('img'))
app.use(bodyParser.urlencoded({extended: true}));

// const path = require('path')
//
// const multer = require('multer')
// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null, "Images")
//     },
//     filename:(req,file,cb)=>{
//         console.log(file)
//         cb(null, Date.now()+path.extname(file.originalname))
//     }
// })
// const upload = multer({storage:storage})

app.set('view engine','ejs')

// app.get('/upload',(req,res)=>{
// res.render('upload')
// })

    app.get('/',(req,res)=>{
        res.render('home')
        })
// app.post('/upload',upload.single('image'),(req,res)=>{
//     res.send('image uploaded')
// })
app.post('/en',(req,res)=>{
    let f9= req.body.num
    let f10= req.body.tex+"Hi daddy"
    let f11 = f9*2.3

    res.render('re',{f9,f10,f11})
})
app.get('*',(req,res)=>{
    res.send('ah ah you check for nothing')
    })
app.listen(3000)