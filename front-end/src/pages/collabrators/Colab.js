import React from 'react'
import './Colab.scss'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
function Colab(props) {
    React.useEffect(()=>{
        props.setAnime(false)
    },[])
    console.log(props.theme)
    return (
        <div>
            <Header theme={props.theme} setTheme={props.setTheme} />
            <div style={{marginLeft:'5vh',width:'95vw'}}>
                <Fade bottom duration={3000} >
                    <h1 style={{marginTop:'50px',textAlign: 'center',margin:'0 0 10px 0'}}> </h1>
                </Fade>
                <Fade bottom duration={2000}>
                <img src={require(`../../assests/images/a24.jpeg`)} style={{width: "250px",margin:'25px 25px 25px 25px'}} />
                </Fade>
            </div>
            <div style={{marginLeft:'5vh',width:'95vw'}}>
                <Fade bottom duration={3000} >
                    <h1 style={{marginTop:'50px',textAlign: 'center',margin:'0 0 10px 0'}}>AVAILABILITES </h1>
                </Fade>
                <Fade bottom duration={2000}>
                <img src={require(`../../assests/images/a18.jpeg`)} style={{width: "250px",margin:'25px 25px 25px 25px'}} />
                <br>APPLE</br>
                </Fade>
                <Fade bottom duration={2000}>
                <img src={require(`../../assests/images/a19.jpeg`)} style={{width: "250px",margin:'25px 25px 25px 25px'}} />
                </Fade>
                <Fade bottom duration={2000}>
                <img src={require(`../../assests/images/a20.jpeg`)} style={{width: "250px",margin:'25px 25px 25px 25px'}} />
                </Fade>
                <Fade bottom duration={2000}>
                <img src={require(`../../assests/images/a21.jpeg`)} style={{width: "250px",margin:'25px 25px 25px 25px'}} />
                </Fade>
                <Fade bottom duration={2000}>
                <img src={require(`../../assests/images/a22.jpeg`)} style={{width: "250px",margin:'25px 25px 25px 25px'}} />
                </Fade>
                <Fade bottom duration={2000}>
                <img src={require(`../../assests/images/a23.jpeg`)} style={{width: "250px",margin:'25px 25px 25px 25px'}} />
                </Fade>
            </div>
            
            <Footer theme={props.theme} />
        </div>
    )
}

export default Colab
