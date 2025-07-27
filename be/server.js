const express = require('express');
const cors = require('cors');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const { sequelize } = require('./models');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');
const regRoutes = require('./routes/registrations');
const contactRoutes = require('./routes/contacts');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/admin', adminRoutes);
app.use('/api/login', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/registrations', regRoutes);
app.use('/api/contacts', contactRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true }).then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

const swaggerDocument = YAML.load(path.join(__dirname, 'doc', 'bundled-swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));