require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const orderItemRoutes = require('./routes/orderItemRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/database');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { S3 } = require('@aws-sdk/client-s3');

const app = express();

const s3 = new S3({
  region: 'us-east-2',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'gassationmusicshop',
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

// File upload route
app.post('/upload', upload.single('photo'), (req, res) => {
  res.json({ success: true, url: req.file.location });
});

// Middleware
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
