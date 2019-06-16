import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import { setSerial } from '../store/actions/Instrument';
import SubmitButton from './SubmitButton';
import InstumentCodes from './InstumentCodes';



export class InstrumentSettings extends Component {
    handleChange = (e) => {
        this.props.setSerial(e.target.value);
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
                    <div>
                        <p className="tit-ins">Instrument Serial</p>
                        <input className="simple-input" type="text" value={this.props.serial} onChange={this.handleChange} />
                    </div>
                    <div className="dis33">
                        <p className="tit-ins">Instrument Type</p>
                        {/* <DropDown
                            option={this.props.chosenType}
                            status={this.props.isTypeOpen}
                            menu={this.props.instrumTypes}
                            id="types" /> */}
                        <input className="simple-input" type="text" value={this.props.serial} onChange={this.handleChange} />
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
                <p className="side-t">Instrument List</p>
                <div className="flex-in-ad">
                    <input className="simple-input mar-ri-b" type="text" value={this.props.serial} onChange={this.handleChange} />
                    <div onClick={this.addInstrum} className="add-btn">add</div>
                </div>

                <div>
                    <div className="flex-in-ad">
                            
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
})

const mapDispatchToProps = dispatch => ({
    setSerial: (text) => dispatch(setSerial(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentSettings)
