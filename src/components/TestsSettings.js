import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import { setCode, setDesc, setLab, setMailoutCode, setCentralink, setVolume, setContainer, handleStability, handleInstruc, handleCrit, handleInfo, handleRepa, setTat, setMet, setDef, createTest, updateTest, delElem, getElem } from '../store/actions/Test';
import SearchInput from './SearchInput';



export class TestsSettings extends Component {
    constructor(props) {
        super(props);
        this.statuses = [`In-house`, `Mainlout`];
        this.yesno = [`yes`, `no`];
        this.list = [`Dropdown menu`, `With list of`, `Specimens`];
        this.shipping = [`Ambient`, `Frozen`, `Refrigerated`, `Other`];
        this.aoe = [`option1`, `option2`];
    }

    setCode = (e) => {
        this.props.setCode(e.target.value);
    }
    setDesc = (e) => {
        this.props.setDesc(e.target.value);
    }
    setLab = (e) => {
        this.props.setLab(e.target.value);
    }
    setMailoutCode = (e) => {
        this.props.setMailoutCode(e.target.value);
    }
    setCentralink = (e) => {
        this.props.setCentralink(e.target.value);
    }
    setVolume = (e) => {
        this.props.setVolume(e.target.value);
    }
    setContainer = (e) => {
        this.props.setContainer(e.target.value);
    }
    handleStability = (e) => {
        this.props.handleStability(e.target.value);
    }
    handleInstruc = (e) => {
        this.props.handleInstruc(e.target.value);
    }
    handleCrit = (e) => {
        this.props.handleCrit(e.target.value);
    }
    handleInfo = (e) => {
        this.props.handleInfo(e.target.value);
    }
    handleRepa = (e) => {
        this.props.handleRepa(e.target.value);
    }
    setTat = (e) => {
        this.props.setTat(e.target.value);
    }
    setMet = (e) => {
        this.props.setMet(e.target.value);
    }
    setDef = (e) => {
        this.props.setDef(e.target.value);
    }

    handleCreate = () => {
        this.props.createTest(this.props.test);
    }

    handleUpdate = () => {
        this.props.updateTest(this.props.test);
    }

