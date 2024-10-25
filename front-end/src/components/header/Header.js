import React, { useState } from "react";
import "./Header.scss";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import { style } from "glamor";
import {useLocation} from 'react-router-dom'
function Header(props) {
  const theme = props.theme;
  let id1= useLocation();
  const styles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: props.theme.name === "light" ? "#7CD1F7" : "#292C3F",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${
        props.theme.name === "light" ? "#F7D774" : "#646464"
      }`,
    },
  });

  const link = settings.isSplash ? "/splash" : "home";

  const [currTheme, setCurrTheme] = useState(props.theme);

  function changeTheme() {
    if (currTheme === "light") {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
    } else {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
      setCurrTheme("light");
    }
  }

  const icon =
    props.theme.name === "dark" ? (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    ) : (
      <CgSun
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    );
  return (
    <Fade top duration={1000} delay={((id1.pathname==='/home' || id1.pathname==='/')&&props.anime==true)?8000:(id1.pathname==='/AboutMe')?4000:0} distance="20px">
      <div>
        <header className="header">
          <NavLink to={link} tag={Link} className="logo">
            
            <span style={{ color: theme.text }}></span>
            <span className="logo-name" style={{ color: theme.text }}> 
            <img src={require(`../../assests/images/a25.jpeg`)} style={{width: "400px",cursor: 'pointer',margin:'0px 10px -12px 0px'}} />
           
              &nbsp;&nbsp;{greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}></span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <NavLink
                className="homei"
                to="/home"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="ec"
                to="/about"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                About
              </NavLink>
            </li>
           
            
            
    
             <li>
              <NavLink
                className="ec"
                to="/crops"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Availabilities &nbsp; in &nbsp; Store
              </NavLink>
            </li>

            <li>
              <NavLink
                className="projects"
                to="/homepage"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Homepage
              </NavLink>
            </li>
          
            <li>
              <NavLink
                className="er"
                to="/login"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                LOGIN
              </NavLink>
            </li>
            <li>
              <NavLink
                className="ec"
                to="/register"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                REGISTER
              </NavLink>
            </li>
           
           
           
            <button {...styles} onClick={changeTheme}>
              {icon}
            </button>
          </ul>
        </header>
        {/* <marquee style={{color:'#F7D5A0',fontFamily:"'Spectral', serif"}} direction="left">
Free Registrations for all events!&nbsp;&nbsp; NO AGE LIMIT!!
</marquee> */}
      </div>
    </Fade>
  );
}

export default Header;
