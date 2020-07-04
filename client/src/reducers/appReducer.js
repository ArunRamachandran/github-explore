import * as Constants from '../constants';

const initialState = {
    defaultContent: [],
    searchResults: [],
    filteredData: [],
    isLoading: false
};

const gitData = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case Constants.SET_LOADER:
            return {
                ...state,
                isLoading: true
            }

        case Constants.API_SUCCESS:
            return {
                ...state,
                isLoading: false,
                searchResults: [...payload.items],
                filteredData: [...payload.items]
            }

        default:
            return state;
    }
}

export default gitData;