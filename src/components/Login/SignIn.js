import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class SignIn extends Component {
    render() {
        return (
            <div className="container border border-primary rounded col-3 mt-5">
                <div className="row justify-content-md-center">
                    <form>
                        <div className="form-group">
                            <label for="inputEmail">Email de Usuario</label>
                            <input type="email" className="form-control" id="user_email" placeholder="Introduce el email" />
                        </div>
                        <div className="form-group">
                            <label for="inputPassword">Contraseña</label>
                            <input type="password" className="form-control" id="user_pass" placeholder="Contraseña" />
                        </div>
                        <Link to='/' className="submit-button">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn;

