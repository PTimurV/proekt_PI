const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Favorites = sequelize.define('favorites', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Flat = sequelize.define('flat', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    priceflat: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: true},
    img1: {type: DataTypes.STRING, allowNull: true},
    img2: {type: DataTypes.STRING, allowNull: true},
    img3: {type: DataTypes.STRING, allowNull: true},
})

const FavoritesFlat = sequelize.define('favorites_flat', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Room = sequelize.define('room', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

const District = sequelize.define('district', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const FlatInfo = sequelize.define('flat_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: true},
})

const RoomDistrict = sequelize.define('room_district', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


User.hasOne(Favorites)
Favorites.belongsTo(User)

Favorites.hasMany(FavoritesFlat)
FavoritesFlat.belongsTo(Favorites)

Room.hasMany(Flat)
Flat.belongsTo(Room)

District.hasMany(Flat)
Flat.belongsTo(District)

Flat.hasMany(FavoritesFlat)
FavoritesFlat.belongsTo(Flat)

Flat.hasMany(FlatInfo, {as: 'info'});
FlatInfo.belongsTo(Flat)

Room.belongsToMany(District, {through: RoomDistrict })
District.belongsToMany(Room, {through: RoomDistrict })

module.exports = {
    User,
    Favorites,
    FavoritesFlat,
    Flat,
    Room,
    District,
    RoomDistrict,
    FlatInfo
}




