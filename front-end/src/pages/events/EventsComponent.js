// import React from 'react'
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
// import Divider from '@material-ui/core/Divider';
// import { Fade } from "react-reveal";
// import db from '../firebase'
// import Card from './Card'
// function EventsComponent(props) {
//     const [data,setData] = React.useState({})
//     React.useEffect(()=>{
//         props.setAnime(false)
//     },[])
//     console.log(props)
//     React.useEffect(()=>{
//         db.collection("SurabhiEvents")
//         .doc('allEvents')
//         .onSnapshot((snapshot)=>{
//             setData(snapshot.data())
//         })
//     },[])
//     React.useEffect(()=>{
//         console.log(data)
//     },[data])
//     return (
//         <div>     
//       <Header theme={props.theme} setTheme={props.setTheme} />
//       <Fade bottom duration={2000} distance="40px">
//             <div className="hellogow" >
//         <Divider variant='fullWidth'  style={{width:'95vw',background:'#FF9933',height:'2px',color:'#FF9933',marginLeft:'auto',marginBottom: '10px',marginRight:'auto'}} />
//                 <h3 style={{color:(props.theme.name=='light')?'#000080':props.theme.text,fontWeight:'normal'}}>Literary Events</h3>
//         <Divider style={{color:'#138808',width:'95vw',background:'#138808',height:'2px',marginLeft:'auto',marginRight:'auto',marginBottom: '20px',marginTop:'10px'}} />
//         </div>
//         <div style={{display: "flex",flexFlow: "row wrap",justifyContent: 'space-evenly',flexDirection: "row"}}>
//         {data?.LitreraryEvents?.map((post)=>(
//             <Card
//             title={post.title}
//             img_link={post.img_link}
//             description={post.description}
//             contact1={post.contact1}
//             contact2={post.contact2}
//             meetLink={post.meetLink}
//             ready={post.started}
//             docLink={post?.docLink}
//             time={post.time}
//             date={post.date}
//             propss={props}
//              >
//                  console.log(post);
//                  </Card>
             
