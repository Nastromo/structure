import React, { Component } from 'react';
import { connect } from 'react-redux';
import ElementsList from './ElementsList';
import ElementSettings from './ElementSettings';



export class Elements extends Component {


    render() {
        return (
            <div className="two-parts">
                <ElementsList />
                {this.props.elem.id || this.props.isCreate ? <ElementSettings /> : null}

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    elem: state.element,
    isCreate: state.isCreateModeElem,

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Elements)
