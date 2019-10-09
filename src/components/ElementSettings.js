import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import { addDef, delDef } from '../store/actions/AddDef';
import { addRanges, delRanges } from '../store/actions/NormalRanges';
import { addCriRanges, delCriRanges } from '../store/actions/CriticalRanges';
import { changeInsCode, changeHcLow, changeHcHigh, changeCode, changeDesc, changeUnits, changeLoinc, changeAnlLow, changeAnlHigh, changeDohLoinc, changeDohCriteria, changeDohResults, changeInter, getTypes, handleCreate, handleUpdate } from '../store/actions/Elements';
import { getDeps } from '../store/actions/Deps';


export class ElementSettings extends Component {
    componentDidMount() {
        this.props.getTypes();
        this.props.getDeps();
    }

    constructor(props) {
        super(props);
        this.types = [`Instrument`, `Manual`];
        this.alergy = [`Yes`, `No`];
        this.gender = [`All`, `Female`, `Male`];
    }

    inject = (option) => {
        if (option === `Instrument`) {
            return (
                <div className="fle-fer bas35">
                    <div className="mar-r-ghj bas47">
                        <p className="tit-ins">Instrument Type</p>
                        <DropDown
                            option={this.props.elem.insType}
                            status={this.props.isInsTypeOpen}
                            menu={this.props.types}
                            id="instrumentType" />
                    </div>
                    <div className="bas47">
                        <p className="tit-ins">Ins. Code</p>
                        <input className="simple-input-n" value={this.props.elem.insCode ? this.props.elem.insCode : ""} onChange={this.props.changeInsCode} />
                    </div>
                </div>
            );
        } else {
            return (
                <div >
                    <p className="tit-ins">Departament</p>
                    <div className="div200w">
                        <DropDown
                            option={this.props.elem.departament}
                            status={this.props.isDepOpen}
                            menu={this.props.departments}
                            id="departament" />
                    </div>
                </div>
            );
        }
    }

