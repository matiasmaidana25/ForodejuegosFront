import React from 'react';
import "./footer.css"
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';

class footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <MDBFooter className='text-center' color='white' bgColor='dark'>
                <MDBContainer className='p-4'>
                    <section className='mb-4'>
                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='google' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='instagram' />
                        </MDBBtn>
                    </section>

                    <section className=''>
                        <form action=''>
                            <MDBRow className='d-flex justify-content-center'>
                                <MDBCol size="auto">
                                    <p className='pt-2'>
                                        <strong>Registrate para tener mas informacion!</strong>
                                    </p>
                                </MDBCol>

                                <MDBCol md='5' start='12'>
                                    <MDBInput contrast type='email' label='Email address' className='mb-4' />
                                </MDBCol>

                                <MDBCol size="auto">
                                    <MDBBtn outline color='light' type='submit' className='mb-4'>
                                        Suscribite
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </form>
                    </section>

                    <section className='mb-4'>
                        <p>
                            Esta pagina fue creada para tener debates, guias, trucos y todo lo que puedas imaginar para ayudarte a superar cualquier juego
                        </p>
                    </section>

                    <section className=''>
                        <MDBRow>
                            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Comunidad</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Normas de uso
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Ayuda
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Foros
                                        </a>
                                    </li>
                                </ul>
                            </MDBCol>

                            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Titulo de la pagina</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Sobre la pagina
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Publicidad
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Informacion legal
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Contacto
                                        </a>
                                    </li>
                                </ul>
                            </MDBCol>
                        </MDBRow>
                    </section>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                </div>
            </MDBFooter>
        );
    }
}
export default footer;