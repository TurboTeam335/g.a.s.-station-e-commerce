require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');  
const orderRoutes = require('./routes/orderRoutes');  
const orderItemRoutes = require('./routes/orderItemRoutes');  
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/database');

const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = new AWS.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'gassationmusicshop',
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
});

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-2' 
});

app.post('/upload', upload.single('photo'), (req, res) => {
  res.json({ success: true, url: req.file.location });
});

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
