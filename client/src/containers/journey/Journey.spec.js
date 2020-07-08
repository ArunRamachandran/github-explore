import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store'
import { Provider, connect } from 'react-redux';
import Header from '../../components/header';
import { 
    getRepositories,
    getCardIndex,
    navigateToHomePage
} from '../../actions';
import DataLayer from '../../components/data-layer';
import Statistics from '../../components/statistics';
import PageLoader from '../../components/page-loader';
import ImageWrapper from '../../components/image-wrapper';
import Journey from '.';

const mockStore = configureStore(),
initialState = {
        gitData: {
            filteredData: ['test_element1', 'test_element2'],
            isCardExpandable: true,
            query: 'query',
            apiResponseTime: '',
            isLoading: false
        }
    },
store = mockStore(initialState);

jest.mock('../../actions', () => ({
    getRepositories: jest.fn(),
    getCardIndex: jest.fn(),
    navigateToHomePage: jest.fn()
}))

jest.mock('../../components/header', () => 'Header');
jest.mock('../../components/data-layer', () => 'DataLayer');

describe('Journey', () => {

    const wrapper = mount(<Journey 
        store={store} 
        getRepositories={getRepositories} 
        getCardIndex={getCardIndex} 
        navigateToHomePage={navigateToHomePage}/>)

    it('should render the Journey container', () => {
        expect(wrapper).toBeTruthy();
    })

    it('should render the Header component in page', () => {
        expect(wrapper.find(Header)).toHaveLength(1);
    })

    it('should not render PageLoader when app is not in loading state', () => {
        expect(wrapper.find(PageLoader)).toHaveLength(0);
    })

    it('sould render the contents in page when search result is not empty', () => {
        expect(wrapper.find(DataLayer)).toHaveLength(1)
    })
})