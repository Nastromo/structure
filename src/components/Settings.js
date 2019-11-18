import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentsCodeList from './CommentsCodeList'

export class Settings extends Component {
    render() {
        return (
            <div className="two-parts">
                <CommentsCodeList />
                <div></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
