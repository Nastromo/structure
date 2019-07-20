import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { getElements, showElement, setCreateMode } from '../store/actions/Elements';




export class ElementsList extends Component {
    componentDidMount() {
        this.props.getElements();
    }

    initColumns = () => {
        return [
            {
                Header: 'Code',
                accessor: 'code',
            },
            {
                Header: 'Type',
                accessor: 'resultType',
            },
            {
                Header: 'Department',
                accessor: 'departament',
            }
        ];
    }

    handleRowClick = (state, rowInfo, column, instance) => {
        if (rowInfo) {
            return {
                onClick: (e, handleOriginal) => this.props.showElement(rowInfo.index),
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
        this.props.setCreateMode(true);
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
        return this.renderList(this.props.list, `No any elements...`);
    }
}

const mapStateToProps = (state) => ({
    list: state.elementsList,
    selected: state.activeElemRow
})

const mapDispatchToProps = dispatch => ({
    showElement: (index) => dispatch(showElement(index)),
    getElements: () => dispatch(getElements()),
    setCreateMode: (bool) => dispatch(setCreateMode(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ElementsList)
