const measureModel = require('../models/measure.model');
const companyModel  = require('../models/company.model');
const { copy } = require('../routes/saleorderinvoice.routes');

async function addMeasure(req, res) {
    try {
        // Espera a que se resuelva la promesa y obtén el usuario con Company: "ucontrol"
        const company = await companyModel.findOne({ Company: "ucontrol" });

        if (!company) {
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

async function getMeasure(req,res){ 

    try{

      const foundCompany = await companyModel.findOne({ Company: 'ucontrol' });

      if (!foundCompany) {1
        return res.status(404).send({ message: "Company not found with name: " + company });
    }
    const listMeasure = await measureModel.find({Company: foundCompany._id}, ['Name']);   
    console.log("List of measures:", listMeasure); // Agrega este log para verificar las medidas obtenidas
    res.status(200).send(listMeasure);
} catch (error) {
    console.error("Error retrieving measures:", error);
    res.status(500).send({ message: "Internal Server Error" });
}


}

module.exports = {
    addMeasure,
    getMeasure
};
