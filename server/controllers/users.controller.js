const usersModel = require ( "../models/users.model");

async function addUsers(req, res) {

    const {username, password, Company} = req.body;

const sendData=[{  
        username:username,
        password:password,
        Company:Company  
    }]

      const result = await usersModel.insertMany(sendData);

      console.log(result);

      return res.status(200).send({message:"User added successfully"}, result[0]); 

}
module.exports = { addUsers };