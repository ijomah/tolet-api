// const { password } = require('pg/lib/defaults');
const db = require('../db/db-connect')

const getLogin = async (req, res) => {

    let result
    try {
        await db.transaction (async (trx) => {
            result = await trx('auths').select();
            // console.log('res', result)
        })
    }
    catch(error){ 
        console.log('err from get', error)
    }
    res.send(`Here is it from api, get ${result}`);
}


const postLogin = async (req, res) => {
    let { id, email, password} = req.body
    // console.log(req.body)
    // let i = 0;
    if (!email || !password) {
        return res.send('Please provide email and password!')
        // throw new BadRequestError('Please provide email and password');
      }
      if (!email || password) {
        return res.send('Please provide email')
      }
    if (email || !password) {
        return res.send('Please provide password')
      }
    if (email || password || id) {
        let result
    try {
        await db.transaction (async (trx) => {
            result = await trx('auths').select().where({id: id, email: email, hash: password});
            if (result != null && result != undefined) {
                return res.send('true');
            } else {
                return res.send('false');
            }
        })
    }
    catch(error){ 
        console.log('err from get', error)
    }
    res.send(`Here is it from api, get ${result}`);
    // res.send('Here is it from api, get');
}
}

const patchLogin = (req, res) => {
    res.send('patched it');
}

const deleteLogin = (req, res) => {
    res.send('deleted it');
}

module.exports =  {getLogin, postLogin, patchLogin, deleteLogin};