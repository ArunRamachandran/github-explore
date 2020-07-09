import React, { useState } from 'react';

const Locale = () => {

    const [language, setLanguage] = useState('Language');

    const onChangeHandler = (content) => setLanguage(content);

    const getBrowserIntlTimezone = () => {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }

    const getLocale = () => {
        return (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language;
    }
        
    const locale = getLocale();
    
    const format = new Intl.DateTimeFormat(
      locale,
      {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      }
    )

    const createLocaleLanguageList = () => {
        const list = navigator && navigator.languages && navigator.languages.length 
            ? navigator.languages : navigator.language;

        return (
            <ul>
                {list.map((element, index) => <li className={`list-element-${index}`} key={index} onClick={() => onChangeHandler(element)}><a href="#">{element}</a></li>)}
            </ul>
        )
    }

    return (
        <div className="browser-locale-information">
            <div className="locale-browser-time">
                <span className="locale-generic-box timezone">{getBrowserIntlTimezone()}</span>
                <span className="locale-generic-box time-stamp">{format.format(new Date())}</span>
            </div>
            <div className="locale-browser-language">
                <nav role="navigation">
                    <ul>
                        <li><a href="#">{language}</a>
                            {createLocaleLanguageList()}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Locale;