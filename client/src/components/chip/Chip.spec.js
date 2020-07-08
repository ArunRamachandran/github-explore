import React from 'react';
import { mount } from 'enzyme';
import Chip from '.';

describe('Chip', () => {

    const mockProps = {
        className: 'test-class',
        item: 'item'
    }
    const wrapper = mount(<Chip className={mockProps.className} item={mockProps.item}/>);

    it('should render Chip component with default class and given item', () => {
        expect(wrapper.find('.chip-container')).toHaveLength(1);
        expect(wrapper.find('.chip-item').text()).toEqual('item');
    })

});
