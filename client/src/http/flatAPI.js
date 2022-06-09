import {$authHost, $host} from "./index";
//import jwt_decode from "jwt-decode";

export const createRoom = async (room) => {
    const {data} = await $authHost.post('api/room', room)
    return data
}

export const fetchRooms = async () => {
    const {data} = await $host.get('api/room')
    return data
}

export const createDistrict = async (district) => {
    const {data} = await $authHost.post('api/district', district)
    return data
}

export const fetchDistricts = async () => {
    const {data} = await $host.get('api/district', )
    return data
}

export const createFlat = async (flat) => {
    const {data} = await $authHost.post('api/flat', flat)
    console.log(data)
    return data
}

export const fetchFlats = async (roomId, districtId, page, limit= 5) => {
    const {data} = await $host.get('api/flat', {params: {
            roomId, districtId, page, limit
        }})
    return data
}

export const fetchOneFlat = async (id) => {
    const {data} = await $host.get('api/flat/' + id)
    return data
}

export const addToFavorites = async (flatId) => {
    const {response} = await $authHost.post('api/favorites', flatId)
    return response
}

export const getFavorites = async () => {
    const {data} = await $authHost.get('api/favorites')
    return data
}