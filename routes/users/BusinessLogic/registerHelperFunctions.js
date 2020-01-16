const bcrypt = require('bcryptjs');
import { DBINSTANCE } from '../../../lib/mongoConnect';

async function Register(UsersCollection,UserName,Password) {

    const col = DBINSTANCE.collection(UsersCollection);

    // Make sure usernames are unique
    // only needs to run once will think of a better way to do this
    col.createIndex({ "UserName": 1 }, { unique: true });

    try{
        const response = await col.insertOne({
        UserName,     
        Password: bcrypt.hashSync(Password), // hash the password on the way in
        });
        
        return response
    }catch(err){
        throw "User Exists"    
    } 
};

export{
    Register
}