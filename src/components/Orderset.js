import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderList from './OrderList';
import OrderSettings from './OrderSettings';
import { getSets } from '../store/actions/Sets';



export class Orderset extends Component {
    componentDidMount() {
        this.props.getSets();
    }

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

const mapDispatchToProps = dispatch => ({
    getSets: () => dispatch(getSets()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Orderset)
