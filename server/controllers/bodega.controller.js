const usersModel    = require('../models/users.model');
const bodegaModel   = require('../models/bodega.model');

async function addBodega(req, res){

try{

    const user = await usersModel.findOne({Company: "ucontrol"});

    if(!user){
        return res.status(404).send({message: "User not found with Company: ucontrol"});
    }

    const {bodegaName} = req.body;

    const newBodega = new bodegaModel({
        bodegaName: bodegaName,
        Company: user._id
    });

    await newBodega.save();
    console.log("Bodega added successfully");

    return res.status(200).send({message: "Bodega added successfully", bodega: newBodega});


}
 catch (error) {
    console.error("Error adding bodega:", error);
    return res.status(500).send({ message: "Internal Server Error" });
}

}

module.exports = {   
addBodega
}