//         ))}
//         </div>
//         </Fade>
//         <Fade bottom duration={2000} distance="40px">
//             <div className="hellogow" >
//         <Divider variant='fullWidth'  style={{width:'95vw',background:'#FF9933',height:'2px',color:'#FF9933',marginLeft:'auto',marginBottom: '10px',marginRight:'auto'}} />
//                 <h3 style={{color:(props.theme.name=='light')?'#000080':props.theme.text, fontWeight:'normal'}} >Dance Events</h3>
//         <Divider style={{color:'#138808',width:'95vw',background:'#138808',height:'2px',marginLeft:'auto',marginRight:'auto',marginBottom: '20px',marginTop:'10px'}} />
//         </div>
//         <div style={{display: "flex",flexFlow: "row wrap",justifyContent: 'space-evenly',flexDirection: "row"}}>
//         {data?.DanceEvents?.map((post)=>(
//             <Card
//             title={post.title}
//             img_link={post.img_link}
//             description={post.description}
//             contact1={post.contact1}
//             contact2={post.contact2}
//             meetLink={post.meetLink}
//             ready={post.started}
//             docLink={post?.docLink}
//             time={post.time}
//             date={post.date}
//             propss={props}
//              />
//         ))}
//         </div>
//         </Fade>
//         <Fade bottom duration={2000} distance="40px">
//             <div className="hellogow" >
//         <Divider variant='fullWidth'  style={{width:'95vw',background:'#FF9933',height:'2px',color:'#FF9933',marginLeft:'auto',marginBottom: '10px',marginRight:'auto'}} />
//                 <h3 style={{color:(props.theme.name=='light')?'#000080':props.theme.text, fontWeight:'normal'}} >Music Events</h3>
//         <Divider style={{color:'#138808',width:'95vw',background:'#138808',height:'2px',marginLeft:'auto',marginRight:'auto',marginBottom: '20px',marginTop:'10px'}} />
//         </div>
//         <div style={{display: "flex",flexFlow: "row wrap",justifyContent: 'space-evenly',flexDirection: "row"}}>
//         {data?.MusicEvents?.map((post)=>(
//             <Card
//             title={post.title}
//             img_link={post.img_link}
//             description={post.description}
//             contact1={post.contact1}
//             contact2={post.contact2}
//             meetLink={post.meetLink}
//             ready={post.started}
//             docLink={post?.docLink}
//             time={post.time}
//             date={post.date}
//             propss={props}
//              />
//         ))}
//         </div>
//         </Fade>
//         <Fade bottom duration={2000} distance="40px">
//             <div className="hellogow" >
//         <Divider variant='fullWidth'  style={{width:'95vw',background:'#FF9933',height:'2px',color:'#FF9933',marginLeft:'auto',marginBottom: '10px',marginRight:'auto'}} />
//                 <h3 style={{color:(props.theme.name=='light')?'#000080':props.theme.text, fontWeight:'normal'}} >Drama and Thespian Events</h3>
//         <Divider style={{color:'#138808',width:'95vw',background:'#138808',height:'2px',marginLeft:'auto',marginRight:'auto',marginBottom: '20px',marginTop:'10px'}} />
//         </div>
//         <div style={{display: "flex",flexFlow: "row wrap",justifyContent: 'space-evenly',flexDirection: "row"}}>
//         {data?.DramaThespian?.map((post)=>(
//             <Card
//             title={post.title}
//             img_link={post.img_link}
//             description={post.description}
//             contact1={post.contact1}
//             contact2={post.contact2}
//             meetLink={post.meetLink}
//             ready={post.started}
//             docLink={post?.docLink}
//             time={post.time}
//             date={post.date}
//             propss={props}
//              />
//         ))}
//         </div>
//         </Fade>
//         <Fade bottom duration={2000} distance="40px">
//             <div className="hellogow" >
//         <Divider variant='fullWidth'  style={{width:'95vw',background:'#FF9933',height:'2px',color:'#FF9933',marginLeft:'auto',marginBottom: '10px',marginRight:'auto'}} />
//                 <h3 style={{color:(props.theme.name=='light')?'#000080':props.theme.text, fontWeight:'normal'}} >Arts and Crafts Events</h3>
//         <Divider style={{color:'#138808',width:'95vw',background:'#138808',height:'2px',marginLeft:'auto',marginRight:'auto',marginBottom: '20px',marginTop:'10px'}} />
//         </div>
//         <div style={{display: "flex",flexFlow: "row wrap",justifyContent: 'space-evenly',flexDirection: "row"}}>
//         {data?.ArtsCrafts?.map((post)=>(
//             <Card
//             title={post.title}
//             img_link={post.img_link}
//             description={post.description}
//             contact1={post.contact1}
//             contact2={post.contact2}
//             meetLink={post.meetLink}
//             ready={post.started}
//             docLink={post?.docLink}
//             time={post.time}
//             date={post.date}
//             propss={props}
//              />
//         ))}
//         </div>
//         </Fade>
//         <Fade bottom duration={2000} distance="40px">
//             <div className="hellogow" >
//         <Divider variant='fullWidth'  style={{width:'95vw',background:'#FF9933',height:'2px',color:'#FF9933',marginLeft:'auto',marginBottom: '10px',marginRight:'auto'}} />
//                 <h3 style={{color:(props.theme.name=='light')?'#000080':props.theme.text, fontWeight:'normal'}} >Lifestyle and Fashion</h3>
//         <Divider style={{color:'#138808',width:'95vw',background:'#138808',height:'2px',marginLeft:'auto',marginRight:'auto',marginBottom: '20px',marginTop:'10px'}} />
//         </div>
//         <div style={{display: "flex",flexFlow: "row wrap",justifyContent: 'space-evenly',flexDirection: "row"}}>
//         {data?.LifestyleFashion?.map((post)=>(
//             <Card
//             title={post.title}
//             img_link={post.img_link}
//             description={post.description}
//             contact1={post.contact1}
//             contact2={post.contact2}
//             meetLink={post.meetLink}
//             ready={post.started}
//             docLink={post?.docLink}
//             time={post.time}
//             date={post.date}
//             propss={props}
//              />
//         ))}
//         </div>
//         </Fade>
//         <Fade bottom duration={2000} distance="40px">
//             <div className="hellogow" >
//         <Divider variant='fullWidth'  style={{width:'95vw',background:'#FF9933',height:'2px',color:'#FF9933',marginLeft:'auto',marginBottom: '10px',marginRight:'auto'}} />
//                 <h3 style={{color:(props.theme.name=='light')?'#000080':props.theme.text, fontWeight:'normal'}} >Special Events</h3>
//         <Divider style={{color:'#138808',width:'95vw',background:'#138808',height:'2px',marginLeft:'auto',marginRight:'auto',marginBottom: '20px',marginTop:'10px'}} />
//         </div>
//         <div style={{display: "flex",flexFlow: "row wrap",justifyContent: 'space-evenly',flexDirection: "row"}}>
//         {data?.SpecialEvents?.map((post)=>(
//             <Card
//             title={post.title}
//             img_link={post.img_link}
//             description={post.description}
//             contact1={post.contact1}
//             contact2={post.contact2}
//             meetLink={post.meetLink}
//             ready={post.started}
//             docLink={post?.docLink}
//             time={post.time}
//             date={post.date}
//             propss={props}
//              />
//         ))}
//         </div>
//         </Fade>
//       <Footer theme={props.theme} />
//       </div>
//     )
// }

// export default EventsComponent
