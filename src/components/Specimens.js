import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCode, setDesc, createSpec, removeSpec, getSpecs } from '../store/actions/Specs';




export class Specimens extends Component {
    componentDidMount() {
        this.props.getSpecs();
    }

    handleCode = (e) => {
        this.props.setCode(e.target.value);
    }

    handleDesc = (e) => {
        this.props.setDesc(e.target.value);
    }

    addSpec = () => {
        this.props.createSpec({
            code: this.props.code,
            description: this.props.desc
        });
        this.props.setCode(``);
        this.props.setDesc(``);
    }

    delSpec = (e) => {
        this.props.removeSpec(Number(e.target.id));
    }

    // rawClick = (e) => {
    //     this.props.setCode(this.props.list[Number(e.target.id)].code);
    //     this.props.setDesc(this.props.list[Number(e.target.id)].desc);
    // }

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
                                        <p className="desc-pp">{item.description}</p>
                                        <div id={item.id} onClick={this.delSpec} className="del-all">del</div>
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
    createSpec: (obj) => dispatch(createSpec(obj)),
    removeSpec: (id) => dispatch(removeSpec(id)),
    getSpecs: () => dispatch(getSpecs()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Specimens)
