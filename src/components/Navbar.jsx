import {Link} from 'react-router-dom'

const Navbar = function ()  {

                                return  (
                                                <nav className="navbar navbar-expand-lg navbar-light bg-danger navibarColor">
                                                <div className="container-fluid">
                                                <a className="navbar-brand text-reset" href="#">Happy Cake</a>
                                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span className="navbar-toggler-icon"></span>
                                                </button>
                                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                                    <div className="navbar-nav">
                                                                            <div>
                                                                                    <Link className="navibarColor" to = "./views/Home.jsx">Home</Link>
                                                                            </div>

                                                                            <div>
                                                                                    <Link className="navibarColor" to = "./views/Contacto.jsx">Contacto</Link>
                                                                            </div>
                                                                            
                                                    </div>
                                                </div>
                                                </div>
                                            </nav>




                                        )



                            }

export default Navbar