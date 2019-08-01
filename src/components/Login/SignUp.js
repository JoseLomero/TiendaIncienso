import React, { Component } from 'react'

class SignUp extends Component {
    render() {
        return (
            <div>
                <form>
                    
                    <div className="form-group col-6">
                        <label for="inputName">Nombre de Usuario</label>
                        <input type="text" className="form-control" id="user_nombre" placeholder="Introduce el nombre de Usuario" />
                    </div>
                    <div className="form-group col-3">
                        <label for="inputDNI">DNI</label>
                        <input type="text" className="form-control" id="user_dni" placeholder="Introduce el DNI" />
                    </div>
                    <div className="form-group">
                        <label for="inputEmail">Email de Usuario</label>
                        <input type="email" className="form-control" id="user_email" placeholder="Introduce el email" />
                    </div>
                    <div className="form-group">
                        <label for="inputPassword">Contraseña</label>
                        <input type="password" className="form-control" id="user_pass" placeholder="Contraseña" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default SignUp;