import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getResults, itemClick, setResults } from '../store/actions/SearchInput';



export class SearchInput extends Component {
    componentWillMount() {
        document.addEventListener('click', this.handleSearchDropDown);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleSearchDropDown);
    }

    handleSearchDropDown = (e) => {
        this.props.setResults({
            id: this.props.id,
            list: []
        });
    }

    getResults = (e) => {
        this.props.getResults(e.target.id, this.props.url, e.target.value);
    }

    itemClick = (e) => {
        this.props.itemClick({
            id: this.props.id,
            text: e.target.id,
        })
        if (typeof this.props.onItemClick === "function") this.props.onItemClick(e.target.id);
    }

    render() {
        return (
            <div className="relative">

                <input
                    id={this.props.id}
                    className={this.props.view}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    value={this.props.searchQuery || "" }
                    onChange={this.getResults} />

                { this.props.isLoading ? <div className="absolute whiteback">Loading...</div> : null }

                <div className={this.props.searchResults && this.props.searchResults.length > 0 ? "search-results" : null}>
                    {
                       this.props.searchResults ? this.props.searchResults.map((item, i) => {
                            return (
                                <p onClick={this.itemClick} id={item} className="search-item" key={i}>{item}</p>
                            )
                        }) : null
                    }
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    getResults: (searchInputId, url, searchQuery) => dispatch(getResults(searchInputId, url, searchQuery)),
    itemClick: (e) => dispatch(itemClick(e)),
    setResults: (obj) => dispatch(setResults(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
