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
    isAdditionalDetailsEnabled: false,
    pageCount: 1,
    totalResults: 0,
    queryLimit: 0
};

const gitData = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case Constants.SET_LOADER:
            return {
                ...state,
                isLoading: true,
                isCardExpandable: false,
                pageCount: 0,
                totalResults: 0,
                queryLimit: 0
            }

        case Constants.API_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isCardExpandable: true,
                query: payload.query,
                searchResults: state.pageCount ? [...state.searchResults, ...payload.data.items] : [...payload.data.items],
                filteredData: state.pageCount ? [...state.searchResults, ...payload.data.items] : [...payload.data.items],
                apiResponseTime: payload.apiResponseTime,
                totalResults: payload.data.total_count,
                queryLimit: payload.queryLimit
            }

        case Constants.UPDATE_PAGE_COUNT:
            return {
                ...state,
                pageCount: payload
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