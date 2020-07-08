import React from 'react';
import request from 'superagent';
import * as actions from '../actions';
import * as Constants from '../constants';

jest.mock('superagent', () => ({
    request: jest.fn().mockImplementation(() => Promise.resolve()),
    get: jest.fn().mockImplementation(() => Promise.resolve({res: {body: 'test returns'}}))
}))

describe('Actions', () => {
   
    it('getRepositories', () => {
        const dispatch = jest.fn().mockImplementation(() => Promise.resolve());
        const mockRequestPayload = { type: Constants.SET_LOADER };

        const result = actions.getRepositories('test')(dispatch);
        expect(dispatch).toHaveBeenCalledWith(mockRequestPayload);
        expect(request.get).toHaveBeenCalledWith('https://api.github.com/search/repositories?q=test');
    })

    it('setLoader', () => {
        const mockPayload = { type: Constants.SET_LOADER }
        expect(actions.setLoader()).toEqual(mockPayload)
    })

    it('setErrorCode', () => {
        const mockPayload = { type: Constants.API_FAILURE }
        expect(actions.setErrorCode()).toEqual(mockPayload)
    })
});
