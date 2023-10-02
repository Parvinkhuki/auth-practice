import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Authprovider';

const Banner = () => {
 const navStyle = 
    ({isActive})=>{
        return{
            color: isActive?'pink':"",
            fontWeight: isActive? "bold":"", 
            textDecoration:isActive? 'underline':''
          
        }

    }
   const {user,signOut}=useContext(AuthContext)

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Website</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <NavLink to="/" style={navStyle} className='text-3xl'><li><a>Home</a></li></NavLink>
      <NavLink to="/register" style={navStyle} className='text-3xl'><li><a>Register</a></li></NavLink>
     {
                        user?.email ? 
                        <NavLink to="/login" style={navStyle} className='text-3xl' onClick={signOut}
                        ><li>Logout
                        </li></NavLink>   
                            :
     <NavLink to="/login" style={navStyle} className='text-3xl'><li>Login
</li></NavLink>}
    </ul>
  </div>
</div>
        </div>
    );
    };

export default Banner;