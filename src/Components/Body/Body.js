import React from 'react';
import './body.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

class body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <body>
                <div className="d-flex justify-content-around">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Playstation</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./images/playstation.png" />
                        <Card.Body>
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                <Placeholder xs={6} /> <Placeholder xs={8} />
                            </Placeholder>
                            <Placeholder.Button variant="primary" xs={6} />
                        </Card.Body>
                    </Card>
                </div>
                ;

            </body>
        )
    }
}
export default body;