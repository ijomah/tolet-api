
const getTenant = (req, res) => {
    res.send('Here is it from api, get');
}

const postTenant = (req, res) => {
    res.send('Post, created');
}

const patchTenant = (req, res) => {
    res.send('patched it');
}

const deleteTenant = (req, res) => {
    res.send('deleted it');
}

module.exports =  {getTenant, postTenant, patchTenant, deleteTenant};