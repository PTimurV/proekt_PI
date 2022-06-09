const {District} = require('../models/models')
const ApiError = require('../error/ApiError');

class DistrictController {
    async create(req, res) {
        const {name} = req.body
        const district = await District.create({name})
        return res.json(district)
    }

    async getAll(req, res) {
        const districts = await District.findAll()
        return res.json(districts)
    }
    
}

module.exports = new DistrictController()
