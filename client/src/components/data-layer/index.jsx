import React from 'react';
import Card from '../card';

const DataLayer = (props) => {

    const configureCard = (repo, id) => {
        return props.isExpandable ? 
            <Card 
                className="multi-card-element"
                index={id}
                avatarUrl={repo.owner.avatar_url}
                imgWidth="50"
                imgHeight="50"
                fullName={repo.full_name}
                language={repo.language}
                isExpandable={true}
                getCardIndex={props.getCardIndex}/>
            : 
            <Card 
                className="single-card-element"
                index={id}
                avatarUrl={repo.owner.avatar_url}
                fullName={repo.full_name}
                language={repo.language}
                description={repo.description}
                openIssues={repo.open_issues}
                watchers={repo.watchers}
                urls={[{name: 'visit home page', href: repo.homepage}, {name: 'source code', href: repo.html_url}]}
                isExpandable={false}/>
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