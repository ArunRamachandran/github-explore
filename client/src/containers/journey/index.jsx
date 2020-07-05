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
                {this.props.searchResults && this.props.searchResults.length && 
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
    apiResponseTime: state.gitData.apiResponseTime
})

export default connect(mapStateToProps, mapDispatchToProps)(Journey);