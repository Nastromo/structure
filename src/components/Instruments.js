import React, { Component } from 'react';
import { connect } from 'react-redux';
import InstrumentsList from './InstrumentsList';
import InstrumentSettings from './InstrumentSettings';




export class Instruments extends Component {


    render() {
        console.log(this.props.instrum)
        return (
            <div className="two-parts">
                <InstrumentsList />
                {this.props.instrum.id || this.props.isCreate? <InstrumentSettings /> : null}
                

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    instrum: state.instrum,
    isCreate: state.isInsCreateMode,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Instruments)
