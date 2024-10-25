import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { NavLink,Link } from "react-router-dom";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          
        <span role="img">&#169;</span> &nbsa;AQRICULTURE &npa; AND 
        &nbsa; AQUACULTURE &nbsp;&nbsp;<span><a href="" >
       
        <NavLink to='/AboutMe' 
        tag={Link}
        >
          Web developer
          </NavLink>
          </a></span>
       
        </p>
      </Fade>
    </div>
  );
}