    injectHold = (option) => {
        if (option === `Instrument`) {
            return (
                <div className="del-save">
                    <p className="side-t mar-r-gh">Autofinalize</p>
                    <div className="div200w mar-ggj-l">
                        <DropDown
                            option={this.props.elem.autofinalize}
                            status={this.props.isFinalizeOpen}
                            menu={this.alergy}
                            id="finalize" />
                    </div>
                    <p className="side-t mar-r-gh">Hold Criteria</p>
                    <div className="right-bi-n marg10-n">
                        <div id="deleteIns" className="save-s">
                            <input className="simple-input" placeholder="Low" value={this.props.elem.hcLow ? this.props.elem.hcLow : ""} onChange={this.props.changeHcLow} />
                        </div>
                        <div className="save-s">
                            <input className="simple-input" placeholder="High" value={this.props.elem.hcHigh ? this.props.elem.hcHigh : ""} onChange={this.props.changeHcHigh} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

    showDefineList = (defineList) => {
        const list = JSON.parse(defineList ? defineList : "[]");
        return list.map((item, i) => {
            return (
                <div key={i} className="fle-def">
                    <div className="def-item">
                        {item.title}
                    </div>
                    <div id={i} onClick={this.delDefine} className="del-all">del</div>
                </div>
            )
        });
    }

    addDefine = (e) => {
        this.props.addDef({ title: this.def.value });
    }

    delDefine = (e) => {
        this.props.delDef(e.target.id);
    }

    showNormalRanges = (normalRanges) => {
        const list = JSON.parse(normalRanges ? normalRanges : "[]");
        return list.map((item, i) => {
            return (
                <div key={i} className="flex-it">
                    <div key={i} className="flex-inst def-item marg-ri">
                        <div className="item-rang bas17">{item.ageFrom}</div>
                        <div className="item-rang bas17">{item.ageTo}</div>
                        <div className="item-rang bas17">{item.gender}</div>
                        <div className="item-rang bas17">{item.low}</div>
                        <div className="item-rang bas17">{item.high}</div>
                    </div>
                    <div id={i} onClick={this.delRanges} className="del-all">del</div>
                </div>
            )
        })
    }

    addRanges = () => {
        this.props.addRanges({
            ageFrom: this.ageFrom.value,
            ageTo: this.ageTo.value,
            gender: this.props.genderNorm,
            low: this.low.value,
            high: this.high.value,
        });
    }

    delRanges = (e) => {
        this.props.delRanges(Number(e.target.id));
    }

    showCriticalRanges = (criticalRanges) => {
        const list = JSON.parse(criticalRanges ? criticalRanges : "[]");

        return list.map((item, i) => {
            return (
                <div key={i} className="flex-it">
                    <div key={i} className="flex-inst def-item marg-ri">
                        <div className="item-rang bas17">{item.ageFrom}</div>
                        <div className="item-rang bas17">{item.ageTo}</div>
                        <div className="item-rang bas17">{item.gender}</div>
                        <div className="item-rang bas17">{item.low}</div>
                        <div className="item-rang bas17">{item.high}</div>
                    </div>
                    <div id={i} onClick={this.delCriRanges} className="del-all">del</div>
                </div>
            )
        })
    }

    addCriRanges = () => {
        this.props.addCriRanges({
            ageFrom: this.ageFromC.value,
            ageTo: this.ageToC.value,
            gender: this.props.genderCrit,
            low: this.lowC.value,
            high: this.highC.value,
        });
    }

    delCriRanges = (e) => {
        this.props.delCriRanges(Number(e.target.id));
    }

    render() {
        return (
            <div className="right-side">
                <div className="del-save alig-righd">
                    <p className="side-t">Element Definition Deatails</p>
                    {this.props.isCreateMode ? <div onClick={this.props.handleCreate} className="create">Create</div> :
                        <div onClick={this.props.handleUpdate} className="green-btn wi130g">Update</div>}
                </div>



                <div className="flex-inst">
                    <div className="bas17">
                        <p className="tit-ins">Code</p>
                        <input className="simple-input-n" value={this.props.elem.code ? this.props.elem.code : ""} onChange={this.props.changeCode} />
                    </div>
                    <div className="bas17">
                        <p className="tit-ins">Description</p>
                        <input className="simple-input-n" value={this.props.elem.description ? this.props.elem.description : ""} onChange={this.props.changeDesc} />
                    </div>
                    <div className="bas17">
                        <p className="tit-ins">Result Type</p>
                        <DropDown
                            option={this.props.elem.resultType}
                            status={this.props.isTypeOpen}
                            menu={this.types}
                            id="resultTypes" />
                    </div>
                    {this.inject(this.props.elem.resultType)}
                </div>





                <div className="flex-inst">
                    <div className="bas20">
                        <p className="tit-ins">Units</p>
                        <input className="simple-input-n" value={this.props.elem.units ? this.props.elem.units : ""} onChange={this.props.changeUnits} />
                    </div>
                    <div className="bas20">
                        <p className="tit-ins">Alergy</p>
                        <DropDown
                            option={this.props.elem.alergy}
                            status={this.props.isAlergyOpen}
                            menu={this.alergy}
                            id="alergy" />
                    </div>
                    <div className="bas20">
                        <p className="tit-ins">Drug</p>
                        <DropDown
                            option={this.props.elem.drug}
                            status={this.props.isDrugOpen}
                            menu={this.alergy}
                            id="drug" />
                    </div>
                    <div className="bas20">
                        <p className="tit-ins">Loinc</p>
                        <input className="simple-input-n" value={this.props.elem.loinc ? this.props.elem.loinc : ""} onChange={this.props.changeLoinc} />
                    </div>
                </div>
                <div className="del-save gg-start">
                    <p className="side-t mar-ri">Acceptable Numeric Limits</p>
                    <div className="right-bi-n marg10-n">
                        <div id="deleteIns" className="save-s">
                            <input className="simple-input" value={this.props.elem.anlLow ? this.props.elem.anlLow : ""} onChange={this.props.changeAnlLow} />
                        </div>
                        <div className="save-s">
                            <input className="simple-input" value={this.props.elem.anlHigh ? this.props.elem.anlHigh : ""} onChange={this.props.changeAnlHigh} />
                        </div>
                    </div>
                </div>
                {this.injectHold(this.props.elem.resultType)}
                <div className="del-save gg-start">
                    <div className="div200w mar-ri">
                        <p className="tit-ins">Alpha Numeric</p>
                        <DropDown
                            option={this.props.elem.alphaNumeric}
                            status={this.props.isAlphaOpen}
                            menu={this.alergy}
                            id="alpha" />
                    </div>

                    <div>
                        <div className="right-bi-n marg10-n">
                            <div id="deleteIns" className="save-s">
                                <p className="tit-ins">Define List</p>
                                <input className="simple-input wide-yy" ref={el => this.def = el} />
                            </div>
                            <div onClick={this.addDefine} className="add-btn">add</div>
                        </div>
                    </div>
                </div>
                <div className="gg-der">
                    {this.showDefineList(this.props.elem.defineList)}
                </div>
                <div>
                    <p className="side-t mar-t brou">DOH Criteria</p>
                    <div className="flex-inst">
                        <div >
                            <p className="tit-ins">DOH LOINC</p>
                            <input className="simple-input wide33" value={this.props.elem.dohLoinc ? this.props.elem.dohLoinc : ""} onChange={this.props.changeDohLoinc} />
                        </div>
                        <div >
                            <p className="tit-ins">{`Criteria + < >`}</p>
                            <input className="simple-input wide33" value={this.props.elem.dohCriteria ? this.props.elem.dohCriteria : ""} onChange={this.props.changeDohCriteria} />
                        </div>
                        <div >
                            <p className="tit-ins">Result</p>
                            <input className="simple-input wide33" value={this.props.elem.dohResult ? this.props.elem.dohResult : ""} onChange={this.props.changeDohResults} />
                        </div>
                    </div>
                </div>



                <p className="side-t mar-t">Critical Ranges</p>
                <div className="flex-inst ali-end">
                    <div className="bas17">
                        <p className="tit-ins">Age from</p>
                        <input className="simple-input-n" type="text" ref={el => this.ageFromC = el} />
                    </div>
                    <div className="bas17">
                        <p className="tit-ins">Age to</p>
                        <input className="simple-input-n" type="text" ref={el => this.ageToC = el} />
                    </div>
                    <div className="bas17">
                        <p className="tit-ins">Gender</p>
                        <DropDown
                            option={this.props.genderCrit}
                            status={this.props.isGenCritOpen}
                            menu={this.gender}
                            id="genderCrit" />
                    </div>
                    <div className="bas17">
                        <p className="tit-ins">Low</p>
                        <input className="simple-input-n" type="text" ref={el => this.lowC = el} />
                    </div>
                    <div className="bas17">
                        <p className="tit-ins">High</p>
                        <input className="simple-input-n" type="text" ref={el => this.highC = el} />
                    </div>
                    <div onClick={this.addCriRanges} className="add-btn">add</div>
                </div>
                <div className="max-hei">
                    {this.showCriticalRanges(this.props.elem.criticalRanges)}
                </div>


                <p className="side-t mar-t">Nornal Ranges</p>
                <div className="flex-inst ali-end">
                    <div className="bas17">
                        <p className="tit-ins">Age from</p>
                        <input className="simple-input-n" type="text" ref={el => this.ageFrom = el} />
                    </div>
                    <div className="bas17">
                        <p className="tit-ins">Age to</p>
                        <input className="simple-input-n" type="text" ref={el => this.ageTo = el} />
                    </div>
                    <div className="bas17">
                        <p className="tit-ins">Gender</p>
                        <DropDown
                            option={this.props.genderNorm}
                            status={this.props.isGenNormOpen}
                            menu={this.gender}
                            id="genderNorm" />
                    </div>
                    <div className="bas17">
                        <p className="tit-ins">Low</p>
                        <input className="simple-input-n" type="text" ref={el => this.low = el} />
                    </div>
                    <div className="bas17">
                        <p className="tit-ins">High</p>
                        <input className="simple-input-n" type="text" ref={el => this.high = el} />
                    </div>
                    <div onClick={this.addRanges} className="add-btn">add</div>
                </div>
                <div className="max-hei">
                    {this.showNormalRanges(this.props.elem.nornalRanges)}
                </div>


                <p className="side-t mar-t">Interpratation</p>
                <textarea
                    className="gross-other"
                    value={this.props.elem.interpratation ? this.props.elem.interpratation : ""}
                    onChange={this.props.changeInter}
                ></textarea>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    types: state.types,
    elem: state.element,
    departments: state.deps,
    chosenDep: state.dropdownOption.departament,
    isDepOpen: state.dropdownStatus.departament,
    isInsTypeOpen: state.dropdownStatus.instrumentType,
    chosenType: state.dropdownOption.resultTypes,
    isTypeOpen: state.dropdownStatus.resultTypes,
    chosenAlergy: state.dropdownOption.alergy,
    isAlergyOpen: state.dropdownStatus.alergy,
    chosenDrug: state.dropdownOption.drug,
    isDrugOpen: state.dropdownStatus.drug,
    finalize: state.dropdownOption.finalize,
    isFinalizeOpen: state.dropdownStatus.finalize,
    alpha: state.dropdownOption.alpha,
    isAlphaOpen: state.dropdownStatus.alpha,
    defineList: state.defineList,
    normalRangesList: state.normalRangesList,
    criticalRangesList: state.criticalRangesList,
    genderCrit: state.dropdownOption.genderCrit,
    isGenCritOpen: state.dropdownStatus.genderCrit,
    genderNorm: state.dropdownOption.genderNorm,
    isGenNormOpen: state.dropdownStatus.genderNorm,
    isCreateMode: state.isCreateModeElem
})

const mapDispatchToProps = dispatch => ({
    addDef: (item) => dispatch(addDef(item)),
    delDef: (index) => dispatch(delDef(index)),
    addRanges: (item) => dispatch(addRanges(item)),
    delRanges: (index) => dispatch(delRanges(index)),
    addCriRanges: (item) => dispatch(addCriRanges(item)),
    delCriRanges: (index) => dispatch(delCriRanges(index)),
    changeInsCode: (e) => dispatch(changeInsCode(e)),
    changeHcLow: (e) => dispatch(changeHcLow(e)),
    changeHcHigh: (e) => dispatch(changeHcHigh(e)),
    changeCode: (e) => dispatch(changeCode(e)),
    changeDesc: (e) => dispatch(changeDesc(e)),
    changeUnits: (e) => dispatch(changeUnits(e)),
    changeLoinc: (e) => dispatch(changeLoinc(e)),
    changeAnlLow: (e) => dispatch(changeAnlLow(e)),
    changeAnlHigh: (e) => dispatch(changeAnlHigh(e)),
    changeDohLoinc: (e) => dispatch(changeDohLoinc(e)),
    changeDohCriteria: (e) => dispatch(changeDohCriteria(e)),
    changeDohResults: (e) => dispatch(changeDohResults(e)),
    changeInter: (e) => dispatch(changeInter(e)),
    getTypes: () => dispatch(getTypes()),
    handleUpdate: () => dispatch(handleUpdate()),
    handleCreate: () => dispatch(handleCreate()),
    getDeps: () => dispatch(getDeps()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ElementSettings)
