// routes/dept.js
const express = require('express');
const router = express.Router();
const controllers = require('../controllers/dept');
const { protect } = require('../middlewares/authMiddleware');

console.log("Routes dept loaded"); // Debugging line

// Routes protégées - nécessitent une authentification
router.post('/', protect, controllers.ajouterDept);
router.get('/departements', protect, controllers.getDepartements);
router.delete('/:id', protect, controllers.deleteDepartements);
router.put('/:id', protect, controllers.updateDepartement);

module.exports = router;



