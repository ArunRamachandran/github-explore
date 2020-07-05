import request from 'superagent';
import * as Constants from '../constants';

const getRepositories = (query) => {
    return dispatch => {
        var t1, t2, apiResponseTime;
        dispatch(setLoader())
        t1 = new Date().getTime();
        return request  
            .get(`${Constants.BASE_URL}/repositories?q=${query}`)
            .then(
                res => {
                    if (res.status && res.status !== 200) {
                        dispatch(setErrorCode())
                    } else {
                        t2 = new Date().getTime();
                        apiResponseTime = ((t2 - t1)/1000)
                        dispatch(updateSearchResults(res, query, apiResponseTime))
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

const setErrorCode = () => ({
    type: Constants.API_FAILURE
})

const updateSearchResults = (response, query, apiResponseTime) => ({
    type: Constants.API_SUCCESS,
    payload: {
        data: response.body,
        query,
        apiResponseTime
    }
})

const getCardIndex = (id) => ({
    type: Constants.CARD_INDEX,
    payload: id
})

const navigateToHomePage = () => ({
    type: Constants.NAVIGATE_TO_HOME_PAGE
})

export {
    getRepositories,
    setLoader,
    getCardIndex,
    navigateToHomePage
}