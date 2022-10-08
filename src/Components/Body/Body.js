import React from 'react';
import './body.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Accordion from 'react-bootstrap/Accordion';
class body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <body>
                <div className="d-flex justify-content-around">
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="./images/playstation.png" />
                        <Card.Body>
                            <Card.Title>Playstation</Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Button variant="primary">Entra para ver mas</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem', minHeight: 1 }}>
                        <Card.Img variant="top" src="./images/xbox.png" />
                        <Card.Body>
                            <Card.Title>Xbox</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            <Button variant="primary">Entra para ver mas</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="./images/Nintendo.png" />
                        <Card.Body>
                            <Card.Title>Nintendo</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button variant="primary">Entra para ver mas</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="./images/pc.png" />
                        <Card.Body>
                            <Card.Title>PC</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button variant="primary">Entra para ver mas</Button>
                        </Card.Body>
                    </Card>
                </div>;
                <div>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>PC &nbsp;</Accordion.Header>

                            <Accordion.Body>
                                <img src="./images/pc.png"></img>
                                <p>
                                    Un juego de PC, también llamado juego de ordenador, juego de computador o juego de computadora en distintos países hispanos, es un tipo de videojuego reproducido en un ordenador personal en vez de una videoconsola o máquina de arcade. Entre sus características principales se incluyen: mayor diversidad y selección por parte del usuario de hardware y software y, por lo general, una capacidad mayor de configuraciones de entrada y salida de vídeo y audio. La naturaleza descoordinada del mercado de juegos de PC y, actualmente, su escasez de formatos físicos dificultan la posibilidad de hacer una evaluación precisa de su catálogo. En 2018, el mercado global de juegos de PC se valoró en torno a 27,7 mil millones de dólares.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Playstation &nbsp;</Accordion.Header>
                            <Accordion.Body>
                                <img src="./images/playstation.png"></img>
                                <p>
                                    La marca se introdujo por primera vez el 3 de diciembre de 1994 en Japón1​ y ha desarrollado y publicado cinco videoconsolas de sobremesa, que incluyen un centro de medios de comunicación y un servicio en línea, posteriormente se introdujeron revistas y computadoras.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Nintendo &nbsp;</Accordion.Header>
                            <Accordion.Body>
                                <img src="./images/Nintendo.png"></img>
                                <p>
                                    En 1889, Fusajiro Yamauchi fundó la empresa Nintendo Koppai para producir cartas hanafuda, las barajas de naipes tradicionales japonesas. Poco a poco, la marca se adentró en los juegos electrónicos, pero no sería hasta 1977 cuando comercializa su primera videoconsola: Color TV Game.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Xbox &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-xbox" viewBox="0 0 16 16">
                                <path d="M7.202 15.967a7.987 7.987 0 0 1-3.552-1.26c-.898-.585-1.101-.826-1.101-1.306 0-.965 1.062-2.656 2.879-4.583C6.459 7.723 7.897 6.44 8.052 6.475c.302.068 2.718 2.423 3.622 3.531 1.43 1.753 2.088 3.189 1.754 3.829-.254.486-1.83 1.437-2.987 1.802-.954.301-2.207.429-3.239.33Zm-5.866-3.57C.589 11.253.212 10.127.03 8.497c-.06-.539-.038-.846.137-1.95.218-1.377 1.002-2.97 1.945-3.95.401-.417.437-.427.926-.263.595.2 1.23.638 2.213 1.528l.574.519-.313.385C4.056 6.553 2.52 9.086 1.94 10.653c-.315.852-.442 1.707-.306 2.063.091.24.007.15-.3-.319Zm13.101.195c.074-.36-.019-1.02-.238-1.687-.473-1.443-2.055-4.128-3.508-5.953l-.457-.575.494-.454c.646-.593 1.095-.948 1.58-1.25.381-.237.927-.448 1.161-.448.145 0 .654.528 1.065 1.104a8.372 8.372 0 0 1 1.343 3.102c.153.728.166 2.286.024 3.012a9.495 9.495 0 0 1-.6 1.893c-.179.393-.624 1.156-.82 1.404-.1.128-.1.127-.043-.148ZM7.335 1.952c-.67-.34-1.704-.705-2.276-.803a4.171 4.171 0 0 0-.759-.043c-.471.024-.45 0 .306-.358A7.778 7.778 0 0 1 6.47.128c.8-.169 2.306-.17 3.094-.005.85.18 1.853.552 2.418.9l.168.103-.385-.02c-.766-.038-1.88.27-3.078.853-.361.176-.676.316-.699.312a12.246 12.246 0 0 1-.654-.319Z" />
                            </svg></Accordion.Header>
                            <Accordion.Body>

                                <p>
                                    Xbox es una videoconsola doméstica y la primera entrega de la serie de videoconsolas Xbox fabricada por Microsoft. Salió a la venta como la primera incursión de Microsoft en el mercado de las consolas de videojuegos el 18 de octubre de 2001 en Norteamérica, seguida de Australia, Europa y Japón en 2002. Está clasificada como consola de sexta generación, compitiendo con la PlayStation 2 de Sony, el GameCube de Nintendo y la Sega Dreamcast de Sega. También fue la primera gran consola producida por una empresa estadounidense desde el lanzamiento de la Atari Jaguar en 1993.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </body >
        )
    }
}
export default body;