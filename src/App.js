import Header from './components/Header' 
import Resnav from './components/Resnav' 
import About from './components/About' 
//import Projects from './components/Projects' 
import Contact from './components/Contact' 
import Images from './components/images' 
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'
import {useState} from 'react'    
import React, { Suspense } from 'react';           
function App() {  


  const Projects = React.lazy(() => import('./components/Projects'));
  var i=0;
  var red = "blue";
  const [show,setShow]=useState(false);
  const [open,setOpen]=useState(false);
  const [message,setMessage]=useState();

  const sendMail =  async(email,message)=>{
    console.log(email,message);

    axios
      .post('http://bonikapp.com/arfin/sendmail', {
         email: email,
         message: message,
      })
      .then(response => { console.log(response.data.message); setMessage(response.data.message) })
      .catch(err => {
        console.error(err);
      });      
    
  }               
  return (
    <Router> 
      <Header onAdd={()=>{setShow(!show); setOpen(!show)}} open={open}/>
      <Route path="/arfin" exact component={About} /> 
      <Route path="/arfin/projects">
        <Suspense fallback={<div className="mtop"><center><h1>Loading...</h1></center></div>}>
          <Projects />
        </Suspense>
      </Route> 
      <Route path="/arfin/contact" exact render={(props)=>(
         <>
           <Contact send={sendMail} msg={message}/> 
         </>
      )} />
      <Route path="/arfin/images/:id"><Images/></Route>  
      <Resnav color={show} onAdd2={()=>{setShow(!show); setOpen(!show)}}/> 

    </Router>
  );
}  
  
export default App;                                                         
           