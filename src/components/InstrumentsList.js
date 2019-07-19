import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { getInstrums, showInstrum, createMode } from '../store/actions/Instrums';



export class InstrumentsList extends Component {
    componentDidMount() {
        this.props.getInstrums();
    }

    initColumns = () => {
        return [
            {
                Header: 'Type',
                accessor: 'type',
            },
            {
                Header: 'Department',
                accessor: 'department',
            }
        ];
    }

    handleRowClick = (state, rowInfo, column, instance) => {
        if (rowInfo) {
            return {
                onClick: (e, handleOriginal) => this.props.showInstrum(Number(rowInfo.index)),
                style: {
                    fontWeight: rowInfo.index === this.props.selected ? '700' : '600',
                    color: rowInfo.index === this.props.selected ? '#1ab394' : '#4e4e4e',
                    background: rowInfo.index === this.props.selected ? '#e2fff9' : '',
                }
            }
        } else {
            return {}
        }
    }

    handleCreate = () => {
        this.props.createMode(true);
    }

    renderList = (list, text) => {
        return (
            <div className="content-table small-t">
                <div onClick={this.handleCreate} className="create">Create</div>
                <ReactTable
                    data={list}
                    getTdProps={this.handleRowClick}
                    columns={this.initColumns()}
                    resizable={false}
                    filterable={true}
                    defaultPageSize={15}
                    noDataText={text}
                />
            </div>
        )
    }

    render() {
        if (this.props.isLoading) return this.renderList([], `Loading list...`);
        if (this.props.isErrored) return this.renderList([], `Error occurred...`);
        return this.renderList(this.props.list, `No any instruments...`);
    }
}

const mapStateToProps = (state) => ({
    list: state.instrums,
    selected: state.activeInstrumRow,
})

const mapDispatchToProps = dispatch => ({
    getInstrums: () => dispatch(getInstrums()),
    showInstrum: (index) => dispatch(showInstrum(index)),
    createMode: (bool) => dispatch(createMode(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentsList)
