const uuid = require('uuid')
const path = require('path');
const {Flat, FlatInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class FlatController {
    async create(req, res, next) {
        try {
            let {name, priceflat, districtId, roomId, info} = req.body
            const {img,img1,img2,img3} = req.files
            let fileName = uuid.v4() + ".jpg"
            let fileName1 = uuid.v4() + ".jpg"
            let fileName2 = uuid.v4() + ".jpg"
            let fileName3 = uuid.v4() + ".jpg"
            let flat

            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            img1.mv(path.resolve(__dirname, '..', 'static', fileName1))
            img2.mv(path.resolve(__dirname, '..', 'static', fileName2))
            img3.mv(path.resolve(__dirname, '..', 'static', fileName3))
            
            flat = await Flat.create({name, priceflat, districtId, roomId, img: fileName, img1: fileName1,img2: fileName2,img3: fileName3});
            
            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    FlatInfo.create({
                        title: i.title,
                        description: i.description,
                        flatId: flat.id
                    })
                )
            }
            return res.json(flat)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        try{
            let {districtId, roomId, limit, page} = req.query
            page = page || 1

            limit = limit || 2

            let offset = page * limit - limit
            let flats;
            if (!districtId && !roomId) {
                flats = await Flat.findAndCountAll({limit, offset})
            }
            if (districtId && !roomId) {
                flats = await Flat.findAndCountAll({where:{districtId}, limit, offset})
            }
            if (!districtId && roomId) {
                flats = await Flat.findAndCountAll({where:{roomId}, limit, offset})
            }
            if (districtId && roomId) {
                flats = await Flat.findAndCountAll({where:{roomId, districtId}, limit, offset})
            }
            return res.json(flats)
        } catch(e) {
            console.log(e)
        }
    }

    async getOne(req, res) {
        const {id} = req.params
        const flat = await Flat.findOne(
            {
                where: {id},
                include: [{model: FlatInfo, as: 'info'}]
            },
        )
        return res.json(flat)
    }
}

module.exports = new FlatController()
