import React from 'react';
import { mount } from 'enzyme';
import Card from '.';
import ImageWrapper from '../image-wrapper';
import Chip from '../chip';
import { wrap } from 'module';

jest.mock('../image-wrapper', () => 'ImageWrapper');
jest.mock('../chip', () => 'Chip');

describe('Card', () => {

    const getCardIndex = jest.fn();
    const mockProps = {
        avatar_url: 'avatar_url',
        full_name: 'full_name',
        language: 'language'
    }
    const wrapper = mount(<Card 
        isExpandable={true}
        index={1}
        avatarUrl={mockProps.avatar_url}
        imgWidth="50"
        imgHeight="50"
        fullName={mockProps.full_name}
        language={mockProps.language}
        isExpandable={true}
        getCardIndex={getCardIndex}/>
    )

    it('Should render profile image of user', () => {
        expect(wrapper.find(ImageWrapper)).toHaveLength(1);
    })

    it('should render image with the given avatar url', () => {
        expect(wrapper.find(ImageWrapper).props()).toEqual({
            src: mockProps.avatar_url,
            alt: 'avatar-link',
            width: "50",
            height: "50",
            className: "card-image"
        })
    })

    it('should render Chip element within the card with expected props', () => {
        expect(wrapper.find(Chip)).toHaveLength(1);
        expect(wrapper.find(Chip).props()).toEqual({
            className: 'multi-card-chip',
            item: mockProps.language
        })
    })

    it('should not render additional information when card is not expandable', () => {
        expect(wrapper.find('repo-additional-details')).toHaveLength(0);
    })

    it('should trigger call back onClick on card', () => {
        wrapper.find('.card-container').simulate('click');
        expect(getCardIndex).toHaveBeenCalled();
    })
});
