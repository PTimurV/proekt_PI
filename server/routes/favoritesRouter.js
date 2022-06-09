const Router = require('express')
const router = new Router()
const favoritesController = require('../controllers/favoritesController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', authMiddleware , favoritesController.getFavoritesUser)
router.post('/', authMiddleware , favoritesController.addToFavorites)

module.exports = router