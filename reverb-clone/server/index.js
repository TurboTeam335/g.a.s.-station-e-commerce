const express = require('express');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');  
const orderRoutes = require('./routes/orderRoutes');  
const orderItemRoutes = require('./routes/orderItemRoutes');  
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/database');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// API Routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);  
app.use('/orders', orderRoutes);  
app.use('/orders/:orderId/items', orderItemRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});
