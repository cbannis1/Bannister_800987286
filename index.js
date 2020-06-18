var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('views', './views');
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
   res.render('index');
});
app.get("/", (req, res) => {
    res.render('post');
 });

 app.listen(7000, () => {
    console.log('Server listing on 3000');
})