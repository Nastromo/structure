import React, { Component } from 'react';
import { connect } from 'react-redux';
import TestsList from './TestsList';
import TestsSettings from './TestsSettings';




export class Tests extends Component {


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

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Tests)
