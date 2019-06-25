import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDep, delDep } from '../store/actions/Deps';


export class Departments extends Component {
    addDep = (e) => {
        if (this.name) {
            this.props.addDep(this.name.value);
        }
    }

    delDep = (e) => {
        this.props.delDep(Number(e.target.id));
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
                                        <p className="code-pp">{item}</p>
                                        <div id={i} onClick={this.delDep} className="del-all">del</div>
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
    addDep: (text) => dispatch(addDep(text)),
    delDep: (index) => dispatch(delDep(index)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Departments)
