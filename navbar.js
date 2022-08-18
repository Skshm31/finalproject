import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './design.css';
import { Link } from "react-router-dom";
function Navbar(){
    const [search,searchfind]=useState("")
    const searchfindch=(event)=>{
        searchfind(event.target.value)
    }
    const showblog=(event)=>{
        //showblogs()
        searchfind('')
    }
    return (
        <div className="container">
    <div className="row">
    <nav className="navbar navbar-fixed-top navbar-expand-lg navcol " id="navbar">
        <div className="brand"><a className="navbar-brand brand" href="#">User name</a></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse navbarflex" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto uldesign">
            <li className="nav-item lidesign">
              <Link to={{pathname:`/`}}><div className="nav-link">Home</div></Link>
            </li>
            <li className="nav-item lidesign">
            <Link to={{pathname:`/blogs`}}><div className="nav-link">Profile</div></Link>
              </li>
              <li className="nav-item lidesign" >
              <Link to={{pathname:`/blogs/add`}}><div className="nav-link">Add blogs</div></Link>
              </li>
              <li>
                <label className="searchfield"> 
              <input value={search} onChange={searchfindch} placeholder="search the blog"></input>
              <button onClick={showblog}>Search</button></label>
                </li>  
          </ul></div></nav></div>
</div>

  );
}
export default Navbar