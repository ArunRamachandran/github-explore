import React from 'react';
import { mount } from 'enzyme';
import PageLoader from '.';

describe('PageLoader', () => {
    const wrapper = mount(<PageLoader/>);

    it('should render the page loader class to provide the basic styling', () => {
        expect(wrapper.find('.page-loader')).toHaveLength(1);
    })

    it('should render loading indicator text within the component', () => {
        expect(wrapper.find('h3').text()).toEqual('Finding the best results for you...');
    })
});
