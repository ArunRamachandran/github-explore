import React from 'react';
import { mount } from 'enzyme';
import Statistics from '.';

describe('Statistics', () => {
    const wrapper = mount(<Statistics searchResults={['test']} query="q" apiResponseTime="1.06"/>);

    it('shouls render search results count on top', () => {
        expect(wrapper.find('.response-count').text()).toEqual('showing top 1 results for your search: q')
        expect(wrapper.find('.response-time').text()).toEqual('Found results in 1.06s')
    })
});
