import React, { Component } from 'react';
import { connect } from 'react-redux';
import TestsList from './TestsList';
import TestsSettings from './TestsSettings';
import { getTests } from '../store/actions/Test';




export class Tests extends Component {
    componentDidMount() {
        this.props.getTests();
    }

    render() {
        return (
            <div className="two-parts">
                <TestsList />
                <TestsSettings />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
    getTests: () => dispatch(getTests()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Tests)
