// import React from 'react'
// import TeamCard from './TeamCard'
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
// import Divider from '@material-ui/core/Divider';
// import { Fade } from "react-reveal";
// import './TeamCard.scss'
// function TeamComponent(props) {
//     React.useEffect(()=>{
//         props.setAnime(false)
//     },[])
//     return (
//         <div>
//             <Header theme={props.theme} setTheme={props.setTheme} />
//             <Fade bottom duration={2000} distance="40px">
//             <div >
//         <Divider variant='fullWidth'  style={{width:'95vw',background:props.theme.text,marginLeft:'auto',marginBottom: '10px',marginRight:'auto'}} />
//                 <h3 style={{color:props.theme.text}}>TECHNICAL OPERATIONS COMMITTEE</h3>
//         <Divider style={{color:props.theme.text,width:'95vw',background:props.theme.text,marginLeft:'auto',marginRight:'auto',marginBottom: '20px',marginTop:'10px'}} />
//         </div>
//         </Fade>
//         <Fade bottom duration={2000} distance="40px">
//             <div style={{display:'flex',flexFlow: "row wrap",flexDirection: "row",marginRight:'auto',marginLeft:'auto',maxWidth:'95vw',justifyContent: 'space-evenly'}}>
            
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
            
//             </div>
//             </Fade>
           
//             <Fade bottom duration={2000} distance="40px">
//             <div >
//         <Divider variant='fullWidth'  style={{width:'95vw',background:props.theme.text,marginLeft:'auto',marginBottom: '10px',marginRight:'auto'}} />
//                 <h3 style={{color:props.theme.text}}>EVENTS COMMITTEE</h3>
//         <Divider style={{color:props.theme.text,width:'95vw',background:props.theme.text,marginLeft:'auto',marginRight:'auto',marginBottom: '20px',marginTop:'10px'}} />
//         </div>
//         </Fade>
//         <Fade bottom duration={2000} distance="40px">
//             <div style={{display:'flex',flexFlow: "row wrap",flexDirection: "row",marginRight:'auto',marginLeft:'auto',maxWidth:'95vw',justifyContent: 'space-evenly'}}>
            
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
            
//             </div>
//             </Fade>
//             <Fade bottom duration={2000} distance="40px">
//             <div >
//         <Divider variant='fullWidth'  style={{width:'95vw',background:props.theme.text,marginLeft:'auto',marginBottom: '10px',marginRight:'auto'}} />
//                 <h3 style={{color:props.theme.text}}>OPERATION AND HOSPITALITY COMMITTEE</h3>
//         <Divider style={{color:props.theme.text,width:'95vw',background:props.theme.text,marginLeft:'auto',marginRight:'auto',marginBottom: '20px',marginTop:'10px'}} />
//         </div>
//         </Fade>
//         <Fade bottom duration={2000} distance="40px">
//             <div style={{display:'flex',flexFlow: "row wrap",flexDirection: "row",marginRight:'auto',marginLeft:'auto',maxWidth:'95vw',justifyContent: 'space-evenly'}}>
            
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
            
//             </div>
//             </Fade>
//             <Fade bottom duration={2000} distance="40px">
//             <div >
//         <Divider variant='fullWidth'  style={{width:'95vw',background:props.theme.text,marginLeft:'auto',marginBottom: '10px',marginRight:'auto'}} />
//                 <h3 style={{color:props.theme.text}}>DESIGN COMMITTEE</h3>
//         <Divider style={{color:props.theme.text,width:'95vw',background:props.theme.text,marginLeft:'auto',marginRight:'auto',marginBottom: '20px',marginTop:'10px'}} />
//         </div>
//         </Fade>
//         <Fade bottom duration={2000} distance="40px">
//             <div style={{display:'flex',flexFlow: "row wrap",flexDirection: "row",marginRight:'auto',marginLeft:'auto',maxWidth:'95vw',justifyContent: 'space-evenly'}}>
            
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
            
//             </div>
//             </Fade>
//             <Fade bottom duration={2000} distance="40px">
//             <div >
//         <Divider variant='fullWidth'  style={{width:'95vw',background:props.theme.text,marginLeft:'auto',marginBottom: '10px',marginRight:'auto'}} />
//                 <h3 style={{color:props.theme.text}}>DRAFTING AND REPORTING COMMITTEE</h3>
//         <Divider style={{color:props.theme.text,width:'95vw',background:props.theme.text,marginLeft:'auto',marginRight:'auto',marginBottom: '20px',marginTop:'10px'}} />
//         </div>
//         </Fade>
//         <Fade bottom duration={2000} distance="40px">
//             <div style={{display:'flex',flexFlow: "row wrap",flexDirection: "row",marginRight:'auto',marginLeft:'auto',maxWidth:'95vw',justifyContent: 'space-evenly'}}>
            
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
            
