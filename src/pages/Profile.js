import React from 'react'
import { Container } from '@material-ui/core'

export default function Profile(props) {
    return (
        <Container>
            <div>{props.match.params.id}</div>
            <div> כאן יש מידע על החבר ואני מניח שאפשר לערוך</div>
        </Container>
    )
}
