const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/users', usersRoutes);
app.use('/auth', authRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('listening on port', port));
