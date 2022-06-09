import {makeAutoObservable} from "mobx";
export default class FlatStore {
    constructor() {
        this._rooms = []
        this._districts = []
        this._flats = []
        this._favoritess = []
        this._selectedRoom = {}
        this._selectedDistrict = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 2
        makeAutoObservable(this)
    }
    setRooms(rooms) {
        this._rooms = rooms
    }
    setDistricts(districts) {
        this._districts = districts
    }
    setFlats(flats) {
        this._flats = flats
    }


    setFavoritess(favorites){
        this._favoritess = favorites
    }

    setSelectedRoom(room) {
        this.setPage(1)
        this._selectedRoom = room
    }
    setSelectedDistrict(district) {
        this.setPage(1)
        this._selectedDistrict = district
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    get rooms() {
        return this._rooms
    }
    get districts() {
        return this._districts
    }
    get flats() {
        return this._flats
    }


    get favorites() {
        return this._favoritess
    }
    get selectedRoom() {
        return this._selectedRoom
    }
    get selectedDistrict() {
        return this._selectedDistrict
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}