const { Flat, FavoritesFlat, Favorites } = require("../models/models")

class FavoritesController {
    async addToFavorites(req, res, next){
        const user = req.user
        const {flatId} = req.body
        const favorites = await FavoritesFlat.create({favoriteId : user.id, flatId : flatId})
        return res.json(favorites)
    }

    async getFavoritesUser(req, res){
        const {id} = req.user
        const favorites = await FavoritesFlat.findAll({include: {
                model: Flat
            }, where: {favoriteId: id}})

        return res.json(favorites)
    }

}

module.exports = new FavoritesController()