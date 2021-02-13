import cover from '../images/cover.jpg';
import me from '../images/me.jpg';
import {Link} from 'react-router-dom';
function About(){
	return(
	  <div className="container mtop">
	    <img src={cover} className="cover" />
	    <div className="profile"><Link to={"/arfin/images/me.jpg"}><img src={me} /></Link>
	    </div>
	    <center>
	      <br/>
	      <h3>Arfin Hayet</h3>
	    </center>
	    <div className="container">
	      <div className="row rtop">
	         <div className="col-sm-6 rmargin">
	            <div className="scontainer">
	            <h1>Intro</h1>
	            <ul>
				  <li><i className="fa fa-briefcase"></i><small>Occupation </small>Software Developer</li>
				  <li><i className="fa fa-desktop"></i><small>Works at </small>Bonik Technologies</li>
				  <li><i className="fa fa-map-marker"></i><small>Lives in </small>Chittagong</li>
				  <li><i className="fa fa-edit"></i><small>Study at </small>University Of Chittagong</li>
				  <li><i className="fa fa-facebook"></i> <a href="https://www.facebook.com/Syed.Arfin.hayet">/Arfin-hayet</a></li>
				  <li><i className="fa fa-twitter"></i><a href="https://twitter.com/arfinhayet786">/Arfin-hayet</a></li>
				  <li><i className="fa fa-github"></i> <a href="https://github.com/ArfinHayet">/Arfin-hayet</a></li>
				  <li><i className="fa fa-linkedin"></i> <a href="https://www.linkedin.com/in/syed-arfin-hayet/">/Arfin-hayet</a></li>
				</ul>
				</div><br/>   
	         </div>
	         <div className="col-sm-6 rmargin">
	            <div className="scontainer">
	               <p>HTML/CSS/JS</p>
	               <div className="skill">
	                 <div class="skills html">90%</div>
	               </div>
	               <p>Php</p>
	               <div className="skill">
	                 <div class="skills css">80%</div>
	               </div>
	               <p>Nodejs</p>
	               <div className="skill">
	                 <div class="skills js">65%</div>
	               </div>
	               <p>ReactJs</p>
	               <div className="skill">
	                 <div class="skills php">70%</div>
	               </div>
	               <p>React Native</p>
	               <div className="skill">
	                 <div class="skills native">70%</div>
	               </div>
	               <p>Native Android(Java)</p>
	               <div className="skill">
	                 <div class="skills java">50%</div>
	               </div>
	            </div>
	         </div>
	      </div>
	    </div>
	  </div>
	)
}

export default About