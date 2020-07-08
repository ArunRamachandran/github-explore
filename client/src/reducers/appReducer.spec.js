import gitData from './appReducer';
import { createStore } from 'redux';
import * as actions from '../actions';
import * as Constants from '../constants';

describe('Reducer', () => {
    let store, defaultState, spyAction;
    
    beforeEach(() => {
        store = createStore(gitData);
        defaultState = {
            defaultContent: [],
            searchResults: [],
            filteredData: [],
            query: null,
            isLoading: false,
            isCardExpandable: false,
            cardIndex: undefined,
            apiResponseTime: undefined,
            isAdditionalDetailsEnabled: false,
        };
        spyAction = {};
    })

    it('should return the default state on load', () => {
        const expectedState = {
            ...defaultState
        }
        expect(store.getState()).toEqual(expectedState);
    })

    it('should handle SET_LOADER dispatch', ()=> {
        const spyAction = {
            type: Constants.SET_LOADER
        }, 
        expectedState = {
            ...defaultState,
            isLoading: true,
            isCardExpandable: false
        }

        store.dispatch(spyAction);
        expect(store.getState()).toEqual(expectedState);
    })

    it('should handle API_SUCCESS dispatch', ()=> {
        const spyAction = {
            type: Constants.API_SUCCESS,
            payload: {
                query: 'test',
                data: {
                    items: ['test_element1', 'test_element2']
                },
                apiResponseTime: '1.09s'
            }
        }, 
        spyActionCardIndex = {
            type: Constants.CARD_INDEX,
            payload: 1
        },
        expectedState = {
            ...defaultState,
            isLoading: false,
            isCardExpandable: true,
            query: spyAction.payload.query,
            searchResults: [...spyAction.payload.data.items],
            filteredData: [...spyAction.payload.data.items],
            apiResponseTime: spyAction.payload.apiResponseTime
        }

        store.dispatch(spyAction);
        expect(store.getState()).toEqual(expectedState);

        store.dispatch(spyActionCardIndex);
        expect(store.getState()).toEqual(
            {
                ...defaultState,
                isLoading: false,
                isCardExpandable: false,
                query: spyAction.payload.query,
                searchResults: [...spyAction.payload.data.items],
                filteredData: ['test_element2'],
                apiResponseTime: spyAction.payload.apiResponseTime
            }
        )
    })

    it('should handle NAVIGATE_TO_HOME_PAGE dispatch', ()=> {
        const spyAction = {
            type: Constants.NAVIGATE_TO_HOME_PAGE
        }, 
        state = {
            ...defaultState,
            isCardExpandable: true
        }

        store.dispatch(spyAction);
        expect(store.getState()).toEqual(state);
    })
});
