import React from "react";
import { NavLink } from 'react-router-dom';
import './sign.css';


class SignedIn extends React.Component {
    render() {

        return (
            <div>
                <NavLink to='/mantenimiento' className="formularios">
                    <button className="btn btn-success btn-md m-1 mx-4">
                        <i className="fas fa-book" />
                        <span> Mantenimiento</span>
                    </button>
                </NavLink>
{/* 
                <NavLink to='/' className="NNNN">
                    <button className="btn btn-secondary btn-md m-1 mx-4 user-btn">User_Name</button>
                </NavLink> */}

                <NavLink to='/' className="log-out">
                    <button
                        onClick={this.props.action}
                        className="btn btn-info btn-md m-1">
                        <i className="fas fa-user-plus" />
                        <span> Log Out</span>
                    </button>
                </NavLink>
            </div>
        )
    }
}

export default SignedIn;
