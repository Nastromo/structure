import React, { Component } from 'react';
import { connect } from 'react-redux';
import InstrumentsList from './InstrumentsList';
import InstrumentSettings from './InstrumentSettings';




export class Instruments extends Component {


    render() {
        return (
            <div className="two-parts">
                <InstrumentsList />
                <InstrumentSettings />

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Instruments)
