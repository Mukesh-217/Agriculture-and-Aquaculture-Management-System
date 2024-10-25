// import React from 'react'
// import ClipLoader from "react-spinners/ClipLoader";
// import { css } from "@emotion/react";
// import './EventsComponent.scss'
// import {FlippingCard,FlippingCardFront,FlippingCardBack} from "react-ui-cards";
// import Button from "@material-ui/core/Button"
// const override = css`
//   display: block;
//   margin-top:150px;
//   margin-left:auto;
//   margin-right:auto;
//   margin-bottom:200px;
//   border-color: red;
// `;
// function Card({title,description,propss,meetLink,docLink,contact1,contact2,ready,img_link,time,date}) {
//     const [loading,setLoading] = React.useState(true);
//     React.useEffect(()=>{console.log(loading)},[loading])
//     return (
//         <div style={{justifyContent: 'space-evenly'}}>
//             <div>
//             <FlippingCard style={{height:"350px",width:'350px'}} >
//                <FlippingCardFront >
//                    <div
//                    className="imag"
//                    >
//                        <div >
//                   <ClipLoader color={"#ffffff"} css={override}  loading={loading} height={10} width={10} radius={1} />
//                   </div>
//                   <img src={docLink} onLoad={(e)=>{setLoading(false);console.log(e)}} />
                  
//               </div>
//                </FlippingCardFront>
//                <FlippingCardBack >
//                <div
//                className="ABC"
//                id="ABC"
//               style={{
//                 width: '100%',
//                 height: '100%'
//               }}>
//                   &nbsp;
//                   <div>
//                       <h1 style={{marginTop:'0px'}}>
//                   {title}</h1>
//                   </div>
//                   <div style={{marginTop:'20px'}}>
//                   <p style={{margin:'5px 5px 5px 5px'}} >{contact1.name} - {contact1.phno}</p>
//                   <p style={{margin:'5px 5px 5px 5px'}} >{contact2.name} - {contact2.phno}</p>
//                   </div>
//                   <div style={{marginTop:'20px',maxWidth:'90%',marginRight:'auto',marginLeft:'auto'}} >
//                       <p className="description">
//                   {description}</p>
//                   </div>
//                   <div class="utility-info3">
//                   <ul class="utility-list3" >
//                       <li>
//                       <Button variant="contained" style={{backgroundColor:'#FF9933'}} onClick={()=>{window.open('https://docs.google.com/document/d/13GvFijiDuWUkSW1Cu54e5eUM5Yy4_arfAF_6dqhK-6A/edit')}}>BUY NOW</Button></li>

//                     </ul>
//                   </div>
//                   <div class="utility-info2">
//                     <ul class="utility-list2" >
//                         <li class="date" style={{background:'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/icon-calendar.svg) no-repeat 0 .1em'}}>{date}</li>
//                         <li class="comments" style={{marginLeft:'-10px'}}>{time}</li>
//                     </ul>
//                 </div>
//             </div>
//                </FlippingCardBack>
//            </FlippingCard>
//            </div>
//         </div>
//     )
// }

// export default Card
