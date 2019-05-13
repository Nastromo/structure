import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';




export class Navigation extends Component {
    setActive = (element) => {
        const activeNavItem = document.getElementsByClassName('menu-active');
        activeNavItem[0].classList.remove(`menu-active`);
        element.classList.add(`menu-active`);
    }

    componentDidMount() {
        switch (this.props.location.pathname) {
            case `/account/option1`:
                this.setActive(this.pending);
                break;
            case `/account/option2`:
                this.setActive(this.processing);
                break;
            default: break;
        }
    }

    handleClick = (e) => {
        switch (e.currentTarget.id) {
            case `option1`:
                this.setActive(this.pending);
                break;
            case `option2`:
                this.setActive(this.processing);
                break;
            default: break;
        }
    }

    handleExit = () => {
        this.props.history.push(`/option1`);
    }

    handleSettings = () => {
        this.props.history.push(`/option2`);
    }

    render() {
        return (
            <div className="white-back">
                <div className="main-nav">
                    <div className="main-categories">
                        <a className="logo-text" href="/account/main">Structures</a>
                        <Link
                            id="option1"
                            onClick={this.handleClick}
                            innerRef={el => this.pending = el}
                            className="menu-active"
                            to="/account/option1">Title 1</Link>
                        <Link
                            id="option2"
                            onClick={this.handleClick}
                            innerRef={el => this.processing = el}
                            to="/account/option2">Title 2</Link>
                    </div>

                    <div className="work-info">
                        <p className="nav-te" onClick={this.handleExit}>Log out</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation))
