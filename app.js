const express = require('express');
const bodyParser = require('express');
const cors = require('cors');

const routeUser = require('./routes/user-routes');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(routeUser);

app.listen(process.env.PORT || 3001);
