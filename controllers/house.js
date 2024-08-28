const db = require("../db/db-connect");


const getHouse = async (req, res) => {
    
    // console.log('db', db);
    let result
    try {
        await db.transaction (async (trx) => {
            result = await trx('houses')
            .join('addresses', 'houses.id', '=', 'addresses.id')
            .join('property_types', 'houses.id', '=', 'property_types.id')
            .join('prices', 'houses.id', '=', 'prices.id')
            .select('name', 'quarter', 'type', 'currency')
            // .as('propertyName', 'propertyAddress', 'propertyType', 'propertyPrice');
            console.log('res', result)
        })
    }
    catch(error){ 
        console.log('err from get', error)
    }
    res.send(`Here is it from api, get ${JSON.stringify(result)}`);
}


const postHouse = async (req, res) => {
    const {
        propertyName, 
        propertyType, 
        propertyAddress, 
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
                    id: pptId[0].id,
                    name: propertyName,
                    ppt_type_id: pptId[0].id,
                }, 
                'id'
            );

            

            await trx('addresses').insert({
                id: houseId[0].id,
                quarter: propertyAddress 
            })

            await trx('prices').insert({
                id: houseId[0].id,
                currency: propertyPrice
            })
            
        })
    }
    catch(error) {
        console.log('err from post', error)
    }
    // console.log('idInsert', idInsert)
    res.send(`Property created with this id`);
}

const patchHouse = (req, res) => {
    res.send('patched it');
}

const deleteHouse = (req, res) => {
    res.send('deleted it');
}

module.exports =  {getHouse, postHouse, patchHouse, deleteHouse};