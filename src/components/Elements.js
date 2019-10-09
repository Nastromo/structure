import React, { Component } from 'react';
import { connect } from 'react-redux';
import ElementsList from './ElementsList';
import ElementSettings from './ElementSettings';



export class Elements extends Component {
    

    render() {
        return (
            <div className="two-parts">
                <ElementsList />
                <ElementSettings />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Elements)
