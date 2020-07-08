import React from 'react';
import { mount } from 'enzyme';
import Header from '.';
import SearchBar from '../search-bar';
import ImageWrapper from '../image-wrapper';

jest.mock('../search-bar', () => 'SearchBar');
jest.mock('../image-wrapper', () => 'ImageWrapper');

describe('Header', () => {
    
    const doSearch = jest.fn(),
        navigateToHomePage = jest.fn();

    const wrapper = mount(<Header doSearch={doSearch} navigateToHomePage={navigateToHomePage}/>)

    it('should render title wrapper', () => {
        expect(wrapper.find('.page-header-wrapper')).toHaveLength(1);
    })

    it('should render the GitHub Page Logo & page title', () => {
        expect(wrapper.find(ImageWrapper)).toHaveLength(1);
        const title = wrapper.find('.page-title').text();
        expect(title).toEqual('GitHub Explore');
    })

    it('should render the search bar in header', () => {
        expect(wrapper.find(SearchBar)).toHaveLength(1);
    })

});

