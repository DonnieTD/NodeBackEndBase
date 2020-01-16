const bcrypt = require('bcryptjs');

import { DBINSTANCE } from '../../../lib/mongoConnect';

async function Register(UsersCollection,UserName,Password) {
    const col = DBINSTANCE.collection(UsersCollection);

    try{
        const response = await col.insertOne({UserName,Password: bcrypt.hashSync(Password)});
        
        return response
    }catch(err){
        throw "User Exists"    
    } 
};

export{
    Register
}