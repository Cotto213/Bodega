const usersModel = require ( "../models/users.model");
const Company = require ( "../models/company.model");

async function addUsers(req, res) {


    const company = await Company.findOne({ Company: "ucontrol" });
    console.log("Company found:", company);
    
    if (!company) {
        return res.status(404).send({ message: "Company not found" });
    }
    const {username, password} = req.body;

const user = new usersModel ({  
        username:username,
        password:password,
        Company:company._id
        
    })

      const result = await usersModel.insertMany(user);

      console.log(result);

      return res.status(200).send({message:"User added successfully", user: result }); 

}
module.exports = { addUsers };