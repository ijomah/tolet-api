const db = require("../db/db-connect");


const getHouse = async (req, res) => {
    // console.log('db', db);
    let result
    try {
        await db.transaction (async (trx) => {
            result = await trx('auths').select();
            console.log('res', result)
        })
    }
    catch(error){ 
        console.log('err from get', error)
    }
    res.send(`Here is it from api, get ${result}`);
}

const postHouse = async (req, res) => {
    let idInsert
    try {
        await db.transaction (async (trx) => {
            idInsert = await trx('auths').insert(
                {
                    id: 4,
                    email: 'esta@gmail.com',
                    hash: '123456789'
                }, 
                'id'
            )
        })
    }
    catch(error) {
        console.log('err from post', error)
    }
    console.log('idInsert', idInsert)
    res.send(`Post, created with this id ${idInsert[0].id}`);
}

const patchHouse = (req, res) => {
    res.send('patched it');
}

const deleteHouse = (req, res) => {
    res.send('deleted it');
}

module.exports =  {getHouse, postHouse, patchHouse, deleteHouse};