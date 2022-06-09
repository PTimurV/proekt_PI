const Router = require('express')
const router = new Router()
const flatRouter = require('./flatRouter')
const userRouter = require('./userRouter')
const districtRouter = require('./districtRouter')
const roomRouter = require('./roomRouter')
const favoritesRouter = require('./favoritesRouter')

router.use('/user', userRouter)
router.use('/room', roomRouter)
router.use('/district', districtRouter)
router.use('/flat', flatRouter)
router.use('/favorites', favoritesRouter)

module.exports = router 
