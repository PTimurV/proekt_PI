const Router = require('express')
const router = new Router()
const flatController = require('../controllers/flatController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', checkRole('ADMIN'), flatController.create)
router.get('/', flatController.getAll)
router.get('/:id', flatController.getOne)

module.exports = router