//             </div>
//             </Fade>
//             <Fade bottom duration={2000} distance="40px">
//             <div >
//         <Divider variant='fullWidth'  style={{width:'95vw',background:props.theme.text,marginLeft:'auto',marginBottom: '10px',marginRight:'auto'}} />
//                 <h3 style={{color:props.theme.text}}>MARKETING AND BRANDING COMMITTEE</h3>
//         <Divider style={{color:props.theme.text,width:'95vw',background:props.theme.text,marginLeft:'auto',marginRight:'auto',marginBottom: '20px',marginTop:'10px'}} />
//         </div>
//         </Fade>
//         <Fade bottom duration={2000} distance="40px">
//             <div style={{display:'flex',flexFlow: "row wrap",flexDirection: "row",marginRight:'auto',marginLeft:'auto',maxWidth:'95vw',justifyContent: 'space-evenly'}}>
            
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
            
//             </div>
//             </Fade>
//             <Fade bottom duration={2000} distance="40px">
//             <div >
//         <Divider variant='fullWidth'  style={{width:'95vw',background:props.theme.text,marginLeft:'auto',marginBottom: '10px',marginRight:'auto'}} />
//                 <h3 style={{color:props.theme.text}}>PUBLIC RELATION COMMITTEE</h3>
//         <Divider style={{color:props.theme.text,width:'95vw',background:props.theme.text,marginLeft:'auto',marginRight:'auto',marginBottom: '20px',marginTop:'10px'}} />
//         </div>
//         </Fade>
//         <Fade bottom duration={2000} distance="40px">
//             <div style={{display:'flex',flexFlow: "row wrap",flexDirection: "row",marginRight:'auto',marginLeft:'auto',maxWidth:'95vw',justifyContent: 'space-evenly'}}>
            
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
            
//             </div>
//             </Fade><Fade bottom duration={2000} distance="40px">
//             <div >
//         <Divider variant='fullWidth'  style={{width:'95vw',background:props.theme.text,marginLeft:'auto',marginBottom: '10px',marginRight:'auto'}} />
//                 <h3 style={{color:props.theme.text}}>FINANACE AND LEGAL COMMITTEE</h3>
//         <Divider style={{color:props.theme.text,width:'95vw',background:props.theme.text,marginLeft:'auto',marginRight:'auto',marginBottom: '20px',marginTop:'10px'}} />
//         </div>
//         </Fade>
//         <Fade bottom duration={2000} distance="40px">
//             <div style={{display:'flex',flexFlow: "row wrap",flexDirection: "row",marginRight:'auto',marginLeft:'auto',maxWidth:'95vw',justifyContent: 'space-evenly'}}>
            
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
            
//             </div>
//             </Fade>
//             <Fade bottom duration={2000} distance="40px">
//             <div >
//         <Divider variant='fullWidth'  style={{width:'95vw',background:props.theme.text,marginLeft:'auto',marginBottom: '10px',marginRight:'auto'}} />
//                 <h3 style={{color:props.theme.text}}>TROUBLESHOOTING AND DISCIPLINE COMMITTEE</h3>
//         <Divider style={{color:props.theme.text,width:'95vw',background:props.theme.text,marginLeft:'auto',marginRight:'auto',marginBottom: '20px',marginTop:'10px'}} />
//         </div>
//         </Fade>
//         <Fade bottom duration={2000} distance="40px">
//             <div style={{display:'flex',flexFlow: "row wrap",flexDirection: "row",marginRight:'auto',marginLeft:'auto',maxWidth:'95vw',justifyContent: 'space-evenly'}}>
            
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
            
//             </div>
//             </Fade>
//             <Fade bottom duration={2000} distance="40px">
//             <div >
//         <Divider variant='fullWidth'  style={{width:'95vw',background:props.theme.text,marginLeft:'auto',marginBottom: '10px',marginRight:'auto'}} />
//                 <h3 style={{color:props.theme.text}}>EVALUATION COMMITTEE</h3>
//         <Divider style={{color:props.theme.text,width:'95vw',background:props.theme.text,marginLeft:'auto',marginRight:'auto',marginBottom: '20px',marginTop:'10px'}} />
//         </div>
//         </Fade>
//         <Fade bottom duration={2000} distance="40px">
//             <div style={{display:'flex',flexFlow: "row wrap",flexDirection: "row",marginRight:'auto',marginLeft:'auto',maxWidth:'95vw',justifyContent: 'space-evenly'}}>
            
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
            
//             </div>
//             </Fade>
//             <Fade bottom duration={2000} distance="40px">
//             <div >
//         <Divider variant='fullWidth'  style={{width:'95vw',background:props.theme.text,marginLeft:'auto',marginBottom: '10px',marginRight:'auto'}} />
//                 <h3 style={{color:props.theme.text}}>PROBLEM SOLVING COMMITTEE</h3>
//         <Divider style={{color:props.theme.text,width:'95vw',background:props.theme.text,marginLeft:'auto',marginRight:'auto',marginBottom: '20px',marginTop:'10px'}} />
//         </div>
//         </Fade>
//         <Fade bottom duration={2000} distance="40px">
//             <div style={{display:'flex',flexFlow: "row wrap",flexDirection: "row",marginRight:'auto',marginLeft:'auto',maxWidth:'95vw',justifyContent: 'space-evenly'}}>
            
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
//             <TeamCard 
//             theme={props.theme}
//             setTheme={props.setTheme}  />
            
//             </div>
//             </Fade>
//       <Footer theme={props.theme} />
//         </div>
//     )
// }

// export default TeamComponent
