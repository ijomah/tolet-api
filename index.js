var express = require('express');
var app = express()
var cors = require('cors');
var port = 8000 || env.port
// router.use('');


var corsOptions = {
    origin: false,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions))
app.use(express.json());


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

