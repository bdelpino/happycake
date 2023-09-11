const Contacto = function () {
    return (
                <div className="contactForm">
                                                <h1>Cuentanos. ¿En qué te podemos ayudar?</h1>
                                                <div className="formInput">
                                                        <p>Correo</p>
                                                        <input type="text" placeholder="name@example.com"></input>
                                                </div>
                                                <div className="formInput">
                                                        <p>Descripción</p>
                                                        <input type="text" placeholder="Descripción"></input>
                                                </div>
                                                
                                                <button className="bg-danger navibarColor">Enviar</button>


                </div>

            )



}

export default Contacto