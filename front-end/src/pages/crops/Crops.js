import React from 'react'
import './crops.scss'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import  Button  from '@material-ui/core/Button';
function Crops(props) {
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
                <img src={require(`../../assests/images/a1.webp`)} style={{width: "250px",margin:'25px 25px 25px 25px'}} />
                
                      
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
                <img src={require(`../../assests/images/a2.jpeg`)} style={{width: "250px",margin:'25px 25px 25px 25px'}} />
                       APPLES 
                      <Button variant="contained" style={{backgroundColor:'#FF9933'}} onClick={()=>{window.open('https://drive.google.com/file/d/1KXub0n0iRK6D21whFLqDggNMUbKD5fJp/view?usp=share_link')}} >BUY NOW</Button>
                      <Button variant="contained" style={{backgroundColor:'#FF9933'}} onClick={()=>{window.open('https://drive.google.com/file/d/1SK6Bx1LxIcx5ox7RzB_cyOw1aUwF24M0/view?usp=share_link')}}>ADD TO CART</Button>
                </Fade>


                <Fade bottom duration={2000}>
                <img src={require(`../../assests/images/a3.jpeg`)} style={{width: "250px",margin:'25px 25px 25px 25px'}} />
                 GREEN APPLES
                      <Button variant="contained" style={{backgroundColor:'#FF9933'}} onClick={()=>{window.open('https://drive.google.com/file/d/1oIcpjSzHzz_qrlvzSpF140cmVxq8zgsd/view?usp=share_link')}}>BUY NOW</Button>
                      <Button variant="contained" style={{backgroundColor:'#FF9933'}} onClick={()=>{window.open('https://drive.google.com/file/d/1H3o7LmRbru2kQo-yviVUuPvRb6_GHl32/view?usp=share_link')}}>ADD TO CART</Button>
                </Fade>
               
              
                <Fade bottom duration={2000}>
                <img src={require(`../../assests/images/a6.jpeg`)} style={{width: "250px",margin:'25px 25px 25px 25px'}} />
                PROMOGRANATES
                      <Button variant="contained" style={{backgroundColor:'#FF9933'}} onClick={()=>{window.open('https://drive.google.com/file/d/1iwMlmw1QuTJfVuedqGzOj_rlais_k6bB/view?usp=share_link')}}>BUY NOW</Button>
                      <Button variant="contained" style={{backgroundColor:'#FF9933'}} onClick={()=>{window.open('https://drive.google.com/file/d/1QRaA-FQlKqgru-6vbnHS85F61pAp1e2b/view?usp=share_link')}}>ADD TO CART</Button>
                </Fade>
               
               
                <Fade bottom duration={2000}>
                
                <img src={require(`../../assests/images/a12.jpeg`)} style={{width: "250px",margin:'25px 25px 25px 25px'}} />
                CARROT
                      <Button variant="contained" style={{backgroundColor:'#FF9933'}} onClick={()=>{window.open('https://drive.google.com/file/d/1UKwYDksXWe4FZowb5T4A08KNMAzTlUod/view?usp=share_link')}}>BUY NOW</Button>
                      <Button variant="contained" style={{backgroundColor:'#FF9933'}} onClick={()=>{window.open('https://drive.google.com/file/d/1JDbT4-uIP8pAZkL-XX9TxR7dbY_mwqD8/view?usp=share_link')}}>ADD TO CART</Button>
                </Fade>
                
                <Fade bottom duration={2000}>
                <img src={require(`../../assests/images/a14.jpeg`)} style={{width: "250px",margin:'25px 25px 25px 25px'}} />
                TOMATO
                      <Button variant="contained" style={{backgroundColor:'#FF9933'}} onClick={()=>{window.open('https://drive.google.com/file/d/1sX8vBauePvBmJRJm22RrqwxVqJNIJFqW/view?usp=share_link')}}>BUY NOW</Button>
                      <Button variant="contained" style={{backgroundColor:'#FF9933'}} onClick={()=>{window.open('https://drive.google.com/file/d/14ndWe7fbAeOfZWjCgZYOoD6d8CF-YAPu/view?usp=share_link')}}>ADD TO CART</Button>
                </Fade>
                
                <Fade bottom duration={2000}>
                <img src={require(`../../assests/images/a16.jpeg`)} style={{width: "250px",margin:'25px 25px 25px 25px'}} />
                RADISH
                      <Button variant="contained" style={{backgroundColor:'#FF9933'}} onClick={()=>{window.open('https://drive.google.com/file/d/13qhU-YOZEkWIyactOWsJ33r1RZSiVb5E/view?usp=share_link')}}>BUY NOW</Button>
                      <Button variant="contained" style={{backgroundColor:'#FF9933'}} onClick={()=>{window.open('https://drive.google.com/file/d/129DfER6XdivYCq5icU3NAbePy6t94XYq/view?usp=share_link')}}>ADD TO CART</Button>
                </Fade>
                
                <Fade bottom duration={2000}>
                <img src={require(`../../assests/images/a18.jpeg`)} style={{width: "250px",margin:'25px 25px 25px 25px'}} />
                  MACKERAL FISH
                      <Button variant="contained" style={{backgroundColor:'#FF9933'}} onClick={()=>{window.open('https://drive.google.com/file/d/1hVYbjMgkEGL1URKiksiqx3E2HVncZbmq/view?usp=share_link')}}>BUY NOW</Button>
                      <Button variant="contained" style={{backgroundColor:'#FF9933'}} onClick={()=>{window.open('https://drive.google.com/file/d/1GKgSvdO5wGEMjG3z5njkEk1bmXfj7s_w/view?usp=share_link')}}>ADD TO CART</Button>
                </Fade>
                <Fade bottom duration={2000}>
                <img src={require(`../../assests/images/a19.jpeg`)} style={{width: "250px",margin:'25px 25px 25px 25px'}} />
                CRAYFISH
                <Button variant="contained" style={{backgroundColor:'#FF9933'}} onClick={()=>{window.open('https://drive.google.com/file/d/1Lkl4b94XLd5Mlp_YJKbE28BLc0MzPw5Q/view?usp=share_link')}}>BUY NOW</Button>
                <Button variant="contained" style={{backgroundColor:'#FF9933'}} onClick={()=>{window.open('https://drive.google.com/file/d/1BHBH8YWCKH8_EhYvupJglrxMAaglntL5/view?usp=share_link')}}>ADD TO CART</Button>
                </Fade>
                <Fade bottom duration={2000}>
                <img src={require(`../../assests/images/a20.jpeg`)} style={{width: "250px",margin:'25px 25px 25px 25px'}} />
                BELE FISHES
                <Button variant="contained" style={{backgroundColor:'#FF9933'}} onClick={()=>{window.open('https://drive.google.com/file/d/1_Wn0vrotAkdRetoG0iWEfyXeXl-5GGPX/view?usp=share_link')}}>BUY NOW</Button>
                <Button variant="contained" style={{backgroundColor:'#FF9933'}} onClick={()=>{window.open('https://drive.google.com/file/d/12akKoN7gvrJqfYk_ZJzWbom0rnLsZhAH/view?usp=share_link')}}>ADD TO CART</Button>
                </Fade>
                

            </div>
            
            <Footer theme={props.theme} />
        </div>
    )
}

export default Crops
