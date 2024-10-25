import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import IntroText from "../../containers/greeting/IntroText";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Updates from "../../containers/updates/Updates";
import NewEventCard from "../newevent/newEvent";
import { Fade } from "react-reveal";
import { colors } from "@material-ui/core";
function Home(props) {
  React.useEffect(() => {
    if(props.anime==true) {
      setTimeout(() =>{props.setAnime(false)},8000)
    }
  }, [[props.anime]])
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} anime={props.anime} setAnime={props.setAnime} />
      {(props.anime===false)?(
      <div id="fly-in" style={{height:'20vh',marginTop:'25vh'}} >
          <div>AQRICULTURE AND AQUACULTURE</div> 
          
        </div>
        ):(
          <></>
        )}
    </div>
  );
}

export default Home;
