const measureModel = require('../models/measure.model');
const companyModel = require('../models/company.model');
const productsModel = require('../models/products.model');
const inventoryModel = require('../models/inventory.model');
const bodegaModel = require('../models/bodega.model');

async function addProducts(req, res) {
    const {product_Name, BuyPrice, Active, Inventariable} = req.body;   
    const company = await companyModel.findOne({Company: "ucontrol"});
    try{
        if(!company){
            return res.status(404).send({message: "Company not found with Company: ucontrol"});
        }

        const measure = await measureModel.findOne({Name: "Kg"});
        if(!measure){
            return res.status(404).send({message: "Measure not found with Name: " + Name}); 
        }

        console.log("Request body:", req.body);
        if(typeof Active !== "boolean"){
            return res.status(400).send({message: "Active field must be a boolean value"});
        }

        const newProducts = new productsModel({
            product_Name:product_Name,
            Company: company._id,
            BuyPrice: BuyPrice,
            Active: Active,
            Inventariable: Inventariable,
            measure_alfonso: measure._id
        });

        await newProducts.save();

          
        const principal = await bodegaModel.findOne({bodegaName: "Principal"}); 
        const reserva = await bodegaModel.findOne({bodegaName: "Reserva"}); 

        const inventory1 = await createInventory(newProducts._id, company._id, 100, principal._id);
        const inventory2 = await createInventory(newProducts._id, company._id, 0, reserva._id);

        console.log("Products added successfully");
        return res.status(200).send({message: "Products added successfully", products: newProducts})
    }catch(error){
        console.error("Error adding products:", error); 
        return res.status(500).send({message: "Internal Server Error"});
    }


    async function createInventory(products,Company, Stock, bodega){
        const newInventory = new inventoryModel({
            Company: Company,
            products_Alfonso: products,
            Stock: Stock,
            bodega_Alfonso: bodega
        });

        await newInventory.save();
        return newInventory;
    }
}


module.exports = {
    addProducts
};