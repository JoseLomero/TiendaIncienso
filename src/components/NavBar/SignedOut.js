import React from 'react';
import { NavLink } from 'react-router-dom';

class SignedOut extends React.Component {

    render() {
        console.log(this.props.action);
        return (
            <div>
                <NavLink to="/signin">
                    <button
                        className="btn btn-info btn-md m-1">
                        <i className="fas fa-user-plus" />
                        <span> Regístrate</span>
                    </button>
                </NavLink>
                <NavLink to="/">
                    <button
                        onClick={ this.props.action}
                        className="btn btn-info btn-md m-1">
                        <i className="fas fa-user" />
                        <span> Login</span>
                    </button>
                </NavLink>
            </div>
        )
    }
}

export default SignedOut;
