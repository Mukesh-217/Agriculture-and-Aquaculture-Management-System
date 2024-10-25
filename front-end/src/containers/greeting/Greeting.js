/*import React from "react";
import "./Greeting.css";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import Updates from "../../containers/updates/Updates";
import { style } from "glamor";

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} delay={(props.anime == true) ? 8000 : 0} distance="40px">
        <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around' }}>
          <img className='abc' src={require(`../../assests/images/mainlogo.png`)} />
        </div>
      </Fade>
    </div>
  );

}*/
