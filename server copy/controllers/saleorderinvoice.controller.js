const saleorderinvoiceModel = require('../models/saleorderinvoice.model');
const usersModel = require('../models/users.model');
const companyModel  = require('../models/company.model');
const productsModel = require('../models/products.model');

const inventoryModel = require('../models/inventory.model'); // Asegúrate de importar tu modelo de inventario

async function addSaleOrderInvoice(req, res) {
    const principalBodegaId = "653acf46c51bf6aab793aad6";
const reservaBodegaId = "6545fbde83041ec6d234c84d";
    const { total, CreationDate, State, product_alfonso, quantity } = req.body;
    const company = await companyModel.findOne({ Company: "ucontrol" });
    const user = await usersModel.findOne({ username: "cotto" });
    const productId = await productsModel.findOne({ _id: product_alfonso });

    const inventoryPrincipal = await inventoryModel.findOne({ products_Alfonso: productId._id, bodega_Alfonso: principalBodegaId });
    const inventoryReserva = await inventoryModel.findOne({ products_Alfonso: productId._id, bodega_Alfonso: reservaBodegaId });

// Verifica si hay suficiente stock en la bodega Principal


// Verifica si hay suficiente stock en la bodega Principal
if (inventoryPrincipal.Stock < quantity) {
    return res.status(400).send({ message: "Not enough stock in Principal" });
}

// Resta la cantidad del stock en la bodega Principal
inventoryPrincipal.Stock = Number(inventoryPrincipal.Stock) - Number(quantity);
await inventoryPrincipal.save();

// Suma la cantidad al stock en la bodega Reserva
inventoryReserva.Stock = Number(inventoryReserva.Stock) + Number(quantity);
await inventoryReserva.save();


    try {
        const newInvoice = new saleorderinvoiceModel({
            total: total,
            Company: company._id,
            CreationDate: CreationDate,
            User: user._id,
            State: State,
            product_alfonso: productId._id
        });

        const result = await newInvoice.save();
        console.log("Invoice added successfully", result);
        return res.status(200).send(result);
    } catch (error) {
        console.error("Error adding invoice:", error);
        return res.status(500).send({ message: "Internal Server Error" });
    }
}

module.exports = {
    addSaleOrderInvoice
};
