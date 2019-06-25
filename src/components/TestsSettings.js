import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';



export class TestsSettings extends Component {
    constructor(props) {
        super(props);
        this.statuses = [`In-house`, `Mainlout`];
        this.yesno = [`yes`, `no`];
        this.list = [`Dropdown menu`, `With list of`, `Specimens`];
        this.shipping = [`Ambient`, `Frozen`, `Refrigerated`, `Other`];
        this.aoe = [`option1`, `option2`];
    }

    render() {
        return (
            <div className="right-side">
                <div className="der-fl">
                    <div >
                        <p className="tit-ins">Code</p>
                        <input className="simple-input wiyt" type="text" value={this.props.code} onChange={this.handleChange} />
                    </div>
                    <div >
                        <p className="tit-ins">Description</p>
                        <input className="simple-input wiyt" type="text" value={this.props.code} onChange={this.handleChange} />
                    </div>
                    <div >
                        <p className="tit-ins">Status</p>
                        <div className="div200w">
                            <DropDown
                                option={this.props.statusOption}
                                status={this.props.isStatusOpen}
                                menu={this.statuses}
                                id="resTypes" />
                        </div>
                    </div>
                    <div >
                        <p className="tit-ins">Mailout Lab</p>
                        <input className="simple-input wiyt" type="text" value={this.props.code} onChange={this.handleChange} />
                    </div>
                    <div >
                        <p className="tit-ins">Mailout Code</p>
                        <input className="simple-input wiyt" type="text" value={this.props.code} onChange={this.handleChange} />
                    </div>
                </div>

                <div className="der-fl m15">
                    <div >
                        <p className="tit-ins">Short stability</p>
                        <div className="div200w">
                            <DropDown
                                option={this.props.stabilityOption}
                                status={this.props.isStabOpen}
                                menu={this.yesno}
                                id="stability" />
                        </div>
                    </div>
                    <div >
                        <p className="tit-ins">Priority</p>
                        <div className="div200w">
                            <DropDown
                                option={this.props.priorityOption}
                                status={this.props.isPriOpen}
                                menu={this.yesno}
                                id="priority" />
                        </div>
                    </div>
                    <div >
                        <p className="tit-ins">Auto Stat</p>
                        <div className="div200w">
                            <DropDown
                                option={this.props.autoStatOption}
                                status={this.props.isAutoOpen}
                                menu={this.yesno}
                                id="autostat" />
                        </div>
                    </div>
                    <div >
                        <p className="tit-ins">Sendout Critical</p>
                        <div className="div200w">
                            <DropDown
                                option={this.props.criticalOption}
                                status={this.props.isCriticalOpen}
                                menu={this.yesno}
                                id="critical" />
                        </div>
                    </div>
                </div>

                <div className="der-fl m15">
                    <div >
                        <p className="tit-ins">Specimen Required</p>
                        <div className="div200w">
                            <DropDown
                                option={this.props.speReqOption}
                                status={this.props.isSpeReqOpen}
                                menu={this.list}
                                id="speReq" />
                        </div>
                    </div>
                    <div >
                        <p className="tit-ins">Alternative Specimen</p>
                        <div className="div200w">
                            <DropDown
                                option={this.props.alternativeOption}
                                status={this.props.isAlternativeOpen}
                                menu={this.list}
                                id="alternative" />
                        </div>
                    </div>
                    <div >
                        <p className="tit-ins">Specimen Volume</p>
                        <input className="simple-input wiyt" type="text" value={this.props.code} onChange={this.handleChange} />
                    </div>
                    <div >
                        <p className="tit-ins">Specimen Container</p>
                        <input className="simple-input wiyt" type="text" value={this.props.code} onChange={this.handleChange} />
                    </div>
                    <div >
                        <p className="tit-ins">Shipping Temperature</p>
                        <div className="div200w">
                            <DropDown
                                option={this.props.shipOption}
                                status={this.props.isShipOpen}
                                menu={this.shipping}
                                id="shipping" />
                        </div>
                    </div>
                </div>

                <div className="wi-er">
                    <div >
                        <p className="tit-ins">Specimen Stability</p>
                        <textarea
                            className="gross-other"
                            value={this.props.comment}
                            onChange={this.handleChange}
                        ></textarea>
                    </div>
                    <div >
                        <p className="tit-ins">Collection Instructions</p>
                        <textarea
                            className="gross-other"
                            value={this.props.comment}
                            onChange={this.handleChange}
                        ></textarea>
                    </div>
                    <div >
                        <p className="tit-ins">Rejection Criteria</p>
                        <textarea
                            className="gross-other"
                            value={this.props.comment}
                            onChange={this.handleChange}
                        ></textarea>
                    </div>
                    <div >
                        <p className="tit-ins">Clinical Information</p>
                        <textarea
                            className="gross-other"
                            value={this.props.comment}
                            onChange={this.handleChange}
                        ></textarea>
                    </div>
                    <div >
                        <p className="tit-ins">Patient Reparation</p>
                        <textarea
                            className="gross-other"
                            value={this.props.comment}
                            onChange={this.handleChange}
                        ></textarea>
                    </div>
                </div>

                <div className="der-fl m15 fle-start">
                    <div className="mar40k">
                        <p className="tit-ins">TAT</p>
                        <input className="simple-input" type="text" value={this.props.code} onChange={this.handleChange} />
                    </div>
                    <div >
                        <p className="tit-ins">Methodology</p>
                        <input className="simple-input" type="text" value={this.props.code} onChange={this.handleChange} />
                    </div>
                </div>

                <div className="m15">
                    <p className="tit-ins">AOE</p>
                    <div className="div200w">
                        <DropDown
                            option={this.props.aoeOption}
                            status={this.props.isAoeReqOpen}
                            menu={this.aoe}
                            id="aoe" />
                    </div>
                </div>

                <p className="side-t m15">Element Definition Deatails</p>
                <div className="m09">
                    <div className="div300w">
                        <input className="simple-input div300w" placeholder="code" type="text" value={this.props.code} onChange={this.handleChange} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    statusOption: state.dropdownOption.status,
    isStatusOpen: state.dropdownStatus.status,
    stabilityOption: state.dropdownOption.stability,
    isStabOpen: state.dropdownStatus.stability,
    priorityOption: state.dropdownOption.priority,
    isPriOpen: state.dropdownStatus.priority,
    autoStatOption: state.dropdownOption.autoStat,
    isAutoOpen: state.dropdownStatus.autoStat,
    criticalOption: state.dropdownOption.critical,
    isCriticalOpen: state.dropdownStatus.critical,
    speReqOption: state.dropdownOption.speReq,
    isSpeReqOpen: state.dropdownStatus.speReq,
    alternativeOption: state.dropdownOption.alternative,
    isAlternativeOpen: state.dropdownStatus.alternative,
    shipOption: state.dropdownOption.shipping,
    isShipOpen: state.dropdownStatus.shipping,
    aoeOption: state.dropdownOption.aoe,
    isAoeReqOpen: state.dropdownStatus.aoe,

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TestsSettings)
