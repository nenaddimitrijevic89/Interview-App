import React from 'react';
import { Col, Card, Icon, CardTitle } from 'react-materialize';
import avatar from '../../images/avatar.jpg';

const Candidate = ({ name, email }) => {
    return (

        <Col
            m={6}
            s={6}
        >
            <Card
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={avatar}>Card Title</CardTitle>}
                revealIcon={<Icon>more_vert</Icon>}
            >
                {name}
                {email}
            </Card>
        </Col>

    )
}

export { Candidate };