import React from "react"
import "./Homepage.css"
import Button from "@material-ui/core/Button"

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <h1>
                THANK YOU FOR REGISTERING
            </h1>
            
            <Button variant="contained" style={{backgroundColor:'#FF9933'}} onClick={()=>{window.open('http://localhost:3000/#/Login')}}>LOGIN</Button>
           
            {/* <div className="button" onClick={() => setLoginUser({})} >Logout</div> */}
        </div>
    )
}
export default Homepage

