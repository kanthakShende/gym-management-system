import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../api-client/api-module';

export default function NavBar() {

  const [login, setLogin] = useState();
  const [type, setType] = useState();
  const [id, setId] = useState();
  const navigate = new useNavigate();

  useEffect(() => {
    setLogin(sessionStorage.getItem("login"));
    setType(sessionStorage.getItem("usertype"));
    setId(sessionStorage.getItem("userId"));
  }, [login]);
  

  const handelLogout = async () => {
    await logoutUser();
    setLogin(false);
    navigate("/");
  }
  return (
    <nav className="navbar">
      <div className="barnd-name"><a href="/"><span>Fitsta</span>.com</a></div>
      <div className="nav-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/equipment-store">Store</Link></li>
          <li><Link to="/home">Membership</Link></li>
          <li><Link to="/home" >About us</Link></li>
          <li><Link to="/home">Contact Us</Link></li>
         {login && type==='user'&& <li><Link to={"/user-dashboard/"+id}>DashBoard</Link></li>}
         {login && type==='admin'&& <li><Link to="/admin-dashboard">DashBoard</Link></li>}
         {login && type==='trainer'&& <li><Link to={"/trainer-dashboard/"+id}>DashBoard</Link></li>}

        </ul>
        {!login && <div className="login-btn"><Link to="/login">Login/Sign Up</Link></div>}
        {login && <div className="login-btn" onClick={handelLogout}>LogOut</div>}
      </div>
    </nav>
  )
}
