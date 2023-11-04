const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

const saleOrderInvoiceSchema = Schema({
    CodInvoice: {type: Number, required: true, default: 1, unique: true},
    total: {type: Number, required: true},
    Company: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    CreationDate: {type: Date, required: true},
    User: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    State: {type: String, required: true},
    product_alfonso: {
        type: Schema.Types.ObjectId,
        ref: "products_alfonso",
        required: true
    }
});

saleOrderInvoiceSchema.plugin(autoIncrement.plugin, { model: 'SaleOrderInvoice', field: 'CodInvoice', startAt: 1 });
module.exports = mongoose.model('saleorderinvoice_Alfonso', saleOrderInvoiceSchema);