import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckBox from './Checkbox';
import DropDown from './DropDown';
import { setCode, setDesc, setSpec, setClient, getTestCodes, addClient, delClient } from '../store/actions/Sets';



export class OrderSettings extends Component {
    constructor(props) {
        super(props);
        this.igs = [`Yes`, `No`];
    }

    setCode = (e) => {
        this.props.setCode(e.target.value);
    }
    setDesc = (e) => {
        this.props.setDesc(e.target.value);
    }
    setSpec = (e) => {
        this.props.setSpec(e.target.value);
    }

    returnClients = () => {
        const client = this.props.set.client ? JSON.parse(this.props.set.client) : [];
        return (
            <div className="ascrol-n">
                {client.map((item, i) => {
                    return (
                        <div key={i} className="fle-cli-ad">
                            <div>{item}</div>
                            <div onClick={this.delClient} id={i} className="delete-sml"></div>
                        </div>
                    )
                })}
            </div>
        )
    }

    handleClient = (e) => {
        this.props.setClient(e.target.value);
    }

    handleCode = (e) => {
        this.props.getTestCodes(e.target.value);
    }

    addClient = () => {
        this.props.addClient(this.props.client);
    }

    delClient = (e) => {
        this.props.delClient(Number(e.target.id));
    }
    

    render() {
        return (
            <div className="right-side felx-fd">
                <div className="mar-ggee">
                    <div className="felx-fds">
                        <div>
                            <p className="tit-ins">Code</p>
                            <input className="simple-input mar44f" value={this.props.set.code ? this.props.set.code : ""} onChange={this.setCode} />
                        </div>
                        <div>
                            <p className="tit-ins">Description</p>
                            <input id="mar44f" className="simple-input mar44f" value={this.props.set.description ? this.props.set.description : ""} onChange={this.setDesc} />
                        </div>
                    </div>
                    <p className="tit-ins">Specimen Requirements</p>
                    <textarea
                        className="gross-other"
                        value={this.props.set.specimenRequirements ? this.props.set.specimenRequirements : ""}
                        onChange={this.setSpec}
                    >
                    </textarea>

                    <div className="felx-fds mart33fd">
                        <input placeholder="Test code" className="simple-input mared" type="text" value={this.props.testCodeOnSet} onChange={this.handleCode} />
                        <div onClick={this.addCode} className="add-btn">add</div>
                    </div>
                    <div className="gle-fgre">
                        <p id="testCodde" className="tit-ins">Test code</p>
                        <p id="dfer" className="tit-ins">Test description</p>
                        <p className="tit-ins">Action</p>
                    </div>
                    <div className="sceool-codes">

                    </div>
                    <CheckBox status={this.props.set.isAssignToAll} title="Assign to all order sets" id="orderSet" />
                </div>


                <div className="wisto">
                    <div className="felx-fds wisto just-end">
                        <div className="ert-t mar-gh">
                            <p className="tit-ins">IGS</p>
                            <DropDown
                                option={this.props.set.igs}
                                status={this.props.isIgsOpen}
                                menu={this.igs}
                                id="igs" />
                        </div>
                        <div className="ert-t">
                            <p className="tit-ins">Permissions</p>
                            <div className="felx-fds just-end">
                                <div className="mart-ty">
                                    <CheckBox status={
                                        this.props.set.permisissions ? this.props.set.permisissions.includes(`Emr`) : false} title="Emr" id="emr" />
                                </div>
                                <div className="mart-ty">
                                    <CheckBox status={
                                        this.props.set.permisissions ? this.props.set.permisissions.includes(`Wellcom`) : false} title="Wellcom" id="wellcom" />
                                </div>
                                <div className="mart-ty">
                                    <CheckBox status={
                                        this.props.set.permisissions ? this.props.set.permisissions.includes(`Website`) : false} title="Website" id="website" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="felx-fds mart33fd">
                        <input placeholder="Clients" className="simple-input maredlo" type="text" value={this.props.client} onChange={this.handleClient} />
                        <div onClick={this.addClient} className="add-btn">add</div>
                    </div>
                    {this.returnClients()}
                    <div className="fger-ffr">
                        {this.props.set.isDeleted ? <div className="inc-btn-d">Inactive</div> : null}
                        {this.props.isCreateMode ? <div className="sub-btn-er create">Create</div> : <div className="sub-btn-er">Update</div>}


                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    orderSet: state.checkbox.orderSet,
    igsOption: state.dropdownOption.igs,
    isIgsOpen: state.dropdownStatus.igs,
    permOption: state.dropdownOption.perm,
    isPermOpen: state.dropdownStatus.perm,
    set: state.chosenSet,
    isCreateMode: state.isCreateModeSet,
    testCodeOnSet: state.testCodeOnSet,
    client: state.client,
})

const mapDispatchToProps = dispatch => ({
    setCode: (text) => dispatch(setCode(text)),
    setDesc: (text) => dispatch(setDesc(text)),
    setSpec: (text) => dispatch(setSpec(text)),
    setClient: (text) => dispatch(setClient(text)),
    getTestCodes: (text) => dispatch(getTestCodes(text)),
    addClient: (text) => dispatch(addClient(text)),
    delClient: (text) => dispatch(delClient(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderSettings)
