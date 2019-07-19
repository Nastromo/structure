import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubmitButton from './SubmitButton';
import DropDown from './DropDown';
import { addDef, delDef } from '../store/actions/AddDef';
import { addRanges, delRanges } from '../store/actions/NormalRanges';
import { addCriRanges, delCriRanges } from '../store/actions/CriticalRanges';


export class ElementSettings extends Component {
    constructor(props) {
        super(props);
        this.types = [`Instrument`, `Manual`];
        this.alergy = [`Yes`, `No`];
        this.gender = [`All`, `Female`, `Male`];
    }

    inject = (option) => {
        if (option === `Instrument`) {
            return (
                <div >
                    <p className="tit-ins">Ins. Code</p>
                    <input className="simple-input" type="text" value={this.props.insCode} onChange={this.handleChange} />
                </div>
            );
        } else {
            return (
                <div >
                    <p className="tit-ins">Departament</p>
                    <div className="div200w">
                        <DropDown
                            option={this.props.chosenDep}
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
                            option={this.props.finalize}
                            status={this.props.isFinalizeOpen}
                            menu={this.alergy}
                            id="finalize" />
                    </div>
                    <p className="side-t mar-r-gh">Hold Criteria</p>
                    <div className="right-bi-n marg10-n">
                        <div id="deleteIns" className="save-s">
                            <input className="simple-input" type="text" placeholder="Low" value={this.props.low} onChange={this.handleChange} />
                        </div>
                        <div className="save-s">
                            <input className="simple-input" type="text" placeholder="High" value={this.props.high} onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

    showDefineList = (list) => {
        return list.map((item, i) => {
            return (
                <div key={i} className="fle-def">
                    <div className="def-item">
                        {item}
                    </div>
                    <div id={i} onClick={this.delDefine} className="del-all">del</div>
                </div>
            )
        });
    }

    addDefine = (e) => {
        this.props.addDef(this.def.value);
    }

    delDefine = (e) => {
        this.props.delDef(e.target.id);
    }

    showNormalRanges = (list) => {
        return list.map((item, i) => {
            return (
                <div key={i} className="flex-it">
                    <div key={i} className="flex-inst def-item marg-ri">
                        <div className="item-rang">{item.ageFrom}</div>
                        <div className="item-rang">{item.ageTo}</div>
                        <div className="item-rang">{item.gender}</div>
                        <div className="item-rang">{item.low}</div>
                        <div className="item-rang">{item.high}</div>
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

    showCriticalRanges = (list) => {
        return list.map((item, i) => {
            return (
                <div key={i} className="flex-it">
                    <div key={i} className="flex-inst def-item marg-ri">
                        <div className="item-rang">{item.ageFrom}</div>
                        <div className="item-rang">{item.ageTo}</div>
                        <div className="item-rang">{item.gender}</div>
                        <div className="item-rang">{item.low}</div>
                        <div className="item-rang">{item.high}</div>
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
                <div className="del-save">
                    <p className="side-t">Element Definition Deatails</p>
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
                    <div >
                        <p className="tit-ins">Code</p>
                        <input className="simple-input" type="text" value={this.props.code} onChange={this.handleChange} />
                    </div>
                    <div >
                        <p className="tit-ins">Description</p>
                        <input className="simple-input" type="text" value={this.props.description} onChange={this.handleChange} />
                    </div>
                    <div >
                        <p className="tit-ins">Result Type</p>
                        <div className="div200w">
                            <DropDown
                                option={this.props.chosenType}
                                status={this.props.isTypeOpen}
                                menu={this.types}
                                id="resultTypes" />
                        </div>
                    </div>
                    {this.inject(this.props.chosenType)}
                </div>
                <div className="flex-inst">
                    <div >
                        <p className="tit-ins">Units</p>
                        <input className="simple-input" type="text" value={this.props.units} onChange={this.handleChange} />
                    </div>
                    <div >
                        <p className="tit-ins">Alergy</p>
                        <div className="div200w">
                            <DropDown
                                option={this.props.chosenAlergy}
                                status={this.props.isAlergyOpen}
                                menu={this.alergy}
                                id="alergy" />
                        </div>
                    </div>
                    <div >
                        <p className="tit-ins">Drug</p>
                        <div className="div200w">
                            <DropDown
                                option={this.props.chosenDrug}
                                status={this.props.isDrugOpen}
                                menu={this.alergy}
                                id="drug" />
                        </div>
                    </div>
                    <div >
                        <p className="tit-ins">Loinc</p>
                        <input className="simple-input" type="text" value={this.props.loinc} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="del-save gg-start">
                    <p className="side-t mar-ri">Acceptable Numeric Limits</p>
                    <div className="right-bi-n marg10-n">
                        <div id="deleteIns" className="save-s">
                            <input className="simple-input" type="text" placeholder="Low" value={this.props.low} onChange={this.handleChange} />
                        </div>
                        <div className="save-s">
                            <input className="simple-input" type="text" placeholder="High" value={this.props.high} onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                {this.injectHold(this.props.chosenType)}
                <div className="del-save gg-start">
                    <div className="div200w mar-ri">
                        <p className="tit-ins">Alpha Numeric</p>
                        <DropDown
                            option={this.props.alpha}
                            status={this.props.isAlphaOpen}
                            menu={this.alergy}
                            id="alpha" />
                    </div>

                    <div>
                        <div className="right-bi-n marg10-n">
                            <div id="deleteIns" className="save-s">
                                <p className="tit-ins">Define List</p>
                                <input className="simple-input wide-yy" type="text" placeholder="Result Def." ref={el => this.def = el} />
                            </div>
                            <div onClick={this.addDefine} className="add-btn">add</div>
                        </div>
                    </div>
                    <div>
                        <p className="side-t mar-t brou">DOH Criteria</p>
                        <div className="flex-inst">
                            <div >
                                <p className="tit-ins">DOH LOINC</p>
                                <input className="simple-input wide33" type="text" value={this.props.doh} onChange={this.handleChange} />
                            </div>
                            <div >
                                <p className="tit-ins">{`Criteria + < >`}</p>
                                <input className="simple-input wide33" type="text" value={this.props.criteria} onChange={this.handleChange} />
                            </div>
                            <div >
                                <p className="tit-ins">Result</p>
                                <input className="simple-input wide33" type="text" value={this.props.resultD} onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="gg-der">
                    {this.showDefineList(this.props.defineList)}
                </div>




                <p className="side-t mar-t">Critical Ranges</p>
                <div className="flex-inst ali-end">
                    <div >
                        <p className="tit-ins">Age from</p>
                        <input className="simple-input" type="text" ref={el => this.ageFromC = el} />
                    </div>
                    <div >
                        <p className="tit-ins">Age to</p>
                        <input className="simple-input" type="text" ref={el => this.ageToC = el} />
                    </div>
                    <div >
                        <p className="tit-ins">Gender</p>
                        <div className="div200w">
                            <DropDown
                                option={this.props.genderCrit}
                                status={this.props.isGenCritOpen}
                                menu={this.gender}
                                id="genderCrit" />
                        </div>
                    </div>
                    <div >
                        <p className="tit-ins">Low</p>
                        <input className="simple-input" type="text" ref={el => this.lowC = el} />
                    </div>
                    <div >
                        <p className="tit-ins">High</p>
                        <input className="simple-input" type="text" ref={el => this.highC = el} />
                    </div>
                    <div onClick={this.addCriRanges} className="add-btn">add</div>
                </div>
                <div className="max-hei">
                    {this.showCriticalRanges(this.props.criticalRangesList)}
                </div>


                <p className="side-t mar-t">Nornal Ranges</p>
                <div className="flex-inst ali-end">
                    <div >
                        <p className="tit-ins">Age from</p>
                        <input className="simple-input" type="text" ref={el => this.ageFrom = el} />
                    </div>
                    <div >
                        <p className="tit-ins">Age to</p>
                        <input className="simple-input" type="text" ref={el => this.ageTo = el} />
                    </div>
                    <div >
                        <p className="tit-ins">Gender</p>
                        <div className="div200w">
                            <DropDown
                                option={this.props.genderNorm}
                                status={this.props.isGenNormOpen}
                                menu={this.gender}
                                id="genderNorm" />
                        </div>
                    </div>
                    <div >
                        <p className="tit-ins">Low</p>
                        <input className="simple-input" type="text" ref={el => this.low = el} />
                    </div>
                    <div >
                        <p className="tit-ins">High</p>
                        <input className="simple-input" type="text" ref={el => this.high = el} />
                    </div>
                    <div onClick={this.addRanges} className="add-btn">add</div>
                </div>
                <div className="max-hei">
                    {this.showNormalRanges(this.props.normalRangesList)}
                </div>


                <p className="side-t mar-t">Interpratation</p>
                <textarea
                    className="gross-other"
                    value={this.props.interpratation}
                    onChange={this.handleChange}
                ></textarea>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    departments: [`dep 1`, `dep 2`],
    chosenDep: state.dropdownOption.departament,
    isDepOpen: state.dropdownStatus.departament,
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
})

const mapDispatchToProps = dispatch => ({
    addDef: (item) => dispatch(addDef(item)),
    delDef: (index) => dispatch(delDef(index)),
    addRanges: (item) => dispatch(addRanges(item)),
    delRanges: (index) => dispatch(delRanges(index)),
    addCriRanges: (item) => dispatch(addCriRanges(item)),
    delCriRanges: (index) => dispatch(delCriRanges(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ElementSettings)
