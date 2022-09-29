import React from 'react';
import './footer.css';

class footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <footer class="footer-secundario">
                    <div>
                        <div class="row">
                            <div class="footer-col">
                                <h4>Ayuda</h4>
                                <ul>
                                    <a href="#/">Contactos</a>
                                    <a href="#/">Registro</a>
                                    <a href="#/">Normas</a>
                                </ul>
                            </div>
                            <div class="footer-cool">
                                <h4>Informacion</h4>
                                <ul>
                                    <a href="#/">Politica de privacidad</a>
                                    <a href="#/">¡Trabaja con nosotros!</a>
                                    <a href="#/">Preguntas frecuentes</a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default footer;