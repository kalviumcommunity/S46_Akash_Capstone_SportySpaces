const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const playgroundRoutes = require('./routes/playgroundRoutes');
const bodyParser = require('body-parser');

dotenv.config();

connectDB();

const app = express();

app.use(bodyParser.json());

app.use('/api/playgrounds', playgroundRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
