const path = require('path');
const express = require('express');
// const hbs = require('hbs');
const app =express();

const port = process.env.PORT || 8000;
const staticPath = __dirname;
const logoPath = path.join(__dirname,'/logo.jpg');

app.set('view engine','hbs');

app.get('',(req,res)=>{
    res.render('home');
});
app.use(express.static(staticPath));


app.listen(port,()=>{
    console.log(`Server is listening at Port : ${port}`);
});