import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import Header from '../../components/header';
import { 
    getRepositories,
    getCardIndex,
    navigateToHomePage
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
        this.props.searchResults && this.props.searchResults.length === 1 && this.props.navigateToHomePage()
    }

    render() {
        
        return (
            <div className="app-container">
                <Header doSearch={this.doSearch} navigateToHomePage={this.navigateToHomePage}/>
                { this.props.isLoading && <PageLoader/> }
                {!this.props.isLoading && this.props.searchResults && this.props.searchResults.length ?
                    <div>
                        {this.props.searchResults.length > 1 && 
                            <Statistics 
                                searchResults={this.props.searchResults} 
                                query={this.props.query}
                                apiResponseTime={this.props.apiResponseTime}
                            />
                        }
                        <DataLayer 
                            repos={this.props.searchResults} 
                            isExpandable={this.props.isCardExpandable}
                            getCardIndex={this.props.getCardIndex}
                        /> 
                    </div>
                    :
                    this.props.query ?
                        <div className="no-data-warning">
                            <p>Sorry we couldn't find any results for <b>{this.props.query}</b>. Please try again.</p>
                        </div>
                        : 
                        <div className="landing-page-container">
                            <ImageWrapper src={gitHubSearchIcon} alt="github-search" width="100" height="100" className="landing-page-image"/>
                            <p className="landing-page-text">Start searching your favourite repositories.</p>
                        </div>
                }
            </div>
        )
    }
}

const mapDispatchToProps = {
    getRepositories,
    getCardIndex,
    navigateToHomePage
}

const mapStateToProps = state => ({
    searchResults: state.gitData.filteredData,
    isCardExpandable: state.gitData.isCardExpandable,
    query: state.gitData.query,
    apiResponseTime: state.gitData.apiResponseTime,
    isLoading: state.gitData.isLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(Journey);