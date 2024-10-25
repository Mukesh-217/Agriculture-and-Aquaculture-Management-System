import React from 'react'
import MyIntro from './MyIntro'
import Header from "../../components/header/Header";
function AboutMe(props) {
    React.useEffect(() => {
        props.setAnime(true)   
        setTimeout(() =>{props.setAnime(false)},3000) 
    }, [])
    
    return (
        <div >
            <Header theme={props.theme} setTheme={props.setTheme} anime={props.anime} setAnime={props.setAnime} />
            <MyIntro theme={props.theme} setTheme={props.setTheme} />
            
        </div>
    )
}

export default AboutMe
