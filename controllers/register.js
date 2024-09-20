const db = require('../db/db-connect');
const statusCodes = require('http-status-codes');
const reasonPhrase = require('http-status-codes');

const postRegister = async (req, res) => {    
    // console.log('now', req.body, email, password)
    // let reqData = Object.keys(req.body)
    // console.log(JSON.parse(Object.keys(req.body)[0]))
    const { email, password } = JSON.parse(Object.keys(req.body)[0]);
    // let i = 0;
    let postId
    if (!email && !password) {
        return res.status(401).send({status: 'FAILED', message: 'Please provide email and password !'});
        // throw new BadRequestError('Please provide email and password');
      }
      if (!email && password) {
        return res.status(401).send({ status: 'FAILED', message: 'Please provide email!!'});
      }
    if (email && !password) {
        return res.status(401).send({ status: 'FAILED', message: 'Please provide password'});
      }
    if (email || password) {
        // console.log('db if')
        try {
            await db.transaction(async (trx) => {
                postId = await trx('auths').insert({
                    email: email,
                    hash: password
                }, 'id')
            })
        }
        catch (error) {
            console.log('err from login', error)
            throw { status: 500, message: error.message || error }
        }
        
        // console.log('end', res)
        // return res.send(postId)
        return res.status(201).send({status: 'OK', data: postId})
        // .send(reasonPhrase.ReasonPhrases.OK)
        // .json(postId)
    }    

    
//    res.send(req.body)
}

module.exports = {postRegister}