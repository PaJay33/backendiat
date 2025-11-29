# Service Message Backend - IATEK

Backend Node.js/Express pour gérer les messages du formulaire de contact du site IATEK.

## Installation

```bash
cd service_message
npm install
```

## Configuration

Créez un fichier `.env` dans le dossier `config/` avec :

```env
PORT=5003
MONGODB_URI=mongodb://localhost:27017/iatek_messages
# OU pour MongoDB Atlas :
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/iatek_messages
```

## Démarrage du serveur

```bash
npm start
# OU
node server.js
```

Le serveur démarre sur `http://localhost:5003`

## Endpoints

### POST `/dept`
Créer un nouveau message de contact

**Body :**
```json
{
  "nom": "Dupont",
  "prenom": "Jean",
  "email": "jean.dupont@example.com",
  "phone": "+221 XX XXX XX XX",
  "service": "site-web",
  "message": "Bonjour, je souhaite créer un site web..."
}
```

**Réponse succès (201) :**
```json
{
  "success": true,
  "data": { ... },
  "message": "Message envoyé avec succès!"
}
```

### GET `/dept/departements`
Récupérer tous les messages

### PUT `/dept/:id`
Mettre à jour un message

### DELETE `/dept/:id`
Supprimer un message

## Structure du projet

```
service_message/
├── config/
│   └── .env
├── controllers/
│   └── dept.js
├── models/
│   └── deptmodel.js
├── routes/
│   └── dept.js
├── server.js
└── package.json
```

## Frontend

Le frontend se connecte automatiquement à l'API. Assurez-vous que :
1. Le serveur backend est démarré
2. L'URL de l'API dans `Frontend/script.js` est correcte (ligne 112)
3. CORS est activé sur le backend (déjà configuré)

## Dépendances

- express
- mongoose
- dotenv
- cors
