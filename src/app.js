const express = require('express');
const path = require('path')
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Routes
app.use('/', require('./routes/app.routes'));

//Static Files
app.use(express.static(path.join(__dirname, '../')));
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'), err => {
        if(err){
            res.status(500).send(err);
        }
    })
})

//Port listening
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});