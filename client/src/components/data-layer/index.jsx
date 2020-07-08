import React from 'react';
import Card from '../card';

const DataLayer = (props) => {

    const configureCard = (repo, id) => {
        return props.isExpandable ? 
            <Card 
                className="multi-card-element"
                index={id}
                imgWidth="50"
                imgHeight="50"
                isExpandable={true}
                getCardIndex={props.getCardIndex}
                repo={repo}/>
            : 
            <Card 
                className="single-card-element"
                index={id}
                urls={[{name: 'visit home page', href: repo.homepage}, {name: 'source code', href: repo.html_url}]}
                isExpandable={false}
                getAdditionalDetails={props.getAdditionalDetails}
                isAdditionalDetailsEnabled={props.isAdditionalDetailsEnabled}
                repo={repo}
                backButtonHandler={props.handleBackButtonClick}/>
    }

    return (
        <div>
            <div className={props.isExpandable ? `multi-card-container` : `single-card-container`}>
                { props.repos && props.repos.map((repo, id) => configureCard(repo, id)) }
            </div>
        </div>        
    )
}

export default DataLayer;