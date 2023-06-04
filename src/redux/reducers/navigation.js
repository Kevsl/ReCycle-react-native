import { createSlice } from '@reduxjs/toolkit'

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        listingId: 0,
    },
    reducers: {
        selectListing: (state, action) => {
            state.listingId = action.payload
        },
    },
})

//Selectors

export const getCurrentListingId = (state) => state.navigation.listingId

// Action creators are generated for each case reducer function
export const { selectListing } = navigationSlice.actions

export default navigationSlice.reducer
