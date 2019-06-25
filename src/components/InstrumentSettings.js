import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import { setSerial } from '../store/actions/Instrument';
import SubmitButton from './SubmitButton';
import InstumentCodes from './InstumentCodes';
import { addInstrum, delInstrum } from '../store/actions/Instrums';



export class InstrumentSettings extends Component {
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
        return (
            <div className="right-side">
                <div className="del-save">
                    <p className="side-t">Instrument Definition Deatails</p>
                    <div className="right-bi-n">
                        <div id="deleteIns" className="save-s">
                            <SubmitButton status={this.props.deleteStatus} text="Delete" onClick={this.delete} />
                        </div>
                        <div className="save-s">
                            <SubmitButton status={this.props.saveStatus} text="Save" onClick={this.save} />
                        </div>
                    </div>
                </div>

                <div className="flex-inst">
                    <div className="red-poe">
                        <div className="dis33">
                            <p className="tit-ins">Instrument Type</p>
                            <input className="simple-input wi400p" type="text" value={this.props.serial} onChange={this.handleChange} />
                        </div>
                        <div className="dis33">
                            <p className="tit-ins">Department</p>
                            <DropDown
                                option={this.props.chosenDepartment}
                                status={this.props.isDepOpen}
                                menu={this.props.departments}
                                id="departments" />
                        </div>
                    </div>
                    <div>
                        <div className="flex-in-ad">
                            <input className="simple-input mar-ri-b" ref={el => this.name = el} placeholder="Instrument Name" type="text" />
                            <input className="simple-input mar-ri-b" ref={el => this.serial = el} placeholder="Serial #" type="text" />
                            <div onClick={this.addInstrum} className="add-btn">add</div>
                        </div>
                        <div className="scroll-150">
                            {
                                this.props.list.map((item, i) => {
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
    serial: state.instrument.serial,
    departments: [],
    instrumTypes: [],
    list: state.instrums
})

const mapDispatchToProps = dispatch => ({
    setSerial: (text) => dispatch(setSerial(text)),
    addInstrum: (obj) => dispatch(addInstrum(obj)),
    delInstrum: (index) => dispatch(delInstrum(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentSettings)
