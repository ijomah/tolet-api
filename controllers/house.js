const db = require("../db/db-connect");


const getHouse = async (req, res) => {
    const {
        propertyName, 
        propertyType, 
        propertyAdress, 
        propertyPrice
    } = req.body;
    // console.log('db', db);
    let result
    try {
        await db.transaction (async (trx) => {
            result = await trx('houses').select();
            // console.log('res', result)
        })
    }
    catch(error){ 
        console.log('err from get', error)
    }
    res.send(`Here is it from api, get ${result}`);
}

const postHouse = async (req, res) => {
    try {
        await db.transaction (async (trx) => {
            const houseId = await trx('houses').insert(
                {
                    id: Math.random(3) + Math.random(7),
                    name: propertyName,
                }, 
                'id'
            );

            await trx('property_types').insert(
                {
                    id: houseId,
                    type: propertyType
                }
            );

            await trx('addresses').insert({
                id: houseId,
                quarter: propertyAdress 
            })

            await trx('price').insert({
                id: houseId,
                currency: propertyPrice
            })
            
        })
    }
    catch(error) {
        console.log('err from post', error)
    }
    // console.log('idInsert', idInsert)
    res.send(`Property created with this id ${houseId[0].id}`);
}

const patchHouse = (req, res) => {
    res.send('patched it');
}

const deleteHouse = (req, res) => {
    res.send('deleted it');
}

module.exports =  {getHouse, postHouse, patchHouse, deleteHouse};