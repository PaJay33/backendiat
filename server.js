const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config({ path: './config/.env' });

const app = express(); // Initialisation de 'app'

// --- CORS : autoriser les frontends Vercel et localhost pour le développement ---
app.use(cors({
    origin: [
        'https://frottait.vercel.app',
        'https://adminiatek.vercel.app',
        'http://localhost:3000',
        'http://localhost:3001'
    ]
}));

app.use(express.json()); // Middleware pour parser le corps des requêtes JSON

// Connexion à MongoDB
const connectDb = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to MongoDB : ${con.connection.host}`);
    } catch (error) {
        console.log(`MongoDB error : ${error}`);
    }
};

connectDb();

// Route de test pour vérifier que le serveur fonctionne
app.get('/', (req, res) => {
    res.json({
        message: 'API IATEK - Backend Département',
        status: 'running',
        routes: {
            auth: {
                register: 'POST /api/auth/register',
                login: 'POST /api/auth/login',
                currentUser: 'GET /api/auth/me (protected)'
            },
            departments: {
                list: 'GET /dept/departements (protected)',
                add: 'POST /dept/ (protected)',
                delete: 'DELETE /dept/:id (protected)',
                update: 'PUT /dept/:id (protected)'
            }
        }
    });
});

// Routes
const AuthRoutes = require('./routes/auth');
const DeptRoutes = require('./routes/dept');

app.use('/api/auth', AuthRoutes);
app.use('/dept', DeptRoutes);

// Route pour déboguer les erreurs 404
app.use('*', (req, res) => {
    console.log('404 - Route non trouvée:', req.originalUrl);
    res.status(404).json({
        error: 'Route non trouvée',
        requestedUrl: req.originalUrl,
        availableRoutes: [
            'GET /',
            'GET /dept/departements',
            'POST /dept/',
            'DELETE /dept/:id',
            'PUT /dept/:id'
        ]
    });
});

app.listen(process.env.PORT || 5003, () => {
    console.log(`Departement running on port ${process.env.PORT || 5003}`);
    console.log('Routes disponibles:');
    console.log('  Auth:');
    console.log('    - POST /api/auth/register');
    console.log('    - POST /api/auth/login');
    console.log('    - GET  /api/auth/me (protected)');
    console.log('  Departments:');
    console.log('    - GET  /dept/departements (protected)');
    console.log('    - POST /dept/ (protected)');
    console.log('    - DELETE /dept/:id (protected)');
    console.log('    - PUT /dept/:id (protected)');
});
