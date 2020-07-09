import React, { useRef, useEffect, useState } from 'react';
import _, {debounce} from 'lodash';
import ImageWrapper from '../image-wrapper';
import InputField from '../input-field';
import searchIcon from '../../static/icons8-search-192.png';

const SearchBar = (props) => {

    const inputRef = useRef(null);
    const [searchQuery, updateSearchQuery] = useState('');

    const onChangeHandler = event => {
        const query = event.target.value;        
        updateSearchQuery(query);
        doSearch(query);
    }

    const doSearch = useRef(
        debounce(query => {
            props.doSearch(query)
        }, 300)
    ).current

    /*
     * add auto-focus to the main search field
     */
    useEffect(() => {
          inputRef.current.focus();
      }, []);

    return (
        <div className="search-bar-wrapper">
            <ImageWrapper
                src={searchIcon}
                alt="search-icon"
                width="20"
                height="20"
                customClassName="search-icon"/>
            <InputField 
                type="text"
                value={searchQuery}
                onChangeHandler={onChangeHandler}
                placeholder="search your favourite repository"
                wrapperClassName="search-field-container"
                className="search-input-field"
                name="search-input-field"
                id="search-input-field"
                ref={inputRef}/>
        </div>
    )
}

export default SearchBar;