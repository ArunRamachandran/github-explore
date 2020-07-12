import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import Header from '../../components/header';
import { 
    getRepositories,
    getCardIndex,
    navigateToHomePage,
    getAdditionalDetails,
    updateDataLayer
} from '../../actions';
import DataLayer from '../../components/data-layer';
import Statistics from '../../components/statistics';
import PageLoader from '../../components/page-loader';
import ImageWrapper from '../../components/image-wrapper';
import gitHubSearchIcon from '../../static/github-search.png';
class Journey extends Component {

    doSearch = (query) => {
        query && this.props.getRepositories(query);
    }

    navigateToHomePage = () => {
        this.props.filteredResults && this.props.filteredResults.length === 1 && this.props.navigateToHomePage()
    }

    handleBackButtonClick = () => {
        this.props.isAdditionalDetailsEnabled ? 
            this.props.updateDataLayer(this.props.filteredResults) : 
            this.props.updateDataLayer(this.props.searchResults)
    }

    loadNextPage = () => {
        this.props.getRepositories(this.props.query, this.props.pageCount + 1);
    }

    isNextPageAllowed = () => {
        const {
            pageCount,
            queryLimit
        } = this.props;
        
        return pageCount < queryLimit;
    }

    constructErrorScreen = () => {
        return (
            <div className="no-data-warning">
                <p>Sorry we couldn't find any results for <b>{this.props.query}</b>. Please try again.</p>
            </div>
        )
    }

    createDataLayer = () => {
        return (
            <div className="application-data-layer">
                {
                    this.props.filteredResults.length &&  <Statistics 
                        searchResults={this.props.filteredResults} 
                        query={this.props.query}
                        apiResponseTime={this.props.apiResponseTime}
                    />
                }
                <DataLayer 
                    repos={this.props.filteredResults} 
                    isExpandable={this.props.isCardExpandable}
                    getCardIndex={this.props.getCardIndex}
                    getAdditionalDetails={this.props.getAdditionalDetails}
                    isAdditionalDetailsEnabled={this.props.isAdditionalDetailsEnabled}
                    handleBackButtonClick={this.handleBackButtonClick}
                    loadNextPage={this.loadNextPage}
                    isNextPageAllowed={this.isNextPageAllowed}
                /> 
            </div>
        )
    }

    configurePageLayout = () => {
        return (
            <>
                { 
                    this.props.query ? 
                        this.props.filteredResults.length ? this.createDataLayer() : this.constructErrorScreen()                        
                    :
                    <div className="landing-page-container">
                        <ImageWrapper src={gitHubSearchIcon} alt="github-search" width="100" height="100" className="landing-page-image"/>
                        <p className="landing-page-text">Start searching your favourite repositories.</p>
                    </div>
                }
            </>
        )
    }

    render() {
        
        return (
            <div className="app-container">
                <Header doSearch={this.doSearch} navigateToHomePage={this.navigateToHomePage}/>
                <div className="data-container">
                { this.props.isLoading ? <PageLoader/> : this.configurePageLayout() }
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    getRepositories,
    getCardIndex,
    navigateToHomePage,
    getAdditionalDetails,
    updateDataLayer
}

const mapStateToProps = state => ({
    searchResults: state.gitData.searchResults,
    filteredResults: state.gitData.filteredData,
    isCardExpandable: state.gitData.isCardExpandable,
    query: state.gitData.query,
    apiResponseTime: state.gitData.apiResponseTime,
    isLoading: state.gitData.isLoading,
    isAdditionalDetailsEnabled: state.gitData.isAdditionalDetailsEnabled,
    pageCount: state.gitData.pageCount,
    totalResults: state.gitData.totalResults,
    queryLimit: state.gitData.queryLimit
})

export default connect(mapStateToProps, mapDispatchToProps)(Journey);