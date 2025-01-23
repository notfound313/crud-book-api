const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const { sequelize } = require('./config/db');

const app = express();
const port = process.env.PORT

app.use(bodyParser.json());
app.use('/api/books', bookRoutes);

sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
});