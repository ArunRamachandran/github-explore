import React, { useState } from 'react';
import { mount } from 'enzyme'
import Locale from '.';

describe('Locale', () => {
    const wrapper = mount(<Locale/>);

    it('should render the locale information in home page', () => {
        expect(wrapper).toBeTruthy();
    })
});
