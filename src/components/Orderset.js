import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderList from './OrderList';
import OrderSettings from './OrderSettings';




export class Orderset extends Component {

    render() {
        return (
            <div className="two-parts">
                <OrderList />
                <OrderSettings />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Orderset)
