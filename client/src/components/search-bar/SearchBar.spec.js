import React from 'react';
import { mount } from 'enzyme';
import ImageWrapper from '../image-wrapper';
import InputField from '../input-field';
import SearchBar from '.';

jest.mock('../image-wrapper', () => 'ImageWrapper');
jest.mock('../input-field', () => 'InputField');

describe('SearchBar', () => {
    
    const doSearch = jest.fn();
    const wrapper = mount(<SearchBar doSearch={doSearch}/>);
    const useEffect = jest.spyOn(React, "useEffect");
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation(init => [init, setState]);
    
    it('should render the main components within the search bar', () => {
        expect(wrapper.find(ImageWrapper)).toHaveLength(1);
        expect(wrapper.find(InputField)).toHaveLength(2)
    })
});
