const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'ZEYNEP 20 YAŞINDA! 🎉',
        birthdayPerson: 'ZEYNEP',
        age: 20
    });
});

app.listen(port, () => {
    console.log(`Zeynep'in doğum günü sitesi çalışıyor: http://localhost:${port}`);
});
