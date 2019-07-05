import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import LineSpinner from './LineSpinner';
import Main from './Main';
import Navigation from './Navigation';
import Product from './Product';
import Instruments from './Instruments';
import Elements from './Elements';
import Specimens from './Specimens';
import Tests from './Tests';
import Departments from './Departments';
import Orderset from './Orderset';




export class PrivateRoute extends Component {


    render() {
        if (this.props.isLoading) return <LineSpinner />

        return (
            <div>
                <Navigation />
                <Switch>
                    <Route exact path="/account/departments" component={Departments} />
                    <Route exact path="/account/main" component={Main} />
                    <Route exact path="/account/products" component={Product} />
                    <Route exact path="/account/instruments" component={Instruments} />
                    <Route exact path="/account/elements" component={Elements} />
                    <Route exact path="/account/specimens" component={Specimens} />
                    <Route exact path="/account/tests" component={Tests} />
                    <Route exact path="/account/orderset" component={Orderset} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PrivateRoute))

