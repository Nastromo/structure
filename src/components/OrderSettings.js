import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckBox from './Checkbox';
import DropDown from './DropDown';



export class OrderSettings extends Component {
    constructor(props) {
        super(props);
        this.igs = [`Yes`, `No`];
        this.perm = [`Emr`, `Wellcom`, `Website`];
    }

    render() {
        return (
            <div className="right-side felx-fd">
                <div className="mar-ggee">
                    <div className="felx-fds">
                        <div>
                            <p className="tit-ins">Code</p>
                            <input className="simple-input mar44f" type="text" value={this.props.code} onChange={this.handleChange} />
                        </div>
                        <div>
                            <p className="tit-ins">Description</p>
                            <input id="mar44f" className="simple-input mar44f" type="text" value={this.props.code} onChange={this.handleChange} />
                        </div>
                    </div>
                    <p className="tit-ins">Specimen Requirements</p>
                    <textarea className="gross-other"></textarea>

                    <div className="felx-fds mart33fd">
                        <input placeholder="Test code" className="simple-input mared" type="text" value={this.props.code} onChange={this.handleChange} />
                        <div onClick={this.addCode} className="add-btn">add</div>
                    </div>
                    <div className="gle-fgre">
                        <p id="testCodde" className="tit-ins">Test code</p>
                        <p id="dfer" className="tit-ins">Test description</p>
                        <p className="tit-ins">Action</p>
                    </div>
                    <div className="sceool-codes">

                    </div>
                    <CheckBox status={this.props.orderSet} title="Assign to all order sets" id="orderSet" />
                </div>


                <div className="wisto">
                    <div className="felx-fds wisto just-end">
                        <div className="ert-t mar-gh">
                            <p className="tit-ins">IGS</p>
                            <DropDown
                                option={this.props.igsOption}
                                status={this.props.isIgsOpen}
                                menu={this.igs}
                                id="igs" />
                        </div>
                        <div className="ert-t">
                            <p className="tit-ins">Permissions</p>
                            <DropDown
                                option={this.props.permOption}
                                status={this.props.isPermOpen}
                                menu={this.perm}
                                id="perm" />
                        </div>
                    </div>
                    <div className="felx-fds mart33fd">
                        <input placeholder="Clients" className="simple-input maredlo" type="text" value={this.props.code} onChange={this.handleChange} />
                        <div onClick={this.addCode} className="add-btn">add</div>
                    </div>
                    <div className="fger-ffr">
                        <div className="inc-btn-d">Inactive</div>
                        <div className="sub-btn-er">Submit</div>
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
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(OrderSettings)
