const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());
const userRouter = require('./routes/user.routes');
const measureRouter = require('./routes/measure.routes');
const productsRouter = require('./routes/products.routes');
const bodegaRouter = require('./routes/bodega.routes'); 

const url ="mongodb+srv://Cotto213:Pa$$w0rd@inventory.hfpx6bs.mongodb.net/inventory?retryWrites=true&w=majority"


app.listen(6000, () => console.log("Server started on port 6000"));



    const connectDB =async()=>{

try{

    await mongoose.connect(url, 
        {useNewUrlParser: true, 
            useUnifiedTopology: true});

            console.log("MongoDB connected");
        }catch(err){
    console.log(err.message);
}

    }

    connectDB();

app.use('/api', userRouter);
app.use('/api', measureRouter);
app.use('/api', productsRouter);
app.use('/api', bodegaRouter);

