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
        throw { status: 500, message: error.message || error }
    }
    res.status(200).json({status: 'OK', data: result});
}


const postLogin = async (req, res) => {
    let {id, email, password} = req.body
    console.log(email)
    // let i = 0;
    if (!email || !password) {
        return res.status(400).send({status: 'FAILED', message: 'Please provide email and password!'})
        // throw new BadRequestError('Please provide email and password');
      }
      if (!email && password) {
        return res.status(400).send({status: 'FAILED', message: 'Please provide correct email'})
      }
    if (email && !password) {
        return res.status(400).send({status: 'FAILED', message: 'Please provide correct password'})
      }
    if (email && password) {
        let result
    try {
        await db.transaction (async (trx) => {
            result = await trx('auths').select().where({id, id, email: email, hash: password});
            if (result.length != 0) {
                return res.status(200).send( {status: 'OK', message: 'true'});
            } else {
                return res.status(200).send( {status: 'OK', message: 'false'});
            }
        })
    }
    catch(error){ 
        // console.log('err from get', error)
        throw { status: 500, message: error.message || error }
    }
    // res.send(`Here is it from api, get ${result}`);
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