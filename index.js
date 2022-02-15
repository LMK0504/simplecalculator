var express = require('express')
var app = express()

app.get("/", (req,res)=> {
    res.send("Hello Calcul")
})

app.listen(8888)

//https://gongbu-ing.tistory.com/26

app.get('/add', function (req, res) {
    var n1 = req.param('n1');
    var n2 = req.param('n2');
    var result = parseInt(n1) + parseInt(n2)
    
    
    res.send("덧셈 값:" +result)
 });

 app.get('/minus', function (req, res) {
    var n1 = req.param('n1');
    var n2 = req.param('n2');
    var result = parseInt(n1) - parseInt(n2)
    
    
    res.send("뺄셈 값:" +result)
 });

 app.get('/multiple', function (req, res) {
    var n1 = req.param('n1');
    var n2 = req.param('n2');
    var result = parseInt(n1) * parseInt(n2)
    
    
    res.send("곱셈 값:" +result)
 });

 app.get('/division', function (req, res) {
    var n1 = req.param('n1');
    var n2 = req.param('n2');
    var result1 = parseInt(n1) / parseInt(n2)
    var result2 = parseInt(n1) % parseInt(n2)

    if (n2===0)
        res.send("0으로 나눌수 없습니다.")
 
    res.send("몫:" +parseInt(result1)+"  나머지:" +result2)
    
 });
