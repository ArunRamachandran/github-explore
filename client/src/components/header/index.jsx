import React from 'react';
import ImageWrapper from '../image-wrapper';

import gitHubLogo from '../../static/icons8-github-144.png'
import SearchBar from '../search-bar';

const Header = (props) => {

    return (
        <div className="page-header-wrapper">
            <ImageWrapper 
                src={gitHubLogo} 
                alt="github-icon"
                width="50"
                height="50"
                customClassName="title-logo"
                onClickHandler={props.navigateToHomePage}/>
            <h2 className="page-title cursor-pointer" onClick={props.navigateToHomePage}>GitHub Explore</h2>
            <div className="search-panel">
                <SearchBar doSearch={props.doSearch}/>
            </div>
        </div>
    )
}

export default Header;