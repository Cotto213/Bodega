const usersModel = require ( "../models/users.model");

async function addUsers(req, res) {

    const {username, password, Company} = req.body;

const user = new usersModel ({  
        username:username,
        password:password,
        Company:Company  
    })

      const result = await usersModel.insertMany(user);

      console.log(result);

      return res.status(200).send({message:"User added successfully", user: result }); 

}
module.exports = { addUsers };