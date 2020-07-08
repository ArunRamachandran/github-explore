import React from 'react';
import { mount } from 'enzyme';
import LazyLoad from 'react-lazy-load';
import ImageWrapper from '.';

jest.mock('react-lazy-load', () => 'LazyLoad');

describe('ImageWrapper', () => {
    const onClickHandler = jest.fn();
    const mockProps = {
        src: 'src',
        alt: 'alt',
        width: 'width',
        height: 'width',
        className: 'className'
    }
    const wrapper = mount(<ImageWrapper {...mockProps} onClickHandler={onClickHandler}/>);

    it('should render the img tag in LazyLoader module', () => {
        expect(wrapper.find(LazyLoad)).toHaveLength(1);
    })

    it('should render img tag with exact props', () => {
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('img').props()).toEqual({...mockProps})
    })

    it('should invoke call back function onClick on wrapper', () => {
        wrapper.find('.image-chopper').simulate('click');
        expect(onClickHandler).toHaveBeenCalled();
    })
});

