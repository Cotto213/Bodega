const saleorderinvoiceModel = require('../models/saleorderinvoice.model');
const usersModel = require('../models/users.model');
const companyModel  = require('../models/company.model');
const { use } = require('../routes/saleorderinvoice.routes');

async function addSaleOrderInvoice(req, res) {
    const {CodInvoice, total, CreationDate, State} = req.body;
    const company = await companyModel.findOne({Company: "ucontrol"});
    const user = await usersModel.findOne({username: "cotto"});

    try{ 
        const newInvoice = new saleorderinvoiceModel({
            CodInvoice: CodInvoice,
            total: total,
            Company: company._id,
            CreationDate: CreationDate,
            User: user._id,
            State: State
        });

        const result = await saleorderinvoiceModel.insertMany([newInvoice]);
        console.log("Invoice added successfully", result);
        return res.status(200).send(result);
    } catch(error){
        console.error("Error adding invoice:", error); 
        return res.status(500).send({message: "Internal Server Error"});
    }
}

module.exports = { addSaleOrderInvoice };