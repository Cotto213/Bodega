const saleorderinvoiceModel = require('../models/saleorderinvoice.model');
const usersModel = require('../models/users.model');
const companyModel  = require('../models/company.model');
const productsModel = require('../models/products.model');

async function addSaleOrderInvoice(req, res) {
    const { total, CreationDate, State, product_alfonso} = req.body;
    const company = await companyModel.findOne({Company: "ucontrol"});
    const user = await usersModel.findOne({username: "cotto"});
    const productId = await productsModel.findOne({_id:product_alfonso});

    // Check if there's already an invoice with a CodInvoice of null
    try{
        const newInvoice = new saleorderinvoiceModel({
            total: total,
            Company: company._id,
            CreationDate: CreationDate,
            User: user._id,
            State: State,
            product_alfonso: productId._id // Make sure you have a valid productId
        });
        
        const result = await newInvoice.save();
        console.log("Invoice added successfully", result);
        return res.status(200).send(result);
    } catch(error){
        console.error("Error adding invoice:", error); 
        return res.status(500).send({message: "Internal Server Error"});
    }

}
module.exports = { addSaleOrderInvoice };