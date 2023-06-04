import { createSlice } from '@reduxjs/toolkit'

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        listingId: 0,
        token: '',
        userId: 0,
        convId: '',
        isNewMessage: false,
    },
    reducers: {
        selectListing: (state, action) => {
            state.listingId = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
        setUserId: (state, action) => {
            state.userId = action.payload
        },
        setConvId: (state, action) => {
            state.convId = action.payload
        },
        setIsNewMessage: (state, action) => {
            state.isNewMessage = action.payload
        },
    },
})

//Selectors

export const getCurrentListingId = (state) => state.navigation.listingId
export const getCurrentToken = (state) => state.navigation.token
export const getCurrentUserId = (state) => state.navigation.userId
export const getCurrentConvId = (state) => state.navigation.convId
export const getNewMessageState = (state) => state.navigation.isNewMessage

// Action creators are generated for each case reducer function
export const {
    selectListing,
    setToken,
    setUserId,
    setConvId,
    setIsNewMessage,
} = navigationSlice.actions

export default navigationSlice.reducer
