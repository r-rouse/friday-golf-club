const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const AppRouter = require('./routes/AppRouter');

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', AppRouter)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.join(`${__dirname}/client/build/index.html`))
    })
}
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));