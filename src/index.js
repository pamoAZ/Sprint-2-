const express = require('express');
const morgan = require('morgan')
const path = require('path');
const app = express();
const { mongoose } = require('./databe');
// configuracion
app.set('port', process.env.PORT || 3000);


// middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/tasks', require('./routes/task.router'));
//static files

app.use(express.static(path.join(__dirname, 'public')));
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});