import React from 'react';

const Statistics = (props) => (
    <div className="api-statistics-wrapper">
        <p className="response-count">showing top <b>{props.searchResults.length}</b> results for your search: <b>{props.query}</b></p>
        <p className="response-time">Found results in <b>{props.apiResponseTime}</b>s</p>
    </div>
)

export default Statistics;