    render() {
        return (
            <div className="right-side">
                <div className="fke-kef-s">
                    {this.props.isCreateMode ? <div onClick={this.handleCreate} className="create">Create</div> :
                        <div onClick={this.handleUpdate} className="green-btn wi130g">Update</div>}
                </div>
                <div className="der-fl">
                    <div >
                        <p className="tit-ins">Code</p>
                        <input className="simple-input wiyt" value={this.props.test.code ? this.props.test.code : ""} onChange={this.setCode} />
                    </div>
                    <div >
                        <p className="tit-ins">Description</p>
                        <input className="simple-input wiyt" value={this.props.test.description ? this.props.test.description : ""} onChange={this.setDesc} />
                    </div>
                    <div >
                        <p className="tit-ins">Status</p>
                        <div className="div200w">
                            <DropDown
                                option={this.props.test.status}
                                status={this.props.isStatusOpen}
                                menu={this.statuses}
                                id="resTypes" />
                        </div>
                    </div>
                    <div >
                        <p className="tit-ins">Mailout Lab</p>
                        <input className="simple-input wiyt" value={this.props.test.mailoutLab ? this.props.test.mailoutLab : ""} onChange={this.setLab} />
                    </div>
                    <div >
                        <p className="tit-ins">Mailout Code</p>
                        <input className="simple-input wiyt" value={this.props.test.mailoutCode ? this.props.test.mailoutCode : ""} onChange={this.setMailoutCode} />
                    </div>
                </div>

                <div className="der-fl m15">
                    <div >
                        <p className="tit-ins">Short stability</p>
                        <div className="div200w">
                            <DropDown
                                option={this.props.test.shortStability}
                                status={this.props.isStabOpen}
                                menu={this.yesno}
                                id="stability" />
                        </div>
                    </div>
                    <div >
                        <p className="tit-ins">Priority</p>
                        <div className="div200w">
                            <DropDown
                                option={this.props.test.priority}
                                status={this.props.isPriOpen}
                                menu={this.yesno}
                                id="priority" />
                        </div>
                    </div>
                    <div >
                        <p className="tit-ins">Auto Stat</p>
                        <div className="div200w">
                            <DropDown
                                option={this.props.test.autoStat}
                                status={this.props.isAutoOpen}
                                menu={this.yesno}
                                id="autostat" />
                        </div>
                    </div>
                    <div >
                        <p className="tit-ins">Sendout Critical</p>
                        <div className="div200w">
                            <DropDown
                                option={this.props.test.sendOutCritical}
                                status={this.props.isCriticalOpen}
                                menu={this.yesno}
                                id="critical" />
                        </div>
                    </div>
                    <div >
                        <p className="tit-ins">Centralink Required</p>
                        <input className="simple-input wiyt" value={this.props.test.centralinkRequired ? this.props.test.centralinkRequired : ""} onChange={this.setCentralink} />
                    </div>
                </div>

                <div className="der-fl m15">
                    <div >
                        <p className="tit-ins">Specimen Volume</p>
                        <input className="simple-input wiyt" value={this.props.test.specimenVolume ? this.props.test.specimenVolume : ""} onChange={this.setVolume} />
                    </div>
                    <div >
                        <p className="tit-ins">Specimen Container</p>
                        <input className="simple-input wiyt" value={this.props.test.specimenContainer ? this.props.test.specimenContainer : ""} onChange={this.setContainer} />
                    </div>
                    <div >
                        <p className="tit-ins">Shipping Temperature</p>
                        <div className="div200w">
                            <DropDown
                                option={this.props.test.shippigTemperature}
                                status={this.props.isShipOpen}
                                menu={this.shipping}
                                id="shipping" />
                        </div>
                    </div>
                    <div>
                        <p className="tit-ins">TAT</p>
                        <input className="simple-input" value={this.props.test.tat ? this.props.test.tat : ""} onChange={this.setTat} />
                    </div>
                    <div >
                        <p className="tit-ins">Methodology</p>
                        <input className="simple-input" value={this.props.test.methodology ? this.props.test.methodology : ""} onChange={this.setMet} />
                    </div>
                </div>

                <div className="flex-rr">
                    <div className="wi-er">
                        <div >
                            <p className="tit-ins">Specimen Stability</p>
                            <textarea
                                className="gross-other"
                                value={this.props.test.specimenStability ? this.props.test.specimenStability : ""}
                                onChange={this.handleStability}
                            ></textarea>
                        </div>
                        <div >
                            <p className="tit-ins">Collection Instructions</p>
                            <textarea
                                className="gross-other"
                                value={this.props.test.collectionInstuctions ? this.props.test.collectionInstuctions : ""}
                                onChange={this.handleInstruc}
                            ></textarea>
                        </div>
                    </div>
                    <div className="wi-er">
                        <div >
                            <p className="tit-ins">Clinical Information</p>
                            <textarea
                                className="gross-other"
                                value={this.props.test.clinicalInformation ? this.props.test.clinicalInformation : ""}
                                onChange={this.handleInfo}
                            ></textarea>
                        </div>
                        <div >
                            <p className="tit-ins">Patient Reparation</p>
                            <textarea
                                className="gross-other"
                                value={this.props.test.patientReparation ? this.props.test.patientReparation : ""}
                                onChange={this.handleRepa}
                            ></textarea>
                        </div>
                    </div>
                    <div className="wi-er">
                        <div >
                            <p className="tit-ins">Rejection Criteria</p>
                            <textarea
                                className="gross-other"
                                value={this.props.test.rejectionCriteria ? this.props.test.rejectionCriteria : ""}
                                onChange={this.handleCrit}
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div >
                        <p className="tit-ins">Specimen Required</p>
                        <div className="div400w">
                            <DropDown
                                option={this.props.speReqOption}
                                status={this.props.isSpeReqOpen}
                                menu={this.list}
                                id="speReq" />
                        </div>
                        <div className="ram-200"></div>
                    </div>
                    <div >
                        <p className="tit-ins">Alternative Specimen</p>
                        <div className="div400w">
                            <DropDown
                                option={this.props.alternativeOption}
                                status={this.props.isAlternativeOpen}
                                menu={this.list}
                                id="alternative" />
                        </div>
                        <div className="ram-200"></div>
                    </div>
                    <div className="m15">
                        <p className="tit-ins">AOE</p>
                        <div className="div400w">
                            <DropDown
                                option={this.props.aoeOption}
                                status={this.props.isAoeReqOpen}
                                menu={this.aoe}
                                id="aoe" />
                        </div>
                        <div className="ram-200"></div>
                    </div>
                </div>

                <p className="side-t m15">Element Definition Deatails</p>
                <div className="m09">
                    <div className="div300w flex">
                        <div className="width100 amrg10">
                            <SearchInput
                                id="elements"
                                type="text"
                                view="search-input"
                                url="get-elements"
                                onItemClick={this.props.getElem}
                                isLoading={this.props.isLoadElem}
                                searchQuery={this.props.searchElem}
                                searchResults={this.props.elements} />
                        </div>

                        <div className="add-btn">add</div>
                    </div>
                    <div className="height150px">
                        {this.returnElems()}
                    </div>
                </div>
            </div>
        )
    }

    delElem = (e) => {
        this.props.delElem(Number(e.target.id))
    }

    returnElems = () => {
        const defin = this.props.test.elementDefinition;
        const list = JSON.parse(defin ? defin : "[]");
        return list.map((item, i) => {
            return (
                <div className="item-row flex" key={i}>
                    <div className="flex ju-start">
                        <div className="width150">{item.code}</div>
                        <div>{item.description}</div>
                    </div>
                    <div onClick={this.delElem} id={i} className="delete-sml"></div>
                </div>
            )
        });
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
    test: state.chosenTest,
    isCreateMode: state.isCreateMode,
    isLoadElem: state.searchLoading.elements,
    searchElem: state.searchQuery.elements,
    elements: state.searchResults.elements,
})

const mapDispatchToProps = dispatch => ({
    setCode: (text) => dispatch(setCode(text)),
    setDesc: (text) => dispatch(setDesc(text)),
    setLab: (text) => dispatch(setLab(text)),
    setMailoutCode: (text) => dispatch(setMailoutCode(text)),
    setCentralink: (text) => dispatch(setCentralink(text)),
    setVolume: (text) => dispatch(setVolume(text)),
    setContainer: (text) => dispatch(setContainer(text)),
    handleStability: (text) => dispatch(handleStability(text)),
    handleInstruc: (text) => dispatch(handleInstruc(text)),
    handleCrit: (text) => dispatch(handleCrit(text)),
    handleInfo: (text) => dispatch(handleInfo(text)),
    handleRepa: (text) => dispatch(handleRepa(text)),
    setTat: (text) => dispatch(setTat(text)),
    setMet: (text) => dispatch(setMet(text)),
    setDef: (text) => dispatch(setDef(text)),
    createTest: (obj) => dispatch(createTest(obj)),
    updateTest: (obj) => dispatch(updateTest(obj)),
    delElem: (index) => dispatch(delElem(index)),
    getElem: (text) => dispatch(getElem(text)),

})

export default connect(mapStateToProps, mapDispatchToProps)(TestsSettings)
