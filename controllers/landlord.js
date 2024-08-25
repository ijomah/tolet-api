
const getLandlord = (req, res) => {
    res.send('Here is it from api, get');
}

const postLandlord = (req, res) => {
    res.send('Post, created');
}

const patchLandlord = (req, res) => {
    res.send('patched it');
}

const deleteLandlord = (req, res) => {
    res.send('deleted it');
}

module.exports =  {getLandlord, postLandlord, patchLandlord, deleteLandlord};