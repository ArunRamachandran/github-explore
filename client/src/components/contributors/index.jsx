import React, { useEffect, useState } from 'react';
import ImageWrapper from '../image-wrapper';
import superagent from 'superagent';

const Contributors = (props) => {

    const [list, updateList] = useState([]);
    const [loader, setLoading] = useState(true);
    const [errorText, setError] = useState('')

    useEffect(() => {
        const request = superagent.get(props.repo.contributors_url);

        request
            .then(response => {
                setLoading(false);
                updateList(response.body);
            })
            .catch(error => {
                setError(`We couldn't find contributors list. Please try again`)
            })

        return () => {
            if (request) {
                request.abort();
            }
        };
    }, []);

    const createContributorsList = () => {
        return (
            <div className="contributors-list">
                <div className="contributors-title"> Project Contributors: </div>
                {
                    list.length ?
                        <div className="contributors-list-element">
                            {
                                list.map((item, index) => {
                                    return (
                                        <div key={index} className="list-item">
                                            <ImageWrapper
                                                src={item.avatar_url}
                                                alt={item.login}
                                                width="50"
                                                height="50"
                                                className="contributor-list"
                                            />
                                            <div className="contributor-name">{item.login}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    : 
                        <div className="list-error-text">
                            {errorText}
                        </div>
                }
            </div>
        )
    }

    return (
        <div className="repo-additional-details-container">
            <div className="basic-information">
                <div className="box-container">Created at: {props.repo.created_at}</div>
                <div className="box-container">Total forks: {props.repo.forks_count}</div>
            </div>
            <div className="contributors-list-container">
                {loader ? <div className="load-state-text">Lading contributors list...</div> : createContributorsList()}
            </div>
        </div>
    )
}

export default Contributors;