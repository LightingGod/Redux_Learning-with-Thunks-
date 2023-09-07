const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const https = require('https');

const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('Public'));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ReduxLearning');

let orderSchema = new mongoose.Schema({
  items: [],
  totalAmount: Number
});

const Order = new mongoose.model('Order',orderSchema);


app.get('/',(req,res)=>{
  res.render('FrontPage');
});

app.get('/fetchdata',async (req,res)=>{
  const alldata = await Order.find({});
  res.status(201).json({body: alldata});
})

app.post('/makeorder',async (req,res)=>{
  let temporder = new Order({ 
    items: [...req.body.SelectedProducts],
    totalAmount: req.body.TotalAmount
  });

  try{  
    const tempdelete = await Order.deleteMany();
    const newtempfood = await temporder.save();
    console.log("Successfull");
    return res.status(201).json({message: "Order Placed Successfully"});
  }catch(err){
    return res.status(501).json({message: "Order Failed"});
  }
});

app.listen(8080,()=>{
  console.log("Server Has Started");
});
