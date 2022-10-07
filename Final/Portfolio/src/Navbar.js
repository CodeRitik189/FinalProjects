import React, { Component } from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
export default class Navbar extends Component {
  render() {
    return (
      <div style={{width:"100%",height:"50px",backgroundColor:"black",display:"inline-block",marginTop:"-330px",position:"fixed"}}>
         <img src = "portfolioicon.png" alt="port" style={{marginLeft:"5px",height:"40px",width:"40px",border:"1px solid black",borderRadius:"30%"}}/>
         <a href="https://github.com/CodeRitik189" style={{marginLeft:"20px",textDecoration:"none",color:"white",fontWeight:"bold",fontSize:`${this.props.width>490?30:20}px`,textShadow:"2px 2px blue"}}>Ritik Tripathi</a>
         {this.props.width>=490&&<div style={{marginTop:"-33px",marginLeft:"250px"}}>
         <a href="https://github.com/CodeRitik189" style={{marginLeft:`${this.props.width>=490?40:20}px`,textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",textShadow:"2px 2px blue",width:"45px",height:"50px",border:"0.3px solid white",borderRadius:"20%"}}><LinkedInIcon /></a> 
         <a href="https://github.com/CodeRitik189" style={{marginLeft:`${this.props.width>=490?40:20}px`,textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",textShadow:"2px 2px blue",width:"45px",height:"50px",border:"0.3px solid white",borderRadius:"20%"}}><GitHubIcon /></a>
         <a href="https://github.com/CodeRitik189" style={{marginLeft:`${this.props.width>=490?30:20}px`,textDecoration:"none",color:"white",fontWeight:"bold",fontSize:"25px",textShadow:"2px 2px blue",width:"45px",height:"50px",border:"0.3px solid white",borderRadius:"20%"}}><InstagramIcon /></a>
         </div>}
         {this.props.width<490&&<div class="dropdown">
            <button class="dropbtn" style={{position:"absolute",right:`${-((this.props.width)/(this.props.width<570?8:5))}px`,marginTop:"-25px"}}><img src="https://cdn4.iconfinder.com/data/icons/blue-set/64/5-512.png" alt="this" height="20px" width="20px" /></button>
            <div class="dropdown-content">
                <a href="https://github.com/CodeRitik189">Link 1</a>
                <a href="https://github.com/CodeRitik189">Link 2</a>
                <a href="https://github.com/CodeRitik189">Link 3</a>
            </div>
          </div>}
      </div>
    )
  }
}
