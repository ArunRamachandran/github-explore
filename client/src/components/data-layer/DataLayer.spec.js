import React from 'react';
import { mount } from 'enzyme';
import Card from '../card';
import DataLayer from '.';

jest.mock('../card', () => 'Card')

describe('DataLayer', () => {
    const getCardIndex = jest.fn();
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
    const wrapper = mount(<DataLayer repos={mockProps.repos} isExpandable={false} getCardIndex={getCardIndex}/>);

    it('should render details in card as per number of repositories', () => {
        expect(wrapper.find(Card)).toHaveLength(1);
    })

    it('should render a card with respective props', () => {
        expect(wrapper.find(Card).props()).toEqual({
            className: "single-card-element",
            index: 0,
            avatarUrl: mockProps.repos[0].owner.avatar_url,
            fullName: mockProps.repos[0].full_name,
            language: mockProps.repos[0].language,
            description: mockProps.repos[0].description,
            openIssues: mockProps.repos[0].open_issues,
            watchers: mockProps.repos[0].watchers,
            urls: [{name: 'visit home page', href: mockProps.repos[0].homepage}, {name: 'source code', href: mockProps.repos[0].html_url}],
            isExpandable: false
        })
    })
});
