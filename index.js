var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var cors = require('cors');
var port = 8000 || env.port
// router.use('');


var corsOptions = {
    origin: ['http://192.168.137.1:5500', 'http://127.0.0.1:3000/', 'https://tolet-73ml.onrender.com', '*'],
    optionsSuccessStatus: 204, // some legacy browsers (IE11, various SmartTVs) choke on 204
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
  }

app.use(cors(corsOptions))
app.use(express.json());
// app.use(bodyParser)
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true,
}));

//https://tolet-73ml.onrender.com
//router
const registerRouter = require('./routes/register')
const loginRouter = require('./routes/login')
const landlordRouter = require('./routes/landlord')
const houseRouter = require('./routes/house');
const tenantRouter = require('./routes/tenant');

//routes
app.use('/api/v1/register', registerRouter)
app.use('/api/v1/login', loginRouter)
app.use('/api/v1/houses', houseRouter)
app.use('/api/v1/landlords', landlordRouter)
app.use('/api/v1/tenants', tenantRouter)

app.listen(port, () => console.log(`Server listening on port ${port} `));

