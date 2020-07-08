import * as Constants from '../constants';

const initialState = {
    defaultContent: [],
    searchResults: [],
    filteredData: [],
    query: null,
    isLoading: false,
    isCardExpandable: false,
    cardIndex: undefined,
    apiResponseTime: undefined,
    isAdditionalDetailsEnabled: false
};

const gitData = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case Constants.SET_LOADER:
            return {
                ...state,
                isLoading: true,
                isCardExpandable: false
            }

        case Constants.API_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isCardExpandable: true,
                query: payload.query,
                searchResults: [...payload.data.items],
                filteredData: [...payload.data.items],
                apiResponseTime: payload.apiResponseTime
            }

        case Constants.CARD_INDEX:
            return {
                ...state,
                filteredData: [state.searchResults[payload]],
                isCardExpandable: false
            }

        case Constants.NAVIGATE_TO_HOME_PAGE:
            return {
                ...state,
                filteredData: state.searchResults,
                isCardExpandable: true,
                isAdditionalDetailsEnabled: false
            }

        case Constants.GET_ADDITIONAL_DETAILS:
            return {
                ...state,
                isAdditionalDetailsEnabled: true
            }

        case Constants.BACK_BUTTON_CLICK:
            return {
                ...state,
                isAdditionalDetailsEnabled: false,
                filteredData: payload,
                isCardExpandable: payload.length > 1 ? true : false
            }

        default:
            return state;
    }
}

export default gitData;