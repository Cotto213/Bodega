const measureModel = require('../models/measure.model');
const usersModel = require('../models/users.model');
const productsModel = require('../models/products.model');

async function addProducts(req, res) {
    const {product_Name, BuyPrice, Active, Inventariable} = req.body;   

try{

const user = await usersModel.findOne({Company: "ucontrol"});

if(!user){
    return res.status(404).send({message: "User not found with Company: ucontrol"});

}

const measure = await measureModel.findOne({Name: "Lb"});

if(!measure){

    return res.status(404).send({message: "Measure not found with Name: " + Name}); 
    
}

console.log("Request body:", req.body);
const newProducts = new productsModel({

product_Name:product_Name,
Company: user._id,
BuyPrice: BuyPrice,
Active: Active,
Inventariable: Inventariable,
measure_alfonso: measure._id

});

await newProducts.save();
console.log("Products added successfully");

return res.status(200).send({message: "Products added successfully", products: newProducts});   

}catch(error){
    console.error("Error adding products:", error); 
    return res.status(500).send({message: "Internal Server Error"});

}
}

module.exports = {
    addProducts
};