import axios from 'axios'
import { API_URL } from '@env'
import { useHeaders } from '../Utils/Consts'
import { getData } from '../Utils/localStorage'
import { useSelector } from 'react-redux'

export async function getListings() {
    let url = `${API_URL}listing/images`

    return axios.get(url).then((res) => {
        return res.data
    })
}

export async function getListing(id) {
    let url = `${API_URL}listing/view/${id}`

    return axios.get(url).then((res) => {
        return res.data
    })
}

export async function getMyListings(id, token) {
    let url = `${API_URL}listing/me/${id}`
    const config2 = {
        headers: { Authorization: `Bearer ${token}` },
    }
    return axios.get(url, config2).then((res) => {
        return res.data
    })
}

export async function getCustomListings(
    listingTypeId,
    listingSubTypeId,
    listingCategoryId,
    listingSubCategoryId,
    latitude,
    longitude,
    round,
    token
) {
    let url = `${API_URL}listing/search`

    const config2 = {
        headers: { Authorization: `Bearer ${token}` },
    }

    return axios
        .post(
            url,
            {
                fkListingType: listingTypeId,
                fkSubType: listingSubTypeId,
                fkListingCategory: listingCategoryId,
                fkSubCategory: listingSubCategoryId,
                latitude: latitude,
                longitude: longitude,
                round: round,
            },
            config2
        )
        .then((res) => {
            console.log(res.data)
            return res.data
        })
}

export async function getCitiesList(city) {
    let url = `https://api-adresse.data.gouv.fr/search/?q=${city}&type=municipality`

    return axios.get(url).then((res) => {
        return res.data.features
    })
}

export async function getListingTypes(token) {
    let url = `${API_URL}listingType`
    const config2 = {
        headers: { Authorization: `Bearer ${token}` },
    }

    return axios.get(url, config2).then((res) => {
        return res.data
    })
}

export async function getListingCategories(token) {
    let url2 = `${API_URL}listingCategory`

    const config2 = {
        headers: { Authorization: `Bearer ${token}` },
    }
    return axios.get(url2, config2).then((res) => {
        return res.data
    })
}
export async function getSubCategoriesByCategoryId(id, token) {
    let url = `${API_URL}subCategory/category/${id}`
    const config2 = {
        headers: { Authorization: `Bearer ${token}` },
    }
    return axios.get(url, config2).then((res) => {
        return res.data
    })
}
export async function getListingByCategory(id, token) {
    let url = `${API_URL}listing/images/category/${id}`
    const config2 = {
        headers: { Authorization: `Bearer ${token}` },
    }
    return axios.get(url, config2).then((res) => {
        return res.data
    })
}
export async function createListing(
    title,
    description,
    listingTypeId,
    listingSubTypeId,
    listingCategoryId,
    listingSubCategoryId,
    postCode,
    city,
    latitude,
    longitude,
    files,
    token
) {
    let url = `${process.env.REACT_APP_API_URL}listing/new`
    let id = 4

    const config2 = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        },
    }

    const formData = new FormData()
    formData.append('city', city)
    formData.append('country', 'France')
    formData.append('description', description)
    formData.append('title', title)
    formData.append('fkSubCategory', listingSubCategoryId)
    formData.append('fkListingStatus', 1)
    formData.append('fkListingType', listingTypeId)
    formData.append('fkSubListingType', listingSubTypeId)
    formData.append('fkProfile', 4)
    formData.append('latitude', latitude)
    formData.append('longitude', longitude)
    formData.append('postCode', postCode)
    formData.append('fkUser', '4')

    if (Array.isArray(files)) {
        files.forEach((file, index) => {
            formData.append(`images[${index}]`, file)
        })
    } else if (files) {
        formData.append('images[0]', files)
    }

    return axios.post(url, formData, config2).then((res) => {
        return res.status
    })
}
