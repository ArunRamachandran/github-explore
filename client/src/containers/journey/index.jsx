import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import Header from '../../components/header';
import { 
    getRepositories 
} from '../../actions';
class Journey extends Component {

    doSearch = (query) => {
        query && this.props.getRepositories(query);
    }

    render() {
        
        return (
            <div className="app-container">
                <Header doSearch={this.doSearch}/>
            </div>
        )
    }
}

const mapDispatchToProps = {
    getRepositories
}

const mapStateToProps = state => ({
    searchResults: state.gitData.filteredData
})

export default connect(mapStateToProps, mapDispatchToProps)(Journey);