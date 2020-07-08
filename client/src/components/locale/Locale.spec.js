import React, { useState } from 'react';
import { mount } from 'enzyme'
import Locale from '.';

describe('Locale', () => {
    const setLanguage = jest.fn()
    jest
    .spyOn(React, 'useState')
    .mockImplementation(stateValue => [language='value', setLanguage])

    const onChangeHandler = jest.fn();

    const wrapper = mount(<Locale/>);

    it('should render the locale information in home page', () => {
        expect(wrapper).toBeTruthy();
    })

});
