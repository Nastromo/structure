import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';



export class InstrumentsCodes extends Component {
    initColumns = () => {
        return [
            {
                Header: 'Test Code',
                accessor: 'code',
                style: {
                    textAlign: 'left',
                }
            },
            {
                Header: 'Description',
                accessor: 'description',
            },
            {
                Header: 'Instrument Code',
                accessor: 'instrumCode',
            }
        ];
    }


    renderList = (list, text) => {
        return (
            <div className="content-table wide">
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
        return this.renderList(this.props.list, `No any codes...`);
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentsCodes)
