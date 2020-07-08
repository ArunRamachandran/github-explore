import React from 'react';
import { mount } from 'enzyme';
import Card from '../card';
import DataLayer from '.';

jest.mock('../card', () => 'Card')

describe('DataLayer', () => {
    const getCardIndex = jest.fn(),
        handleBackButtonClick = jest.fn(),
        getAdditionalDetails = jest.fn();

    const mockProps = {
        repos: [{
            owner: {
                avatar_url: 'avatar_url' 
            },
            full_name: 'full_name',
            language: 'language',
            description: 'description',
            open_issues: '1',
            watchers: '1',
            homepage: 'homepage',
            html_url: 'html_url'
        }]
    }
    const wrapper = mount(<DataLayer 
            repos={mockProps.repos} 
            isExpandable={false} 
            getCardIndex={getCardIndex}
            handleBackButtonClick={handleBackButtonClick}
            getAdditionalDetails={getAdditionalDetails}
            isAdditionalDetailsEnabled={false}/>);

    it('should render the DataLayer component without any failure', () => {
        expect(wrapper).toBeTruthy();
    })

    it('should render details in card as per number of repositories', () => {
        expect(wrapper.find(Card)).toHaveLength(1);
    })
});
