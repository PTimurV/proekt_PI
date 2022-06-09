const {Room} = require('../models/models')
const ApiError = require('../error/ApiError');

class RoomController {
    async create(req, res) {
        const {name} = req.body
        const room = await Room.create({name})
        return res.json(room)
    }

    async getAll(req, res) {
        const rooms = await Room.findAll()
        return res.json(rooms)
    }

}

module.exports = new RoomController()
