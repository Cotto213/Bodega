const measureModel = require('../models/measure.model');
const companyModel  = require('../models/company.model');
const { copy } = require('../routes/saleorderinvoice.routes');

async function addMeasure(req, res) {
    try {
        // Espera a que se resuelva la promesa y obtén el usuario con Company: "ucontrol"
        const company = await companyModel.findOne({ Company: "ucontrol" });

        if (!user) {
            // Si no se encuentra el usuario, devuelve un error
            return res.status(404).send({ message: "User not found with Company: ucontrol" });
        }

        const { Name, Description } = req.body;

        // Crea el objeto de medida con el ID del usuario encontrado
        const newMeasure = new measureModel({
            Name: Name,
            Description: Description,
            Company: company._id
        });

        // Guarda la nueva medida en la base de datos
        await newMeasure.save();

        console.log("Measure added successfully");

        return res.status(200).send({ message: "Measure added successfully", measure: newMeasure });
    } catch (error) {
        console.error("Error adding measure:", error);
        return res.status(500).send({ message: "Internal Server Error" });
    }
}

module.exports = {
    addMeasure
};
