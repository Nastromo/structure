import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCode, setDesc, addSpec, delSpec } from '../store/actions/Specs';




export class Specimens extends Component {
    handleCode = (e) => {
        this.props.setCode(e.target.value);
    }

    handleDesc = (e) => {
        this.props.setDesc(e.target.value);
    }

    addSpec = () => {
        this.props.addSpec({
            code: this.props.code,
            desc: this.props.desc
        });
        this.props.setCode(``);
        this.props.setDesc(``);
    }

    delSpec = (e) => {
        this.props.delSpec(Number(e.target.id));
    }

    rawClick = (e) => {
        this.props.setCode(this.props.list[Number(e.target.id)].code);
        this.props.setDesc(this.props.list[Number(e.target.id)].desc);
    }

    render() {
        return (
            <div className="just-cen">
                <div className="pad-whi">
                    <p className="side-t">Specimens List</p>
                    <div className="fle-in-spe">
                        <input className="simple-input" placeholder="Code" type="text" value={this.props.code} onChange={this.handleCode} />
                        <input className="simple-input" type="text" placeholder="Description" value={this.props.desc} onChange={this.handleDesc} />
                        <div onClick={this.addSpec} className="add-btn">save</div>
                    </div>
                    <div>
                        {
                            this.props.list.map((item, i) => {
                                return (
                                    <div key={i} id={i} onClick={this.rawClick} className="item-spec-l">
                                        <p className="code-pp">{item.code}</p>
                                        <p className="desc-pp">{item.desc}</p>
                                        <div id={i} onClick={this.delSpec} className="del-all">del</div>
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
    list: state.specList,
    code: state.code,
    desc: state.desc,
})

const mapDispatchToProps = dispatch => ({
    setCode: (text) => dispatch(setCode(text)),
    setDesc: (text) => dispatch(setDesc(text)),
    addSpec: (obj) => dispatch(addSpec(obj)),
    delSpec: (index) => dispatch(delSpec(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Specimens)
