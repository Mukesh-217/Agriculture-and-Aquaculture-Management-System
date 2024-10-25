import React from 'react'
import TeamCard from './TeamCard'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Divider from '@material-ui/core/Divider';
import { Fade } from "react-reveal";
import './TeamCard.scss'
function TeamComponent(props) {
    React.useEffect(()=>{
        props.setAnime(false)
    },[])
    return (
        <div>
            <Header theme={props.theme} setTheme={props.setTheme} />
            <Fade bottom duration={2000} distance="40px">
            <div className="hellogow" >
        <Divider variant='fullWidth'  style={{width:'95vw',background:props.theme.text,marginLeft:'auto',marginBottom: '10px',marginRight:'auto'}} />
                <h3 style={{color:props.theme.text}}>PRESIDENTS</h3>
        <Divider style={{color:props.theme.text,width:'95vw',background:props.theme.text,marginLeft:'auto',marginRight:'auto',marginBottom: '20px',marginTop:'10px'}} />
        </div>
        </Fade>
        <Fade bottom duration={2000} distance="40px">
            <div style={{display:'flex',flexFlow: "row wrap",flexDirection: "row",marginRight:'auto',marginLeft:'auto',maxWidth:'95vw',justifyContent: 'space-evenly'}}>
            
            <TeamCard 
            theme={props.theme}
            img="https://firebasestorage.googleapis.com/v0/b/surabhi-2k21.appspot.com/o/Gopal%20(3).png?alt=media&token=97c356f8-ebfd-4ba7-953b-87960683a26e"
            name="Gopal"
            role="Chief"
            setTheme={props.setTheme}  />
            <TeamCard 
            img={"https://firebasestorage.googleapis.com/v0/b/surabhi-2k21.appspot.com/o/Krishna.png?alt=media&token=1b868431-4d7e-4f84-95cc-aebc8a7e41f3"}
            name="Ananth K, Krishna"
            role="Chief"
            theme={props.theme}
            setTheme={props.setTheme}  />
            <TeamCard 
            theme={props.theme}
            setTheme={props.setTheme}  />
            <TeamCard 
            theme={props.theme}
            setTheme={props.setTheme}  />
            
            </div>
            </Fade>
           
            <Fade bottom duration={2000} distance="40px">
            <div className="hellogow" >
        <Divider variant='fullWidth'  style={{width:'95vw',background:props.theme.text,marginLeft:'auto',marginBottom: '10px',marginRight:'auto'}} />
                <h3 style={{color:props.theme.text}}>OPERATIONAL EXECUTIVE</h3>
        <Divider style={{color:props.theme.text,width:'95vw',background:props.theme.text,marginLeft:'auto',marginRight:'auto',marginBottom: '20px',marginTop:'10px'}} />
        </div>
        </Fade>
        <Fade bottom duration={2000} distance="40px">
            <div style={{display:'flex',flexFlow: "row wrap",flexDirection: "row",marginRight:'auto',marginLeft:'auto',maxWidth:'95vw',justifyContent: 'space-evenly'}}>
            
            <TeamCard 
            theme={props.theme}
            setTheme={props.setTheme}  />
            <TeamCard 
            theme={props.theme}
            setTheme={props.setTheme}  />
            <TeamCard 
            theme={props.theme}
            setTheme={props.setTheme}  />
            <TeamCard 
            theme={props.theme}
            setTheme={props.setTheme}  />
            
            </div>
            </Fade>
        
      <Footer theme={props.theme} />
        </div>
    )
}

export default TeamComponent
