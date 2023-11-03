const measureModel = require('../models/measure.model');
const companyModel = require('../models/company.model');
const productsModel = require('../models/products.model');
const inventoryModel = require('../models/inventory.model');
const bodegaModel = require('../models/bodega.model');
const Company = require('../models/company.model');
async function getInventory(req, res) {
    try {
        // Obtén el ID de la bodega principal desde la base de datos
        const foundBodega = await bodegaModel.findOne({ bodegaName: 'Principal' });

        // Encuentra todos los productos que pertenecen a la bodega principal
        const listInventory = await inventoryModel.find({ Bodega: foundBodega._id }, ["Stock", "products_Alfonso"]);

        // Envia los datos de inventario encontrados como respuesta
        res.status(200).send(listInventory);
    } catch (error) {
        console.error("Error retrieving inventory data:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}

module.exports = {
getInventory
}