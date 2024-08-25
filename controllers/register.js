const db = require('../db/db-connect');

const postRegister = async (req, res) => {
    let { id, email, password } = req.body;
    // console.log(req.body)
    // let i = 0;
    let postId
    if (!email && !password) {
        return res.send('Please provide email and password !');
        // throw new BadRequestError('Please provide email and password');
      }
      if (!email && password) {
        return res.send( 'Please provide email!!');
      }
    if (email && !password) {
        return res.send('Please provide password');
      }
    if (email || password) {
        try {
            await db.transaction(async (trx) => {
                postId = await trx('auths').insert({
                    id: id++,
                    email: email,
                    hash: password
                }, 'id')
            })
        }
        catch (error) {
            console.log('err from login', error)
        }
        return res.send(`Post, created with id ${postId[0].id}`)
    }    

    
//    res.send(req.body)
}

module.exports = {postRegister}