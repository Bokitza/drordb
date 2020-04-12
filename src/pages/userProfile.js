import React, { Component } from 'react'

export class UserProfile extends Component {
    render() {
        return (
            <div>
                <h2> {this.props.user.firstName}</h2>
                <h3>{this.props.user.lastName}</h3>
            </div>
        )
    }
}

export default UserProfile
