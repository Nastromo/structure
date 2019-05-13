import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubmitButton from './SubmitButton';
import { makeLogin } from '../store/actions/Login';




export class login extends Component {

    handleSubmit = async (e) => {
        e.preventDefault();
        if (this.login.value && this.pass.value) {
            this.props.makeLogin(this.props.history, `/v1/login`, {
                login: this.login.value,
                pass: this.pass.value
            });
        }
    }


    render() {
        return (
            <div className="flex-center-column">
                <h2 className="pat-marg">Patient Registration</h2>
                <p className="sub-title">Empire City Laboratories</p>

                <form className="signup-form" onSubmit={this.handleSubmit}>

                    <input
                        ref={el => this.login = el}
                        className="input-login"
                        type="text"
                        placeholder="Enter Your Email"
                        required="required"
                        autoComplete="username" />

                    <input
                        ref={el => this.pass = el}
                        className="input-login"
                        type="password"
                        placeholder="Enter Your Password"
                        required="required"
                        autoComplete="current-password" />

                    <input
                        ref={el => this.pass = el}
                        className="input-login"
                        type="password"
                        placeholder="Confirm Password"
                        required="required"
                        autoComplete="current-password" />

                    <div className="main-btn-height">
                        <SubmitButton status={this.props.status} text="Create Account" />
                    </div>

                    <p className="text-center">© 2008-2019 Empire City Laboratories, Inc. All Rights Reserved. ECL and Empire City Laboratories are registered trademarks of Empire City Laboratories®, Inc.</p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    status: state.loginSpinner
})

const mapDispatchToProps = (dispatch) => ({
    makeLogin: (history, url, body) => dispatch(makeLogin(history, url, body)),
})

export default connect(mapStateToProps, mapDispatchToProps)(login)
