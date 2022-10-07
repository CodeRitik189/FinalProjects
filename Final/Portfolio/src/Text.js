import React, { Component } from 'react'
import ThreeScene from './ThreeScene'
const str= " Hello , I am a Web Developer and Designer... I like Creating stuffs. please scroll down and start exploring about myself...";
var idx=0;
export default class Text extends Component{
 constructor(props){
   super(props);
   this.state={
    text:'',
    width:window.innerWidth
   }
}
   //this.onscroll = this.onscroll.bind(this);
   componentDidMount(){
    window.addEventListener('resize', () => {
      this.setState({width:window.innerWidth});
      console.log("width is ",this.state.width)
    });
    const val = setInterval(()=>{
      let newval = str.substring(0,idx+1);
      if(str.length>idx){
       idx += 1;
      }else{
        clearInterval(this.state.id);
      }
      this.setState({text:newval});
     },90);
     this.setState({id:val});
    }
  render() {
    return (
   <div>
      <div>
       <ThreeScene  width={this.props.width}/>
      </div>
      <div>
      <section className="is-visible" style={{backgroundColor:"black",boxShadow:"0px 0px black",marginLeft:`${(this.props.width)/7}px`,width:`${(this.props.width)*16/27}px`, border:"0px"}}>
      <img src = "https://www.downloadclipart.net/large/entrepreneur-png-photo.png" alt="img" style={{marginLeft:`${this.props.width>800?-120:-60}px`,height:`${this.props.width>800?130:70}px`,width:`${this.props.width>800?130:70}px`,border:"1px solid black",borderRadius:"0%"}}/>
         <div id="dyn" style={{width:`${(this.props.width)*3/4}px`,fontSize:`${this.props.width>800?50:35}px`,marginLeft:`${this.props.width>800?10:0}px`,marginTop:`${this.props.width>800?-150:-80}px`}}>{this.state.text} </div>
      </section>
      <section style={{marginLeft:`${(this.props.width)/6}px`,width:`${(this.props.width)*16/27}px`}}>
        <h2 style={{borderBottom:"1px solid black",color:"white",textShadow:"2px 2px blue",backgroundColor:"black"}}>📜 Education</h2>

        <div style={{height:"450px",width:`${this.props.width>800?(this.props.width)*1/4:(this.props.width)*4/8}px`,marginTop:"10px",border:"3px solid white",borderRadius:"4%",backgroundColor:"rgba(7, 6, 6, 0.9)"}}>
        <h4 style={{margin:"auto"}}><a style={{textDecoration:"none",color:"white",textShadow:"3px 3px blue",borderBottom:"2px solid grey"}} href="/">B.tech</a></h4>
        <p style={{textShadow:"2px 2px black",color:"white"}}>B.tech from NIT Agartala in the department of 'Electronics and Communication Enginnering'</p>
        </div>
     
        
        <div style={{height:"450px",width:`${this.props.width>800?(this.props.width)*1/4:(this.props.width)*4/8}px`,marginTop:`${this.props.width>800?(-450):10}px`,marginLeft:`${this.props.width>800?((this.props.width*12)/20)/2:5}px`,border:"3px solid white",borderRadius:"4%",backgroundColor:"rgba(7, 6, 6, 0.9)"}}>
        <h4 style={{margin:"auto"}}><a style={{textDecoration:"none",color:"white",textShadow:"3px 3px blue",borderBottom:"2px solid grey"}} href="/">Intermediate</a></h4>
        <p style={{textShadow:"2px 2px black",color:"white"}}>Guljarilal Sukhdevi Inter College, Auraiya, Uttar Pradesh</p>
        </div>
         
      </section>

      <section className="light" style={{marginLeft:`${(this.props.width)/5}px`,width:`${(this.props.width)*16/27}px`,backgroundRepeat:"no-repeat",backgroundSize:`100% 100%`}}>
        <h2 style={{color:"white",textShadow:"2px 2px blue",backgroundColor:"black"}} >👩🏽‍🚀 Projects</h2>

        <div style={{height:"500px",width:`${this.props.width>800?(this.props.width)*1/4:(this.props.width)*4/8}px`,marginTop:"10px",border:"3px solid white",borderRadius:"4%",backgroundColor:"rgba(7, 6, 6, 0.9)"}}>
        <h4 style={{margin:"auto"}}><a style={{textDecoration:"none",color:"white",textShadow:"3px 3px blue",borderBottom:"2px solid grey"}} href="https://github.com/CodeRitik189">Social</a></h4>
        <p style={{textShadow:"2px 2px black",color:"white"}}>A Web Application Providing An Interface for the peopels' to Interact  </p>
        </div>
        
        <div style={{height:"450px",width:`${this.props.width>800?(this.props.width)*1/4:(this.props.width)*4/8}px`,marginTop:"10px",marginLeft:`${this.props.width>800?((this.props.width*12)/20)/2:0}px`,border:"3px solid white",borderRadius:"4%",backgroundColor:"rgba(7, 6, 6, 0.9)"}}>
        <h4 style={{margin:"auto"}}><a style={{textDecoration:"none",color:"white",textShadow:"3px 3px blue",borderBottom:"2px solid grey"}} href="https://github.com/CodeRitik189">InfoMovie</a></h4>
        <p style={{textShadow:"2px 2px black",color:"white"}}>Collection of previews and ratings of movies across the world</p>
        </div>
         
        <div style={{height:"450px",width:`${this.props.width>800?(this.props.width)*1/4:(this.props.width)*4/8}px`,marginTop:"10px",border:"3px solid white",borderRadius:"4%",backgroundColor:"rgba(7, 6, 6, 0.9)"}}>
        <h4 style={{margin:"auto"}}><a style={{textDecoration:"none",color:"white",textShadow:"3px 3px blue",borderBottom:"2px solid grey"}} href="https://github.com/CodeRitik189">Hungry Snake</a></h4>
        <p style={{textShadow:"2px 2px black",color:"white"}}>An Entertaining Game we used to play in our Childhood</p>
        </div>
        <h2>🏆 Accomplishments</h2>
      </section>
      

      <section className="left" style={{marginLeft:`${(this.props.width)/5}px`,width:`${(this.props.width)*16/27}px`}}>
        <h2 style={{color:"white",textShadow:"2px 2px blue",backgroundColor:"black"}}>🌮 Skills</h2>
      
        <h3 style={{color:"white"}}>Languages</h3>
      <div style={{width:"80%",backgroundColor:"black",border:"1px solid white",borderRadius:"3%"}} >
        <p style={{height:"40px",width:"90%",border:"1px  white",borderRadius:"5%",color:"white",backgroundImage: "linear-gradient(to right, blue 70% ,lightgrey 30%)"}}>
          C
        </p>
        <p style={{height:"40px",width:"90%",border:"1px  white",borderRadius:"5%",color:"white",marginLeft:"5px",backgroundImage: "linear-gradient(to right, pink 70% ,lightgrey 30%)"}}>
          C++
        </p>
        <p style={{height:"40px",width:"90%",border:"1px  white",borderRadius:"5%",color:"white",marginLeft:"5px",backgroundImage: "linear-gradient(to right, green 70% ,lightgrey 30%)"}}>
          JS
        </p>
        <p style={{height:"40px",width:"90%",border:"1px  white",borderRadius:"5%",color:"white",marginLeft:"5px",backgroundImage: "linear-gradient(to right, purple 70% ,lightgrey 30%)"}}>
          SQL
        </p>
        <p style={{height:"40px",width:"90%",border:"1px white",borderRadius:"5%",color:"white",marginLeft:"5px",backgroundImage: "linear-gradient(to right, magenta 70% ,lightgrey 30%)"}}>
          HTML5
        </p>
        <p style={{height:"40px",width:"90%",border:"1px  white",borderRadius:"5%",color:"white",marginLeft:"5px",backgroundImage: "linear-gradient(to right, red 70% ,lightgrey 30%)"}}>
          CSS3
        </p>
        </div>

      <div style={{width:"80%",backgroundColor:"black",border:"1px solid white",borderRadius:"3%",marginTop:"10px"}} >
        <h3 style={{color:"white"}}>WebD Skills</h3>
        <p style={{height:"40px",width:"90%",border:"1px  white",borderRadius:"5%",color:"white",marginLeft:"5px",backgroundImage: "linear-gradient(to right, green 70% ,lightgrey 30%)"}}>
          Node JS
        </p>
        <p style={{height:"40px",width:"90%",border:"1px  white",borderRadius:"5%",color:"white",marginLeft:"5px",backgroundImage: "linear-gradient(to right, purple 70% ,lightgrey 30%)"}}>
          React JS
        </p>
        <p style={{height:"40px",width:"90%",border:"1px  white",borderRadius:"5%",color:"white",marginLeft:"5px",backgroundImage: "linear-gradient(to right, magenta 70% ,lightgrey 30%)"}}>
          Express JS
        </p>
        </div>

        <div style={{width:"80%",backgroundColor:"black",border:"1px solid white",borderRadius:"3%",marginTop:"10px"}} >
        <h3 style={{color:"white",display:"inline"}}>Computer Fundamentals</h3>
        <p style={{height:"40px",width:"90%",border:"1px  white",borderRadius:"5%",color:"white",marginLeft:"5px",backgroundImage: "linear-gradient(to right, green 70% ,lightgrey 30%)"}}>
          VS Code
        </p>
        <p style={{height:"40px",width:"90%",border:"1px white",borderRadius:"5%",color:"white",marginLeft:"5px",backgroundImage: "linear-gradient(to right, purple 70% ,lightgrey 30%)"}}>
          Code Blocks
        </p>
        <p style={{height:"40px",width:"90%",border:"1px  white",borderRadius:"5%",color:"white",marginLeft:"5px",backgroundImage: "linear-gradient(to right, magenta 70% ,lightgrey 30%)"}}>
          Sublime
        </p>
       </div>

        <div style={{width:"80%",backgroundColor:"black",border:"1px solid white",borderRadius:"3%",marginTop:"10px"}} >
        <h3 style={{color:"white",display:"inline"}}>Developer Tools</h3>
        <p style={{height:"40px",width:"90%",border:"1px  white",borderRadius:"5%",color:"white",marginLeft:"5px",backgroundImage: "linear-gradient(to right, green 70% ,lightgrey 30%)"}}>
          VS Code
        </p>
        <p style={{height:"40px",width:"90%",border:"1px white",borderRadius:"5%",color:"white",marginLeft:"5px",backgroundImage: "linear-gradient(to right, purple 70% ,lightgrey 30%)"}}>
          Code Blocks
        </p>
        <p style={{height:"40px",width:"90%",border:"1px  white",borderRadius:"5%",color:"white",marginLeft:"5px",backgroundImage: "linear-gradient(to right, magenta 70% ,lightgrey 30%)"}}>
          Sublime
        </p>
       </div>

      </section>
    
      <section className="light" style={{marginLeft:`${(this.props.width)/5}px`,width:`${(this.props.width)*16/27}px`,backgroundRepeat:"no-repeat",backgroundSize:`100% 100%`}}>
        <h2 style={{color:"white",textShadow:"2px 2px blue",backgroundColor:"black"}} >👩🏽‍🚀 Experience</h2>

        <div style={{height:"350px",width:`${this.props.width>800?(this.props.width)*1/4:(this.props.width)*4/8}px`,marginTop:"10px",border:"3px solid white",borderRadius:"4%",backgroundColor:"rgba(7, 6, 6, 0.9)"}}>
        <h4 style={{margin:"auto"}}><a style={{textDecoration:"none",color:"white",textShadow:"3px 3px blue",borderBottom:"2px solid grey"}} href="https://github.com/CodeRitik189">DevCommIntern</a></h4>
        <p style={{textShadow:"2px 2px black",color:"white"}}>Project Based Intern at DevComm</p>
        </div>
        
        <div style={{height:"350px",width:`${this.props.width>800?(this.props.width)*1/4:(this.props.width)*4/8}px`,marginTop:"10px",marginLeft:`${this.props.width>800?((this.props.width*12)/20)/2:5}px`,border:"3px solid white",borderRadius:"4%",backgroundColor:"rgba(7, 6, 6, 0.9)"}}>
        <h4 style={{margin:"auto"}}><a style={{textDecoration:"none",color:"white",textShadow:"3px 3px blue",borderBottom:"2px solid grey"}} href="https://github.com/CodeRitik189">DSA Enthusiast</a></h4>
        <p style={{textShadow:"2px 2px black",color:"white"}}>Specialist In Data Structures and CP</p>
        </div>
         
        <div style={{height:"350px",width:`${this.props.width>800?(this.props.width)*1/4:(this.props.width)*4/8}px`,marginTop:"10px",border:"3px solid white",borderRadius:"4%",backgroundColor:"rgba(7, 6, 6, 0.9)"}}>
        <h4 style={{margin:"auto"}}><a style={{textDecoration:"none",color:"white",textShadow:"3px 3px blue",borderBottom:"2px solid grey"}} href="https://github.com/CodeRitik189">DCC Club NITA</a></h4>
        <p style={{textShadow:"2px 2px black",color:"white"}}>Core Team Member Of Coding Club NITA (DCC)</p>
        </div>
        <h2>🏆 Accomplishments</h2>
      </section>

      <section style={{marginLeft:`${(this.props.width)/6}px`,width:`${(this.props.width)*16/27}px`}}>
        <h2 style={{borderBottom:"1px solid black",color:"white",textShadow:"2px 2px blue",backgroundColor:"black"}}>📜 Extra Curricular</h2>

        <div style={{height:"450px",width:`${this.props.width>800?(this.props.width)*1/4:(this.props.width)*4/8}px`,marginTop:"10px",border:"3px solid white",borderRadius:"4%",backgroundColor:"rgba(7, 6, 6, 0.9)"}}>
        <h4 style={{margin:"auto"}}><a style={{textDecoration:"none",color:"white",textShadow:"3px 3px blue",borderBottom:"2px solid grey"}} href="https://github.com/CodeRitik189">We Can</a></h4>
        <p style={{textShadow:"2px 2px black",color:"white"}}>Teach the students from slum areas across NITA through WeCan club</p>
        </div>
     
        
        <div style={{height:"450px",width:`${this.props.width>800?(this.props.width)*1/4:(this.props.width)*4/8}px`,marginTop:`${this.props.width>800?(-450):10}px`,marginLeft:`${this.props.width>800?((this.props.width*12)/20)/2:5}px`,border:"3px solid white",borderRadius:"4%",backgroundColor:"rgba(7, 6, 6, 0.9)"}}>
        <h4 style={{margin:"auto"}}><a style={{textDecoration:"none",color:"white",textShadow:"3px 3px blue",borderBottom:"2px solid grey"}} href="https://github.com/CodeRitik189">Mentor</a></h4>
        <p style={{textShadow:"2px 2px black",color:"white"}}>Helping Hand to Juniors for building an Active Coding Culture</p>
        </div>
         
      </section>

      <section className="left" style={{marginLeft:`${(this.props.width)/5}px`,width:`${(this.props.width)*16/27}px`}}>
        <h2 style={{color:"white",textShadow:"2px 2px blue",backgroundColor:"black"}}>🌮 Contact</h2>
        <div style={{width:"80%",backgroundColor:"black",border:"1px solid white",marginBottom:"30px"}}>
              <h4 style={{color:"white",marginBottom:"-15px"}}>Name</h4>
              <input type="text" placeholder=""/>
              <h4 style={{color:"white",marginBottom:"-15px"}}>Email</h4>
              <input type="email" placeholder="abc@gmail.com " />
              <h4 style={{color:"white",marginBottom:"-15px"}}>Phone</h4>
              <input type="text" placeholder=""  />
        </div>
      </section>
      <section style={{backgroundColor:"black",boxShadow:"0px 0px black",marginLeft:`${(this.props.width)/7}px`,width:`${(this.props.width)*16/27}px`, border:"0px"}}>
         <div id="dyn" style={{width:`${(this.props.width)*3/4}px`,fontSize:`${this.props.width>800?50:35}px`,marginLeft:`${this.props.width>800?300:50}px`,marginTop:`-300px`}}> "Thank You !!!" </div>
      </section>
      </div>
   </div>
    )
  }
}
