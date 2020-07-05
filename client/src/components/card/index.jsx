import React from 'react';
import ImageWrapper from '../image-wrapper';
import Chip from '../chip';

const Card = (props) => {

    const getCardIndex = () => {
        props.isExpandable && props.getCardIndex(props.index)
    }

    return (
        <div className={`card-container ${props.className}`} key={props.index} onClick={getCardIndex}>
            <div className="title-section">
                <ImageWrapper 
                    src={props.avatarUrl}
                    alt="avatar-link"
                    width={props.imgWidth}
                    height={props.imgHeight}
                    className="card-image"/>
                <div className="repo-name">
                    <p>{props.fullName}</p>
                </div>
            </div>
            <div className="repo-specifications">
                <Chip className={props.isExpandable ? `multi-card-chip` : `single-card-chip`} item={props.language}/>
            </div>
            { !props.isExpandable &&
                <div className="repo-additional-details">
                    <p className="repo-description">{props.description}</p>
                    <div className="repo-statistics">
                        <div className="square-box open-issues">Open issues: {props.openIssues}</div>
                        <div className="square-box repo-watchers">Total watchers: {props.watchers}</div>
                    </div>
                    <div className="git-urls">
                        {props.urls && props.urls.map((item) => item.href && <a href={item.href} target="_blank">{item.name}</a>)}
                    </div>
                </div>
            }
        </div>
    )
}

export default Card;