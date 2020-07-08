import React from 'react';
import ImageWrapper from '../image-wrapper';
import Chip from '../chip';
import Contributors from '../contributors';
import backButton from '../../static/icons8-left-100.png';

const Card = (props) => {

    const getCardIndex = () => {
        props.isExpandable && props.getCardIndex(props.index)
    }

    return (
        <div className={`card-container ${props.className}`} key={props.index} onClick={getCardIndex}>
            {
                props.backButtonHandler && 
                    <ImageWrapper 
                        src={backButton}
                        alt="back-button"
                        width="30"
                        height="30"
                        className="back-btn-icon"
                        onClickHandler={props.backButtonHandler}/>
            }
            <div className="title-section">
                <ImageWrapper 
                    src={props.repo.owner.avatar_url}
                    alt="avatar-link"
                    width={props.imgWidth}
                    height={props.imgHeight}
                    className="card-image"/>
                <div className="repo-name">
                    <p>{props.repo.full_name}</p>
                </div>
            </div>
            {
                props.isAdditionalDetailsEnabled ? 
                    <Contributors repo={props.repo}/>
                    :
                <>
                    <div className="repo-specifications">
                        <Chip className={props.isExpandable ? `multi-card-chip` : `single-card-chip`} item={props.repo.language}/>
                        {!props.isExpandable && <Chip className={`single-card-chip view-more`} item="View more details" onClickHandler={props.getAdditionalDetails}/>}
                    </div>
                    { !props.isExpandable &&
                        <div className="repo-additional-details">
                            <p className="repo-description">{props.repo.description}</p>
                            <div className="repo-statistics">
                                <div className="square-box open-issues">Open issues: {props.repo.open_issues}</div>
                                <div className="square-box repo-watchers">Total watchers: {props.repo.watchers}</div>
                            </div>
                            <div className="git-urls">
                                {props.urls && props.urls.map((item) => item.href && <a href={item.href} target="_blank">{item.name}</a>)}
                            </div>
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default Card;