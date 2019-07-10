import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { setTestRelative, setCreateMode } from '../store/actions/Test';



export class TestsList extends Component {

    initColumns = () => {
        return [
            {
                Header: 'Code',
                accessor: 'code',
            },
            {
                Header: 'Description',
                accessor: 'description',
            },

        ];
    }

    handleRowClick = (state, rowInfo, column, instance) => {
        if (rowInfo) {
            return {
                onClick: (e, handleOriginal) => this.props.setTestRelative(rowInfo.index),
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
        this.props.setCreateMode();
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
        return this.renderList(this.props.list, `No any tests...`);
    }
}

const mapStateToProps = (state) => ({
    selected: state.selectedTestRow,
    isLoading: state.testsLoading,
    isErrored: state.testsErrored,
    list: state.tests,
})

const mapDispatchToProps = dispatch => ({
    setTestRelative: (index) => dispatch(setTestRelative(index)),
    setCreateMode: () => dispatch(setCreateMode()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TestsList)
