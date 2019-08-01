import React from "react";
import { Link } from 'react-router-dom';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import IsoNOTrans from '../../img/icono_no-transparencia.png';
import './navStyle.css';

// import SignedUser from './SignedUser';

class NavBar extends React.Component {
   constructor(props) {
      super(props);
     
      this.state = {
         user_Status: false,
      };

   }

   userLogin = () => {
      this.setState({
         user_Status: true
      });
   }

   userLogOut = () => {
      this.setState({
         user_Status: false
      })
   }

   render() {
      return (
         <div>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
               <Link to='/'><img src={IsoNOTrans} className="isotipo" alt=""/></Link>
               <p
                  className="navbar-brand  m-1"
                  style={{ color: "white" }}>
                  <Link to='/' className="brand-name">La Botica del Incienso</Link>
               </p>

               {this.state.user_Status ?
                  <SignedIn action={this.userLogOut} />
                  : <SignedOut action={this.userLogin} />}
            </div>
         </div>
      );
   }
}

export default NavBar;
