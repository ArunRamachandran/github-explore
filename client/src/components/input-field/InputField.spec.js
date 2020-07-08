import React from 'react';
import { mount } from 'enzyme';
import InputField from '.';

describe('InputField', () => {
    const ref = React.createRef();
    const onChangeHandler = jest.fn();
    const mockProps = {
        type: 'type',
        value: 'value',
        placeholder: 'placeholder', 
        className: 'className',
        onChange: jest.fn(),
        name: 'name',
        id: 'id',
        wrapperClassName: 'wrapperClassName'
    }

    const wrapper = mount(<InputField {...mockProps} ref={ref}/>);

    it('should render the input field to capture user entry', () => {
        expect(wrapper.find('input')).toHaveLength(1);
        expect(wrapper.find('.wrapperClassName')).toHaveLength(1);
    })
});
