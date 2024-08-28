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
    const {
        propertyName, 
        propertyType, 
        propertyAdress, 
        propertyPrice
    } = req.body;
    try {
        await db.transaction (async (trx) => {
            const pptId = await trx('property_types').insert(
                {
                    type: propertyType
                },
                'id'
            );
            
            const houseId = await trx('houses').insert(
                {
                    id: pptId,
                    name: propertyName,
                    ppt_type_id: pptId
                }, 
                'id'
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