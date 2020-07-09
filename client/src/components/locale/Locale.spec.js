import React, { useState } from 'react';
import { mount } from 'enzyme'
import Locale from '.';
import { wrap } from 'module';

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

    it('should display users timezone', () => {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        expect(wrapper.find('.timezone').text()).toEqual(timezone);
    })

    it('should display users current date and time', () => {
        const format = new Intl.DateTimeFormat(
            navigator.language,
            {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            }
        );

        expect(wrapper.find('.time-stamp').text()).toEqual(format.format(new Date()))
    })

});
