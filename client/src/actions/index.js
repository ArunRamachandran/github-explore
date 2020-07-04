import request from 'superagent';
import * as Constants from '../constants';

const getRepositories = (query) => {
    return dispatch => {
        dispatch(setLoader())
        return request  
            .get(`${Constants.BASE_URL}/repositories?q=${query}`)
            .then(
                res => {
                    if (res.status && res.status !== 200) {
                        dispatch(setErrorCode())
                    } else {
                        dispatch(updateSearchResults(res))
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

const updateSearchResults = (response) => ({
    type: Constants.API_SUCCESS,
    payload: response.body
})

export {
    getRepositories,
    setLoader
}