import request from 'superagent';
import * as Constants from '../constants';

const getRepositories = (query, pCount) => {
    return dispatch => {
        var t1, t2, apiResponseTime, queryLimit;
        !pCount && dispatch(setLoader());
        t1 = new Date().getTime();
        return request  
            .get(`${Constants.BASE_URL}/repositories?q=${query}&page=${pCount ? pCount : 1}&per_page=${Constants.RESULTS_PER_PAGE}`)
            .then(
                res => {
                    if (res.status && res.status !== 200) {
                        dispatch(setErrorCode())
                    } else {
                        t2 = new Date().getTime();
                        apiResponseTime = ((t2 - t1)/1000)
                        queryLimit = Math.ceil(res.body.total_count/Constants.RESULTS_PER_PAGE)
                        dispatch(updatePageCount(pCount ? pCount : 1));
                        dispatch(updateSearchResults(res, query, apiResponseTime, queryLimit))
                    }
                }
            )
            .catch((error) => {
                dispatch(setErrorCode())
            })
    }
}

const setLoader = () => ({
    type: Constants.SET_LOADER
})

const updatePageCount = (pCount) => ({
    type: Constants.UPDATE_PAGE_COUNT,
    payload: pCount
})

const setErrorCode = () => ({
    type: Constants.API_FAILURE
})

const updateSearchResults = (response, query, apiResponseTime, queryLimit) => ({
    type: Constants.API_SUCCESS,
    payload: {
        data: response.body,
        query,
        apiResponseTime,
        queryLimit
    }
})

const getCardIndex = (id) => ({
    type: Constants.CARD_INDEX,
    payload: id
})

const navigateToHomePage = () => ({
    type: Constants.NAVIGATE_TO_HOME_PAGE
})

const getAdditionalDetails = () => ({
    type: Constants.GET_ADDITIONAL_DETAILS
})

const updateDataLayer = (payload) => ({
    type: Constants.BACK_BUTTON_CLICK,
    payload
})

export {
    getRepositories,
    setLoader,
    setErrorCode,
    updateSearchResults,
    getCardIndex,
    navigateToHomePage,
    getAdditionalDetails,
    updateDataLayer
}