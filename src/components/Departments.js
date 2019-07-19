import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createDep, removeDep, getDeps } from '../store/actions/Deps';


export class Departments extends Component {
    componentDidMount() {
        this.props.getDeps();
    }

    addDep = (e) => {
        if (this.name) {
            this.props.createDep(this.name.value);
        }
    }

    delDep = (e) => {
        this.props.removeDep(Number(e.target.id));
    }

    render() {
        return (
            <div className="just-cen">
                <div className="pad-whi">
                    <p className="side-t">Departments List</p>
                    <div className="fle-in-spe">
                        <input className="simple-input" placeholder="Department name" type="text" ref={el => this.name = el} />
                        <div onClick={this.addDep} className="add-btn">save</div>
                    </div>
                    <div>
                        {
                            this.props.list.map((item, i) => {
                                return (
                                    <div key={i} className="item-spec-l">
                                        <p className="code-pp">{item.name}</p>
                                        <div id={item.id} onClick={this.delDep} className="del-all">del</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    list: state.deps
})


const mapDispatchToProps = dispatch => ({
    createDep: (text) => dispatch(createDep(text)),
    removeDep: (id) => dispatch(removeDep(id)),
    getDeps: () => dispatch(getDeps()),
})


export default connect(mapStateToProps, mapDispatchToProps)(Departments)
