const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    const name1 = 'Muck'
    const friends = ['Linh', 'Nghia', 'Hanh']
    res.render('index', {name: name1, friends: friends})
});

app.post('/profile', (req, res)=>{
    const hehe = req.body.name;
    console.log(hehe);
    res.render('profile' , {name: hehe});
});
app.get('/profile', (req, res)=>{
    const hehe = req.query.name;
    console.log(hehe);
    res.render('profile' , {name: hehe});
});
app.get('/test', (req, res)=>{
    res.render('test')
});


app.listen(port, ()=> console.log(`Listening on port ${port}`));
