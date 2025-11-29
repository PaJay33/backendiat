const mongoose = require('mongoose');

const departement = new mongoose.Schema({
  nom: {
    type: String,
    required: [true, "Le nom est obligatoire!"],},

  prenom: {
    type: String,
    required: [true, "Le nom est obligatoire!"],},

  email: {
    type: String,
    required: [true, "Le nom est obligatoire!"],},

  phone: {
    type: String,
    required: [true, "Le nom est obligatoire!"],},
    
  service: {
    type: String,
    required: [true, "Le nom est obligatoire!"],},  

  message: {
    type: String,
    required: [true, "La description est obligatoire!"],},
  
});

module.exports = mongoose.model('departement', departement);