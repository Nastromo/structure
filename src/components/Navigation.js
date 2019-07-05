import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { showMenu, showItems } from '../store/actions/ShowMenu';




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
        this.props.history.push(`/`);
    }

    handleSettings = () => {
        this.props.history.push(`/option2`);
    }

    showMenu = () => {
        this.props.showMenu(true);
    }

    hideSideMenu = (e) => {
        if (e.target.id !== `item-m`) {
            this.props.showMenu(false);
        }
    }

    showItems = (e) => {
        this.props.showItems(!this.props.subItems);
    }

    render() {
        return (
            <div className="white-back">
                <div className="main-nav">
                    <div className="main-categories">
                        <div onClick={this.showMenu} className="hamburger">
                            <div className="ham-line"></div>
                            <div className="ham-line"></div>
                            <div className="ham-line"></div>
                        </div>
                        <p className="logo-text">ADMIN</p>
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
                <div onClick={this.hideSideMenu} className={this.props.sideMenu ? "shadow" : "shadow shadow-hide"} >
                    <div className={this.props.sideMenu ? "side-menu" : "side-menu side-menu-hide"}>
                        <div className="struct">
                            <p onClick={this.showItems} id="item-m">STRUCTURE</p>
                            <div className={this.props.subItems ? "sub-struct-show" : "sub-struct"}>
                                <Link
                                    id="departments"
                                    onClick={this.handleDep}
                                    to="/account/departments">Departments</Link>
                                <Link
                                    id="departments"
                                    onClick={this.handleDep}
                                    to="/account/instruments">Instruments</Link>
                                <Link
                                    id="departments"
                                    onClick={this.handleDep}
                                    to="/account/elements">Elements</Link>
                                <Link
                                    id="specimens"
                                    onClick={this.handleDep}
                                    to="/account/specimens">Specimens list</Link>
                                <Link
                                    id="specimens"
                                    onClick={this.handleDep}
                                    to="/account/tests">Test Maintenance</Link>
                                <Link
                                    id="orderset"
                                    onClick={this.handleDep}
                                    to="/account/orderset">Orderset Maintenance</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    sideMenu: state.sideMenu,
    subItems: state.subItems,

})

const mapDispatchToProps = (dispatch) => ({
    showMenu: (bool) => dispatch(showMenu(bool)),
    showItems: (bool) => dispatch(showItems(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation))
