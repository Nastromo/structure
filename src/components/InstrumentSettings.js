import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import { setSerial } from '../store/actions/Instrument';
import InstumentCodes from './InstumentCodes';
import { addInstrum, delInstrum, changeType, getDeps, handleCreate, handleUpdate } from '../store/actions/Instrums';



export class InstrumentSettings extends Component {
    componentDidMount() {
        this.props.getDeps();
    }

    handleChange = (e) => {
        this.props.setSerial(e.target.value);
    }

    addInstrum = (e) => {
        if (this.name && this.serial) {
            this.props.addInstrum({
                name: this.name.value,
                serial: this.serial.value,
            });
        }
    }

    delInstrum = (e) => {
        this.props.delInstrum(Number(e.target.id));
    }

    render() {
        const list = JSON.parse(this.props.instrum.instruments ? this.props.instrum.instruments : "[]");

        return (
            <div className="right-side">
                <div className="del-save alig-righd">
                    <p className="side-t">Instrument Definition Deatails</p>
                    {this.props.isCreateMode ? <div onClick={this.props.handleCreate} className="create">Create</div> :
                        <div onClick={this.props.handleUpdate} className="green-btn wi130g">Update</div>}
                </div>

                <div className="flex-inst">
                    <div className="red-poe">
                        <div className="dis33">
                            <p className="tit-ins">Instrument Type</p>
                            <input className="simple-input wi400p" type="text" value={this.props.instrum.type ? this.props.instrum.type : ""} onChange={this.props.changeType} />
                        </div>
                        <div className="dis33">
                            <p className="tit-ins">Department</p>
                            <DropDown
                                option={this.props.instrum.department}
                                status={this.props.isDepOpen}
                                menu={this.props.departments}
                                id="departments" />
                        </div>
                    </div>
                    <div style={{width: "100%"}}>
                        <div className="flex-in-ad">
                            <input className="simple-input mar-ri-b" ref={el => this.name = el} placeholder="Instrument Name" type="text" />
                            <input className="simple-input mar-ri-b" ref={el => this.serial = el} placeholder="Serial #" type="text" />
                            <div onClick={this.addInstrum} className="add-btn">add</div>
                        </div>
                        <div className="scroll-150">
                            {
                                list.map((item, i) => {
                                    return (
                                        <div key={i} className="back-lin">
                                            <div className="fle-tt">
                                                <p>{item.name}</p>
                                                <p>{item.serial}</p>
                                            </div>
                                            <div id={i} onClick={this.delInstrum} className="del-all">del</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <InstumentCodes />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isCreateMode: state.isInsCreateMode,
    instrum: state.instrum,
    isDepOpen: state.dropdownStatus.departments,
    serial: state.instrument.serial,
    departments: state.departaments,
})

const mapDispatchToProps = dispatch => ({
    setSerial: (text) => dispatch(setSerial(text)),
    addInstrum: (obj) => dispatch(addInstrum(obj)),
    delInstrum: (index) => dispatch(delInstrum(index)),
    changeType: (e) => dispatch(changeType(e)),
    getDeps: () => dispatch(getDeps()),
    handleCreate: () => dispatch(handleCreate()),
    handleUpdate: () => dispatch(handleUpdate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentSettings)
